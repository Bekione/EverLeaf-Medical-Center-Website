import type { Plugin } from "vite";

/**
 * Vite plugin that rewrites all "/images/..." src paths to Cloudinary CDN URLs
 * at build time.
 *
 * Skips paths that are already Cloudinary URLs (those come from <CldImg>
 * which builds its own URL at runtime with a custom transform).
 *
 * Set in .env:
 *   VITE_CLOUDINARY_CLOUD_NAME=dzhobawko
 *   VITE_CLOUDINARY_FOLDER=everleaf
 */

/** Returns the default Cloudinary transformation for a given image path */
function getTransform(path: string): string {
  if (path.includes("/hero/")) return "w_1920,q_auto,f_auto,c_fill";
  if (path.includes("/gallery/")) return "w_1200,q_auto,f_auto,c_fill";
  if (path.includes("/articles/")) return "w_1000,q_auto,f_auto,c_fit";
  if (path.includes("/doctors/")) return "w_400,q_auto,f_auto,c_fill,g_face";
  if (path.includes("/testimonials/"))
    return "w_160,q_auto,f_auto,c_fill,g_face";
  if (path.includes("article-body")) return "w_1000,q_auto,f_auto,c_fit";
  return "w_800,q_auto,f_auto";
}

function rewriteCode(code: string, cloudName: string, folder: string): string {
  // Rewrite plain /images/ string literals to Cloudinary URLs.
  // The negative lookbehind (?<!cloudinary\.com[^"']{0,200}) ensures we skip
  // any /images/ that's already inside a Cloudinary URL (produced by CldImg at runtime).
  return code.replace(
    /(?<![a-z])["']\/images\/([^"']+)["']/g,
    (match, imgPath) => {
      // Extra safety: skip if the matched path looks like it's already a CDN URL fragment
      if (imgPath.includes("cloudinary.com")) return match;
      const quote = match[0];
      const transform = getTransform(`/images/${imgPath}`);
      return `${quote}https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${folder}/images/${imgPath}${quote}`;
    },
  );
}

export function cloudinaryPlugin(): Plugin {
  let cloudName: string | undefined;
  let folder: string | undefined;
  let enabled = false;

  return {
    name: "vite-plugin-cloudinary",
    apply: "build",

    configResolved(config) {
      cloudName = config.env.VITE_CLOUDINARY_CLOUD_NAME;
      folder = config.env.VITE_CLOUDINARY_FOLDER || "everleaf";
      enabled = !!cloudName && cloudName !== "demo";

      if (enabled) {
        console.log(
          `\n☁  Cloudinary plugin active → https://res.cloudinary.com/${cloudName}/image/upload/<transform>/${folder}/\n`,
        );
      }
    },

    generateBundle(_options, bundle) {
      if (!enabled) return;

      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "chunk" && chunk.code) {
          chunk.code = rewriteCode(chunk.code, cloudName!, folder!);
        }
        if (chunk.type === "asset" && typeof chunk.source === "string") {
          chunk.source = rewriteCode(chunk.source, cloudName!, folder!);

          // Also handle CSS url() references
          chunk.source = chunk.source.replace(
            /url\(\/images\/([^)?]+)\)/g,
            (_match, imgPath) => {
              const transform = getTransform(`/images/${imgPath}`);
              return `url(https://res.cloudinary.com/${cloudName}/image/upload/${transform}/${folder}/images/${imgPath})`;
            },
          );
        }
      }
    },
  };
}

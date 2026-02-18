import type { Plugin } from "vite";

/**
 * Vite plugin that rewrites all "/images/..." src paths to Cloudinary CDN URLs
 * at build time — exactly like Next.js image loader, but for Vite.
 *
 * Works by post-processing the bundled JS/HTML output and replacing every
 * occurrence of "/images/" with the full Cloudinary base URL.
 *
 * Set in .env:
 *   VITE_CLOUDINARY_CLOUD_NAME=dzhobawko
 *   VITE_CLOUDINARY_FOLDER=everleaf
 *
 * In dev mode (npm run dev), images are served from /public as normal.
 * In production build (npm run build), all /images/ paths become Cloudinary URLs.
 */
export function cloudinaryPlugin(): Plugin {
  let cloudName: string | undefined;
  let folder: string | undefined;
  let enabled = false;

  return {
    name: "vite-plugin-cloudinary",
    apply: "build", // only runs during `vite build`, not `vite dev`

    configResolved(config) {
      cloudName = config.env.VITE_CLOUDINARY_CLOUD_NAME;
      folder = config.env.VITE_CLOUDINARY_FOLDER || "everleaf";
      enabled = !!cloudName && cloudName !== "demo";

      if (enabled) {
        console.log(
          `\n☁  Cloudinary plugin active → https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto/${folder}/\n`,
        );
      }
    },

    // Rewrite image paths in all JS/HTML chunks at the end of the build
    generateBundle(_options, bundle) {
      if (!enabled) return;

      const base = `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto/${folder}`;

      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "chunk" && chunk.code) {
          // Replace "/images/..." string literals in JS bundles
          chunk.code = chunk.code.replaceAll('"/images/', `"${base}/images/`);
          chunk.code = chunk.code.replaceAll("'/images/", `'${base}/images/`);
        }
        if (chunk.type === "asset" && typeof chunk.source === "string") {
          // Replace in HTML and CSS assets
          chunk.source = chunk.source.replaceAll(
            '"/images/',
            `"${base}/images/`,
          );
          chunk.source = chunk.source.replaceAll(
            "'/images/",
            `'${base}/images/`,
          );
          chunk.source = chunk.source.replaceAll(
            "url(/images/",
            `url(${base}/images/`,
          );
        }
      }
    },
  };
}

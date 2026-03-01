import React from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as
  | string
  | undefined;
const FOLDER =
  (import.meta.env.VITE_CLOUDINARY_FOLDER as string | undefined) || "everleaf";
const IS_CLOUDINARY = !!CLOUD_NAME && CLOUD_NAME !== "demo";

/** Identity function — no longer needed, kept for backwards compatibility */
export function rawSrc(path: string): string {
  return path;
}

function getDefaultTransform(path: string): string {
  /* Hero: container is ~512px wide with 4:3 aspect ratio.
     Serve 1024x768 (2x retina) — ~70% smaller than 1920px original. */
  if (path.includes("/hero/"))
    return "w_1024,h_768,q_auto,f_auto,c_fill,g_auto";
  if (path.includes("/gallery/")) return "w_1200,q_auto,f_auto,c_fill";
  if (path.includes("/articles/")) return "w_1000,q_auto,f_auto,c_fit";
  if (path.includes("/doctors/")) return "w_400,q_auto,f_auto,c_fill,g_face";
  if (path.includes("/testimonials/"))
    return "w_160,q_auto,f_auto,c_fill,g_face";
  if (path.includes("article-body")) return "w_1000,q_auto,f_auto,c_fit";
  return "w_800,q_auto,f_auto";
}

interface CldImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  /** Override the Cloudinary transformation string for this specific usage */
  transform?: string;
}

/**
 * Cloudinary-aware image component.
 *
 * If the Vite plugin already rewrote src to a Cloudinary URL (e.g. with the
 * default w_400 doctor transform), and a custom transform prop is provided,
 * this component swaps out the transform segment in the URL so the correct
 * size is used for this specific usage context.
 *
 * @example
 *   <CldImg src={article.authorImg} transform="w_80,q_auto,f_auto,c_fill,g_face" className="w-10 h-10 rounded-full" alt="Author" />
 */
export const CldImg: React.FC<CldImgProps> = ({ src, transform, ...rest }) => {
  let resolvedSrc = src;

  // Destructure fetchPriority so we can re-emit it as the lowercase HTML attribute.
  // Passing camelCase `fetchPriority` via ...rest triggers a React unknown-prop warning.
  const { fetchPriority, ...imgRest } = rest as typeof rest & {
    fetchPriority?: string;
  };

  if (IS_CLOUDINARY) {
    const alreadyCloudinary = src.includes("res.cloudinary.com");

    if (alreadyCloudinary) {
      if (transform) {
        resolvedSrc = src.replace(
          /\/image\/upload\/[^/]+\//,
          `/image/upload/${transform}/`,
        );
      }
    } else {
      const t = transform ?? getDefaultTransform(src);
      const clean = src.startsWith("/") ? src.slice(1) : src;
      resolvedSrc = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${t}/${FOLDER}/${clean}`;
    }
  }

  return (
    <img
      src={resolvedSrc}
      {...imgRest}
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
    />
  );
};

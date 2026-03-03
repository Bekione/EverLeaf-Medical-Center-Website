import React, { useState } from "react";

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

/**
 * Returns true when className suggests a small fixed-size container
 * (e.g. w-8…w-24 or rounded-full avatar circles).
 * Used to decide fallback icon size and whether to show alt text.
 */
function isSmallContainer(className?: string): boolean {
  if (!className) return false;
  // Matches w-8 through w-24 (Tailwind fixed widths ≤ 96px) or rounded-full avatars
  return /\b(w-(?:8|9|10|11|12|14|16|20|24)|rounded-full)\b/.test(className);
}

/**
 * Returns true when className has NO explicit non-auto height class,
 * meaning the container relied on the <img> intrinsic height.
 * In that case we apply a min-height so the fallback div isn't invisible.
 */
function needsHeightFloor(className?: string): boolean {
  if (!className) return true;
  // h-full, h-[Npx], h-[Nvh], h-32, h-screen … all OK — parent provides height
  // h-auto or absent → the container depended on img for its height
  const hasRealHeight = /\bh-(?!auto\b)/.test(className);
  return !hasRealHeight;
}

interface CldImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  /** Override the Cloudinary transformation string for this specific usage */
  transform?: string;
}

/**
 * Cloudinary-aware image component.
 *
 * Broken-image fallback rules (determined statically from className, no JS observers):
 *  - Small container (w-8…w-24 or rounded-full): icon only, `title={alt}` tooltip.
 *  - Large container: bigger icon + rendered alt text (line-clamp-2), no tooltip.
 *  - Container with no explicit height (h-auto / absent): `minHeight: 240px` applied
 *    so the fallback is not invisible when the parent relied on img intrinsic size.
 */
export const CldImg: React.FC<CldImgProps> = ({ src, transform, ...rest }) => {
  const [error, setError] = useState(false);

  let resolvedSrc = src;

  // Destructure fetchPriority so we can re-emit it as the lowercase HTML attribute.
  const { fetchPriority, alt, className, style, ...imgRest } =
    rest as typeof rest & {
      fetchPriority?: string;
    };

  if (IS_CLOUDINARY && !error) {
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

  if (error) {
    const small = isSmallContainer(className);
    const heightFloor = needsHeightFloor(className);

    const fallbackStyle: React.CSSProperties = {
      ...(heightFloor ? { aspectRatio: "4/3" } : {}),
      ...style,
    };

    return (
      <div
        className={`flex flex-col items-center justify-center gap-1 overflow-hidden bg-primary-light border border-dashed border-border text-muted text-center ${className ?? ""}`}
        style={fallbackStyle}
        role="img"
        // Show tooltip only for small containers where text isn't rendered
        title={small ? alt : undefined}
        aria-label={alt}
      >
        <span
          className={`material-icons-outlined opacity-35 shrink-0 ${small ? "text-base" : "text-4xl"}`}
        >
          broken_image
        </span>
        {!small && alt && (
          <span className="text-xs opacity-55 leading-snug line-clamp-2 w-full px-2">
            {alt}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      {...imgRest}
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
    />
  );
};

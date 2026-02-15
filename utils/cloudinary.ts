/**
 * Cloudinary Helper Utilities
 *
 * Provides helper functions for generating optimized Cloudinary URLs
 */

const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "demo";
const CLOUDINARY_FOLDER =
  import.meta.env.VITE_CLOUDINARY_FOLDER || "everleaf-medical";

interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "scale" | "crop" | "thumb";
  quality?: "auto" | number;
  format?: "auto" | "webp" | "jpg" | "png";
  gravity?: "auto" | "face" | "faces" | "center";
}

/**
 * Generate Cloudinary URL with transformations
 *
 * @param filename - Image filename (without extension or with)
 * @param options - Transformation options
 * @returns Optimized Cloudinary URL
 *
 * @example
 * getCloudinaryUrl('doctor-1.jpg', { width: 800, quality: 'auto' })
 * // Returns: https://res.cloudinary.com/.../image/upload/w_800,q_auto,f_auto/everleaf-medical/doctor-1.jpg
 */
export function getCloudinaryUrl(
  filename: string,
  options: CloudinaryOptions = {},
): string {
  const {
    width,
    height,
    crop = "fill",
    quality = "auto",
    format = "auto",
    gravity = "auto",
  } = options;

  // Build transformation string
  const transformations: string[] = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (width || height) transformations.push(`c_${crop}`);
  if (gravity !== "auto") transformations.push(`g_${gravity}`);
  transformations.push(`q_${quality}`);
  transformations.push(`f_${format}`);

  const transformStr = transformations.join(",");

  // Remove extension if present (Cloudinary will add it)
  const cleanFilename = filename.replace(/\.[^.]+$/, "");

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformStr}/${CLOUDINARY_FOLDER}/${cleanFilename}`;
}

/**
 * Generate responsive srcset for Cloudinary image
 *
 * @param filename - Image filename
 * @param widths - Array of widths for srcset
 * @returns srcset string
 *
 * @example
 * getCloudinarySrcSet('hero.jpg', [400, 800, 1200])
 * // Returns: "https://...w_400/... 400w, https://...w_800/... 800w, ..."
 */
export function getCloudinarySrcSet(
  filename: string,
  widths: number[] = [400, 800, 1200, 1600],
): string {
  return widths
    .map((width) => `${getCloudinaryUrl(filename, { width })} ${width}w`)
    .join(", ");
}

/**
 * Generate placeholder for lazy loading (Low Quality Image Placeholder)
 *
 * @param filename - Image filename
 * @returns Tiny blurred placeholder URL
 */
export function getCloudinaryPlaceholder(filename: string): string {
  return getCloudinaryUrl(filename, {
    width: 20,
    quality: 30,
    format: "auto",
  });
}

/**
 * Presets for common use cases
 */
export const CloudinaryPresets = {
  /**
   * Hero/Banner images - Full width, high quality
   */
  hero: (filename: string) =>
    getCloudinaryUrl(filename, {
      width: 1920,
      quality: "auto",
      crop: "fill",
      gravity: "auto",
    }),

  /**
   * Thumbnail images - Small, optimized
   */
  thumbnail: (filename: string) =>
    getCloudinaryUrl(filename, {
      width: 400,
      height: 300,
      quality: "auto",
      crop: "fill",
      gravity: "auto",
    }),

  /**
   * Doctor/Staff photos - Face-focused
   */
  portrait: (filename: string) =>
    getCloudinaryUrl(filename, {
      width: 800,
      height: 800,
      crop: "fill",
      gravity: "face",
      quality: "auto",
    }),

  /**
   * Gallery images - Medium size, good quality
   */
  gallery: (filename: string) =>
    getCloudinaryUrl(filename, {
      width: 1200,
      quality: "auto",
      crop: "fit",
    }),

  /**
   * Blog/Article images
   */
  article: (filename: string) =>
    getCloudinaryUrl(filename, {
      width: 1000,
      quality: "auto",
      crop: "fit",
    }),
};

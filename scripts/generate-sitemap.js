import fs from "node:fs";
import path from "node:path";

const siteUrl = (
  process.env.VITE_SITE_URL || "https://everleaf-medical-center.vercel.app"
).replace(/\/$/, "");
const languages = ["en", "fr", "am"];
const routes = [
  "",
  "/about",
  "/services",
  "/departments",
  "/doctors",
  "/gallery",
  "/contact",
  "/blog",
  "/privacy",
  "/departments/cardiology",
  "/departments/neurology",
  "/departments/surgery",
  "/departments/dental",
  "/departments/rehabilitation",
  "/departments/radiology",
  "/departments/laboratory",
  "/departments/pharmacy",
  "/departments/emergency",
  "/departments/pediatrics",
  "/departments/ophthalmology",
  "/services/preventive-checkups",
  "/services/diagnostics",
  "/services/imaging",
  "/services/laboratory",
  "/services/pharmacy",
  "/services/emergency",
];
const articleIds = [
  "preventive-cardiology",
  "diabetes-management",
  "immune-system",
  "pediatric-wing",
  "anxiety-in-teens",
  "flu-season",
  "senior-mobility",
];
const urls = languages.flatMap((language) => [
  ...routes.map((route) => `/${language}${route}`),
  ...articleIds.map((id) => `/${language}/blog/${id}`),
]);
const today = new Date().toISOString().slice(0, 10);
const entries = urls
  .map(
    (url) => `  <url>\n    <loc>${siteUrl}${url}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
  )
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

for (const file of ["sitemap.xml", path.join("public", "sitemap.xml")]) {
  fs.writeFileSync(file, sitemap);
}

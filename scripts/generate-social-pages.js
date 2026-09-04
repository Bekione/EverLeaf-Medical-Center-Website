import fs from "node:fs";
import path from "node:path";

const siteUrl = (
  process.env.VITE_SITE_URL || "https://everleaf-medical-center.vercel.app"
).replace(/\/$/, "");
const languages = ["en", "fr", "am"];
const articles = [
  { id: "preventive-cardiology", image: "/images/articles/article-1-hero.jpg" },
  { id: "diabetes-management", image: "/images/articles/article-2-hero.jpg" },
  { id: "immune-system", image: "/images/articles/article-3-hero.jpg" },
  { id: "pediatric-wing", image: "/images/articles/article-4-hero.jpg" },
  { id: "anxiety-in-teens", image: "/images/articles/article-5-hero.jpg" },
  { id: "flu-season", image: "/images/articles/article-6-hero.jpg" },
  { id: "senior-mobility", image: "/images/articles/article-7-hero.jpg" },
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceTag = (html, pattern, replacement) =>
  html.replace(pattern, replacement);

const localeData = Object.fromEntries(
  languages.map((language) => [
    language,
    JSON.parse(
      fs.readFileSync(`i18n/locales/${language}.json`, "utf8"),
    ).pages.blog.data,
  ]),
);
const template = fs.readFileSync("dist/index.html", "utf8");

for (const language of languages) {
  for (const article of articles) {
    const data = localeData[language][article.id];
    if (!data) continue;

    const articleUrl = `${siteUrl}/${language}/blog/${article.id}`;
    const title = data.seoTitle || data.title;
    const description = data.seoDescription || data.excerpt || "";
    const image = `${siteUrl}${article.image}`;
    let html = template;

    html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)} | EverLeaf Medical Center</title>`);
    html = replaceTag(html, /<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`);
    html = replaceTag(html, /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/, `<meta property="og:type" content="article" />`);
    html = replaceTag(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${articleUrl}" />`);
    html = replaceTag(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`);
    html = replaceTag(html, /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`);
    html = replaceTag(html, /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/, `<meta property="og:image" content="${image}" />`);
    html = replaceTag(html, /<meta\s+property="twitter:card"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:card" content="summary_large_image" />`);
    html = replaceTag(html, /<meta\s+property="twitter:url"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:url" content="${articleUrl}" />`);
    html = replaceTag(html, /<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
    html = replaceTag(html, /<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
    html = replaceTag(html, /<meta\s+property="twitter:image"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${image}" />`);
    html = html.replace(
      "</head>",
      `    <meta property="og:image:alt" content="${escapeHtml(data.title)}" />\n    <meta property="og:image:width" content="1200" />\n    <meta property="og:image:height" content="630" />\n    <meta property="article:published_time" content="${escapeHtml(data.date || "")}" />\n  </head>`,
    );

    const outputDirectory = path.join("dist", language, "blog", article.id);
    fs.mkdirSync(outputDirectory, { recursive: true });
    fs.writeFileSync(path.join(outputDirectory, "index.html"), html);
  }
}

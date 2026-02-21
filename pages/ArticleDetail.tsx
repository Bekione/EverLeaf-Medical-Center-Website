import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import NewsletterForm from "../components/NewsletterForm";
import SEO from "../components/SEO";
import RelatedArticles from "../components/RelatedArticles";
import { CldImg } from "../components/CldImg";
import { articles, ContentBlock } from "../data/articles";
import { useTranslation } from "react-i18next";

// ─── Category Styling ────────────────────────────────────────────────────────

const getCategoryStyle = (category: string) => {
  switch (category) {
    case "Research":
      return "text-primary bg-blue-50 border-blue-100";
    case "Health Tips":
      return "text-secondary bg-green-50 border-green-100";
    case "Announcements":
      return "text-red-600 bg-red-50 border-red-100";
    case "Medical Awareness":
      return "text-purple-600 bg-purple-50 border-purple-100";
    default:
      return "text-slate-600 bg-slate-100 border-slate-200";
  }
};

const getCalloutStyle = (color?: string) => {
  switch (color) {
    case "red":
      return "bg-red-50 border-red-500";
    case "green":
      return "bg-green-50 border-green-500";
    case "orange":
      return "bg-orange-50 border-orange-500";
    case "purple":
      return "bg-purple-50 border-purple-500";
    case "blue":
    default:
      return "bg-blue-50 border-primary";
  }
};

// ─── Block Renderer ──────────────────────────────────────────────────────────

const renderBlock = (
  block: ContentBlock,
  index: number,
  articleId: string,
  t: any,
): React.ReactNode => {
  const baseKey = `pages.blog.data.${articleId}.content.${index}`;
  switch (block.type) {
    case "paragraph":
      return <p key={index}>{t(`${baseKey}.text`, block.text)}</p>;

    case "heading":
      return (
        <h2
          key={index}
          className="text-2xl font-bold text-slate-900 mt-10 mb-6"
        >
          {t(`${baseKey}.text`, block.text)}
        </h2>
      );

    case "list":
      return (
        <ul key={index} className="space-y-4 list-none pl-0 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              {item.icon && (
                <span
                  className={`material-icons mt-1 text-base shrink-0 ${item.iconColor ?? "text-primary"}`}
                >
                  {item.icon}
                </span>
              )}
              <span>
                {item.title && (
                  <strong>
                    {t(`${baseKey}.items.${i}.title`, item.title)}:{" "}
                  </strong>
                )}
                {t(`${baseKey}.items.${i}.text`, item.text)}
              </span>
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div
          key={index}
          className={`p-6 rounded-xl border-l-4 my-8 ${getCalloutStyle(block.color)}`}
        >
          <h4 className="text-lg font-bold text-slate-900 mb-2">
            {t(`${baseKey}.title`, block.title)}
          </h4>
          <p className="text-sm mb-0">{t(`${baseKey}.text`, block.text)}</p>
        </div>
      );

    case "image-grid":
      return (
        <div
          key={index}
          className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {block.images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-md object-cover h-64 w-full"
            />
          ))}
        </div>
      );

    case "metric-list":
      return (
        <div
          key={index}
          className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary my-8"
        >
          <h4 className="text-lg font-bold text-slate-900 mb-3">
            {t(`${baseKey}.title`, "Essential Metrics to Monitor:")}
          </h4>
          <ul className="space-y-2 list-none pl-0 mb-0">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-icons text-red-500 mt-0.5 text-sm">
                  {item.icon}
                </span>
                <span className="text-sm">
                  <strong>
                    {t(`${baseKey}.items.${i}.metric`, item.metric)}:
                  </strong>{" "}
                  {t(`${baseKey}.items.${i}.target`, `Target ${item.target}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
};

// ─── Main Component ──────────────────────────────────────────────────────────

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.subtitle,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <SEO
        title={t(`pages.blog.data.${article.id}.seoTitle`, article.seoTitle)}
        description={t(
          `pages.blog.data.${article.id}.seoDescription`,
          article.seoDescription,
        )}
        type="article"
        canonical={`https://everleaf-medical.com/blog/${article.id}`}
        image={article.img}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <span className="material-icons text-sm mr-1">home</span>
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">
                    chevron_right
                  </span>
                  <Link
                    to="/blog"
                    className="ml-1 md:ml-2 hover:text-primary transition-colors"
                  >
                    {t("nav.blog")}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">
                    chevron_right
                  </span>
                  <span className="ml-1 md:ml-2 text-slate-700 font-medium truncate max-w-[200px]">
                    {t(`pages.blog.data.${article.id}.title`, article.title)
                      .length > 30
                      ? t(
                          `pages.blog.data.${article.id}.title`,
                          article.title,
                        ).slice(0, 30) + "…"
                      : t(`pages.blog.data.${article.id}.title`, article.title)}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Article Body */}
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full border ${getCategoryStyle(article.category)}`}
                  >
                    {t(
                      `pages.blog.articles.categories.${article.category
                        .toLowerCase()
                        .replace(/\s+/g, "")}`,
                      article.category,
                    )}
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span>
                    {t(`pages.blog.data.${article.id}.read`, article.read)}
                  </span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-muted hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="material-icons text-lg">share</span>
                  <span className="text-sm font-medium hidden sm:inline">
                    {t("pages.blog.article.share")}
                  </span>
                </button>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                {t(`pages.blog.data.${article.id}.title`, article.title)}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic">
                {t(`pages.blog.data.${article.id}.excerpt`, article.subtitle)}
              </p>

              {/* Author + Date meta */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100">
                <CldImg
                  src={article.authorImg}
                  alt={article.author}
                  transform="w_80,q_auto,f_auto,c_fill,g_face"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {t(`pages.blog.data.${article.id}.author`, article.author)}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t(`pages.blog.data.${article.id}.date`, article.date)}
                  </p>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Article Content Blocks */}
            <article className="prose prose-lg prose-slate max-w-none">
              {article.content.map((block, i) =>
                renderBlock(block, i, article.id, t),
              )}
            </article>

            <hr className="border-slate-200 my-12" />

            {/* Author Card */}
            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <CldImg
                src={article.authorImg}
                alt={article.author}
                transform="w_200,q_auto,f_auto,c_fill,g_face"
                className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t(`pages.blog.data.${article.id}.author`, article.author)}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {t(
                    `pages.blog.data.${article.id}.authorTitle`,
                    article.authorTitle,
                  )}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t(
                    `pages.blog.data.${article.id}.authorBio`,
                    article.authorBio,
                  )}
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="material-icons text-sm">email</span>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="material-icons text-sm">link</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <RelatedArticles
              currentId={article.id}
              currentCategory={article.category}
            />

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <h3 className="text-xl font-bold mb-3 relative z-10">
                {t("pages.blog.newsletter.title")}
              </h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                {t(
                  "pages.blog.newsletter.subtitleSidebar",
                  t("pages.blog.newsletter.subtitle"),
                )}
              </p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;

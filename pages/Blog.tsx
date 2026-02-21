import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NewsletterForm from "../components/NewsletterForm";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { CldImg } from "../components/CldImg";
import {
  useFilterTransition,
  cardAnimStyle,
} from "../hooks/useFilterTransition";
import { articles as articlesData } from "../data/articles";

const featuredArticle = articlesData.find((a) => a.featured) ?? articlesData[0];
const ITEMS_PER_PAGE = 3;

const CATEGORIES = [
  "All",
  "Health Tips",
  "Announcements",
  "Research",
  "Medical Awareness",
] as const;

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Research":
      return "text-primary bg-blue-50";
    case "Health Tips":
      return "text-secondary bg-green-50";
    case "Announcements":
      return "text-red-600 bg-red-50";
    case "Medical Awareness":
      return "text-purple-600 bg-purple-50";
    default:
      return "text-slate-600 bg-slate-100";
  }
};

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [phase, animateFilter] = useFilterTransition(180, 40);

  const filteredArticles =
    filter === "All"
      ? articlesData
      : articlesData.filter((article) => article.category === filter);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleFilter = (cat: string) => {
    if (cat === filter) return;
    animateFilter(() => setFilter(cat));
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      animateFilter(() => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  return (
    <div
      className="animate-fade-in min-h-screen"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <SEO
        title={t("pages.blog.hero.title")}
        description={t("pages.blog.hero.subtitle")}
        canonical="https://everleaf-medical.com/blog"
      />

      {/* Featured Article Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={featuredArticle.img}
            alt={featuredArticle.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>
        <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {t("pages.blog.hero.featured")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                {
                  t(
                    `pages.blog.data.${featuredArticle.id}.title`,
                    featuredArticle.title,
                  ).split(":")[0]
                }
                {t(
                  `pages.blog.data.${featuredArticle.id}.title`,
                  featuredArticle.title,
                ).includes(":") && (
                  <>
                    :<br />
                    <span className="text-primary">
                      {t(
                        `pages.blog.data.${featuredArticle.id}.title`,
                        featuredArticle.title,
                      )
                        .split(":")[1]
                        .trim()}
                    </span>
                  </>
                )}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                {t(
                  `pages.blog.data.${featuredArticle.id}.excerpt`,
                  featuredArticle.excerpt ?? featuredArticle.subtitle,
                )}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <CldImg
                    src={featuredArticle.authorImg}
                    alt={t(
                      `pages.blog.data.${featuredArticle.id}.author`,
                      featuredArticle.author,
                    )}
                    transform="w_80,q_auto,f_auto,c_fill,g_face"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t(
                        `pages.blog.data.${featuredArticle.id}.author`,
                        featuredArticle.author,
                      )}
                    </p>
                    <p className="text-xs text-slate-400">
                      {t(
                        `pages.blog.data.${featuredArticle.id}.authorTitle`,
                        featuredArticle.authorTitle,
                      )}
                    </p>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-700 hidden sm:block" />
                <div className="text-sm text-slate-400 flex items-center gap-2">
                  <span className="material-icons text-base">
                    calendar_today
                  </span>
                  {t(
                    `pages.blog.data.${featuredArticle.id}.date`,
                    featuredArticle.date,
                  )}
                </div>
                <div className="text-sm text-slate-400 flex items-center gap-2">
                  <span className="material-icons text-base">schedule</span>
                  {t(
                    `pages.blog.data.${featuredArticle.id}.read`,
                    featuredArticle.read,
                  )}
                </div>
              </div>
              <Link
                to={`/blog/${featuredArticle.id}`}
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors border-b-2 border-primary pb-0.5"
              >
                {t("pages.blog.hero.readMore")}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 container mx-auto px-6 relative z-10">
        {/* Header + Filter Row */}
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-12 border-b pb-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <Reveal delay={0}>
            <h2
              className="text-2xl font-bold mb-6 md:mb-0"
              style={{ color: "var(--color-text)" }}
            >
              {t("pages.blog.articles.title")}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div
              className="flex flex-wrap justify-center gap-2"
              role="group"
              aria-label="Article category filter"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-primary text-white shadow-md"
                      : "border hover:text-primary"
                  }`}
                  style={
                    filter !== cat
                      ? {
                          backgroundColor: "var(--color-surface)",
                          color: "var(--color-text-muted)",
                          borderColor: "var(--color-border)",
                        }
                      : {}
                  }
                >
                  {cat === "All"
                    ? t("pages.blog.articles.all")
                    : t(
                        `pages.blog.articles.categories.${cat
                          .toLowerCase()
                          .replace(/\s+/g, "")}`,
                        cat,
                      )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Article Cards — phase-animated */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article, idx) => (
            <article
              key={article.id}
              className="rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group border flex flex-col h-full"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-card)",
                ...cardAnimStyle(idx, phase),
              }}
            >
              <div className="relative h-56 overflow-hidden">
                <CldImg
                  src={article.img}
                  alt={t(`pages.blog.data.${article.id}.title`, article.title)}
                  transform="w_600,q_auto,f_auto,c_fill"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-md shadow-sm ${getCategoryColor(article.category)} bg-white/90`}
                  >
                    {t(
                      `pages.blog.articles.categories.${article.category
                        .toLowerCase()
                        .replace(/\s+/g, "")}`,
                      article.category,
                    )}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <div
                  className="flex items-center text-xs mb-3 space-x-2"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <span>
                    {t(`pages.blog.data.${article.id}.date`, article.date)}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>
                    {t(`pages.blog.data.${article.id}.read`, article.read)}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {t(`pages.blog.data.${article.id}.title`, article.title)}
                </h3>
                <div
                  className="pt-4 mt-auto border-t flex items-center justify-between"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: "var(--color-bg-alt)",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {t(`pages.blog.data.${article.id}.author`, article.author)
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        `pages.blog.data.${article.id}.author`,
                        article.author,
                      )}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${article.id}`}
                    aria-label={t("common.buttons.readMore", {
                      title: article.title,
                    })}
                    className="text-primary hover:text-primary-dark p-2 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    <span className="material-icons text-xl">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {paginatedArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
              {t("pages.blog.articles.noResults")}
            </p>
            <button
              onClick={() => animateFilter(() => setFilter("All"))}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t("pages.blog.articles.viewAll")}
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredArticles.length > ITEMS_PER_PAGE && (
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <span className="material-icons text-sm">chevron_left</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md"
                        : "border"
                    }`}
                    style={
                      currentPage !== page
                        ? {
                            borderColor: "var(--color-border)",
                            color: "var(--color-text-muted)",
                            backgroundColor: "var(--color-surface)",
                          }
                        : {}
                    }
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-muted)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <span className="material-icons text-sm">chevron_right</span>
              </button>
            </nav>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden" id="newsletter">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.blog.newsletter.badge")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.blog.newsletter.title")
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}{" "}
                <br />
                <span className="text-blue-300">
                  {t("pages.blog.newsletter.title")
                    .split(" ")
                    .slice(2)
                    .join(" ")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.blog.newsletter.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <NewsletterForm variant="section" />
              <p className="text-blue-300 text-xs mt-6">
                {t("pages.blog.newsletter.privacy")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

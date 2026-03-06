import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLangPath } from "../hooks/useLang";
import NewsletterForm from "../components/NewsletterForm";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";
import { CldImg } from "../components/CldImg";
import {
  useFilterTransition,
  cardAnimStyle,
} from "../hooks/useFilterTransition";
import { articles as articlesData } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import { FilterTabs } from "../components/FilterTabs";
import Button from "../components/Button";
import Pagination from "../components/Pagination";

const featuredArticle = articlesData.find((a) => a.featured) ?? articlesData[0];
const ITEMS_PER_PAGE = 6;

const CATEGORIES = [
  "All",
  "Health Tips",
  "Announcements",
  "Research",
  "Medical Awareness",
] as const;

import HeroSection from "../components/HeroSection";

// ... (existing constants)

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [phase, animateFilter] = useFilterTransition(180, 40);
  const gridRef = useRef<HTMLElement>(null);

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
      setCurrentPage(page);
      // Scroll after state update
      setTimeout(() => {
        const scrollTarget = gridRef.current
          ? Math.max(0, gridRef.current.offsetTop - 70)
          : 0;
        window.scrollTo({ top: scrollTarget, behavior: "smooth" });
      }, 0);
    }
  };

  const featuredTitleRaw = t(
    `pages.blog.data.${featuredArticle.id}.title`,
    featuredArticle.title,
  );
  const titleParts = featuredTitleRaw.split(":");

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

      <HeroSection
        variant="impact"
        image={featuredArticle.img}
        badge={t("pages.blog.hero.featured")}
        showBadgeDot={true}
        badgeClassName="bg-primary/10 border border-primary/30 text-primary-light"
        titlePart1={titleParts[0]}
        titleHighlight={titleParts[1]?.trim()}
        titleHighlightClassName="text-white"
        titleHighlightUnderline={true}
        description={t(
          `pages.blog.data.${featuredArticle.id}.excerpt`,
          featuredArticle.excerpt ?? featuredArticle.subtitle,
        )}
        children={
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-4">
              <CldImg
                src={featuredArticle.authorImg}
                alt={t(
                  `pages.blog.data.${featuredArticle.id}.author`,
                  featuredArticle.author,
                )}
                transform="w_80,q_auto,f_auto,c_fill,g_face"
                className="w-11 h-11 rounded-full object-cover border-2 border-slate-700"
              />
              <div>
                <p className="text-sm font-bold text-white mb-0.5">
                  {t(
                    `pages.blog.data.${featuredArticle.id}.author`,
                    featuredArticle.author,
                  )}
                </p>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
                  {t(
                    `pages.blog.data.${featuredArticle.id}.authorTitle`,
                    featuredArticle.authorTitle,
                  )}
                </p>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-800 hidden sm:block" />
            <div className="flex items-center gap-6">
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span className="material-icons text-base opacity-60">
                  calendar_today
                </span>
                <span>
                  {t(
                    `pages.blog.data.${featuredArticle.id}.date`,
                    featuredArticle.date,
                  )}
                </span>
              </div>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span className="material-icons text-base opacity-60">
                  schedule
                </span>
                <span>
                  {t(
                    `pages.blog.data.${featuredArticle.id}.read`,
                    featuredArticle.read,
                  )}
                </span>
              </div>
            </div>
          </div>
        }
        secondaryButton={{
          label: t("pages.blog.hero.readMore"),
          to: buildPath(`/blog/${featuredArticle.id}`),
          variant: "glass",
          icon: "arrow_forward",
        }}
      />

      {/* Articles Grid */}
      <section
        ref={gridRef}
        className="py-16 container mx-auto px-6 relative z-10"
      >
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
            <FilterTabs
              categories={CATEGORIES}
              activeCategory={filter}
              onCategoryChange={handleFilter}
              getLabel={(cat) =>
                cat === "All"
                  ? t("pages.blog.articles.all")
                  : t(
                      `pages.blog.articles.categories.${cat
                        .toLowerCase()
                        .replace(/\s+/g, "")}`,
                      cat,
                    )
              }
              ariaLabel="Article category filter"
            />
          </Reveal>
        </div>

        {/* Article Cards — phase-animated */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article, idx) => (
            <ArticleCard
              key={article.id}
              {...article}
              style={cardAnimStyle(idx, phase)}
            />
          ))}
        </div>

        {/* Empty State */}
        {paginatedArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
              {t("pages.blog.articles.noResults")}
            </p>
            <Button
              onClick={() => animateFilter(() => setFilter("All"))}
              className="mt-4"
            >
              {t("pages.blog.articles.viewAll")}
            </Button>
          </div>
        )}

        {/* Pagination */}
        {filteredArticles.length > ITEMS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>

      {/* Newsletter Section */}
      <CTASection
        badge={t("pages.blog.newsletter.badge")}
        titlePart1={t("pages.blog.newsletter.title")
          .split(" ")
          .slice(0, 2)
          .join(" ")}
        titleHighlight={t("pages.blog.newsletter.title")
          .split(" ")
          .slice(2)
          .join(" ")}
        description={t("pages.blog.newsletter.subtitle")}
      >
        <NewsletterForm variant="section" />
        <p className="text-blue-300 text-xs mt-6">
          {t("pages.blog.newsletter.privacy")}
        </p>
      </CTASection>
    </div>
  );
};

export default Blog;

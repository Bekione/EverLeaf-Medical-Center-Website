import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
import Reveal from "./Reveal";
import ArticleCard from "./ArticleCard";
import { articles } from "../data/articles";
import { useLangPath } from "../hooks/useLang";

const NewsSection: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();

  // Get the latest 3 articles
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-12 bg-bg-alt relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <Reveal delay={0}>
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-primary uppercase bg-bg-alt rounded-full">
                {t("pages.blog.hero.featured")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-text">
                {t("pages.blog.articles.title")}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={200} className="hidden md:block">
            <Button
              to={buildPath("/blog")}
              variant="action"
              size="sm"
              className="transform-none"
            >
              {t("pages.blog.articles.viewAll")}
              <span className="material-icons text-sm ml-2">arrow_forward</span>
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, idx) => (
            <Reveal key={article.id} delay={idx * 150}>
              <ArticleCard {...article} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            to={buildPath("/blog")}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            {t("pages.blog.articles.viewAll")}
            <span className="material-icons text-sm ml-2">arrow_forward</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

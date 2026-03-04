import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { CldImg } from "./CldImg";

import { useTranslation } from "react-i18next";
import { useLangPath } from "../hooks/useLang";

interface RelatedArticlesProps {
  currentId: string;
  currentCategory: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentId,
  currentCategory,
}) => {
  const { t } = useTranslation();
  const buildPath = useLangPath();
  const sameCategory = articles.filter(
    (a) => a.id !== currentId && a.category === currentCategory,
  );
  const otherCategory = articles.filter(
    (a) => a.id !== currentId && a.category !== currentCategory,
  );
  const related = [...sameCategory, ...otherCategory].slice(0, 3);

  return (
    <div className="rounded-2xl shadow-card p-6 border sticky top-28 bg-surface border-border">
      <h3 className="text-lg font-bold mb-6 border-b pb-2 text-text border-border">
        {t("components.relatedArticles.title")}
      </h3>
      <div className="space-y-6">
        {related.map((article) => (
          <Link
            key={article.id}
            to={buildPath(`/blog/${article.id}`)}
            className="group flex gap-4 items-start"
          >
            <div
              className="w-20 h-20 shrink-0 rounded-lg overflow-hidden"
              style={{ backgroundColor: "var(--color-bg-alt)" }}
            >
              <CldImg
                src={article.img}
                alt={t(`pages.blog.data.${article.id}.title`, article.title)}
                transform="w_160,q_auto,f_auto,c_fill"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1 block">
                {t(
                  `pages.blog.articles.categories.${article.category
                    .toLowerCase()
                    .replace(/\s+/g, "")}`,
                  article.category,
                )}
              </span>
              <h4
                className="font-bold leading-snug group-hover:text-primary transition-colors text-sm font-serif line-clamp-2"
                style={{ color: "var(--color-text)" }}
              >
                {t(`pages.blog.data.${article.id}.title`, article.title)}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;

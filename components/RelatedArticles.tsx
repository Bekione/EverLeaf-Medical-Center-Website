import React from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { CldImg } from "./CldImg";

interface RelatedArticlesProps {
  currentId: string;
  currentCategory: string;
}

const categoryColorMap: Record<string, string> = {
  "Health Tips": "text-green-600",
  Research: "text-blue-600",
  Announcements: "text-red-600",
  "Medical Awareness": "text-purple-600",
};

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  currentId,
  currentCategory,
}) => {
  // First pick same-category articles (excluding current), then fill from others
  const sameCategory = articles.filter(
    (a) => a.id !== currentId && a.category === currentCategory,
  );
  const otherCategory = articles.filter(
    (a) => a.id !== currentId && a.category !== currentCategory,
  );

  const related = [...sameCategory, ...otherCategory].slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 border border-slate-100 sticky top-28">
      <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
        Related Articles
      </h3>
      <div className="space-y-6">
        {related.map((article) => {
          const colorClass =
            categoryColorMap[article.category] ?? "text-slate-600";
          return (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group flex gap-4 items-start"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <CldImg
                  src={article.img}
                  alt={article.title}
                  transform="w_160,q_auto,f_auto,c_fill"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <span
                  className={`text-xs ${colorClass} font-semibold uppercase tracking-wider mb-1 block`}
                >
                  {article.category}
                </span>
                <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif line-clamp-2">
                  {article.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedArticles;

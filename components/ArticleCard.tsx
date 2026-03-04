import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CldImg } from "./CldImg";
import { useLangPath } from "../hooks/useLang";

export interface ArticleCardProps {
  id: string;
  title: string;
  category: string;
  img: string;
  date: string;
  read: string;
  author: string;
  style?: React.CSSProperties;
}

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

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  category,
  img,
  date,
  read,
  author,
  style,
}) => {
  const { t } = useTranslation();
  const buildPath = useLangPath();

  return (
    <article
      className="rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group/card border flex flex-col h-full bg-surface border-border shadow-card"
      style={style}
    >
      <div className="relative h-56 overflow-hidden">
        <CldImg
          src={img}
          alt={t(`pages.blog.data.${id}.title`, title)}
          transform="w_600,q_auto,f_auto,c_fill"
          className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-md shadow-sm ${getCategoryColor(
              category,
            )} bg-white/90`}
          >
            {t(
              `pages.blog.articles.categories.${category
                .toLowerCase()
                .replace(/\s+/g, "")}`,
              category,
            )}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center text-xs mb-3 space-x-2 text-text-muted">
          <span>{t(`pages.blog.data.${id}.date`, date)}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>{t(`pages.blog.data.${id}.read`, read)}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-text">
          {t(`pages.blog.data.${id}.title`, title)}
        </h3>
        <div className="pt-4 mt-auto border-t flex items-center justify-between border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-bg-alt text-text-muted">
              {(t(`pages.blog.data.${id}.author`, author) as string)
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <span className="text-xs font-medium text-text">
              {t(`pages.blog.data.${id}.author`, author)}
            </span>
          </div>
          <Link
            to={buildPath(`/blog/${id}`)}
            aria-label={t("common.buttons.readMore", {
              title: title,
            })}
            className="w-10 h-10 flex items-center justify-center bg-primary/5 text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-300 shadow-sm group/btn"
          >
            <span className="material-icons text-xl transition-all duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:-skew-y-12 group-hover/btn:scale-110">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;

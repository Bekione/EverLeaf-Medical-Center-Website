import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import Reveal from "./Reveal";
import { colorMap } from "../data/colorMap";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color?: string; // e.g., 'red', 'blue', 'primary', 'teal'
  delay?: number;
  items?: string[];
  variant?: "standard" | "boxed";
  to?: string;
  link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  color = "primary",
  delay = 0,
  items,
  variant = "standard",
  to,
  link,
}) => {
  const { t } = useTranslation();
  const selectedColor = colorMap[color] || colorMap.primary;
  const target = to || link;

  return (
    <Reveal delay={delay} threshold={0.1} className="h-full">
      <div
        className={`${
          variant === "boxed" ? "p-10 shadow-sm" : "p-8 shadow-card"
        } bg-surface rounded-2xl border border-border hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full group flex flex-col`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`${
            variant === "boxed"
              ? `w-16 h-16 rounded-2xl shadow-sm ${selectedColor.bg} ${selectedColor.text} group-hover:bg-primary group-hover:text-white`
              : `w-14 h-14 ${selectedColor.bg} ${selectedColor.text} rounded-xl group-hover:-translate-y-1`
          } flex items-center justify-center mb-6 transition-all duration-300 flex-none`}
          style={{ willChange: "transform" }}
        >
          <span
            className={`material-icons ${variant === "boxed" ? "text-3xl" : "text-3xl"}`}
          >
            {icon}
          </span>
        </div>
        <h3 className="text-xl font-bold text-txt mb-3 font-serif line-clamp-1">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4 grow">
          {description}
        </p>

        {items && items.length > 0 && (
          <ul className="space-y-2 mb-4">
            {items.map((item, j) => (
              <li
                key={j}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-none ${selectedColor.dot}`}
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        {target && (
          <Button
            to={target}
            variant="action"
            size="sm"
            className="mt-4 group/btn"
          >
            {t("common.buttons.learnMore")}
            <span className="material-icons text-sm ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
              arrow_forward
            </span>
          </Button>
        )}
      </div>
    </Reveal>
  );
};

export default FeatureCard;

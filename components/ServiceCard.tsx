import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
import Reveal from "./Reveal";
import { colorMap } from "../data/colorMap";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  delay?: number;
  color?: string; // e.g., 'blue', 'teal', 'red'
  link?: string;
  to?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  delay = 0,
  color = "primary",
  link,
  to,
}) => {
  const { t } = useTranslation();
  const selectedColor = colorMap[color] || colorMap.primary;
  const target = link || to;

  return (
    <Reveal delay={delay} threshold={0.1} className="h-full">
      <div className="group h-full">
        <div className="h-full p-8 rounded-2xl border border-border shadow-card hover:-translate-y-2 transition-all duration-300 flex flex-col bg-surface will-change-transform">
          <div
            className={`mb-6 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:-translate-y-1 transition-transform duration-300 ${selectedColor.bg} ${selectedColor.text} will-change-transform`}
          >
            <span className="material-icons text-3xl">{icon}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors font-serif text-text wrap-anywhere">
            {title}
          </h3>
          <p className="leading-relaxed mb-6 text-sm md:text-base grow text-text-muted">
            {description}
          </p>

          {features && features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="material-icons text-primary text-xs font-bold">
                    check
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {target && (
            <Button
              to={target}
              variant="action"
              size="sm"
              className="mt-2 group/btn"
            >
              {t("common.buttons.learnMore")}
              <span className="material-icons text-sm ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </Button>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default ServiceCard;

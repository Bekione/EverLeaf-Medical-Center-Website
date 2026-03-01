import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "./Button";
import Reveal from "./Reveal";

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

  const colorMap: Record<string, { bg: string; text: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary" },
    blue: { bg: "bg-blue-50", text: "text-blue-600" },
    red: { bg: "bg-red-50", text: "text-red-600" },
    teal: { bg: "bg-teal-50", text: "text-teal-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600" },
    yellow: { bg: "bg-yellow-50", text: "text-yellow-600" },
    green: { bg: "bg-green-50", text: "text-green-600" },
    amber: { bg: "bg-amber-50", text: "text-amber-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
    pink: { bg: "bg-pink-50", text: "text-pink-600" },
    slate: { bg: "bg-slate-50", text: "text-slate-600" },
    violet: { bg: "bg-violet-50", text: "text-violet-600" },
    fuchsia: { bg: "bg-fuchsia-50", text: "text-fuchsia-600" },
  };

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
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors font-serif text-text">
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
            <Button to={target} variant="action" size="sm" className="mt-2 group/btn">
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

import React from "react";
import Reveal from "./Reveal";

export interface TechnologyItem {
  icon: string;
  title: string;
  description: string;
  iconBgColor?: string; // e.g., 'bg-primary/20'
  iconTextColor?: string; // e.g., 'text-blue-400'
}

interface TechnologySectionProps {
  title: string;
  description: string;
  items: TechnologyItem[];
  rightContent: React.ReactNode;
  badge?: string;
  reverseLayout?: boolean;
  sectionClassName?: string;
  variant?: "primary" | "surface";
  id?: string;
  iconName?: string;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  description,
  items,
  rightContent,
  badge,
  reverseLayout = false,
  sectionClassName = "py-20",
  variant = "primary",
  id,
}) => {
  const isPrimary = variant === "primary";

  return (
    <section
      className={`${sectionClassName} ${isPrimary ? "text-white" : "text-text"}`}
      id={id}
    >
      <div className="container mx-auto sm:px-4 md:px-6">
        <div
          className={`rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl border ${
            isPrimary
              ? "bg-linear-to-br from-cta-from to-cta-to border-white/10"
              : "bg-surface border-border"
          }`}
        >
          {/* Decorative Grid Pattern */}
          <div
            className={`absolute inset-0 ${isPrimary ? "opacity-10" : "opacity-30"}`}
            style={{
              backgroundImage: `radial-gradient(${isPrimary ? "#ffffff" : "var(--color-primary)"} 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          ></div>

          <div
            className={`relative z-10 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12 ${
              reverseLayout ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Content Side */}
            <Reveal
              from={reverseLayout ? "right" : "left"}
              threshold={0.1}
              className="lg:w-1/2 w-full flex flex-col"
            >
              <div>
                {badge && (
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase rounded-full border ${
                      isPrimary
                        ? "text-primary-light bg-primary/20 border-white/10"
                        : "text-primary bg-primary-light border-transparent"
                    }`}
                  >
                    {badge}
                  </span>
                )}
                <h2
                  className={`text-3xl font-bold mb-6 ${isPrimary ? "text-white" : "text-text"}`}
                >
                  {title}
                </h2>
                <p
                  className={`mb-8 leading-relaxed ${isPrimary ? "text-white/80" : "text-text-muted"}`}
                >
                  {description}
                </p>
                <div className="space-y-6">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`${
                          item.iconBgColor ||
                          (isPrimary
                            ? "bg-primary/20"
                            : "bg-primary-light text-primary")
                        } p-3 rounded-lg flex items-center justify-center shrink-0`}
                      >
                        <span
                          className={`material-icons text-2xl ${
                            item.iconTextColor ||
                            (isPrimary ? "text-blue-400" : "text-primary")
                          }`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-lg mb-1 ${isPrimary ? "text-white" : "text-text"}`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-sm ${isPrimary ? "text-white/70" : "text-text-muted"}`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Widget Side (JSX Content) */}
            <Reveal
              from={reverseLayout ? "left" : "right"}
              threshold={0.1}
              className="lg:w-1/2 w-full h-full flex flex-col"
            >
              <div className="h-full flex flex-col justify-center">
                {rightContent}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

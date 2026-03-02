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
}) => {
  const isPrimary = variant === "primary";

  return (
    <section
      className={sectionClassName}
      style={{ color: isPrimary ? "white" : "var(--color-text)" }}
    >
      <div className="container mx-auto px-6">
        <div
          className={`rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl border ${
            isPrimary
              ? "bg-linear-to-br from-cta-from to-cta-to border-white/10 text-white"
              : "border-slate-200"
          }`}
          style={
            !isPrimary
              ? {
                  background:
                    "linear-gradient(to right, var(--color-bg-alt), var(--color-surface))",
                  borderColor: "var(--color-border)",
                }
              : {}
          }
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
            className={`relative z-10 flex flex-col lg:flex-row items-center gap-12 ${
              reverseLayout ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Content Side */}
            <Reveal
              from={reverseLayout ? "right" : "left"}
              threshold={0.1}
              className="lg:w-1/2"
            >
              <div>
                {badge && (
                  <span
                    className="font-bold tracking-wider uppercase text-sm mb-2 block"
                    style={{
                      color: isPrimary
                        ? "var(--color-primary-light)"
                        : "var(--color-primary)",
                    }}
                  >
                    {badge}
                  </span>
                )}
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: isPrimary ? "white" : "var(--color-text)" }}
                >
                  {title}
                </h2>
                <p
                  className="mb-8 leading-relaxed"
                  style={{
                    color: isPrimary
                      ? "rgba(255,255,255,0.8)"
                      : "var(--color-text-muted)",
                  }}
                >
                  {description}
                </p>
                <div className="space-y-6">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`${
                          item.iconBgColor ||
                          (isPrimary ? "bg-primary/20" : "bg-primary/10")
                        } p-3 rounded-lg flex items-center justify-center shrink-0`}
                        style={
                          !isPrimary && !item.iconBgColor
                            ? { backgroundColor: "var(--color-surface)" }
                            : {}
                        }
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
                          className="font-bold text-lg mb-1"
                          style={{
                            color: isPrimary ? "white" : "var(--color-text)",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-sm"
                          style={{
                            color: isPrimary
                              ? "rgba(255,255,255,0.7)"
                              : "var(--color-text-muted)",
                          }}
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
              className="lg:w-1/2 w-full"
            >
              {rightContent}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

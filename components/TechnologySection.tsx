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
}

const TechnologySection: React.FC<TechnologySectionProps> = ({
  title,
  description,
  items,
  rightContent,
  badge,
  reverseLayout = false,
  sectionClassName = "py-20 text-white",
}) => {
  return (
    <section className={sectionClassName}>
      <div className="container mx-auto px-6">
        <div className="bg-linear-to-br from-cta-from to-cta-to rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl border border-white/10">
          {/* Decorative Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
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
                  <span className="text-primary-light font-bold tracking-wider uppercase text-sm mb-2 block">
                    {badge}
                  </span>
                )}
                <h2 className="text-3xl font-bold mb-6">{title}</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  {description}
                </p>
                <div className="space-y-6">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div
                        className={`${
                          item.iconBgColor || "bg-primary/20"
                        } p-3 rounded-lg flex items-center justify-center shrink-0`}
                      >
                        <span
                          className={`material-icons text-2xl ${
                            item.iconTextColor || "text-blue-400"
                          }`}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-blue-200">
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

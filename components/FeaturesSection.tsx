import React from "react";
import Reveal from "./Reveal";
import FeatureCard, { FeatureCardProps } from "./FeatureCard";

interface FeaturesSectionProps {
  badge?: string;
  title: string;
  description?: string;
  items: Omit<FeatureCardProps, "delay">[];
  className?: string; // Standard default: "py-20 bg-bg-alt"
  columns?: 2 | 3 | 4;
  variant?: "standard" | "boxed";
  children?: React.ReactNode;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  badge,
  title,
  description,
  items,
  className = "py-20 bg-bg-alt",
  columns = 4,
  variant = "standard",
  children,
}) => {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-6">
        <Reveal threshold={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            {badge && (
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                {badge}
              </span>
            )}
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt mb-4">
              {title}
            </h2>
            {description && <p className="text-lg text-muted">{description}</p>}
          </div>
        </Reveal>
        <div className={`grid gap-6 md:gap-8 ${columnClasses[columns]}`}>
          {items.map((item, i) => (
            <FeatureCard
              key={i}
              {...item}
              variant={item.variant || variant}
              delay={i * 100}
            />
          ))}
        </div>
        {children && (
          <Reveal delay={200} threshold={0.1}>
            <div className="mt-16 text-center">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;

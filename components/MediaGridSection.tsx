import React from "react";
import Reveal from "./Reveal";
import MediaCard, { MediaCardProps } from "./MediaCard";

interface MediaGridSectionProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  items: Omit<MediaCardProps, "delay" | "index">[];
  columns?: 2 | 3 | 4;
  className?: string;
  sectionClassName?: string;
}

const MediaGridSection: React.FC<MediaGridSectionProps> = ({
  id,
  badge,
  title,
  description,
  items,
  columns = 4,
  className = "",
  sectionClassName = "py-16 md:py-24",
}) => {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={sectionClassName} id={id}>
      <Reveal threshold={0.1}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary-light rounded-full">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {description && <p className="text-slate-600">{description}</p>}
        </div>
      </Reveal>
      <div className={`grid gap-6 ${columnClasses[columns]} ${className}`}>
        {items.map((item, i) => (
          <MediaCard
            key={i}
            {...item}
            delay={i * 100}
            index={i}
            mobileFallback="alternate"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaGridSection;

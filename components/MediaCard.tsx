import React from "react";
import Reveal from "./Reveal";
import { CldImg } from "./CldImg";

export interface MediaCardProps {
  title: string;
  description: string;
  image: string;
  tag?: string;
  color?: string;
  delay?: number;
  mobileFallback?: "bottom" | "fade" | "alternate" | "none";
  index?: number;
  className?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  description,
  image,
  tag,
  color = "primary",
  delay = 0,
  mobileFallback = "bottom",
  index = 0,
  className = "",
}) => {
  return (
    <Reveal
      delay={delay}
      threshold={0.1}
      mobileFallback={mobileFallback as any}
      index={index}
      className={`h-full ${className}`}
    >
      <div
        className="rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full flex flex-col"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="h-48 overflow-hidden relative">
          <CldImg
            src={image}
            alt={title}
            transform="w_600,h_192,q_auto,f_auto,c_fill"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {tag && (
            <div
              className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-${color}`}
            >
              {tag}
            </div>
          )}
        </div>
        <div className="p-6 flex-1">
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            {title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default MediaCard;

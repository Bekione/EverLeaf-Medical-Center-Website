import React from "react";
import { useTranslation } from "react-i18next";
import ImageSkeleton from "./ImageSkeleton";

export interface GalleryCardProps {
  id: string;
  src: string;
  category: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  id,
  src,
  category,
  onClick,
  style,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className="group/card relative overflow-hidden rounded-2xl cursor-pointer h-72 active:scale-[0.98] transition-all duration-300 select-none"
      style={{
        backgroundColor: "var(--color-surface)",
        boxShadow: "var(--shadow-card)",
        WebkitTouchCallout: "none",
        ...style,
      }}
      onClick={onClick}
    >
      <ImageSkeleton
        src={src}
        alt={t(`data.gallery.${id}.title`)}
        className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700 ease-out"
        containerClassName="w-full h-full"
      />

      {/* Slide-up Overlay — desktop reveal, softened & masked for mobile visibility */}
      <div className="absolute inset-0 translate-y-0 sm:translate-y-full sm:group-hover/card:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-end text-white text-left overflow-hidden">
        {/* Visual Layer: Lighter gradient + masked blur for mobile; original strength for desktop */}
        <div
          className="absolute inset-0 bg-linear-to-t from-slate-900 via-primary/80 to-transparent backdrop-blur-[2px] max-sm:from-slate-900/80 max-sm:via-primary/40 max-sm:mask-[linear-gradient(to_top,black_0%,black_35%,transparent_65%)] -z-10"
          aria-hidden="true"
        />
        <span className="text-xs font-bold tracking-wider uppercase text-primary sm:text-white text-shadow-sm mb-2">
          {t(`data.categories.${category}`)}
        </span>
        <h3 className="text-xl font-bold font-serif mb-2 text-white">
          {t(`data.gallery.${id}.title`)}
        </h3>
        <p className="text-sm text-slate-100 line-clamp-2 mb-4">
          {t(`data.gallery.${id}.desc`)}
        </p>
        <div className="flex items-center text-xs font-semibold text-white/90 group-hover/card:text-white transition-colors">
          <span className="material-icons text-sm mr-1">zoom_in</span>{" "}
          {t("pages.gallery.card.viewLarger")}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;

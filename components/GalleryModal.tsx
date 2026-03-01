import React, { useEffect, useRef, useState } from "react";
import { CldImg } from "./CldImg";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import ScrollFade from "./ScrollFade";

interface GalleryModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
  description: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  thumbnails: string[];
  currentImageIndex: number;
  onSelect: (index: number) => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  imageSrc,
  title,
  description,
  onClose,
  onNext,
  onPrev,
  thumbnails,
  currentImageIndex,
  onSelect,
}) => {
  const { t } = useTranslation();
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLDivElement>(null);

  // Track load state for blur-up effect
  const [imageLoaded, setImageLoaded] = useState(false);

  // Track displayed title/desc separately so they update only when image is ready
  const [displayedTitle, setDisplayedTitle] = useState(title);
  const [displayedDesc, setDisplayedDesc] = useState(description);

  // Reset load state when src changes
  useEffect(() => {
    setImageLoaded(false);
  }, [imageSrc]);

  // Update title/desc only after the new image has loaded
  useEffect(() => {
    if (imageLoaded) {
      setDisplayedTitle(title);
      setDisplayedDesc(description);
    }
  }, [imageLoaded, title, description]);

  // Sync title/desc immediately when modal first opens
  useEffect(() => {
    if (isOpen) {
      setDisplayedTitle(title);
      setDisplayedDesc(description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Scroll active thumbnail into center of strip using direct container.scrollTo()
  // (scrollIntoView can scroll the whole page — we only want to scroll the strip)
  useEffect(() => {
    if (
      !isOpen ||
      !activeThumbnailRef.current ||
      !thumbnailContainerRef.current
    )
      return;
    const container = thumbnailContainerRef.current;
    const thumb = activeThumbnailRef.current;
    const scrollLeft =
      thumb.offsetLeft - (container.clientWidth - thumb.offsetWidth) / 2;
    container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
  }, [currentImageIndex, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          e.preventDefault();
          break;
        case "ArrowRight":
          onNext();
          e.preventDefault();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const modal = document.querySelector('[data-gallery-modal="true"]');
    if (!modal) return;
    const focusableElements = modal.querySelectorAll(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );
    const firstEl = focusableElements[0] as HTMLElement;
    const lastEl = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl?.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleTabKey);
    firstEl?.focus();
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-99999 backdrop-blur-md flex flex-col justify-center items-center p-4 sm:p-8 animate-fade-in"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-footer-bg) 95%, transparent)",
      }}
      data-gallery-modal="true"
      role="dialog"
      aria-label={t("components.galleryModal.aria.viewer")}
      aria-modal="true"
    >
      <Button
        variant="ghost"
        onClick={onClose}
        className="absolute top-6 right-6 h-12 sm:h-16 w-12 sm:w-16 z-100 text-white/70! hover:text-primary! transition-all p-2 rounded-full hover:bg-white/10 shadow-none hover:shadow-none min-w-0"
        icon="close"
        rounded="full"
        animate={false}
      ></Button>

      <div className="relative w-full max-w-6xl flex items-center justify-center flex-1 min-h-0 pt-16 sm:pt-0">
        <Button
          variant="ghost"
          onClick={onPrev}
          className="hidden! sm:flex! absolute left-0 sm:-left-12 lg:-left-20 z-10 w-16 h-16 p-2 text-white/70! hover:text-primary! transition-all rounded-full hover:bg-white/10 shadow-none hover:shadow-none min-w-0"
          icon="chevron_left"
          rounded="full"
          animate={false}
        ></Button>

        <div className="relative group w-full h-full flex flex-col items-center justify-center">
          {/* Image container — no bg so no letterbox bars */}
          <div className="relative max-h-[70vh] w-auto overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
            {/* Blurred low-res placeholder — snaps on instantly, fades out smoothly */}
            <CldImg
              src={imageSrc}
              alt=""
              transform="w_80,q_30,f_auto,c_fill,e_blur:800"
              className={`absolute inset-0 w-full h-full object-cover scale-110 ${
                imageLoaded
                  ? "opacity-0 transition-opacity duration-500"
                  : "opacity-100 transition-none"
              }`}
              aria-hidden="true"
            />
            {/* Full-res — NO key: keeps old image dimensions so container never collapses.
                Hides instantly (transition-none) to avoid A blurring, fades in smoothly on load. */}
            <CldImg
              src={imageSrc}
              alt={displayedTitle}
              transform="w_1920,q_auto,f_auto,c_fit"
              className={`max-h-[70vh] w-auto object-contain ${
                imageLoaded
                  ? "opacity-100 transition-opacity duration-500"
                  : "opacity-0 transition-none"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Title/desc fade in with the image so they don't flash before the image appears */}
          <div
            className={`mt-6 text-center transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          >
            <h3
              className="text-xl font-bold tracking-wide"
              style={{ color: "var(--color-primary)" }}
            >
              {displayedTitle}
            </h3>
            <p className="text-white/80 text-sm mt-1">{displayedDesc}</p>
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={onNext}
          className="hidden! sm:flex! absolute right-0 sm:-right-12 lg:-right-20 z-10 w-16 h-16 p-2 text-white/70! hover:text-primary! transition-all rounded-full hover:bg-white/10 shadow-none hover:shadow-none min-w-0"
          icon="chevron_right"
          rounded="full"
          animate={false}
        ></Button>
      </div>

      <div className="flex sm:hidden gap-8 mt-4 mb-4">
        <Button
          variant="ghost"
          onClick={onPrev}
          className="p-2 text-white/70! hover:text-primary! transition-all rounded-full hover:bg-white/10 shadow-none hover:shadow-none h-12 w-12 min-w-0"
          icon="chevron_left"
          rounded="full"
          animate={false}
        ></Button>
        <Button
          variant="ghost"
          onClick={onNext}
          className="p-2 text-white/70! hover:text-primary! transition-all rounded-full hover:bg-white/10 shadow-none hover:shadow-none h-12 w-12 min-w-0"
          icon="chevron_right"
          rounded="full"
          animate={false}
        ></Button>
      </div>

      {/* Thumbnail strip — justify-start so offsetLeft is always correct for scroll calc */}
      <ScrollFade className="mt-auto h-20 w-full max-w-4xl">
        <div
          ref={thumbnailContainerRef}
          className="overflow-x-auto flex gap-4 py-2 px-6 scrollbar-hide justify-start scroll-smooth"
        >
          {thumbnails.map((thumb, idx) => (
            <div
              key={idx}
              ref={idx === currentImageIndex ? activeThumbnailRef : null}
              onClick={() => onSelect(idx)}
              className={`shrink-0 w-24 h-16 rounded overflow-hidden cursor-pointer transition-all border ${
                currentImageIndex === idx
                  ? "ring-2 ring-primary border-transparent opacity-100"
                  : "border-white/20 opacity-50 hover:opacity-100"
              }`}
            >
              <CldImg
                src={thumb}
                transform="w_200,q_auto,f_auto,c_fill"
                className="w-full h-full object-cover"
                alt={t("components.galleryModal.thumbnails.alt")}
              />
            </div>
          ))}
        </div>
      </ScrollFade>
    </div>
  );
};
export default GalleryModal;

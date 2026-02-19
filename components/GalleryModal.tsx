import React, { useEffect, useRef } from "react";
import { CldImg } from "./CldImg";

interface GalleryModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
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
  onClose,
  onNext,
  onPrev,
  thumbnails,
  currentImageIndex,
  onSelect,
}) => {
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active thumbnail into view when index changes
  useEffect(() => {
    if (isOpen && activeThumbnailRef.current && thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnail = activeThumbnailRef.current;

      // Calculate scroll position to center the active thumbnail
      const thumbnailLeft = thumbnail.offsetLeft;
      const thumbnailWidth = thumbnail.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollPosition =
        thumbnailLeft - containerWidth / 2 + thumbnailWidth / 2;

      // Smooth scroll to position
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentImageIndex, isOpen]);

  // Keyboard navigation: Escape, Arrow keys, and focus trap
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

  // Focus trap for gallery modal
  useEffect(() => {
    if (!isOpen) return;

    const modal = document.querySelector('[data-gallery-modal="true"]');
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] backdrop-blur-md flex flex-col justify-center items-center p-4 sm:p-8 animate-fade-in"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-footer-bg) 95%, transparent)",
      }}
      data-gallery-modal="true"
      role="dialog"
      aria-label="Image gallery viewer"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-16 h-16 flex items-center justify-center text-white/70 hover:text-primary transition-colors focus:outline-none p-2 rounded-full hover:bg-white/10"
      >
        <span className="material-icons text-4xl">close</span>
      </button>

      <div className="relative w-full max-w-6xl flex items-center justify-center flex-1 min-h-0">
        <button
          onClick={onPrev}
          className="absolute left-0 sm:-left-12 lg:-left-20 z-10 w-16 h-16 flex items-center justify-center p-2 text-white/70 hover:text-primary transition-colors rounded-full hover:bg-white/10 hidden sm:block"
        >
          <span className="material-icons text-5xl">chevron_left</span>
        </button>

        <div className="relative group w-full h-full flex flex-col items-center justify-center">
          <div className="relative max-h-[70vh] w-auto overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10 bg-black">
            <CldImg
              src={imageSrc}
              alt={title}
              transform="w_1920,q_auto,f_auto,c_fit"
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>
          <div className="mt-6 text-center">
            <h3
              className="text-xl font-bold tracking-wide"
              style={{ color: "var(--color-primary)" }}
            >
              {title}
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Experience comfort and privacy in our newly renovated rooms.
            </p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="absolute right-0 sm:-right-12 lg:-right-20 z-10 w-16 h-16 flex items-center justify-center p-2 text-white/70 hover:text-primary transition-colors rounded-full hover:bg-white/10 hidden sm:block"
        >
          <span className="material-icons text-5xl">chevron_right</span>
        </button>
      </div>

      <div className="flex sm:hidden gap-8 mt-4 mb-4">
        <button
          onClick={onPrev}
          className="p-3 text-white/70 hover:text-primary transition-colors rounded-full bg-white/10 hover:bg-white/20"
        >
          <span className="material-icons text-3xl">chevron_left</span>
        </button>
        <button
          onClick={onNext}
          className="p-3 text-white/70 hover:text-primary transition-colors rounded-full bg-white/10 hover:bg-white/20"
        >
          <span className="material-icons text-3xl">chevron_right</span>
        </button>
      </div>

      <div
        ref={thumbnailContainerRef}
        className="mt-auto h-20 w-full max-w-4xl overflow-x-auto flex gap-4 pb-2 px-4 scrollbar-hide justify-start sm:justify-center scroll-smooth"
      >
        {thumbnails.map((thumb, idx) => (
          <div
            key={idx}
            ref={idx === currentImageIndex ? activeThumbnailRef : null}
            onClick={() => onSelect(idx)}
            className={`flex-shrink-0 w-24 h-16 rounded overflow-hidden cursor-pointer transition-all border ${currentImageIndex === idx ? "ring-2 ring-primary border-transparent opacity-100" : "border-white/20 opacity-50 hover:opacity-100"}`}
          >
            <CldImg
              src={thumb}
              transform="w_200,q_auto,f_auto,c_fill"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryModal;

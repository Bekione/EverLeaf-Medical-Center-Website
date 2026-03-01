import React, { useState, useEffect } from "react";
import GalleryModal from "../components/GalleryModal";
import GalleryCard from "../components/GalleryCard";
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import Reveal from "../components/Reveal";
import {
  useFilterTransition,
  cardAnimStyle,
} from "../hooks/useFilterTransition";
import { galleryImages as allImages } from "../data/gallery";
import { useTranslation } from "react-i18next";
import { FilterTabs } from "../components/FilterTabs";
import Button from "../components/Button";

const ITEMS_PER_PAGE = 6;

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  // Track how many cards were visible BEFORE the last Load More so we
  // can skip the animation on already-shown cards.
  const [prevVisibleCount, setPrevVisibleCount] = useState(0);
  const [phase, animateFilter] = useFilterTransition(180, 40);

  const filteredImages =
    filter === "all"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  // Reset both counts when filter changes
  useEffect(() => {
    setPrevVisibleCount(0);
    setVisibleCount(ITEMS_PER_PAGE);
  }, [filter]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  // visibleImages[idx] corresponds to filteredImages[idx] since visibleImages
  // is just a slice of filteredImages — so the index is directly usable.
  // We pass filteredImages (not visibleImages) to the modal so prev/next
  // can cycle through ALL filtered images, not just the loaded ones.
  const openModal = (visibleIdx: number) => {
    // Because visibleImages = filteredImages.slice(0, visibleCount),
    // the index in visibleImages IS the same index in filteredImages.
    setCurrentIndex(visibleIdx);
    setModalOpen(true);
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );

  const loadMore = () => {
    // Record current count before expanding so already-visible cards don't re-animate
    setPrevVisibleCount(visibleCount);
    animateFilter(() =>
      setVisibleCount((prev) => Math.min(prev + 6, filteredImages.length)),
    );
  };

  const handleFilter = (cat: string) => {
    if (cat === filter) return;
    animateFilter(() => setFilter(cat));
  };

  return (
    <div
      className="animate-fade-in min-h-screen"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <SEO
        title={t("pages.gallery.hero.title")}
        description={t("pages.gallery.hero.subtitle")}
        canonical="https://everleaf-medical.com/gallery"
      />

      <HeroSection
        variant="centered"
        badge={t("pages.gallery.hero.badge")}
        title={t("pages.gallery.hero.title")}
        description={t("pages.gallery.hero.subtitle")}
      />

      <section className="py-12 container mx-auto px-6">
        <Reveal delay={0} threshold={0.05}>
          <FilterTabs
            categories={["all", "facilities", "rooms", "equipment", "staff"]}
            activeCategory={filter}
            onCategoryChange={handleFilter}
            getLabel={(cat) => t(`pages.gallery.filters.${cat}`)}
            ariaLabel="Gallery category filter"
            className="mb-12"
          />
        </Reveal>

        {/* Image grid — phase-animated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleImages.map((img, idx) => (
            <GalleryCard
              key={`${filter}-${img.src}`}
              {...img}
              // Only animate cards that are newly added (idx >= prevVisibleCount)
              // Already-visible cards get no animation style so they don't re-animate
              style={
                idx >= prevVisibleCount
                  ? cardAnimStyle(idx - prevVisibleCount, phase)
                  : undefined
              }
              onClick={() => openModal(idx)}
            />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredImages.length && (
          <Reveal delay={200} threshold={0.05}>
            <div className="mt-12 text-center">
              <Button
                variant="secondary"
                onClick={loadMore}
                className="rounded-full shadow-none border-border"
                icon="expand_more"
              >
                {t("pages.gallery.loadMore")}
              </Button>
            </div>
          </Reveal>
        )}
      </section>

      <GalleryModal
        isOpen={modalOpen}
        imageSrc={filteredImages[currentIndex]?.src}
        title={t(`data.gallery.${filteredImages[currentIndex]?.id}.title`)}
        description={t(`data.gallery.${filteredImages[currentIndex]?.id}.desc`)}
        onClose={() => setModalOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        thumbnails={filteredImages.map((img) => img.src)}
        currentImageIndex={currentIndex}
        onSelect={setCurrentIndex}
      />
    </div>
  );
};

export default Gallery;

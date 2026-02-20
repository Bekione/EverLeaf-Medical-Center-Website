import React, { useState, useEffect } from "react";
import GalleryModal from "../components/GalleryModal";
import ImageSkeleton from "../components/ImageSkeleton";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import {
  useFilterTransition,
  cardAnimStyle,
} from "../hooks/useFilterTransition";
import { galleryImages as allImages } from "../data/gallery";

const ITEMS_PER_PAGE = 6;

const categories = [
  "All",
  "Facilities",
  "Rooms",
  "Equipment",
  "Staff",
] as const;

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [phase, animateFilter] = useFilterTransition(180, 40);

  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [filter]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);

  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );

  const loadMore = () =>
    animateFilter(() =>
      setVisibleCount((prev) => Math.min(prev + 6, filteredImages.length)),
    );

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
        title="Hospital Gallery"
        description="View photos of our state-of-the-art medical facilities, patient rooms, and advanced equipment."
        canonical="https://everleaf-medical.com/gallery"
      />

      {/* Page Header */}
      <header
        className="border-b py-16"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <Reveal delay={0}>
            <span
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full"
              style={{
                color: "var(--color-primary-dark)",
                backgroundColor: "var(--color-primary-light)",
              }}
            >
              Our Environment
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="text-4xl lg:text-5xl font-serif font-bold mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Hospital Gallery
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--color-text-muted)" }}
            >
              Explore our state-of-the-art facilities, comfortable patient
              rooms, and the dedicated environment we've built for healing and
              recovery.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="py-12 container mx-auto px-6">
        {/* Filter buttons */}
        <Reveal delay={0} threshold={0.05}>
          <div
            className="flex flex-wrap justify-center gap-3 mb-12"
            role="group"
            aria-label="Gallery category filter"
          >
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  aria-pressed={active}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-250 shadow-sm ${
                    active
                      ? "bg-primary text-white shadow-md ring-2 ring-primary ring-offset-2"
                      : "border hover:border-primary hover:text-primary"
                  }`}
                  style={
                    !active
                      ? {
                          backgroundColor: "var(--color-surface)",
                          color: "var(--color-text-muted)",
                          borderColor: "var(--color-border)",
                        }
                      : {}
                  }
                >
                  {cat === "All" ? "All Photos" : cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Image grid — phase-animated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleImages.map((img, idx) => (
            <div
              key={`${filter}-${img.src}`}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-72"
              style={{
                backgroundColor: "var(--color-surface)",
                boxShadow: "var(--shadow-card)",
                ...cardAnimStyle(idx, phase),
              }}
              onClick={() => openModal(idx)}
            >
              <ImageSkeleton
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                containerClassName="w-full h-full"
              />

              {/* Slide-up Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary/80 to-transparent backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-end text-white text-left">
                <span className="text-xs font-bold tracking-wider uppercase text-blue-200 mb-2">
                  {img.category}
                </span>
                <h3 className="text-xl font-bold font-serif mb-2">
                  {img.title}
                </h3>
                <p className="text-sm text-slate-100 line-clamp-2 mb-4">
                  {img.desc}
                </p>
                <div className="flex items-center text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                  <span className="material-icons text-sm mr-1">zoom_in</span>{" "}
                  View Larger
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filteredImages.length && (
          <Reveal delay={200} threshold={0.05}>
            <div className="mt-12 text-center">
              <button
                onClick={loadMore}
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold rounded-full border hover:shadow-md transition-all"
                style={{
                  color: "var(--color-primary)",
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                Load More Photos
                <span className="material-icons text-sm ml-2">expand_more</span>
              </button>
            </div>
          </Reveal>
        )}
      </section>

      <GalleryModal
        isOpen={modalOpen}
        imageSrc={filteredImages[currentIndex]?.src}
        title={filteredImages[currentIndex]?.title}
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

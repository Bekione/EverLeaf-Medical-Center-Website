import React, { useState, useEffect } from "react";
import GalleryModal from "../components/GalleryModal";
import ImageSkeleton from "../components/ImageSkeleton";
import SEO from "../components/SEO";
import { galleryImages as allImages } from "../data/gallery";

const ITEMS_PER_PAGE = 6;

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter images based on category
  const filteredImages =
    filter === "All"
      ? allImages
      : allImages.filter((img) => img.category === filter);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [filter]);

  // Get currently visible images for pagination
  const visibleImages = filteredImages.slice(0, visibleCount);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredImages.length));
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
      <header
        className="border-b py-16"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
            Our Environment
          </span>
          <h1
            className="text-4xl lg:text-5xl font-serif font-bold mb-6"
            style={{ color: "var(--color-text)" }}
          >
            MediCare Hospital Gallery
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Explore our state-of-the-art facilities, comfortable patient rooms,
            and the dedicated environment we've built for healing and recovery.
          </p>
        </div>
      </header>

      <section className="py-12 container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Facilities", "Rooms", "Equipment", "Staff"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${filter === cat ? "bg-primary text-white shadow-md ring-2 ring-primary ring-offset-2" : "border"}`}
              style={
                filter !== cat
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
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-card bg-white border border-slate-100 cursor-pointer h-72 animate-fade-in"
              onClick={() => openModal(idx)}
            >
              <ImageSkeleton
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                containerClassName="w-full h-full"
              />

              {/* Slide-up Overlay with fixed Gradient */}
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

        {visibleCount < filteredImages.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-primary bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:shadow-md transition-all"
            >
              Load More Photos
              <span className="material-icons text-sm ml-2">expand_more</span>
            </button>
          </div>
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

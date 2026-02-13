
import React, { useState, useEffect } from 'react';
import GalleryModal from '../components/GalleryModal';

// Enhanced image list with reliable high-quality URLs
const allImages = [
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80', title: 'Main Atrium & Reception', category: 'Facilities', desc: 'Our spacious and welcoming main lobby designed for patient comfort.' },
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80', title: 'Diagnostic Laboratory', category: 'Equipment', desc: 'State-of-the-art laboratory equipped with advanced diagnostic machinery.' },
  { src: 'https://images.unsplash.com/photo-1516549655169-df83a092fc43?w=1200&q=80', title: 'Private Recovery Suite', category: 'Rooms', desc: 'Private rooms designed to provide a restful and healing environment.' },
  { src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&q=80', title: 'Expert Consultation Team', category: 'Staff', desc: 'Our multidisciplinary team collaborating on complex patient cases.' },
  { src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&q=80', title: 'Modern Operating Theatre', category: 'Equipment', desc: 'Advanced surgical suites featuring the latest medical technology.' },
  { src: 'https://images.unsplash.com/photo-1538108149393-fbbd8189718c?w=1200&q=80', title: 'Comfortable Waiting Areas', category: 'Facilities', desc: 'Quiet and comfortable waiting zones for families and visitors.' },
  { src: 'https://images.unsplash.com/photo-1516574187841-69301740b370?w=1200&q=80', title: 'MRI Scanning Suite', category: 'Equipment', desc: 'High-field MRI scanner providing exceptional image quality for accurate diagnosis.' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80', title: 'Rehabilitation Center', category: 'Facilities', desc: 'Fully equipped physiotherapy gym for patient rehabilitation and recovery.' },
  { src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&q=80', title: 'Pharmacy Services', category: 'Facilities', desc: 'On-site pharmacy stocked with a wide range of medications and health supplies.' },
  { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80', title: 'Pediatric Ward', category: 'Rooms', desc: 'Colorful and safe environment tailored for our youngest patients.' },
  { src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&q=80', title: 'Emergency Department', category: 'Facilities', desc: '24/7 emergency entrance equipped for rapid response and trauma care.' },
  { src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=80', title: 'Neonatal ICU', category: 'Rooms', desc: 'Specialized intensive care units for newborns requiring critical attention.' },
];

const ITEMS_PER_PAGE = 6;

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Filter images based on category
  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

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
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredImages.length));
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <header className="bg-white border-b border-slate-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
            Our Environment
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">MediCare Hospital Gallery</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our state-of-the-art facilities, comfortable patient rooms, and the dedicated environment we've built for healing and recovery.
          </p>
        </div>
      </header>

      <section className="py-12 container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Facilities', 'Rooms', 'Equipment', 'Staff'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${filter === cat ? 'bg-primary text-white shadow-md ring-2 ring-primary ring-offset-2' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'}`}
            >
              {cat === 'All' ? 'All Photos' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleImages.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-card bg-white border border-slate-100 cursor-pointer h-72 animate-fade-in" onClick={() => openModal(idx)}>
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
              
              {/* Slide-up Overlay with fixed Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary/80 to-transparent backdrop-blur-[2px] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-end text-white text-left">
                <span className="text-xs font-bold tracking-wider uppercase text-blue-200 mb-2">{img.category}</span>
                <h3 className="text-xl font-bold font-serif mb-2">{img.title}</h3>
                <p className="text-sm text-slate-100 line-clamp-2 mb-4">{img.desc}</p>
                <div className="flex items-center text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                  <span className="material-icons text-sm mr-1">zoom_in</span> View Larger
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
        thumbnails={filteredImages.map(img => img.src)}
        currentImageIndex={currentIndex}
        onSelect={setCurrentIndex}
      />
    </div>
  );
};

export default Gallery;

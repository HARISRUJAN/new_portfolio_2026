import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

interface Photo {
  id: string;
  src: string;
  title: string;
  category: string;
  location?: string;
}

// ============================================
// HOW TO ADD GALLERY IMAGES:
// ============================================
// 1. Upload your images to: src/assets/gallery/
// 2. Import them below (uncomment and add your image filenames)
// 3. Add them to the photos array with title, category, and location
//
// Example:
// import gallery1 from '../assets/gallery/my-photo-1.jpg';
// import gallery2 from '../assets/gallery/my-photo-2.jpg';
//
// Then in the photos array:
// { id: '1', src: gallery1, title: 'My Photo Title', category: 'Nature', location: 'Location Name' },
// ============================================

// Import your gallery images here
import bannu1 from '../assets/gallery/bannu1.jpg';
import bannu2 from '../assets/gallery/bannu2.jpg';
import bannu3 from '../assets/gallery/bannu3.jpg';
import bannu4 from '../assets/gallery/bannu4.jpg';
import bannu5 from '../assets/gallery/bannu5.jpg';
import bannu6 from '../assets/gallery/bannu6.png';
import bannu7 from '../assets/gallery/bannu7.png';
import bannu8 from '../assets/gallery/bannu8.png';
import bannu9 from '../assets/gallery/bannu9.png';
import bannu10 from '../assets/gallery/bannu10.png';
import bannu11 from '../assets/gallery/bannu11.png';
import bannu12 from '../assets/gallery/bannu12.png';
import bannu13 from '../assets/gallery/bannu13.png';
import bannu14 from '../assets/gallery/bannu14.png';
import bannu15 from '../assets/gallery/bannu15.png';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery photos array - using images from src/assets/gallery/
  const photos: Photo[] = [
    { id: '1', src: bannu1, title: 'Wappu 2025', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '2', src: bannu2, title: 'Northern Lights', category: 'Nature', location: 'Dubrovnik, Croatia' },
    { id: '3', src: bannu3, title: 'Junction Hackathon', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '4', src: bannu4, title: 'Junction Hackathon', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '5', src: bannu5, title: 'AIESEC MKT Discussion', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '6', src: bannu6, title: 'Gallery Photo 6', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '7', src: bannu7, title: 'Gallery Photo 7', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '8', src: bannu8, title: 'Gallery Photo 8', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '9', src: bannu9, title: 'Gallery Photo 9', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '10', src: bannu10, title: 'Gallery Photo 10', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '11', src: bannu11, title: 'Gallery Photo 11', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '12', src: bannu12, title: 'Gallery Photo 12', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '13', src: bannu13, title: 'Gallery Photo 13', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '14', src: bannu14, title: 'Gallery Photo 14', category: 'Events', location: 'Dubrovnik, Croatia' },
    { id: '15', src: bannu15, title: 'Gallery Photo 15', category: 'Events', location: 'Dubrovnik, Croatia' },
  ];

  const categories = ['All', 'Nature', 'Events', 'Urban'];

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
    }
  }, [filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateLightbox]);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-[100px] sm:blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent-blue/5 rounded-full blur-[100px] sm:blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper className="text-center mb-10 sm:mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 sm:mb-6"
            >
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-text-secondary">Photography</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Through My <span className="text-gradient">Lens</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto px-4">
              Capturing moments that inspire and tell stories
            </p>
          </ScrollAnimationWrapper>

          {/* Category Filters */}
          <ScrollAnimationWrapper className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap px-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card text-text-secondary hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </ScrollAnimationWrapper>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="mb-3 sm:mb-4 break-inside-avoid"
                >
                  <motion.div
                    className="relative group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden"
                    whileHover={{ y: -4 }}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="font-display font-semibold text-foreground text-sm sm:text-base mb-1">
                          {photo.title}
                        </h3>
                        {photo.location && (
                          <p className="text-text-muted text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {photo.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredPhotos[currentIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full glass-card text-foreground hover:text-primary transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Navigation - Previous */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full glass-card text-foreground hover:text-primary transition-colors z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Navigation - Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full glass-card text-foreground hover:text-primary transition-colors z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[currentIndex].src}
                alt={filteredPhotos[currentIndex].title}
                className="max-w-full max-h-[75vh] sm:max-h-[80vh] rounded-xl sm:rounded-2xl shadow-2xl object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-background/90 to-transparent rounded-b-xl sm:rounded-b-2xl">
                <h3 className="font-display font-bold text-foreground text-lg sm:text-xl mb-1">
                  {filteredPhotos[currentIndex].title}
                </h3>
                {filteredPhotos[currentIndex].location && (
                  <p className="text-text-muted text-xs sm:text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    {filteredPhotos[currentIndex].location}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Photo Counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full glass-card text-text-secondary text-xs sm:text-sm">
              {currentIndex + 1} / {filteredPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;

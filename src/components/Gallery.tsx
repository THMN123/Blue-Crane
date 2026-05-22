import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { imageAssets } from "../data";
import SmartImage from "./SmartImage";

interface GalleryProps {
  isDark?: boolean;
}

export default function Gallery({ isDark = false }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + imageAssets.length) % imageAssets.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % imageAssets.length);
  };

  return (
    <section
      id="gallery"
      className={`py-28 md:py-36 transition-colors duration-500 border-t ${
        isDark ? "bg-[#161616] border-white/5" : "bg-stone-50 border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] tracking-[0.45em] uppercase font-semibold text-brand-gold font-mono block">
              04 / Storyboard
            </span>
            <h2 className={`font-serif text-[2.8rem] sm:text-[4rem] leading-[1.1] font-light tracking-tight ${
              isDark ? "text-brand-cream" : "text-brand-dark"
            }`}>
              The <span className="font-semibold italic text-brand-gold">Gallery.</span>
            </h2>
            <p className={`text-base font-light leading-relaxed ${
              isDark ? "text-stone-400" : "text-stone-500"
            }`}>
              Discover the intricate sandstone facades, tranquil mountain orientation, and lavish daily plates.
            </p>
          </div>
          <span className="text-[9px] text-brand-gold uppercase tracking-[0.25em] font-mono border border-brand-gold/25 px-5 py-2.5 rounded-full inline-block font-bold">
            Tap to zoom in
          </span>
        </div>

        {/* Responsive Grid with clean, luxurious spacing */}
        <div id="image-masonry-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {imageAssets.map((asset, index) => (
            <motion.div
              key={asset.id}
              onClick={() => openLightbox(index)}
              whileHover={{ y: -6 }}
              className={`group relative cursor-zoom-in aspect-square rounded-[2rem] overflow-hidden border shadow-md transition-all duration-300 ${
                isDark ? "bg-stone-900 border-white/5" : "bg-white border-stone-200"
              }`}
            >
              {/* Media Container */}
              <SmartImage
                localPath={asset.localPath}
                fallbackUrl={asset.fallbackUrl}
                alt={asset.description}
                className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-105"
              />

              {/* Hover Zoom Tint */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>

              {/* Text label details overlay in standard view */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-brand-cream pt-14 pointer-events-none">
                <span className="text-[8px] uppercase tracking-widest font-mono text-brand-gold font-bold">
                  {asset.category}
                </span>
                <p className="font-serif text-sm font-medium leading-tight truncate mt-0.5">
                  {asset.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Screen Lightbox Zoom Backdrop Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-5xl aspect-video md:aspect-[16/10] bg-black/50 rounded-[2rem] overflow-hidden border border-white/10 flex flex-col justify-between z-10 shadow-2xl"
              >
                {/* Image display */}
                <div className="flex-grow flex items-center justify-center relative bg-stone-950/20">
                  <SmartImage
                    localPath={imageAssets[lightboxIndex].localPath}
                    fallbackUrl={imageAssets[lightboxIndex].fallbackUrl}
                    alt={imageAssets[lightboxIndex].description}
                    className="max-w-full max-h-[70vh] object-contain p-4 select-none"
                  />

                  {/* Slider backward/forward arrows */}
                  <button
                    id="lgbtn-prev"
                    onClick={handlePrev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 text-brand-cream hover:text-brand-gold border border-white/10 hover:bg-black transition-all cursor-pointer h-12 w-12 flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    id="lgbtn-next"
                    onClick={handleNext}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 text-brand-cream hover:text-brand-gold border border-white/10 hover:bg-black transition-all cursor-pointer h-12 w-12 flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Footer specs inside Lightbox Panel */}
                <div className="bg-[#121212] border-t border-white/5 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-brand-cream">
                  <div className="text-center sm:text-left">
                    <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-brand-gold font-bold">
                      {imageAssets[lightboxIndex].category} ({lightboxIndex + 1} of {imageAssets.length})
                    </span>
                    <h4 className="font-serif text-xl font-light text-brand-cream mt-0.5">
                      {imageAssets[lightboxIndex].name}
                    </h4>
                    <p className="text-stone-400 text-xs font-light mt-1">
                      {imageAssets[lightboxIndex].description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      id="lgbtn-close"
                      onClick={closeLightbox}
                      className="px-6 py-3 rounded-full border border-brand-gold bg-black hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 text-[10px] font-mono uppercase tracking-[0.15em] font-bold cursor-pointer"
                    >
                      Close Zoom
                    </button>
                  </div>
                </div>

                {/* Micro close corner button */}
                <button
                  id="lgbtn-close-corner"
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 z-20 h-11 w-11 text-brand-cream hover:text-brand-gold rounded-full bg-black/60 hover:bg-black transition-colors flex items-center justify-center"
                  aria-label="Close Lightbox"
                >
                  <X className="h-5 w-5" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

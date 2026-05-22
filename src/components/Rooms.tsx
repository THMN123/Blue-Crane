import { useState } from "react";
import {
  Wifi,
  ShieldCheck,
  Tv,
  Sun,
  Coffee,
  Sparkles,
  Bed,
  Maximize2,
  Users,
  ChevronRight,
  Eye,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { guestHouseRooms } from "../data";
import SmartImage from "./SmartImage";

// Helper map to associate icon strings with actual Lucide Icon Components
const iconMap: { [key: string]: any } = {
  Wifi: Wifi,
  ShieldCheck: ShieldCheck,
  Tv: Tv,
  SunDim: Sun,
  Coffee: Coffee,
  Sparkles: Sparkles
};

interface RoomsProps {
  onBookClick: (roomId: string) => void;
  isDark: boolean;
}

export default function Rooms({ onBookClick, isDark }: RoomsProps) {
  // Track hovered room ID to trigger the glass slide up details
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  // Track the active image index for each room ID
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: string]: number }>({});

  const selectImageIndex = (roomId: string, index: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: index
    }));
  };

  return (
    <section
      id="rooms"
      className={`py-28 md:py-40 transition-colors duration-500 border-t ${
        isDark ? "bg-[#161616] border-white/5" : "bg-stone-50 border-stone-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header - Exceptionally Spaced & Minimal */}
        <div className="max-w-3xl mb-24 space-y-4">
          <span className="text-[10px] tracking-[0.45em] uppercase font-semibold text-brand-gold font-mono block">
            02 / The Accommodation
          </span>
          <h2 className={`font-serif text-[2.8rem] sm:text-[4rem] leading-[1.1] font-light tracking-tight ${
            isDark ? "text-brand-cream" : "text-brand-dark"
          }`}>
            The <span className="font-semibold italic text-brand-gold">Sanctuary.</span>
          </h2>
          <p className={`text-base font-light max-w-2xl leading-relaxed mt-4 ${
            isDark ? "text-stone-400" : "text-stone-500"
          }`}>
            Treated with structural intent. Expansive, silent layouts featuring hand-crafted South African timbers, pristine sandstone walls, and solar resilience.
          </p>
        </div>

        {/* Spatial Living Space Grid */}
        <div id="rooms-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {guestHouseRooms.map((room) => {
            const activeIndex = activeImageIndexes[room.id] ?? 0;
            const activeImage = room.images[activeIndex] || room.images[0];

            return (
              <div
                key={room.id}
                id={`room-card-${room.id}`}
                className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-[4/5] bg-stone-900 shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                {/* Full-view absolute background image layout */}
                <div className="absolute inset-0 z-0 transition-transform duration-[1.2s] ease-out group-hover:scale-105">
                  <SmartImage
                    localPath={activeImage.localPath}
                    fallbackUrl={activeImage.fallbackUrl}
                    alt={activeImage.description}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  {/* Heavy vignette shadow layers for high contrast reading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/30 transition-all duration-500 group-hover:via-black/20" />
                </div>

                {/* Constant Floating Metadata Indicators */}
                <div className="absolute top-8 left-8 right-8 z-20 flex justify-between items-center pointer-events-none">
                  <span className="bg-black/40 backdrop-blur-md border border-white/10 text-brand-gold text-[9px] font-mono font-bold tracking-[0.25em] px-3.5 py-1.5 rounded-full uppercase">
                    {room.size}
                  </span>
                </div>

                {/* Primary Card Base Info (Renders at bottom of card space) */}
                <div className="absolute bottom-10 left-8 right-8 z-10 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-brand-gold">
                      {room.capacity} Comfort
                    </p>
                    <h3 className="font-serif text-3xl text-brand-cream font-medium tracking-tight">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-stone-300 text-xs font-light leading-relaxed max-w-md line-clamp-2">
                    {room.description}
                  </p>

                  {/* Micro-interaction sliding tab selectors for room comfort and details */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {room.images.map((image, idx) => (
                      <button
                        key={idx}
                        onClick={() => selectImageIndex(room.id, idx)}
                        className={`px-3.5 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer active:scale-95 ${
                          activeIndex === idx
                            ? "bg-brand-gold text-brand-dark font-semibold shadow-md border border-brand-gold"
                            : "bg-black/55 text-stone-300 hover:text-brand-cream border border-white/5"
                        }`}
                      >
                        {image.label || `View ${idx + 1}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Translucent Glassmorphic Slide-up Interactive Detail Panel on Pointer-Hover or Explicit Viewport Tap */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full ${
                    hoveredRoom === room.id ? "translate-y-0" : ""
                  }`}
                >
                  <div className="glass-dark p-8 rounded-t-[2.5rem] border-t border-white/10 space-y-6 text-brand-cream">
                    <div className="flex justify-between items-start border-b border-white/10 pb-4">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase">Inside The Layout</span>
                        <h4 className="font-serif text-xl font-medium text-brand-cream mt-0.5">{room.name} Amenities</h4>
                      </div>
                      <span className="text-xs text-brand-gold font-mono italic">
                        Viewing: {activeImage.label || `Showcase ${activeIndex + 1}`}
                      </span>
                    </div>

                    {/* Detailed list of premium attributes */}
                    <div className="grid grid-cols-2 gap-4">
                      {room.amenities.map((amenity) => (
                        <div key={amenity.name} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                          <span className="text-xs font-light text-stone-200">{amenity.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/10">
                      <div className="text-stone-300 font-mono text-[9px] uppercase tracking-widest">
                        {room.bedType}
                      </div>
                      
                      {/* Spring Compression Tap button */}
                      <button
                        onClick={() => onBookClick(room.id)}
                        className="px-6 py-3 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] bg-brand-gold hover:bg-brand-cream text-brand-dark hover:text-brand-dark font-bold font-sans duration-200 active:scale-95 select-none cursor-pointer"
                      >
                        Reserve Stay
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

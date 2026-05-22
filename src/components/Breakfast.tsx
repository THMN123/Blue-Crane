import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Sun, Coffee } from "lucide-react";
import { motion } from "motion/react";
import SmartImage from "./SmartImage";

interface BreakfastProps {
  isDark?: boolean;
}

export default function Breakfast({ isDark = false }: BreakfastProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const feastItems = [
    {
      sentence: "Spotless Architecture.",
      sub: "Immaculate architectural steel serveries, bright counters, and spotless catering layouts curated carefully to ensure world-class standards of cleanliness.",
      localPath: "/Images/42074815.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1498307843058-0434999b1c3a?auto=format&fit=crop&q=80&w=1200",
      alt: "Spotless steel kitchen serving and presentation layouts"
    },
    {
      sentence: "Symmetric Spaces.",
      sub: "Relax or read in style at our beautifully structured dining chairs and spacious solid tables bathed in warm ambient interior light.",
      localPath: "/Images/42074824.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
      alt: "Warm interior lighting and contemporary dining chairs setup"
    },
    {
      sentence: "Elite Discipline.",
      sub: "Symmetric kitchen counters, crystal-clear glass cabinetry, and sparkling beverage guesthousetables demonstrating our daily commitment to hygiene.",
      localPath: "/Images/42074842.jpg",
      fallbackUrl: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=1200",
      alt: "Flawless kitchen setup and polished layouts"
    }
  ];

  const scrollSide = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.clientWidth;
    const currentScroll = container.scrollLeft;
    
    let targetScroll = currentScroll;
    if (direction === "left") {
      targetScroll = currentScroll - cardWidth;
    } else {
      targetScroll = currentScroll + cardWidth;
    }

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  };

  const handleScrollDetect = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.clientWidth;
    const pageIndex = Math.round(container.scrollLeft / cardWidth);
    if (pageIndex !== activeIdx && pageIndex >= 0 && pageIndex < feastItems.length) {
      setActiveIdx(pageIndex);
    }
  };

  return (
    <section
      id="breakfast"
      className={`py-28 md:py-40 transition-colors duration-500 overflow-hidden ${
        isDark ? "bg-[#111111]" : "bg-brand-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title Block - Exceptionally Spaced & Tech Giant Elegant */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.45em] uppercase font-semibold text-brand-gold font-mono block">
              03 / The Spaces
            </span>
            <h2 className={`font-serif text-[2.8rem] sm:text-[4rem] leading-[1.1] font-light tracking-tight ${
              isDark ? "text-brand-cream" : "text-brand-dark"
            }`}>
              Dining & <span className="font-semibold italic text-brand-gold">Kitchens.</span>
            </h2>
          </div>

          {/* Scrolling controls with Physical touch target size */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollSide("left")}
              className={`p-3.5 rounded-full border transition-all duration-300 cursor-pointer h-12 w-12 flex items-center justify-center ${
                isDark
                  ? "border-white/10 hover:border-brand-gold bg-white/5 text-stone-300"
                  : "border-brand-dark/15 hover:border-brand-dark bg-stone-50 text-stone-600"
              }`}
              aria-label="Scroll left"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollSide("right")}
              className={`p-3.5 rounded-full border transition-all duration-300 cursor-pointer h-12 w-12 flex items-center justify-center ${
                isDark
                  ? "border-white/10 hover:border-brand-gold bg-white/5 text-stone-300"
                  : "border-brand-dark/15 hover:border-brand-dark bg-stone-50 text-stone-600"
              }`}
              aria-label="Scroll right"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Massive Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScrollDetect}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 lg:gap-12 pb-4"
          style={{ scrollSnapStop: "always" }}
        >
          {feastItems.map((item, index) => (
            <div
              key={index}
              className="w-full shrink-0 snap-start snap-always"
            >
              <div className="relative aspect-[16/10] sm:aspect-[21/10] rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-900 group">
                {/* Visual Image Backdrop */}
                <div className="absolute inset-0 z-0 overflow-hidden leading-none">
                  <SmartImage
                    localPath={item.localPath}
                    fallbackUrl={item.fallbackUrl}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Single, crisp, premium sentences overlay */}
                <div className="absolute bottom-10 left-10 right-10 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-mono font-bold text-brand-gold">
                      Immaculate Layouts
                    </span>
                    <h3 className="font-serif text-[2.2rem] sm:text-[3.5rem] leading-[1.1] text-brand-cream font-light tracking-tight">
                      {item.sentence}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 font-light font-sans max-w-lg mt-1">
                      {item.sub}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
                    <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase">
                      Pure Sanitary Guesthouse Care
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {feastItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!scrollRef.current) return;
                scrollRef.current.scrollTo({
                  left: idx * scrollRef.current.clientWidth,
                  behavior: "smooth"
                });
                setActiveIdx(idx);
              }}
              className={`h-1 animate-all duration-300 rounded-full ${
                idx === activeIdx ? "w-10 bg-brand-gold" : "w-2 bg-stone-400 hover:bg-stone-500"
              }`}
              aria-label={`Feast slide indicator ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { ArrowDown, Calendar } from "lucide-react";
import { motion } from "motion/react";
import SmartImage from "./SmartImage";

interface HeroProps {
  onBookClick: () => void;
  isDark: boolean;
}

export default function Hero({ onBookClick, isDark }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isCinematicLoaded, setIsCinematicLoaded] = useState(false);

  useEffect(() => {
    // Elegant delayed cinematic fade-in trigger
    const timeout = setTimeout(() => {
      setIsCinematicLoaded(true);
    }, 150);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Spatial Parallax and scale parameters based on vertical viewport scroll behavior
  const titleY = scrollY * 0.45;
  const titleScale = 1 + scrollY * 0.0004;
  const titleOpacity = Math.max(0, 1 - scrollY / 550);
  const imageScale = 1.02 + scrollY * 0.00018;

  return (
    <header
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#111111] flex items-center justify-center select-none"
    >
      {/* Background Masked Sunset Image with spatial expansion */}
      <div className="absolute inset-0 z-0 overflow-hidden leading-none">
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-[1.8s] cubic-bezier(0.16, 1, 0.3, 1) transform ${
            isCinematicLoaded
              ? "opacity-100 scale-100 [clip-path:circle(100%_at_50%_50%)]"
              : "opacity-0 scale-110 [clip-path:circle(35%_at_50%_50%)]"
          }`}
          style={{
            transform: `scale(${imageScale})`,
          }}
        >
          <SmartImage
            localPath="/Images/406227542.jpg"
            fallbackUrl="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1600"
            alt="Immaculate Dining Hall & Servery interior of Blue Crane Guest House Maseru"
            className="w-full h-full object-cover transition-transform duration-500"
          />
          {/* Spatial depth layer */}
          <div className="absolute inset-0 bg-black/45 md:bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/35" />
        </div>
      </div>

      {/* Floating Spatial coordinates or identity label */}
      <div className="absolute top-28 left-6 md:left-12 z-20 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse duration-1000" />
        <span className="text-[10px] tracking-[0.45em] font-medium text-stone-300 uppercase">
          Maseru, Lesotho
        </span>
      </div>

      {/* The Kinetic Typography Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div
          style={{
            transform: `translateY(${titleY}px) scale(${titleScale})`,
            opacity: titleOpacity,
          }}
          className="transition-transform duration-75 ease-out select-none pointer-events-none"
        >
          {/* Subtle branding line */}
          <p className="text-brand-gold font-serif text-xs md:text-sm tracking-[0.35em] uppercase mb-4 opacity-90">
            A sanctuary of quiet luxury
          </p>

          {/* Kinetic display typography with variable weights */}
          <h1 className="font-serif text-[2.7rem] sm:text-[4rem] md:text-[6rem] text-brand-cream tracking-tight leading-[1.05] font-light max-w-5xl">
            Quiet <span className="font-normal italic">luxury.</span> <br />
            Pure <span className="font-semibold text-brand-gold">comfort.</span>
          </h1>

          {/* Luxury subline */}
          <p className="text-stone-300 font-sans text-xs sm:text-sm font-light uppercase tracking-[0.25em] max-w-2xl mx-auto mt-6 leading-relaxed">
            Fully solar-powered convenience nestled in Lesotho's sandstone beauty.
          </p>
        </div>
      </div>

      {/* Floating Rounded CTA Button (Locked and resting perfectly in bottom center "thumb zone") */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <motion.button
          id="hero-book-now"
          onClick={onBookClick}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.25em] font-semibold bg-brand-cream hover:bg-brand-gold text-brand-dark hover:text-brand-dark transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(197,168,128,0.4)] active:scale-95 cursor-pointer flex items-center gap-2.5"
        >
          <Calendar className="h-4 w-4 tracking-normal" />
          Check Availability
        </motion.button>
      </div>

      {/* Scroll indicator chevron (Fades out on scroll) */}
      <div
        className="absolute bottom-8 right-6 md:right-12 z-20 hidden sm:flex items-center gap-2.5"
        style={{ opacity: Math.max(0, 1 - scrollY / 150) }}
      >
        <span className="text-[10px] font-mono tracking-widest text-stone-400/80 uppercase">Scroll to explore</span>
        <ArrowDown className="h-3.5 w-3.5 text-brand-gold animate-bounce" />
      </div>
    </header>
  );
}

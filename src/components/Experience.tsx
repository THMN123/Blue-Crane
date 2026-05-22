import { useState, useEffect, useRef } from "react";
import { Compass, Sparkles, Sun } from "lucide-react";
import { motion } from "motion/react";
import SmartImage from "./SmartImage";

interface ExperienceProps {
  isDark?: boolean;
}

export default function Experience({ isDark = false }: ExperienceProps) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate scroll offset within viewport boundaries to drive physics parallax
      const scrolledPast = window.innerHeight - rect.top;
      if (scrolledPast > 0 && rect.bottom > 0) {
        setOffsetY(scrolledPast * 0.08); // Subtle, natural speed difference
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`py-28 md:py-40 transition-colors duration-500 overflow-hidden ${
        isDark ? "bg-[#111111] text-brand-cream" : "bg-brand-cream text-brand-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Spatial Grid: Spacious and Clean */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Bold Heading & Deliberate Thought */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.45em] uppercase font-semibold text-brand-gold font-mono block">
                01 / The Architecture
              </span>
              <h2 className="font-serif text-[3.2rem] sm:text-[4.5rem] leading-[1.05] font-light tracking-tight">
                The <span className="font-semibold italic text-brand-gold">Estate.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className={`text-base md:text-lg font-light leading-relaxed ${isDark ? "text-stone-300" : "text-stone-600"}`}>
                Nested beautifully within standard historic sandstone backdrops, the property balances structural masonry with physical stillness. Our red-brick facades stand permanently against the rugged horizon, capturing the natural light of Lesotho.
              </p>
              <p className={`text-sm md:text-base font-light leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                By integrating a complete off-grid solar-infrastructure, we honor raw mountain purity without ever compromising your need for uninterrupted connection, warm water comfort, and pristine tranquility.
              </p>
            </div>

            {/* Quiet features line */}
            <div className="pt-8 border-t border-brand-gold/15 grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] font-mono text-brand-gold uppercase mb-1">Backup Grid</p>
                <p className={`text-xs font-serif ${isDark ? "text-stone-400" : "text-stone-600"}`}>100% Off-Grid Solar</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] font-mono text-brand-gold uppercase mb-1">Sanctuary</p>
                <p className={`text-xs font-serif ${isDark ? "text-stone-400" : "text-stone-600"}`}>Maseru Sandstone Valleys</p>
              </div>
            </div>
          </div>

          {/* Right Column: Parallax Rounded Window Media Container */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/10 group">
              
              {/* Parallax Image Content */}
              <div
                className="absolute inset-0 w-full h-[120%]"
                style={{
                  transform: `translateY(${-offsetY}px)`,
                  transition: "transform 0.1s ease-out"
                }}
              >
                <SmartImage
                  localPath="/Images/410755347.jpg"
                  fallbackUrl="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&q=80&w=1600"
                  alt="Secure gated access and clean paved parking driveway at Blue Crane"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              {/* Glassmorphic Spatial Information Panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="text-[9px] font-mono tracking-[0.35em] text-brand-gold uppercase font-semibold">
                  Secure Sanctuary
                </span>
                <h4 className="font-serif text-2xl text-brand-cream mt-1 font-medium leading-none">
                  Gated Parking & Peace of Mind
                </h4>
                <p className="text-xs text-stone-300 font-light mt-3 leading-relaxed max-w-md">
                  Enjoy absolute peace of mind inside our enclosed property, featuring clean paved courtyard parking and secure gated access systems.
                </p>
              </div>
            </div>

            {/* Secondary Floating Viewport Layer */}
            <div className={`mt-8 p-6 rounded-2xl border flex items-center justify-between gap-6 w-full ${
              isDark ? "bg-[#181818] border-white/5" : "bg-stone-50 border-brand-dark/5"
            }`}>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Compass className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">Orientation</p>
                  <p className={`text-xs mt-0.5 ${isDark ? "text-stone-400" : "text-stone-500"}`}>29°18'36"S | Maseru Sandstone Basin</p>
                </div>
              </div>
              <span className="inline-flex bg-brand-gold/15 text-brand-gold text-[9px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                Active Solar Comfort
              </span>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, CalendarCheck, Sun, Moon, Compass, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { businessDetails } from "../data";

interface NavbarProps {
  onBookClick: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Navbar({ onBookClick, isDark, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Estate", href: "#experience" },
    { name: "Suites", href: "#rooms" },
    { name: "The Spaces", href: "#breakfast" },
    { name: "Storyboard", href: "#gallery" },
    { name: "Connect", href: "#contact" }
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? isDark
              ? "bg-brand-dark/80 border-b border-white/5 py-4 backdrop-blur-xl shadow-2xl"
              : "bg-brand-cream/80 border-b border-brand-dark/5 py-4 backdrop-blur-xl shadow-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand: Minimalist, Spatial Layout */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border ${isDark ? "border-brand-gold bg-white/5 text-brand-gold" : "border-brand-dark/40 bg-brand-dark/5 text-brand-dark"} text-base font-serif transition-all duration-300`}>
              <span className="group-hover:scale-105 duration-300 font-bold tracking-tight">BC</span>
              <div className="absolute inset-0 rounded-full border border-brand-gold animate-pulse opacity-20" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-sm tracking-[0.2em] uppercase font-bold leading-none transition-colors duration-300 ${isDark ? "text-brand-cream group-hover:text-brand-gold" : "text-brand-dark group-hover:text-brand-gold"}`}>
                Blue Crane
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-brand-gold mt-1">
                Lesotho Sanctuary
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[11px] uppercase tracking-[0.25em] font-medium transition-colors duration-300 relative group py-1.5 ${
                  isDark ? "text-stone-300 hover:text-brand-gold" : "text-brand-dark/80 hover:text-brand-dark"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-hover:w-1/2`} />
              </a>
            ))}
          </div>

          {/* Actions & Theme Toggles */}
          <div className="flex items-center gap-4">
            {/* System-level Theme Selector */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer h-9 w-9 flex items-center justify-center ${
                isDark
                  ? "border-white/10 hover:border-brand-gold text-brand-gold hover:bg-white/5"
                  : "border-brand-dark/10 hover:border-brand-dark text-stone-600 hover:bg-brand-dark/5"
              }`}
              title={isDark ? "Enable light theme" : "Enable dark theme"}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Direct WhatsApp Link */}
            <a
              href={businessDetails.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0" />
              WhatsApp Us
            </a>

            {/* Premium Capsule Button (Physical Touch Targets > 44px) */}
            <button
              id="nav-book-now"
              onClick={onBookClick}
              className="hidden sm:flex px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-brand-gold hover:bg-brand-dark text-brand-dark hover:text-brand-cream border border-brand-gold duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              Check Availability
            </button>

            {/* Mobile Menu Toggle button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors lg:hidden focus:outline-none h-11 w-11 flex items-center justify-center ${
                isDark ? "text-brand-cream hover:bg-white/5" : "text-brand-dark hover:bg-black/5"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Glassmorphic) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            id="mobile-drawer"
            className={`fixed inset-0 z-30 pt-28 pb-12 px-8 flex flex-col justify-between lg:hidden border-b shadow-2xl ${
              isDark
                ? "bg-brand-dark/95 border-white/5 backdrop-blur-2xl"
                : "bg-brand-cream/95 border-brand-dark/5 backdrop-blur-2xl"
            }`}
          >
            <div className="flex flex-col gap-6 pt-4 text-center">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`py-3 text-lg font-serif tracking-widest font-light transition-colors ${
                    isDark ? "text-brand-cream hover:text-brand-gold" : "text-brand-dark hover:text-brand-gold"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-brand-gold/15 text-center">
              <a
                href={businessDetails.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer h-12 shadow-md"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                WhatsApp Quick Chat
              </a>
              <button
                onClick={onBookClick}
                className="w-full py-4 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer h-12"
              >
                <CalendarCheck className="h-4 w-4" />
                Check Availability
              </button>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[9px] uppercase tracking-widest bg-brand-gold/15 text-brand-gold">
                <Sun className="h-3 w-3 animate-spin-slow text-brand-gold" />
                100% OFF-GRID SOLAR COMFORT
              </div>
              <p className={`text-[11px] font-serif italic ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                "Deliberate luxury, crafted precisely."
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

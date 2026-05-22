import { useState } from "react";
import { MessageSquare } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Rooms from "./components/Rooms";
import Breakfast from "./components/Breakfast";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookingModal from "./components/BookingModal";
import { businessDetails } from "./data";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  // Default to luxurious True Dark Mode as requested ("starts with a deep, dark charcoal screen")
  const [isDark, setIsDark] = useState(true);

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoomId(undefined);
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-brand-gold selection:text-brand-dark ${
        isDark ? "bg-[#111111] text-brand-cream" : "bg-brand-cream text-brand-dark"
      }`}
    >
      {/* Floating glassmorphic top navigation */}
      <Navbar
        onBookClick={() => handleOpenBooking()}
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
      />

      {/* Cinematic Hero entry viewport */}
      <Hero
        onBookClick={() => handleOpenBooking()}
        isDark={isDark}
      />

      {/* Spatial architecture block ("The Estate") with active parallax */}
      <Experience isDark={isDark} />

      {/* Interactive suite presentation ("The Sanctuary") with translucent slide-up detail panels */}
      <Rooms
        onBookClick={(roomId) => handleOpenBooking(roomId)}
        isDark={isDark}
      />

      {/* Horizontal snapping culinary timeline ("The Feast") */}
      <Breakfast isDark={isDark} />

      {/* High-end thumbnail grid gallery */}
      <Gallery isDark={isDark} />

      {/* Structured direct dial, orientation coordinates & inquiry forms */}
      <Contact isDark={isDark} />

      {/* Solid Glassmorphic Reservation system panel */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedRoomId={selectedRoomId}
      />

      {/* Floating Instant WhatsApp Redirection Trigger */}
      <a
        href={businessDetails.whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group border border-emerald-500/30 cursor-pointer h-12"
        title="Chat on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 shrink-0" />
        <span className="text-[10px] uppercase font-mono font-bold tracking-widest max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}

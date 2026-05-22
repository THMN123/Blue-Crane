import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, User, Mail, Phone, FileText, CheckCircle2, ShieldCheck, Sun, MessageSquare } from "lucide-react";
import { Room } from "../types";
import { guestHouseRooms, businessDetails } from "../data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedRoomId }: BookingModalProps) {
  // Booking Form State
  const [roomId, setRoomId] = useState<string>(selectedRoomId || guestHouseRooms[0].id);
  const [checkIn, setCheckIn] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split("T")[0] // Tomorrow
  );
  const [checkOut, setCheckOut] = useState<string>(
    new Date(Date.now() + 86400000 * 3).toISOString().split("T")[0] // Three days out
  );
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>("");
  const [guestEmail, setGuestEmail] = useState<string>("");
  const [guestPhone, setGuestPhone] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");

  // UI Flow State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  // Selected Room calculations
  const selectedRoom = guestHouseRooms.find(r => r.id === roomId) || guestHouseRooms[0];

  const calculateNights = (): number => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const totalNights = calculateNights();
  const totalPriceZAR = selectedRoom.priceZAR * totalNights;
  const totalPriceUSD = selectedRoom.priceUSD * totalNights;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    setIsSubmitting(true);

    // Simulate luxury API booking creation
    setTimeout(() => {
      const code = `BC-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setConfirmationCode(null);
    setGuestName("");
    setGuestEmail("");
    setGuestPhone("");
    setSpecialRequests("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            id="booking-modal"
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-brand-cream text-brand-dark shadow-2xl border border-brand-gold/20"
          >
            {/* Header */}
            <div className="bg-brand-dark px-6 py-4 flex items-center justify-between border-b border-brand-gold/10">
              <div className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-brand-gold animate-spin-slow" />
                <h3 className="font-serif text-lg text-brand-cream tracking-wide">
                  Secure Guest Request • Blue Crane
                </h3>
              </div>
              <button
                id="close-booking"
                onClick={onClose}
                className="rounded-full p-1.5 text-gray-400 hover:text-brand-gold transition-colors hover:bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="max-h-[85vh] overflow-y-auto p-6 md:p-8">
              {!confirmationCode ? (
                <form id="booking-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Form Side */}
                  <div className="md:col-span-7 space-y-5">
                    <h4 className="font-serif text-xl tracking-tight text-brand-dark border-b border-brand-gold/10 pb-2">
                      Reservation Details
                    </h4>

                    {/* Room Selector */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Selected Accommodation
                      </label>
                      <select
                        id="select-room"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        className="w-full rounded-md border border-brand-gold/30 bg-white px-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                      >
                        {guestHouseRooms.map((room) => (
                          <option key={room.id} value={room.id}>
                            {room.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Check-In */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 mb-1.5">
                          <Calendar className="h-3 w-3 text-brand-gold" /> Check-In
                        </label>
                        <input
                          id="input-check-in"
                          type="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full rounded-md border border-brand-gold/30 bg-white px-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                        />
                      </div>

                      {/* Check-Out */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 mb-1.5">
                          <Calendar className="h-3 w-3 text-brand-gold" /> Check-Out
                        </label>
                        <input
                          id="input-check-out"
                          type="date"
                          required
                          min={checkIn}
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full rounded-md border border-brand-gold/30 bg-white px-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                        />
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5 mb-1.5">
                        <User className="h-3 w-3 text-brand-gold" /> Number of Guests
                      </label>
                      <select
                        id="select-guests"
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(Number(e.target.value))}
                        className="w-full rounded-md border border-brand-gold/30 bg-white px-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests (Standard)</option>
                        <option value={3}>3 Guests (Extra Bed Charge)</option>
                        <option value={4}>4 Guests (Family Suite Group)</option>
                      </select>
                    </div>

                    <h4 className="font-serif text-xl tracking-tight text-brand-dark pt-4 border-b border-brand-gold/10 pb-2">
                      Guest Information
                    </h4>

                    {/* Name */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1.5">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          id="input-name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full rounded-md border border-brand-gold/30 bg-white pl-9 pr-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <input
                            id="input-email"
                            type="email"
                            required
                            placeholder="name@domain.com"
                            value={guestEmail}
                            onChange={(e) => setGuestEmail(e.target.value)}
                            className="w-full rounded-md border border-brand-gold/30 bg-white pl-9 pr-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1.5">
                          Contact Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                          <input
                            id="input-phone"
                            type="tel"
                            required
                            placeholder="+266 5888 0000"
                            value={guestPhone}
                            onChange={(e) => setGuestPhone(e.target.value)}
                            className="w-full rounded-md border border-brand-gold/30 bg-white pl-9 pr-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1.5">
                        Special Preferences or Stay Requests (Optional)
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <textarea
                          id="textarea-requests"
                          placeholder="e.g., Twin bed configuration, late check-in options, specific arrival instructions..."
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          rows={2}
                          className="w-full rounded-md border border-brand-gold/30 bg-white pl-9 pr-3 py-2 text-sm text-brand-dark focus:border-brand-gold focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Summary Reservation Side */}
                  <div className="md:col-span-5 bg-stone-100 rounded-xl p-5 border border-stone-200 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-lg tracking-tight text-brand-dark mb-4 border-b border-brand-gold/10 pb-2">
                        Reservation Summary
                      </h4>

                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 font-medium">Accommodation:</span>
                          <span className="font-semibold text-brand-dark text-right max-w-[130px] line-clamp-2">{selectedRoom.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration of stay:</span>
                          <span className="font-medium text-brand-dark">{totalNights} {totalNights === 1 ? "Night" : "Nights"}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Guests registered:</span>
                          <span className="font-medium text-brand-dark">{guestsCount} Adults</span>
                        </div>

                        {/* Solar Badge */}
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-3 flex gap-2 items-start mt-4">
                          <ShieldCheck className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-brand-dark">No Interruptions Guaranteed</p>
                            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                              Our solar array keeps your Wi-Fi, warm shower, and lighting fully online during your stay.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-stone-300 space-y-4">
                      <div className="text-center p-3.5 bg-brand-dark/5 rounded-lg">
                        <p className="text-xs font-serif font-semibold text-brand-dark">Stay Inquiry Status</p>
                        <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                          Your request will be submitted directly to our reservation office desk. No prepayment is required today.
                        </p>
                      </div>

                      <button
                        id="submit-booking"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-brand-dark text-brand-cream hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 py-3 rounded-lg font-medium shadow-md hover:shadow-brand-gold/30 disabled:opacity-50 text-sm tracking-uppercase active:translate-y-px cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <span className="h-4 w-4 border-2 border-brand-cream border-t-transparent rounded-full animate-spin" />
                            Locking in Luxury Stay...
                          </span>
                        ) : (
                          "Confirm Reservation Request"
                        )}
                      </button>

                      <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-stone-300"></div>
                        <span className="flex-shrink mx-3 text-[9px] uppercase font-mono tracking-widest text-stone-400">or</span>
                        <div className="flex-grow border-t border-stone-300"></div>
                      </div>

                      <a
                        href={`https://wa.me/26659198236?text=Hi%20Blue%20Crane%20Guest%20House!%20I'm%20checking%20availability%20for%20my%20stay.%0A%0A-%20Suite%20Inquiry:%20${selectedRoom.name}%0A-%20Dates:%20${checkIn}%20to%20${checkOut}%20(${totalNights}%20Nights)%0A-%20Guests:%20${guestsCount}%20Adults`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-emerald-600/20 active:translate-y-px cursor-pointer text-center"
                      >
                        <MessageSquare className="h-4 w-4 shrink-0" />
                        Inquire Instantly via WhatsApp
                      </a>
                    </div>
                  </div>
                </form>
              ) : (
                /* Success Statement */
                <div id="booking-success" className="py-8 text-center space-y-6 max-w-md mx-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="inline-flex rounded-full bg-emerald-100 p-4 text-emerald-600 mb-2"
                  >
                    <CheckCircle2 className="h-12 w-12" />
                  </motion.div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl tracking-tight text-brand-dark">
                      Luxury Locked In!
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Thank you for choosing **Blue Crane Guest House**, {guestName}. We have received your booking request and will follow up with confirmation shortly.
                    </p>
                  </div>

                  {/* WhatsApp Instant Redirection Action */}
                  <div className="bg-emerald-50 border border-emerald-200/60 rounded-xl p-4 text-left shadow-sm space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wider font-mono">
                        Expedite Instantly Via WhatsApp
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      To lock in your dates immediately with our reservation desk, click the button below to dispatch your inquiry receipt on WhatsApp. Not required, but highly recommended!
                    </p>
                    <a
                      href={`https://wa.me/26659198236?text=Hi%20Blue%20Crane%20Guest%20House!%20I've%20just%20submitted%20a%20stay%20inquiry%20via%20your%20website.%20My%20Inquiry%20Code%20is%20${confirmationCode}.%20Suite%20Selected:%20${selectedRoom.name},%20Dates:%20${checkIn}%20to%20${checkOut},%20Expected%20Guests:%20${guestsCount}%20Adults.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg text-xs tracking-uppercase transition-all shadow-md active:translate-y-px duration-300 cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0" />
                      Send Booking Details to WhatsApp Desk
                    </a>
                  </div>

                  <div className="bg-brand-dark text-brand-cream rounded-xl p-5 border border-brand-gold/30 text-left shadow-lg space-y-3">
                    <div className="flex justify-between text-xs border-b border-brand-gold/20 pb-2">
                      <span className="text-gray-400">Reservation Code:</span>
                      <span className="font-mono text-brand-gold font-bold text-sm tracking-wide">{confirmationCode}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Suite Selected:</span>
                      <span className="font-medium text-brand-cream">{selectedRoom.name}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Stay Duration:</span>
                      <span className="font-medium text-brand-cream">
                        {checkIn} to {checkOut} ({totalNights} {totalNights === 1 ? "Night" : "Nights"})
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Expected Guests:</span>
                      <span className="font-medium text-brand-cream">{guestsCount} Adults</span>
                    </div>
                  </div>

                  <div className="text-left bg-stone-100 border border-stone-200 rounded-lg p-4 space-y-2">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Exclusive Clean Energy Privilege</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      Your suite has been flagged with solar priority. In case of local load-shedding, power backup switchover happens within **0.05 seconds**, ensuring no interruption to your lighting and high-speed fiber internet connection.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      id="finish-booking"
                      onClick={handleReset}
                      className="flex-1 bg-stone-300 hover:bg-stone-400 text-brand-dark py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer text-center"
                    >
                      Close Confirmation
                    </button>
                    <a
                      href={`https://wa.me/26659198236?text=Hello%20Blue%20Crane%20Guest%20House!%20I%20have%20just%20submitted%20a%20reservation%20request%20via%20your%20website.%0D%0A%0D%0A-%20Reservation%20Code:%20${confirmationCode}%0D%0A-%20Suite:%20${selectedRoom.name}%0D%0A-%20Stay:%20${checkIn}%20to%20${checkOut}%20(${totalNights}%20Nights)%0D%0A-%20Adults:%20${guestsCount}%0D%0A%0DPlease%20confirm%20my%20stay.%20Thank%20you!`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-emerald-600/20 text-center flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.1 1.452 4.767 1.453 5.4 0 9.792-4.393 9.795-9.799.002-2.618-1.01-5.078-2.859-6.93-1.85-1.853-4.307-2.873-6.931-2.873-5.402 0-9.8 4.393-9.803 9.799-.001 2.004.521 3.959 1.512 5.688l-1.006 3.681 3.766-.988zm11.402-7.5c-.3-.15-1.774-.875-2.049-.976-.276-.101-.476-.15-.676.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-1.06-.943-1.63-2.05-1.78-2.35-.15-.3-.02-.462.115-.597.12-.12.275-.325.412-.488.138-.163.18-.275.27-.45.09-.175.045-.325-.022-.475-.067-.15-.575-1.383-.787-1.896-.207-.5-.453-.433-.674-.433-.175-.004-.377-.004-.579-.004-.202 0-.53.075-.807.377-.277.301-1.059 1.034-1.059 2.522s1.083 2.924 1.233 3.124c.15.2 2.13 3.253 5.16 4.562.72.311 1.282.497 1.72.636.723.23 1.381.197 1.901.12.58-.087 1.774-.726 2.024-1.4.25-.674.25-1.253.175-1.376-.075-.124-.275-.199-.575-.35z" />
                      </svg>
                      Instantly Submit on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

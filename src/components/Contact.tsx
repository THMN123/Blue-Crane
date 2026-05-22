import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Compass, Send, CheckCircle2, ShieldCheck, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { businessDetails } from "../data";

interface ContactProps {
  isDark?: boolean;
}

export default function Contact({ isDark = false }: ContactProps) {
  // Contact state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <footer
      id="contact"
      className={`relative transition-colors duration-500 border-t ${
        isDark
          ? "bg-[#111111] border-white/5 text-brand-cream"
          : "bg-brand-cream border-stone-200 text-brand-dark"
      }`}
    >
      {/* Contact Section Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
        <div id="contact-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Business Location & Details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.45em] text-brand-gold font-semibold font-mono block">
                04 / Connection
              </span>
              <h2 className="font-serif text-[2.8rem] sm:text-[3.5rem] leading-[1.1] tracking-tight font-light">
                Connect <br />
                With <span className="font-semibold italic text-brand-gold">Us.</span>
              </h2>
              <p className={`font-light text-sm leading-relaxed max-w-md ${isDark ? "text-stone-400" : "text-stone-600"}`}>
                Have questions about our comfortable family rooms, private kitchenettes, airport shuttle logistics, or our pristine dining and kitchen layouts in Maseru? Connect with us directly.
              </p>
            </div>

            {/* Real World Distances and Satisfactions */}
            <div className={`p-6 rounded-3xl border ${isDark ? 'bg-white/[0.03] border-white/5' : 'bg-stone-100/50 border-stone-200'} space-y-4`}>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold tracking-widest text-brand-gold uppercase">Guest Satisfaction</span>
                <span className="h-1 w-1 rounded-full bg-brand-gold"/>
                <span className="text-xs font-serif font-semibold italic text-brand-gold">9.3 / 10 Couples Preference</span>
              </div>
              <p className={`text-xs font-light leading-relaxed ${isDark ? "text-stone-300" : "text-stone-600"}`}>
                Couples particularly love our peaceful sanctuary location, rating it <strong className="font-semibold text-brand-gold">9.3</strong> for romantic two-person trips and comfortable stays.
              </p>
              
              <div className="border-t border-brand-gold/15 pt-4 space-y-2">
                <p className="text-[9px] font-mono tracking-widest text-stone-400 uppercase">Convenient Proximity</p>
                <ul className="text-xs space-y-2 font-light">
                   <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className={isDark ? "text-stone-300" : "text-stone-700"}>{businessDetails.distances.airport}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className={isDark ? "text-stone-300" : "text-stone-700"}>{businessDetails.distances.golf}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className={isDark ? "text-stone-300" : "text-stone-700"}>{businessDetails.distances.museum}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct Dial / Address list */}
            <div className="space-y-8">
              
              {/* Distance Location */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wide">Physical Location</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                    {businessDetails.address}, Lesotho
                  </p>
                  <p className="text-[10px] text-brand-gold font-mono tracking-wider mt-2 flex items-center gap-1.5 uppercase font-semibold">
                    <Compass className="h-3 w-3" /> GPS: {businessDetails.coordinates}
                  </p>
                </div>
              </div>

              {/* Direct Telephone Numbers */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wide">Front Desk & WhatsApp</h4>
                  <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-stone-400" : "text-brand-cream"}`}>
                    {businessDetails.phone}
                  </p>
                  <a
                    href="https://wa.me/26659198236?text=Hello%20Blue%20Crane%20Guest%20House,%20I'm%20inquiring%20about%20a%20suite%20stay!"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl text-[10px] font-mono uppercase tracking-[0.12em] transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Instant WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Popular Facilities Badges Row */}
              <div className="space-y-3 pt-6 border-t border-brand-gold/15">
                <h4 className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase font-bold">Most Popular Facilities</h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {businessDetails.popularFacilities.map((facility) => (
                    <span
                      key={facility}
                      className={`text-[9px] font-mono tracking-wide px-3 py-1.5 rounded-full border ${
                        isDark ? 'bg-white/5 border-white/5 text-stone-300' : 'bg-black/[0.02] border-stone-200 text-stone-700'
                      }`}
                    >
                      {facility}
                    </span>
                  ))}
                  <span className="text-[9px] font-mono tracking-wide px-3 py-1.5 rounded-full border bg-brand-gold/10 border-brand-gold/35 text-brand-gold font-bold">
                    ★ Immaculate Dining Facilities Included
                  </span>
                </div>
              </div>

              {/* Emails */}
              <div className="flex gap-4 items-start pt-4 border-t border-brand-gold/15 animate-fade-in">
                <div className="h-10 w-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold tracking-wide">Written Requests</h4>
                  <a
                    href={`mailto:${businessDetails.email}`}
                    className={`text-xs mt-1 leading-relaxed block hover:text-brand-gold transition-colors ${
                      isDark ? "text-stone-300" : "text-stone-600"
                    }`}
                  >
                    {businessDetails.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact/Inquiry forms */}
          <div className={`lg:col-span-7 p-8 md:p-10 rounded-[2.5rem] border ${
            isDark
              ? "bg-[#18181b] border-white/5 shadow-2xl"
              : "bg-white border-stone-200 shadow-xl"
          }`}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form id="contact-form" onSubmit={handleSubmitMessage} className="space-y-6">
                  <div className="border-b border-brand-gold/15 pb-4">
                    <h3 className="font-serif text-2xl font-medium tracking-tight">
                      Send An Inquiry
                    </h3>
                    <p className={`text-xs ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                      Expect a prompt reply from our hospitality caretakers within 2 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className={`block text-[10px] uppercase font-bold tracking-wider mb-2 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                        Your Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                          isDark
                            ? "bg-black/30 border border-white/10 text-brand-cream focus:border-brand-gold"
                            : "bg-stone-50 border border-stone-200 text-brand-dark focus:border-brand-gold"
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block text-[10px] uppercase font-bold tracking-wider mb-2 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                          isDark
                            ? "bg-black/30 border border-white/10 text-brand-cream focus:border-brand-gold"
                            : "bg-stone-50 border border-stone-200 text-brand-dark focus:border-brand-gold"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div>
                    <label className={`block text-[10px] uppercase font-bold tracking-wider mb-2 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                      Inquiry Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none cursor-pointer transition-colors ${
                        isDark
                          ? "bg-black/30 border border-white/10 text-brand-cream focus:border-brand-gold"
                          : "bg-stone-50 border border-stone-200 text-brand-dark focus:border-brand-gold"
                      }`}
                    >
                      <option value="General Inquiry">General Accommodation Questions</option>
                      <option value="Corporate Booking">Corporate Lease / Academic Residencies</option>
                      <option value="Local Tours">Pony Trekking & Hiking Excursions</option>
                      <option value="Facility Inquiry">Dining & Kitchen Facility Inquiries</option>
                    </select>
                  </div>

                  {/* Query */}
                  <div>
                    <label className={`block text-[10px] uppercase font-bold tracking-wider mb-2 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                      Detailed Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      placeholder="Write your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
                        isDark
                          ? "bg-black/30 border border-white/10 text-brand-cream focus:border-brand-gold"
                          : "bg-stone-50 border border-stone-200 text-brand-dark focus:border-brand-gold"
                      }`}
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-gold text-brand-dark hover:bg-brand-dark hover:text-brand-cream duration-300 py-4 rounded-xl text-[10px] uppercase tracking-[0.2em] font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? "Delivering inquiry..." : "Send Secured Message"}
                  </button>
                </form>
              ) : (
                /* Success feedback for contact */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  id="contact-success-panel"
                  className="py-12 text-center max-w-sm mx-auto space-y-5"
                >
                  <div className="inline-flex rounded-full bg-brand-gold/10 p-5 text-brand-gold">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="font-serif text-2xl font-light tracking-tight">Inquiry Lodged.</h3>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                    Our hosts have securely registered your inquiry. We look forward to confirming your reservations promptly.
                  </p>
                  <button
                    id="contact-reset-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-brand-gold text-brand-dark hover:bg-stone-800 hover:text-brand-cream transition-colors duration-200 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] cursor-pointer"
                  >
                    Send Another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Global Coordinates */}
        <div className="mt-28 pt-12 border-t border-brand-gold/15 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg tracking-[0.2em] font-bold text-brand-gold uppercase">
              BLUE CRANE
            </h4>
            <p className={`text-[10px] uppercase tracking-[0.25em] ${isDark ? "text-stone-500" : "text-stone-500"}`}>
              Lesotho Sanctuary Boutique Estate
            </p>
          </div>

          <p className={`text-[10px] tracking-[0.2em] uppercase font-mono max-w-md md:text-right leading-relaxed ${
            isDark ? "text-stone-500" : "text-stone-500"
          }`}>
            Maseru, Lesotho • GPS: 29°18'36.0"S, 27°28'48.0"E
          </p>
        </div>

        {/* Legal Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-brand-gold/10 flex flex-col sm:flex-row justify-between text-stone-500 text-[10px] sm:space-y-0 font-mono tracking-wider">
          <p>© 2026 Blue Crane Sanctuary. Executive standard.</p>
          <div className="flex gap-4">
            <span>Powered by 100% Clean Solar Power</span>
            <span className="text-stone-400/30">|</span>
            <span>Maseru, Lesotho</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

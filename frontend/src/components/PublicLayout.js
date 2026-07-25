import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { Phone, Envelope, MapPin, WhatsappLogo } from "@phosphor-icons/react";
import { CONTACT, waLink } from "../lib/api";

const Footer = () => (
  <footer className="bg-ink text-white/80 pt-16 pb-12 border-t border-white/10" data-testid="footer">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="grid gap-12 lg:grid-cols-4">
        {/* Col 1 */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest text-base font-black text-white">
              SK
            </div>
            <span className="font-heading text-lg font-black text-white">SK LANDSCAPING</span>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/60">
            Science-backed, energy-efficient landscape design, execution, and scheduled maintenance services in Ode & Anand, Gujarat.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
          <ul className="mt-4 space-y-2.5 text-xs">
            <li><Link to="/" className="hover:text-leaf transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-leaf transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-leaf transition-colors">Projects</Link></li>
            <li><Link to="/about" className="hover:text-leaf transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-leaf transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-xs">
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-leaf shrink-0" />
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white">{CONTACT.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Envelope size={16} className="text-leaf shrink-0" />
              <span>{CONTACT.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-leaf shrink-0 mt-0.5" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>

        {/* Col 4 - Clean Map Area without broken button */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">Location</h4>
          <div className="mt-4 h-36 overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <iframe
              title="SK Landscaping Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.738318281144!2d73.1114!3d22.6261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM3JzM0LjAiTiA3M8KwMDYnNDEuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} SK Landscaping. All rights reserved.
      </div>
    </div>
  </footer>
);

export const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Floating Sticky Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <WhatsappLogo size={28} weight="fill" />
        </a>
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call Us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white shadow-lg transition-transform hover:scale-110 sm:hidden"
        >
          <Phone size={22} weight="fill" />
        </a>
      </div>
    </div>
  );
};

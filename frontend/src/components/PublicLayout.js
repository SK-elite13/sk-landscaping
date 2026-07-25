import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { LeadDialog } from "./LeadDialog";
import { Phone, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { CONTACT, waLink } from "../lib/api";

export const PublicLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink font-sans">
      <Navbar />
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-ink text-white pt-16 pb-12" data-testid="footer">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
            {/* Brand Logo & Info */}
            <div>
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="SK Logo" 
                  className="h-10 w-auto object-contain" 
                />
                <span className="font-heading text-xl font-black text-white">
                  SK <span className="text-leaf">LANDSCAPING</span>
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Professional landscape design, garden maintenance and annual care built on quality, reliability and lasting relationships.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Explore</h4>
              <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/70">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Get in Touch</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Phone size={18} weight="fill" className="text-leaf" />
                    <span>{CONTACT.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <WhatsappLogo size={18} weight="fill" className="text-leaf" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <EnvelopeSimple size={18} weight="fill" className="text-leaf" />
                    <span>{CONTACT.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={18} weight="fill" className="text-leaf shrink-0 mt-0.5" />
                  <span>Ode, Anand, Gujarat, India</span>
                </li>
              </ul>
            </div>

            {/* Mini Map */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Find Us</h4>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Footer Map"
                  src="https://www.google.com/maps?q=Ode,Anand,Gujarat,India&output=embed"
                  className="h-28 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-white/40">
            © {new Date().getFullYear()} SK Landscaping. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <WhatsappLogo size={34} weight="fill" />
        </a>
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call Us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <Phone size={30} weight="fill" />
        </a>
      </div>

      <LeadDialog />
    </div>
  );
};

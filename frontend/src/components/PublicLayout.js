import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { LeadDialog } from "./LeadDialog";
import { Phone, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { CONTACT, waLink } from "../lib/api";
import { useLeadDialog } from "../context/LeadDialogContext";

export const PublicLayout = ({ children }) => {
  const { openDialog } = useLeadDialog();

  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink font-sans">
      <Navbar />
      <main className="flex-1">{children}</main>

      {/* Full Footer */}
      <footer className="bg-ink text-white pt-16 pb-12" data-testid="footer">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest font-heading font-black text-white">
                  SK
                </div>
                <span className="font-heading text-xl font-black text-white">SK Landscaping</span>
              </div>
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
                  <span>{CONTACT.address}</span>
                </li>
              </ul>
            </div>

            {/* Mini Map & CTA */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Find Us</h4>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Footer Map"
                  src="https://www.google.com/maps?q=Ode, Anand, Gujarat, India&output=embed"
                  className="h-28 w-full"
                  loading="lazy"
                />
              </div>
              <button
                onClick={() => openDialog()}
                className="mt-4 w-full rounded-full bg-forest py-2.5 text-xs font-bold text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                Request Free Site Visit
              </button>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-white/40">
            © {new Date().getFullYear()} SK Landscaping. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Call & WhatsApp Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <WhatsappLogo size={28} weight="fill" />
        </a>
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call Us"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-forest text-white shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <Phone size={24} weight="fill" />
        </a>
      </div>

      <LeadDialog />
    </div>
  );
};

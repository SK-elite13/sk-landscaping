import { Link } from "react-router-dom";
import { Phone, WhatsappLogo, MapPin, EnvelopeSimple } from "@phosphor-icons/react";
import { Navbar } from "./Navbar";
import { LeadDialog } from "./LeadDialog";
import { useLeadDialog } from "../context/LeadDialogContext";
import { CONTACT, waLink, waSecondaryLink } from "../lib/api";

export const PublicLayout = ({ children }) => {
  const { isDialogOpen, closeDialog } = useLeadDialog();

  return (
    <div className="min-h-screen bg-sand text-ink flex flex-col justify-between font-sans">
      <Navbar />

      {/* Reduced top padding on mobile (pt-14 = 56px) to fit the sleek mobile header */}
      <main className="flex-grow pt-14 md:pt-20">{children}</main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <WhatsappLogo size={28} weight="fill" />
        </a>
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Call Us"
        >
          <Phone size={24} weight="fill" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-ink text-white/80 pt-16 pb-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Clean Brand Header (4 cols - give ample room so name won't fold) */}
          <div className="md:col-span-4 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="SK Logo" 
                className="h-9 w-auto object-contain" 
              />
              <span className="font-heading text-lg font-black tracking-wider text-white">
                SK <span className="text-leaf">LANDSCAPING</span>
              </span>
            </Link>
            <p className="text-xs text-white/60 leading-relaxed max-w-xs">
              Professional landscape design, garden maintenance, and annual care built on quality and reliability.
            </p>
          </div>

          {/* Col 2: Navigation Links (2 cols - positioned slightly to the right) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-leaf mb-4 font-heading">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-leaf transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-leaf transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-leaf transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-leaf transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-leaf transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact with Both Numbers (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-leaf mb-4 font-heading">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="flex items-center gap-2.5">
                <Phone size={16} weight="fill" className="text-leaf shrink-0" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-leaf transition-colors">{CONTACT.phone} (Main)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} weight="fill" className="text-leaf shrink-0" />
                <a href={`tel:${CONTACT.phoneSecondaryRaw}`} className="hover:text-leaf transition-colors">{CONTACT.phoneSecondary} (Support)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsappLogo size={16} weight="fill" className="text-leaf shrink-0" />
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-leaf transition-colors">WhatsApp Main</a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsappLogo size={16} weight="fill" className="text-leaf shrink-0" />
                <a href={waSecondaryLink()} target="_blank" rel="noopener noreferrer" className="hover:text-leaf transition-colors">WhatsApp Business</a>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeSimple size={16} weight="fill" className="text-leaf shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-leaf transition-colors">{CONTACT.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} weight="fill" className="text-leaf shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Map Location (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-leaf mb-4 font-heading">
              Find Us
            </h4>
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-md">
              <iframe
                title="Footer Map"
                src="https://www.google.com/maps?q=Anand,Gujarat,India&output=embed"
                className="h-28 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8 mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} SK Landscaping. All rights reserved.
        </div>
      </footer>

      {/* Global Lead Modal */}
      <LeadDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
};

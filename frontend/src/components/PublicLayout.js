import { Link, useLocation } from "react-router-dom";
import { Phone, WhatsappLogo, MapPin, EnvelopeSimple } from "@phosphor-icons/react";
import { Navbar } from "./Navbar";
import { LeadDialog } from "./LeadDialog";
import { useLeadDialog } from "../context/LeadDialogContext";

export const PublicLayout = ({ children }) => {
  const { isDialogOpen, closeDialog } = useLeadDialog();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-sand text-ink flex flex-col justify-between font-sans">
      <Navbar />

      <main className="flex-grow">{children}</main>

      {/* Floating Contact Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/919313082732"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <WhatsappLogo size={28} weight="fill" />
        </a>
        <a
          href="tel:+919313082732"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Call Us"
        >
          <Phone size={24} weight="fill" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-ink text-white/80 pt-16 pb-8 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="SK Logo" 
                className="h-12 w-auto object-contain sm:h-14" 
              />
              <span className="font-heading text-2xl font-black tracking-wide text-white sm:text-3xl">
                SK <span className="text-leaf">LANDSCAPING</span>
              </span>
            </Link>
            <p className="text-xs text-white/60 leading-relaxed">
              Professional landscape design, garden maintenance and annual care built on quality, reliability and lasting relationships.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
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

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-leaf mb-4 font-heading">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={18} weight="fill" className="text-leaf shrink-0" />
                <a href="tel:+919313082732" className="hover:text-leaf transition-colors">+91 93130 82732</a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsappLogo size={18} weight="fill" className="text-leaf shrink-0" />
                <a href="https://wa.me/919313082732" target="_blank" rel="noopener noreferrer" className="hover:text-leaf transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeSimple size={18} weight="fill" className="text-leaf shrink-0" />
                <a href="mailto:sklandscaping.in@gmail.com" className="hover:text-leaf transition-colors">sklandscaping.in@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={18} weight="fill" className="text-leaf shrink-0 mt-0.5" />
                <span>Anand, Gujarat, India</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Map Location */}
          <div>
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

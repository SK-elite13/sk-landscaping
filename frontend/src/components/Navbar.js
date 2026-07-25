import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { openDialog } = useLeadDialog();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="SK Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="font-heading text-lg font-black tracking-tight text-white sm:text-xl">
            SK <span className="text-leaf">LANDSCAPING</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-leaf ${
                  active ? "text-leaf font-semibold" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => openDialog()}
            className="rounded-full bg-forest px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation"
          className="rounded-lg p-2 text-white md:hidden hover:bg-white/10"
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-white/10 bg-ink px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-base font-medium text-white/90 hover:text-leaf"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => openDialog()}
                className="w-full rounded-xl bg-forest py-3 text-xs font-bold uppercase tracking-wider text-white"
              >
                Get Free Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";
import { waLink } from "../lib/api";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const { openDialog } = useLeadDialog();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setScrollDirection("up");
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
          setScrollDirection("down");
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection("up");
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const isVisible = scrollDirection === "up" || mobileMenuOpen;

  // Handles Quote button click with direct WhatsApp fallback if dialog fails
  const handleGetQuote = () => {
    setMobileMenuOpen(false);
    if (typeof openDialog === "function") {
      openDialog();
    } else {
      window.open(
        waLink("Hi SK Landscaping! I would like to get a free quote for my property."),
        "_blank"
      );
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-ink border-b border-white/10 text-white transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 md:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-1.5 text-base md:text-xl font-black tracking-tight shrink-0"
        >
          <img
            src="/logo.png"
            alt="SK Logo"
            className="h-6 md:h-9 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <span className="text-white">SK</span>
          <span className="text-leaf">LANDSCAPING</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  active ? "text-leaf font-extrabold" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button
            onClick={handleGetQuote}
            className="px-5 py-2.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
          >
            GET FREE QUOTE
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-white hover:text-leaf transition-colors focus:outline-none shrink-0"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink border-t border-white/10 px-5 py-4 space-y-3">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-wide transition-colors ${
                    active ? "text-leaf font-extrabold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <button
              onClick={handleGetQuote}
              className="w-full py-3 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95"
            >
              GET FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, List, X } from "@phosphor-icons/react";
import { CONTACT } from "../lib/api";
import { useLeadDialog } from "../context/LeadDialogContext";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openDialog } = useLeadDialog();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest font-heading font-black text-white">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-black tracking-tight text-ink leading-tight">
              SK Landscaping
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors hover:text-forest ${
                  isActive ? "font-bold text-forest" : "text-ink/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-bold text-forest hover:underline"
          >
            <Phone size={16} weight="fill" />
            <span>{CONTACT.phone}</span>
          </a>
          <button
            onClick={() => openDialog()}
            className="rounded-full bg-forest px-5 py-2.5 text-xs font-bold text-white transition-transform duration-200 hover:scale-105"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-ink md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-black/5 bg-cream px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-ink/80 hover:text-forest ${
                  location.pathname === link.path ? "font-bold text-forest" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-bold text-forest"
              >
                <Phone size={18} weight="fill" />
                <span>{CONTACT.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDialog();
                }}
                className="w-full rounded-full bg-forest py-3 text-sm font-bold text-white"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

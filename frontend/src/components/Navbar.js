import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT, waLink } from "../lib/api";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-[#2E7D32] tracking-tight">
          SK <span className="text-[#0A0A0A] font-normal">Landscaping</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#2E7D32] transition-colors">Home</Link>
          <Link to="/services" className="hover:text-[#2E7D32] transition-colors">Services</Link>
          {/* <Link to="/projects" className="hover:text-[#2E7D32] transition-colors">Projects</Link> */}
          <Link to="/about" className="hover:text-[#2E7D32] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#2E7D32] transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#2E7D32] text-white rounded-xl text-sm font-semibold hover:bg-[#1B5E20] transition-colors"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-700">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 font-medium">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block py-2">Services</Link>
          {/* <Link to="/projects" onClick={() => setOpen(false)} className="block py-2">Projects</Link> */}
          <Link to="/about" onClick={() => setOpen(false)} className="block py-2">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-2">Contact</Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 bg-[#2E7D32] text-white font-semibold rounded-xl mt-4"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
}

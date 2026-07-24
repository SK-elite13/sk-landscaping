import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, PhoneCall, ShieldCheck, Sprout, Sparkles } from "lucide-react";
import { SERVICES, PROJECTS, TESTIMONIALS, FAQS } from "../mockData";
import { CONTACT, waLink } from "../lib/api";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#E8F5E9]/50 to-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8E6C9] text-[#2E7D32] text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" /> Premier Landscaping in Gujarat
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#0A0A0A] mb-6 leading-tight">
              Crafting Outdoor Spaces That Inspire & Flourish
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              From luxurious garden designs to sustainable irrigation and complete lawn restoration, SK Landscaping brings your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#2E7D32] text-white font-semibold shadow-lg hover:bg-[#1B5E20] transition-colors"
              >
                Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-gray-200 font-semibold text-gray-800 hover:bg-gray-50 transition-colors shadow-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600">Tailored landscaping solutions for homes, commercial estates, and public spaces.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="p-8 rounded-2xl bg-[#FAF9F6] border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C8E6C9] text-[#2E7D32] flex items-center justify-center mb-6">
                    <Sprout className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{srv.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{srv.tagline}</p>
                </div>
                <Link to="/services" className="text-[#2E7D32] font-semibold text-sm flex items-center gap-1 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

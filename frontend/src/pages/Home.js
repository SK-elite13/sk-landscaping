import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";
import { CORE_SERVICES } from "../data/servicesData";

function ServiceCardItem({ service }) {
  const { openDialog } = useLeadDialog();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayImages = service.images && service.images.length > 0 ? service.images : [service.fallbackImage];

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % displayImages.length);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* Tap Image Area to Cycle */}
      <div 
        onClick={displayImages.length > 1 ? handleNextImage : undefined}
        className="relative h-52 w-full overflow-hidden bg-black/5 cursor-pointer"
      >
        <img
          src={displayImages[activeImgIndex]}
          alt={service.title}
          className="h-full w-full object-cover transition-all duration-300"
          onError={(e) => { e.target.src = service.fallbackImage; }}
        />
        
        {/* Bottom Pagination Dots Only */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
            {displayImages.map((_, idx) => (
              <span 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeImgIndex ? "w-5 bg-leaf" : "w-1.5 bg-white/70 shadow-sm"
                }`} 
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <h3 className="font-heading text-base font-bold text-ink leading-snug">{service.title}</h3>
          <p className="mt-1 text-[11px] font-semibold text-leaf uppercase tracking-wider">{service.subtitle}</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 flex items-center justify-between w-full py-1.5 text-xs font-bold text-ink/70 hover:text-forest transition-colors border-t border-black/5"
          >
            <span>{isExpanded ? "Hide Details" : "Read Description"}</span>
            <CaretDown size={14} className={`transition-transform duration-300 ${isExpanded ? "rotate-180 text-forest" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-36 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <p className="text-xs text-ink/70 leading-relaxed">{service.description}</p>
          </div>
        </div>
        <button
          onClick={() => openDialog(service.title)}
          className="w-full py-2.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

export function Home() {
  const { openDialog } = useLeadDialog();
  const HERO_IMG = "https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg";

  const faqs = [
    {
      q: "What areas do you serve in Gujarat?",
      a: "We primarily serve Anand, Nadiad, Vadodara, Kheda, and surrounding regions in Central Gujarat.",
    },
    {
      q: "What is included in an AMC (Annual Maintenance Contract)?",
      a: "Our AMC covers regular pruning, lawn mowing, soil fertilization, pest control, irrigation checks, and plant replacements.",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-end bg-ink text-white pb-16 pt-6 md:pt-12 px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="Landscaping and garden design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">ANAND • VADODARA • GUJARAT</p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white max-w-3xl">
            Beautiful Landscapes. <br />
            <span className="text-leaf">Professionally Maintained.</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
            Premier Landscape Design • Garden Care (બગીચા ની સંભાળ) • Lawn Care • Plantation • AMC Services
          </p>
          <div className="pt-2 flex flex-row items-center gap-3">
            <button
              onClick={() => openDialog()}
              className="px-5 py-3 bg-forest hover:bg-leaf text-white text-xs font-bold rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              GET FREE SITE VISIT <ArrowRight size={16} />
            </button>
            <a href="tel:+919313082732" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all">
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">PRIMARY SOLUTIONS</p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Core Landscaping Services
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-leaf transition-colors">
            VIEW ALL SERVICES <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <ServiceCardItem key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">QUESTIONS</p>
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white p-5 rounded-2xl border border-ink/5 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-ink font-bold text-sm">
                <span>{faq.q}</span>
                <span className="shrink-0 rounded-full bg-sand p-1 text-ink group-open:-rotate-180 transition-transform">
                  <CaretDown size={18} />
                </span>
              </summary>
              <p className="mt-4 text-xs text-ink/70 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

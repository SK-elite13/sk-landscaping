import React, { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { CaretDown, CaretRight, CaretLeft } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";
import { CORE_SERVICES, SPECIALIZATIONS } from "../data/servicesData";

function ServiceCardItem({ service, ctaText = "ENQUIRE NOW" }) {
  const { openDialog } = useLeadDialog();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayImages = service.images && service.images.length > 0 ? service.images : [service.fallbackImage];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % displayImages.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden bg-black/5">
        <img
          src={displayImages[activeImgIndex]}
          alt={service.title}
          className="h-full w-full object-cover transition-all duration-300"
          onError={(e) => { e.target.src = service.fallbackImage; }}
        />
        {displayImages.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm z-10"
              aria-label="Previous image"
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm z-10"
              aria-label="Next image"
            >
              <div className="animate-pulse">
                <CaretRight size={16} weight="bold" />
              </div>
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
              {displayImages.map((_, idx) => (
                <span key={idx} className={`h-1.5 rounded-full transition-all ${idx === activeImgIndex ? "w-4 bg-leaf" : "w-1.5 bg-white/60"}`} />
              ))}
            </div>
          </>
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
          {ctaText}
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        overline="OUR LANDSCAPING & MAINTENANCE SOLUTIONS"
        title="Design, Build & Care"
        subtitle="Complete landscape design, expert installation, and dedicated care tailored to keep your greenery thriving season after season."
      />

      <div className="py-12 md:py-20 mx-auto max-w-7xl px-5 md:px-8 space-y-16">
        {/* Core Services */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-leaf mb-1">PRIMARY SOLUTIONS</p>
          <h2 className="font-heading text-2xl md:text-3xl font-black text-ink mb-6">
            Core Landscaping Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_SERVICES.map((service) => (
              <ServiceCardItem key={service.id} service={service} ctaText="ENQUIRE NOW" />
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-leaf mb-1">SPECIALIZED EXPERTISE</p>
          <h2 className="font-heading text-2xl md:text-3xl font-black text-ink mb-6">
            Specializations
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZATIONS.map((service) => (
              <ServiceCardItem key={service.id} service={service} ctaText="REQUEST QUOTE" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

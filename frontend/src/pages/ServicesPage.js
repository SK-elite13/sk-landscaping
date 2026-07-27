import React, { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { CaretDown, CaretRight, CaretLeft } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

// 1. Core Services Dataset
const CORE_SERVICES = [
  {
    id: "2d-landscape",
    title: "2D Landscape Design & Plant Selection",
    subtitle: "Data-backed master plans tailored to soil & microclimate.",
    images: ["/services/2d-design-1.jpg", "/services/2d-design-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    description: "Customized master plans tailored to your site's soil, light, and climate data."
  },
  {
    id: "site-development",
    title: "Landscape Execution & Site Development",
    subtitle: "Bringing layout concepts and green spaces to life.",
    images: ["/services/site-dev-1.jpg", "/services/site-dev-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01",
    description: "Professional installation bringing layout concepts, hardscaping, turf, and plantation to life."
  },
  {
    id: "garden-maintenance",
    title: "Garden Maintenance & AMC Contracts",
    subtitle: "Structured care plans to maintain long-term site health.",
    images: ["/services/maintenance-1.jpg", "/services/maintenance-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1592417817098-8f3d6eb23659",
    description: "Structured, scheduled care plans to maintain long-term site health and aesthetic precision."
  },
  {
    id: "seasonal-supply",
    title: "Seasonal Plant Supply & Upgrades",
    subtitle: "Fresh plant additions selected specifically for seasonal conditions.",
    images: ["/services/seasonal-1.jpg", "/services/seasonal-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    description: "Fresh, healthy plant additions selected specifically for local weather conditions."
  }
];

// 2. Complete Specializations Dataset (Restored All 6)
const SPECIALIZATIONS = [
  {
    id: "balcony-terrace",
    title: "Interior, Balcony & Terrace Gardens",
    subtitle: "Custom lush indoor and elevated outdoor sanctuaries.",
    images: ["/services/balcony-1.jpg", "/services/balcony-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1512424825106-cc6a12a5dbed",
    description: "Engineered lightweight planter setups and micro-greenery engineered for balcony light conditions."
  },
  {
    id: "vertical-wall",
    title: "Living Vertical Walls",
    subtitle: "Space-saving vertical greenery systems with built-in irrigation.",
    images: ["/services/vertical-wall-1.jpg", "/services/vertical-wall-2.jpg", "/services/vertical-wall-3.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1534710961216-75c88202f43e",
    description: "Space-saving vertical green walls equipped with modular framing and automated drip irrigation."
  },
  {
    id: "kitchen-garden",
    title: "Organic Kitchen Gardens",
    subtitle: "Home-grown edible setups with organic pest control.",
    images: ["/services/kitchen-garden-1.jpg", "/services/kitchen-garden-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    description: "Raised vegetable beds, herbs, and edible flora planted with custom organic soil compositions."
  },
  {
    id: "miyawaki-forest",
    title: "Miyawaki & Mini Forests",
    subtitle: "Dense native urban forest ecosystems engineered for rapid growth.",
    images: ["/services/miyawaki-1.jpg", "/services/miyawaki-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    description: "Accelerated growth mini-forests using native plant species that boost biodiversity."
  },
  {
    id: "industrial-greenery",
    title: "Industrial & Commercial Greenbelt",
    subtitle: "Eco-friendly, pollution-reducing green zones for factories & parks.",
    images: ["/services/industrial-1.jpg", "/services/industrial-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    description: "Large-scale aesthetic and eco-friendly greenbelt development tailored to pollution control and industrial environmental compliance."
  },
  {
    id: "planters-pots",
    title: "Premium GRC, FRP & RCC Planters",
    subtitle: "Durable architectural pots and planters tailored to modern aesthetics.",
    images: ["/services/planters-1.jpg", "/services/planters-2.jpg"],
    fallbackImage: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    description: "Custom Glass Fiber Reinforced Concrete (GRC), FRP, and RCC planters built for high durability in weather-exposed zones."
  }
];

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
            >
              <CaretLeft size={16} weight="bold" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm z-10"
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

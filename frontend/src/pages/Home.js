import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CaretDown, CaretRight, CaretLeft } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

// Local Services Data with Multiple Images
const LOCAL_SERVICES = [
  {
    id: "2d-landscape",
    title: "2D Landscape Design & Plant Selection",
    subtitle: "Data-backed master plans tailored to soil & microclimate.",
    images: [
      "/services/2d-design-1.jpg",
      "/services/2d-design-2.jpg"
    ],
    fallbackImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    description: "We design functional master plans based on light mapping, soil analysis, and drainage factors before planting a single seed."
  },
  {
    id: "site-development",
    title: "Landscape Execution & Site Development",
    subtitle: "Bringing layout concepts and green spaces to life.",
    images: [
      "/services/site-dev-1.jpg",
      "/services/site-dev-2.jpg"
    ],
    fallbackImage: "https://images.unsplash.com/photo-1558904541-efa843a96f01",
    description: "Complete ground preparation, hardscaping, turf laying, and plant installation executed to structural precision."
  },
  {
    id: "garden-maintenance",
    title: "Garden Maintenance & AMC Contracts",
    subtitle: "Structured, scheduled care plans to maintain site health.",
    images: [
      "/services/maintenance-1.jpg",
      "/services/maintenance-2.jpg"
    ],
    fallbackImage: "https://images.unsplash.com/photo-1592417817098-8f3d6eb23659",
    description: "Regular pruning, lawn mowing, pest control, soil fertilization, and irrigation checks under flexible annual contracts."
  },
  {
    id: "vertical-wall",
    title: "Living Vertical Walls",
    subtitle: "Space-saving vertical greenery with automated irrigation.",
    images: [
      "/services/vertical-wall-1.jpg",
      "/services/vertical-wall-2.jpg"
    ],
    fallbackImage: "https://images.unsplash.com/photo-1534710961216-75c88202f43e",
    description: "Durable modular plastic frames, drip irrigation setups, and flora selected for maximum vertical coverage."
  }
];

// Self-contained Swipeable Card Component
function ServiceCardItem({ service }) {
  const { openDialog } = useLeadDialog();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayImages =
    service.images && service.images.length > 0
      ? service.images
      : [service.fallbackImage];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % displayImages.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      {/* 1. Swipeable Image Gallery */}
      <div className="relative h-56 w-full overflow-hidden bg-black/5">
        <img
          src={displayImages[activeImgIndex]}
          alt={service.title}
          className="h-full w-full object-cover transition-all duration-300"
          onError={(e) => {
            e.target.src = service.fallbackImage;
          }}
        />

        {displayImages.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all z-10"
              aria-label="Previous image"
            >
              <CaretLeft size={16} weight="bold" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-sm transition-all z-10"
              aria-label="Next image"
            >
              <div className="animate-pulse">
                <CaretRight size={16} weight="bold" />
              </div>
            </button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {displayImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === activeImgIndex ? "w-5 bg-leaf" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2. Content Body */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <h3 className="font-heading text-lg font-bold text-ink leading-snug">
            {service.title}
          </h3>
          <p className="mt-1 text-xs font-semibold text-leaf uppercase tracking-wider">
            {service.subtitle}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 flex items-center justify-between w-full py-2 text-xs font-bold text-ink/70 hover:text-forest transition-colors border-t border-black/5"
          >
            <span>{isExpanded ? "Hide Details" : "Read Description"}</span>
            <CaretDown
              size={16}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180 text-forest" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-xs text-ink/70 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        <button
          onClick={() => openDialog(service.title)}
          className="w-full py-3 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
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
          <img
            src={HERO_IMG}
            alt="Landscaping and garden design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">
            ANAND • VADODARA • GUJARAT
          </p>
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
            <a
              href="tel:+919313082732"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 transition-all"
            >
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">WHAT WE DO</p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Our Landscaping Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-leaf transition-colors"
          >
            VIEW ALL <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCAL_SERVICES.map((service) => (
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
            <details
              key={index}
              className="group bg-white p-5 rounded-2xl border border-ink/5 shadow-sm"
            >
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

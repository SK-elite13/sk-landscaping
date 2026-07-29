import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { CORE_SERVICES, SPECIALIZATIONS } from "../data/servicesData";

/* --- Touch & Click Enabled Image Slider --- */
function ImageSlider({ displayImages, fallbackImage, title }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setActiveImgIndex((prev) => (prev + 1) % displayImages.length);
    }
    if (isRightSwipe) {
      setActiveImgIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % displayImages.length);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={displayImages.length > 1 ? handleNextImage : undefined}
      className="relative h-52 w-full overflow-hidden bg-black/5 cursor-pointer select-none touch-pan-y"
    >
      <img
        src={displayImages[activeImgIndex]}
        alt={title}
        className="h-full w-full object-cover transition-all duration-300 pointer-events-none"
        onError={(e) => { e.target.src = fallbackImage; }}
      />

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
  );
}

/* --- Shared Service Card Component --- */
function ServiceCard({ service, defaultBtnText = "Enquire Now" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayImages =
    service.images && service.images.length > 0
      ? service.images
      : [service.fallbackImage];

  // WhatsApp Direct Enquiry
  const handleWhatsAppEnquiry = () => {
    const phoneNumber = "919313082732";
    const message = `Hi SK Landscaping! I'm interested in your service: *${service.title}*. I would like to schedule a site visit or get more information.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <ImageSlider 
        displayImages={displayImages} 
        fallbackImage={service.fallbackImage} 
        title={service.title} 
      />

      <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
        <div>
          <h3 className="font-heading text-base font-bold text-ink leading-snug">
            {service.title}
          </h3>
          <p className="mt-1 text-[11px] font-semibold text-leaf uppercase tracking-wider">
            {service.subtitle}
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 flex items-center justify-between w-full py-1.5 text-xs font-bold text-ink/70 hover:text-forest transition-colors border-t border-black/5 cursor-pointer"
          >
            <span>{isExpanded ? "Hide Details" : "Read Description"}</span>
            <CaretDown
              size={14}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180 text-forest" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-xs text-ink/70 leading-relaxed">
              {service.description}
            </p>

            {/* Services Offered List */}
            {service.servicesOffered && service.servicesOffered.length > 0 && (
              <div className="mt-3 pt-3 border-t border-black/5">
                <p className="text-[11px] font-bold text-forest uppercase tracking-wider mb-2">
                  Services Offered:
                </p>
                <ul className="space-y-1">
                  {service.servicesOffered.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-ink/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-leaf mr-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleWhatsAppEnquiry}
          className="w-full py-2.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          {defaultBtnText}
        </button>
      </div>
    </div>
  );
}

/* --- Main Services Page Component --- */
export function ServicesPage() {
  return (
    <div className="pb-16 pt-8 space-y-12 max-w-7xl mx-auto px-5 md:px-8">
      {/* Page Header */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">
          OUR LANDSCAPING & MAINTENANCE SOLUTIONS
        </p>
        <h1 className="font-heading text-3xl sm:text-5xl font-black text-ink tracking-tight">
          Design, Build & Care
        </h1>
        <p className="text-xs sm:text-sm text-ink/70 max-w-2xl leading-relaxed">
          Complete landscape design, expert installation, and dedicated care tailored to keep your greenery thriving season after season.
        </p>
      </div>

      {/* Block 1: Core Landscaping Services */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">PRIMARY SOLUTIONS</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
            Core Landscaping Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} defaultBtnText="Enquire Now" />
          ))}
        </div>
      </section>

      {/* Block 2: Specializations */}
      <section className="space-y-6 pt-6 border-t border-black/5">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">SPECIALIZED EXPERTISE</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink">
            Specializations
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALIZATIONS.map((service) => (
            <ServiceCard key={service.id} service={service} defaultBtnText="Request Quote" />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;

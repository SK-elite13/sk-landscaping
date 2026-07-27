import { useState } from "react";
import { CaretDown, CaretRight, CaretLeft } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

export function ServiceCard({ service }) {
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
      {/* 1. Swipeable Image Area */}
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

      {/* 2. Content Details */}
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

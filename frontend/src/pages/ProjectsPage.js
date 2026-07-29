import React, { useState } from "react";
import { X, CaretLeft, CaretRight, ArrowRight } from "@phosphor-icons/react";

/* --- Projects Data --- */
const PROJECTS_DATA = [
  {
    id: "raghav-pulse-amc",
    title: "Commercial Facility Garden Upkeep & Maintenance",
    badge: "COMPLETED & ONGOING AMC",
    siteType: "Industrial / Commercial Facility • Central Gujarat",
    description: "Ongoing comprehensive garden maintenance and AMC for Raghav Pulse Processor. Our work focuses on regular lawn care, scheduled pruning, organic soil nourishment, and pest management across their 1,000 sq. ft. green area to ensure a crisp, welcoming corporate landscape year-round.",
    images: [
      "/services/HERO_IMG-1.jpg",
      "/services/site-dev-1.jpg",
      "/services/renovation-1.jpg",
      "/services/tropical-garden-walkway.jpg"
    ]
  },
  {
    id: "commercial-masterplan-design",
    title: "2,600 Sq. Ft. Commercial Garden Masterplan",
    badge: "2D DESIGN & PLANNING",
    siteType: "Commercial Facility Expansion • Gujarat",
    description: "Custom landscape architectural planning designed for a 2,600 sq. ft. commercial garden development. The masterplan includes technical plant positioning based on sunlight exposure, automated drip irrigation layout, hardscape pathways, and low-maintenance native plant selection suited for Central Gujarat climate.",
    images: [
      "/services/2d-design-1.jpg",
      "/services/site-dev-1.jpg",
      "/services/commercial-landscape-lawn.jpg",
      "/services/soil-prep-execution.jpg"
    ]
  },
  {
    id: "perimeter-hedge-shaping",
    title: "Commercial Perimeter Hedging & Edge Care",
    badge: "SPECIALIZED CARE",
    siteType: "Commercial Site • Anand Region",
    description: "Specialized hedge trimming and geometric border maintenance for commercial property perimeters. Focuses on sharp, clean Mehndi/Duranta border shaping, root zone aeration, and clearing overgrown foliage to maintain neat curb appeal.",
    images: [
      "/services/mini-forest-1.jpg",
      "/services/renovation-1.jpg",
      "/services/garden-pathway-renovation.jpg",
      "/services/site-development-prep.jpg"
    ]
  }
];

export function ProjectsPage() {
  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (images, index) => {
    setCurrentProjectImages(images);
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % currentProjectImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + currentProjectImages.length) % currentProjectImages.length);
  };

  const handleWhatsAppEnquiry = (projectTitle) => {
    const phoneNumber = "919313082732";
    const message = `Hi SK Landscaping! I saw your project: *${projectTitle}*. I would like to discuss a similar project for my property.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="pb-16 pt-8 space-y-12 max-w-7xl mx-auto px-5 md:px-8">
      {/* Page Header */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">
          OUR REAL WORK & DESIGN CONCEPTS
        </p>
        <h1 className="font-heading text-3xl sm:text-5xl font-black text-ink tracking-tight">
          Project Portfolio
        </h1>
        <p className="text-xs sm:text-sm text-ink/70 max-w-2xl leading-relaxed">
          Explore our real site maintenance executions, 2D landscape planning, and specialized garden developments in Central Gujarat.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS_DATA.map((project) => (
          <div 
            key={project.id}
            className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden p-6 md:p-8 grid md:grid-cols-12 gap-8 items-center"
          >
            {/* Left side: 2x2 Grid of Photos */}
            <div className="md:col-span-6 grid grid-cols-2 gap-2.5">
              {project.images.slice(0, 4).map((imgUrl, imgIdx) => (
                <div
                  key={imgIdx}
                  onClick={() => openLightbox(project.images, imgIdx)}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-black/5 cursor-pointer group"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} - ${imgIdx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                    View
                  </div>
                </div>
              ))}
            </div>

            {/* Right side: Project Details */}
            <div className="md:col-span-6 space-y-4">
              <div className="space-y-1">
                <span className="inline-block px-3 py-1 bg-sage/30 text-forest text-[10px] font-extrabold uppercase tracking-wider rounded-full">
                  {project.badge}
                </span>
                <p className="text-xs font-semibold text-leaf uppercase tracking-wider pt-1">
                  {project.siteType}
                </p>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink leading-snug">
                  {project.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-ink/70 leading-relaxed">
                {project.description}
              </p>

              <button
                onClick={() => handleWhatsAppEnquiry(project.title)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
              >
                Discuss Similar Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={24} weight="bold" />
          </button>

          {/* Left Navigation Arrow */}
          {currentProjectImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
          )}

          {/* Fullscreen Active Image */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={currentProjectImages[activeImageIndex]}
              alt="Project Fullview"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>

          {/* Right Navigation Arrow */}
          {currentProjectImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          )}
        </div>
      )}

      {/* Bottom CTA Banner */}
      <section className="rounded-3xl bg-forest p-8 md:p-12 text-white shadow-xl text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">DO YOU HAVE A LANDSCAPE REQUIREMENT?</p>
        <h2 className="font-heading text-2xl sm:text-4xl font-black max-w-2xl mx-auto">
          Want Your Garden Featured As Our Next Project?
        </h2>
        <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
          Schedule a free site visit in Anand, Nadiad, Vadodara, or surrounding areas. Let’s design and maintain something worth showing off.
        </p>
        <div className="pt-2">
          <button 
            onClick={() => {
              const msg = "Hi SK Landscaping! I would like to schedule a free site visit for my property.";
              window.open(`https://wa.me/919313082732?text=${encodeURIComponent(msg)}`, "_blank");
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-forest hover:bg-sand font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg"
          >
            Book Free Site Visit <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;

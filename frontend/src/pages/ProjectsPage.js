import React, { useState, useEffect } from "react";
import { CaretLeft, CaretRight, ArrowRight, Play, Clock, X } from "@phosphor-icons/react";
import { waLink } from "../lib/api";

/* --- Projects Data --- */
const PROJECTS_DATA = [
  {
    id: "raghav-pulse-amc",
    title: "Commercial Facility Garden Upkeep & Maintenance",
    badge: "RESTORATION & MAINTENANCE",
    siteType: "Industrial / Commercial Facility • Central Gujarat",
    description: "Comprehensive garden maintenance and upkeep for Raghav Pulse Processor. Our work focuses on scheduled pruning, turf care, organic soil nourishment, and hedge border trimming to ensure a crisp, welcoming corporate landscape year-round.",
    media: [
      { type: "image", url: "/projects/project-1/project1-2.jpg", label: "After: Cleaned Boundary" },
      { type: "image", url: "/projects/project-1/project1-4.jpg", label: "After: Pathway Pruning" },
      { type: "image", url: "/projects/project-1/project1-6.jpg", label: "After: Restored Turf" },
      { type: "image", url: "/projects/project-1/project1-8.jpg", label: "After: Shrub Shaping" },
      { type: "image", url: "/projects/project-1/project1-1.jpg", label: "Before: Overgrown Hedge" },
      { type: "image", url: "/projects/project-1/project1-3.jpg", label: "Before: Unpruned Perimeter" },
      { type: "image", url: "/projects/project-1/project1-5.jpg", label: "Before: Patchy Grass" },
      { type: "image", url: "/projects/project-1/project1-7.jpg", label: "Before: Dense Growth" }
    ]
  },
  {
    id: "commercial-masterplan-design",
    title: "Commercial Garden Masterplan & Architectural Layout",
    badge: "2D LANDSCAPE DESIGN",
    siteType: "Commercial Facility Expansion • Gujarat",
    description: "Custom landscape architectural planning and 2D concepts engineered for commercial site development. The layout includes technical plant positioning based on sunlight exposure, automated drip irrigation mapping, hardscape pathways, and low-maintenance native plant selection suited for Central Gujarat climate.",
    media: [
      { type: "image", url: "/projects/project-2/2d-design-1.jpg" },
      { type: "image", url: "/projects/project-2/2d-design-2.jpg" },
      { type: "image", url: "/projects/project-2/2d-design-3.jpg" },
      { type: "image", url: "/projects/project-2/2d-design-4.jpg" }
    ]
  },
  {
    id: "upcoming-industrial-landscape",
    title: "Industrial Landscape Development",
    badge: "UPCOMING PROJECT",
    siteType: "Central Gujarat Region",
    description: "Upcoming complete site development and landscape transformation for a local industrial manufacturing facility. Scope includes ground leveling, heavy soil enrichment, turf installation, and perimeter tree plantation.",
    isUpcoming: true,
    comingSoonText: "SITE PREPARATION IN PROGRESS"
  },
  {
    id: "upcoming-hotel-landscape",
    title: "Hotel Landscape Development",
    badge: "UPCOMING PROJECT",
    siteType: "Central Gujarat Region",
    description: "Upcoming decorative commercial greening and landscape design concept for a hospitality space. Focuses on premium potted arrangements, feature lawns, and welcoming entrance foliage.",
    isUpcoming: true,
    comingSoonText: "CONCEPT & EXECUTION COMING SOON"
  }
];

export function ProjectsPage() {
  // Lightbox Modal State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectMedia, setCurrentProjectMedia] = useState([]);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const openLightbox = (mediaList, index) => {
    if (!mediaList || mediaList.length === 0) return;
    setCurrentProjectMedia(mediaList);
    setActiveMediaIndex(index);
    setLightboxOpen(true);

    // Push state so phone's back button closes the popup
    window.history.pushState({ lightbox: true }, "");
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Listen for mobile hardware/gesture back button press
  useEffect(() => {
    const handlePopState = () => {
      setLightboxOpen(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const nextMedia = (e) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => (prev + 1) % currentProjectMedia.length);
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setActiveMediaIndex((prev) => (prev - 1 + currentProjectMedia.length) % currentProjectMedia.length);
  };

  const handleWhatsAppEnquiry = (projectTitle) => {
    const msg = `Hi SK Landscaping! I saw your project: *${projectTitle}*. I would like to discuss a similar project for my property.`;
    window.open(waLink(msg), "_blank");
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
          Explore our real site projects, 2D landscape designs & concepts, and specialized garden developments in Central Gujarat.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {PROJECTS_DATA.map((project) => {
          const totalMedia = project.media ? project.media.length : 0;
          const visibleMedia = project.media ? project.media.slice(0, 4) : [];
          const remainingCount = totalMedia - 4;

          return (
            <div 
              key={project.id}
              className={`bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden p-6 md:p-8 grid md:grid-cols-12 gap-8 items-center ${
                project.isUpcoming ? "border-dashed border-leaf/40 bg-sage/5" : ""
              }`}
            >
              {/* Left side: Photo/Video Grid OR Coming Soon Box */}
              <div className="md:col-span-6">
                {project.isUpcoming ? (
                  <div className="w-full aspect-[16/9] rounded-2xl bg-forest/5 border border-forest/10 flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-forest text-leaf flex items-center justify-center shadow-md">
                      <Clock size={24} weight="bold" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-forest uppercase tracking-widest">
                        {project.comingSoonText || "COMING SOON"}
                      </p>
                      <p className="text-[11px] font-medium text-ink/60 mt-1">
                        Photos & site execution details will be updated shortly
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2.5">
                    {visibleMedia.map((item, imgIdx) => {
                      const isFourthItem = imgIdx === 3 && remainingCount > 0;

                      return (
                        <div
                          key={imgIdx}
                          onClick={() => openLightbox(project.media, imgIdx)}
                          className={`relative rounded-2xl overflow-hidden bg-black/5 cursor-pointer group ${
                            totalMedia === 1 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                          }`}
                        >
                          {item.type === "video" ? (
                            <div className="w-full h-full relative">
                              <img
                                src={item.thumbnail || item.url}
                                alt={`${project.title} Video - ${imgIdx + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/80 text-forest flex items-center justify-center shadow-lg">
                                  <Play size={20} weight="fill" className="ml-0.5" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={item.url}
                              alt={`${project.title} - ${imgIdx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          )}

                          {isFourthItem ? (
                            <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-white transition-all group-hover:bg-black/85">
                              <span className="text-xl font-extrabold">+{remainingCount + 1}</span>
                              <span className="text-[10px] uppercase font-bold tracking-wider text-leaf">View All ({totalMedia})</span>
                            </div>
                          ) : (
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                              {item.type === "video" ? "Play Video" : "View Photo"}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right side: Project Details */}
              <div className="md:col-span-6 space-y-4">
                <div className="space-y-1">
                  <span className={`inline-block px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full ${
                    project.isUpcoming 
                      ? "bg-leaf/20 text-forest border border-leaf/30" 
                      : "bg-sage/30 text-forest"
                  }`}>
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Discuss Similar Project <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal for Fullscreen Media */}
      {lightboxOpen && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 select-none cursor-pointer"
        >
          {/* Top Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X size={22} weight="bold" />
          </button>

          {/* Left Navigation Arrow */}
          {currentProjectMedia.length > 1 && (
            <button
              onClick={prevMedia}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
          )}

          {/* Active Media Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center cursor-default"
          >
            {currentProjectMedia[activeMediaIndex]?.type === "video" ? (
              <video
                src={currentProjectMedia[activeMediaIndex].url}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
              />
            ) : (
              <img
                src={currentProjectMedia[activeMediaIndex]?.url}
                alt="Project Fullview"
                className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
              />
            )}
            
            {/* Image Caption Label */}
            {currentProjectMedia[activeMediaIndex]?.label && (
              <div className="mt-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-semibold text-center border border-white/10">
                {currentProjectMedia[activeMediaIndex].label}
              </div>
            )}
          </div>

          {/* Right Navigation Arrow */}
          {currentProjectMedia.length > 1 && (
            <button
              onClick={nextMedia}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors cursor-pointer"
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
              window.open(waLink(msg), "_blank");
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-forest hover:bg-sand font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Book Free Site Visit <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;

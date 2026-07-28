import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { 
  ArrowRight, 
  CaretDown, 
  Plant, 
  Sun, 
  Tree, 
  ShieldCheck, 
  Phone, 
  CalendarCheck, 
  FileText, 
  Wrench, 
  ArrowsClockwise 
} from "@phosphor-icons/react";
import { CORE_SERVICES } from "../data/servicesData";

/* --- 1. Service Card Item with WhatsApp Direct Link --- */
function ServiceCardItem({ service }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayImages = service.images && service.images.length > 0 ? service.images : [service.fallbackImage];

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % displayImages.length);
  };

  // WhatsApp Enquiry Action
  const handleWhatsAppEnquiry = () => {
    const phoneNumber = "919313082732"; // SK Landscaping phone number
    const message = `Hi SK Landscaping! I'm interested in your service: *${service.title}*. I would like to schedule a site visit or get more information.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
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

          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            <p className="text-xs text-ink/70 leading-relaxed">
              {service.description}
            </p>

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

        {/* Updated Button to Trigger WhatsApp */}
        <button
          onClick={handleWhatsAppEnquiry}
          className="w-full py-2.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

/* --- 2. Main Home Page Component --- */
export function Home() {
  const HERO_IMG = "https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg";

  const handleHeroWhatsApp = () => {
    const phoneNumber = "919313082732";
    const message = "Hi SK Landscaping! I would like to schedule a site visit for my property.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const tickerServices = [
    "Landscape Design", "Garden Maintenance", "Garden Renovation", 
    "Lawn Care", "Smart Irrigation", "Vertical Walls", 
    "Orchards", "Mini Forests", "Organic Kitchen Gardens", "AMC Services"
  ];

  const whyUs = [
    { 
      title: "Built to Last", 
      desc: "We believe landscapes should continue growing healthier over time instead of becoming a recurring replacement expense. Our focus is on creating gardens that provide long term value.", 
      icon: Plant 
    },
    { 
      title: "Thoughtful Planning", 
      desc: "Every project begins with understanding the site, selecting suitable plants, and designing a layout that fits the available space, maintenance requirements, and your budget.", 
      icon: Sun 
    },
    { 
      title: "Complete Landscape Solutions", 
      desc: "From landscape design and plantation to irrigation planning and long term maintenance, we help you through every stage of your landscape.", 
      icon: Tree 
    },
    { 
      title: "Reliable Maintenance", 
      desc: "A healthy landscape needs regular care. Our AMC services keep gardens clean, healthy, and attractive throughout every season.", 
      icon: ShieldCheck 
    }
  ];

  const processSteps = [
    { step: "01", title: "Call Us", desc: "Reach out by phone or WhatsApp to share your requirements.", icon: Phone },
    { step: "02", title: "Site Visit", desc: "We inspect your location and review light, soil, and space conditions.", icon: CalendarCheck },
    { step: "03", title: "Custom Proposal", desc: "You get a clear, itemized plan with upfront pricing.", icon: FileText },
    { step: "04", title: "Work Starts", desc: "Our team executes the layout with technical precision.", icon: Wrench },
    { step: "05", title: "Ongoing Care", desc: "We keep your site healthy season after season.", icon: ArrowsClockwise }
  ];

  const faqs = [
    { q: "Do you offer a site visit?", a: "Yes. We conduct an on site inspection to understand your space, soil, and light conditions before providing a proposal." },
    { q: "What areas do you serve?", a: "Based in Anand, we serve Anand, Vadodara, Nadiad, and surrounding areas in Central Gujarat." },
    { q: "What is an AMC?", a: "An Annual Maintenance Contract that covers scheduled pruning, lawn care, pest checks, compost, and ongoing garden upkeep." },
    { q: "How do you price projects?", a: "All pricing is itemized and transparently quoted after our site inspection." },
    { q: "Do you handle both design and care?", a: "Yes. We handle 2D design, landscape development, and long term maintenance." },
    { q: "How soon can you start?", a: "Once you approve the quote, we schedule execution at the earliest open slot." }
  ];

  return (
    <div className="pb-16 space-y-16">
      {/* Hero Section */}
      <div>
        <section className="relative min-h-[82vh] flex items-end bg-ink text-white pb-12 pt-6 md:pt-12 px-5 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={HERO_IMG} alt="Landscaping design" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">
              ANAND • VADODARA • CENTRAL GUJARAT
            </p>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white max-w-3xl">
              Beautiful Landscapes. <br />
              <span className="text-leaf">Professionally Maintained.</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              Turnkey Landscaping, Garden Care, Lawn Care, Plantation, and AMC Services
            </p>
            <div className="pt-2 flex flex-row items-center gap-3">
              <button 
                onClick={handleHeroWhatsApp}
                className="px-5 py-3 bg-forest hover:bg-leaf text-white text-xs font-bold rounded-xl transition-all shadow-lg flex items-center gap-2"
              >
                SCHEDULE SITE VISIT <ArrowRight size={16} />
              </button>
              <a href="tel:+919313082732" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/20 backdrop-blur-md transition-all">
                CALL NOW
              </a>
            </div>
          </div>
        </section>

        <div className="bg-black/90 backdrop-blur-md py-3.5 border-y border-white/10 text-white shadow-xl">
          <Marquee speed={45} gradient={false}>
            {tickerServices.map((item, index) => (
              <div key={index} className="flex items-center mx-5 text-xs font-bold uppercase tracking-widest text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf mr-3.5 animate-pulse" />
                <span>{item}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Why SK Landscaping */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why SK Landscaping?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sage/30 flex items-center justify-center text-forest">
                  <IconComp size={22} weight="bold" />
                </div>
                <h3 className="font-heading text-base font-bold text-ink">{item.title}</h3>
                <p className="text-xs text-ink/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Services Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">OUR SERVICES</p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Core Services
            </h2>
          </div>
          <Link to="/services" className="shrink-0 pt-0.5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-leaf transition-colors">
            <span className="hidden sm:inline">VIEW ALL SERVICES</span>
            <span className="sm:hidden">VIEW ALL</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <ServiceCardItem key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-sage/10 py-16 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">OUR PROCESS</p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-2 text-sm text-ink/70">From first call to a garden that thrives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading text-2xl font-black text-leaf">{step.step}</span>
                      <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center text-forest">
                        <IconComp size={18} weight="bold" />
                      </div>
                    </div>
                    <h3 className="font-heading text-base font-bold text-ink">{step.title}</h3>
                    <p className="mt-2 text-xs text-ink/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Highlight Banner */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="rounded-3xl bg-forest p-8 md:p-12 text-white shadow-xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">ABOUT SK LANDSCAPING</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black">
              Landscapes Designed to Last
            </h2>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              At SK Landscaping, we believe great landscapes are created through thoughtful planning, suitable plant selection, and reliable maintenance. Based in Anand, we provide landscape design, development, plantation, and long term garden care for residential, commercial, and industrial properties across Central Gujarat.
            </p>
            <div className="pt-2">
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest hover:bg-sand text-xs font-bold uppercase tracking-wider rounded-xl transition-all">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/20 aspect-video shadow-md">
            <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop" alt="SK Landscaping" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">QUESTIONS</p>
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently Asked
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white p-5 rounded-2xl border border-ink/5 shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between text-ink font-bold text-sm md:text-base">
                <span>{faq.q}</span>
                <span className="shrink-0 rounded-full bg-sand p-1 text-ink group-open:-rotate-180 transition-transform">
                  <CaretDown size={18} />
                </span>
              </summary>
              <p className="mt-4 text-xs md:text-sm text-ink/70 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

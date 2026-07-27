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

  const tickerServices = [
    "Landscape Design",
    "Garden Maintenance",
    "Lawn Care",
    "Smart Irrigation",
    "Living Vertical Walls",
    "Mini Forests",
    "Organic Kitchen Gardens",
    "AMC Services"
  ];

  const whyUs = [
    {
      title: "Science Over Guesswork",
      desc: "We select plants based on light, soil, and microclimate data, ensuring your plants survive long-term.",
      icon: Plant
    },
    {
      title: "Resource & Energy Efficient",
      desc: "Our layouts conserve water, lower power consumption, and reduce long-term maintenance expenses.",
      icon: Sun
    },
    {
      title: "End-to-End Care",
      desc: "From 2D master plans and plant selection to site setup and long-term care, we manage every phase.",
      icon: Tree
    },
    {
      title: "Data-Backed Maintenance",
      desc: "Reliable, scheduled care to keep your ecosystem healthy and looking its best year-round.",
      icon: ShieldCheck
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Call Us",
      desc: "Reach out by phone or WhatsApp to tell us what you need.",
      icon: Phone
    },
    {
      step: "02",
      title: "Free Site Visit",
      desc: "Our team inspects your space and understands your goals.",
      icon: CalendarCheck
    },
    {
      step: "03",
      title: "Custom Proposal",
      desc: "You receive a detailed, tailored plan and transparent quote.",
      icon: FileText
    },
    {
      step: "04",
      title: "Work Starts",
      desc: "Our crew brings the design to life with precision.",
      icon: Wrench
    },
    {
      step: "05",
      title: "Ongoing Maintenance",
      desc: "We keep your landscape flourishing season after season.",
      icon: ArrowsClockwise
    }
  ];

  const faqs = [
    {
      q: "Do you offer a free site visit?",
      a: "Yes. We provide a complimentary site inspection where we assess your space, understand your needs and advise on the best approach, with no obligation."
    },
    {
      q: "What areas do you serve?",
      a: "We are based in Ode, Anand, Gujarat and serve homes, bungalows, farmhouses, societies, villas, commercial properties, schools and industries across the region."
    },
    {
      q: "What is an AMC (Annual Maintenance Contract)?",
      a: "An AMC is a yearly plan with scheduled maintenance visits, mowing, trimming, plant health checks, irrigation care and more, so your garden stays pristine without you lifting a finger."
    },
    {
      q: "How do you price your projects?",
      a: "Pricing depends on the scope, area and services required. After the free site visit we share a transparent, itemised quotation so you know exactly what to expect."
    },
    {
      q: "Do you handle both design and maintenance?",
      a: "Absolutely. We design and build new landscapes and also maintain existing gardens through one-time services or ongoing contracts."
    },
    {
      q: "How soon can you start?",
      a: "Once the proposal is approved, we schedule the work at the earliest available slot and always aim for timely completion."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
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

      {/* 2. Moving Service Names Line (Marquee) */}
      <div className="bg-forest py-3 border-y border-white/10 text-white shadow-inner">
        <Marquee speed={40} gradient={false}>
          {tickerServices.map((item, index) => (
            <div key={index} className="flex items-center mx-6 text-xs md:text-sm font-bold uppercase tracking-widest">
              <span className="text-leaf mr-3">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* 3. Why SK Landscaping */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">THE SK DIFFERENCE</p>
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
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

      {/* 4. Core Landscaping Services */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">OUR SERVICES</p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Core Landscaping Services
            </h2>
          </div>
          <Link 
            to="/services" 
            className="shrink-0 pt-0.5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-leaf transition-colors"
          >
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

      {/* 5. How It Works */}
      <section className="bg-sage/10 py-16 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">OUR PROCESS</p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              From first call to a garden that thrives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="relative p-6 bg-white rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
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

      {/* 6. Short About Us Area */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="rounded-3xl bg-forest p-8 md:p-12 text-white shadow-xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">ABOUT SK LANDSCAPING</p>
            <h2 className="font-heading text-3xl md:text-4xl font-black">
              Engineering Green Ecosystems Across Gujarat
            </h2>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Based in Ode, Anand, SK Landscaping brings technical precision and sustainable practices to landscape execution. We believe outdoor spaces should be engineered for climate resilience so your investments last.
            </p>
            <div className="pt-2">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest hover:bg-sand text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hidden md:block overflow-hidden rounded-2xl border border-white/20 aspect-video shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop" 
              alt="SK Landscaping Team Work" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* 7. Questions (Frequently Asked) */}
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

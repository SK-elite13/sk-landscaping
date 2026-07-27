import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";
import { SERVICES_DATA } from "../data/servicesData";
import { ServiceCard } from "../components/ServiceCard";

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

      {/* Services Section with Swipeable Image Cards */}
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
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
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

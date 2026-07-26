import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ArrowRight, 
  Quotes, 
  Plant, 
  Scissors, 
  Tree, 
  CalendarCheck 
} from "@phosphor-icons/react";
import { useLeadDialog } from "../context/LeadDialogContext";

export function Home() {
  const { openDialog } = useLeadDialog();

  const services = [
    {
      title: "2D Landscape Design & Plant Selection",
      description: "Customized master plans tailored to your site's soil, light, and climate data.",
      icon: Plant,
    },
    {
      title: "Landscape Execution & Site Development",
      description: "Professional installation bringing layout concepts and green spaces to life.",
      icon: Tree,
    },
    {
      title: "Garden Maintenance & AMC Contracts",
      description: "Structured, scheduled care plans to maintain long-term site health.",
      icon: Scissors,
    },
    {
      title: "Seasonal Plant Supply & Upgrades",
      description: "Fresh, healthy plant additions selected specifically for seasonal conditions.",
      icon: CalendarCheck,
    },
  ];

  const faqs = [
    {
      q: "What areas do you serve?",
      a: "We primary serve Anand, Nadiad, Vadodara, and surrounding regions in Gujarat for site visits and execution.",
    },
    {
      q: "What is included in an AMC (Annual Maintenance Contract)?",
      a: "Our AMC covers regular pruning, lawn mowing, soil fertilization, pest control, irrigation checks, and seasonal plant replacements.",
    },
    {
      q: "How does 'Science Over Guesswork' help my garden?",
      a: "We analyze soil pH, drainage, and light exposure before planting to ensure flora thrives with minimal chemical dependency and waste.",
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-ink text-white pt-24 pb-16 px-5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop"
            alt="Landscaping Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-leaf">
            Anand, Gujarat
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            Beautiful Landscapes. <br />
            <span className="text-leaf">Professionally Maintained.</span>
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Landscape Design • Garden Maintenance • Lawn Care • Plantation • Irrigation • AMC Services
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openDialog}
              className="w-full sm:w-auto px-8 py-3.5 bg-forest hover:bg-leaf text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Get Free Site Visit <ArrowRight size={18} />
            </button>
            <a
              href="tel:+919313082732"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-8">
          {/* Top Row: "WHAT WE DO" on left, "VIEW ALL SERVICES" on right (Aligned horizontally) */}
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-leaf">
              WHAT WE DO
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-leaf transition-colors"
            >
              View All Services <span className="text-base">↗</span>
            </Link>
          </div>

          {/* Heading directly below */}
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-ink/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sand flex items-center justify-center text-forest">
                    <Icon size={24} weight="bold" />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{item.description}</p>
                </div>
                <button
                  onClick={openDialog}
                  className="w-full py-2.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-leaf">
            QUESTIONS
          </p>
          <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Frequently Asked
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white p-5 rounded-2xl border border-ink/5 shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-ink font-bold text-sm md:text-base">
                <span>{faq.q}</span>
                <span className="shrink-0 rounded-full bg-sand p-1.5 text-ink transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-sm text-ink/70">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-forest rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            Let's Build Your Dream Garden
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={openDialog}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-forest hover:bg-sand font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Request Quote
            </button>
            <a
              href="https://wa.me/919313082732"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Support both export types (Named & Default) to avoid build errors
export default Home;

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import { PublicLayout } from "../components/PublicLayout";
import { Reveal } from "../components/Reveal";
import { WHY, CORE_SERVICES, FAQS } from "../data/content";
import { useLeadDialog } from "../context/LeadDialogContext";
import { waLink } from "../lib/api";

const HERO_IMG = "https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg";

const heroLines = ["Beautiful ", "Landscapes.", "Professionally ", "Maintained."];

export default function Home() {
  const ref = useRef(null);
  const { openDialog } = useLeadDialog();
  const [openFaq, setOpenFaq] = useState(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <PublicLayout>
      {/* Exact Original Hero Section */}
      <section ref={ref} className="relative min-h-[92vh] flex items-end pb-16 pt-28 overflow-hidden text-white">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <img src={HERO_IMG} alt="Luxury landscape design" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">ANAND, GUJARAT</p>
          
          <h1 className="mt-3 font-heading text-4xl font-black sm:text-6xl md:text-7xl leading-none">
            {heroLines.map((line, i) => (
              <span 
                key={i} 
                className={`inline-block mr-3 ${i >= 2 ? "text-leaf" : "text-white"}`}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-4 max-w-xl text-sm md:text-base text-white/80 leading-relaxed font-normal">
            Landscape Design • Garden Maintenance • Lawn Care • Plantation • Irrigation • AMC Services
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openDialog()}
              className="rounded-full bg-forest px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-105"
            >
              Get Free Site Visit →
            </button>
            <a
              href={`tel:+919313082732`}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Why SK Landscaping */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">WHY SK LANDSCAPING</p>
            <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">
              Trusted care for gardens that last.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              We combine craftsmanship, honest pricing and dependable maintenance so your outdoor space stays beautiful — season after season.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-cream border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">WHAT WE DO</p>
              <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">Our Services</h2>
            </Reveal>
            <Link to="/services" className="text-xs font-bold uppercase tracking-wider text-forest hover:underline">
              View all services ↗
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <div>
                    <h3 className="font-heading text-base font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                  <button
                    onClick={() => openDialog(s.title)}
                    className="mt-6 w-full rounded-xl bg-forest py-2 text-xs font-bold uppercase tracking-wider text-white"
                  >
                    Enquire Now
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions with Collapsible Dropdowns */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-forest">QUESTIONS</p>
            <h2 className="mt-2 text-center font-heading text-3xl font-black text-ink sm:text-4xl">Frequently Asked</h2>
          </Reveal>
          
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={faq.q} 
                  className="overflow-hidden rounded-2xl border border-black/5 bg-white transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-heading text-sm font-bold text-ink">{faq.q}</span>
                    <CaretDown 
                      size={18} 
                      className={`text-ink/60 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-xs leading-relaxed text-muted-foreground border-t border-black/5 mt-1 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Green Banner Box ("Let's Build Your Dream Garden") */}
      <section className="py-12 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl bg-forest p-10 text-center text-white md:p-16">
            <h2 className="font-heading text-3xl font-black sm:text-5xl">
              Let's Build Your Dream Garden
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openDialog()}
                className="rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-forest transition-transform hover:scale-105"
              >
                Request Quote
              </button>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

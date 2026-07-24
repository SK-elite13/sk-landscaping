import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Phone, ArrowRight, ArrowUpRight, WhatsappLogo, Quotes } from "@phosphor-icons/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { SERVICES, WHY, PROCESS, FAQS } from "../data/content";
import { useLeadDialog } from "../context/LeadDialogContext";
import { CONTACT, waLink } from "../lib/api";

const HERO_IMG = "https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg";
const PROJECT_IMGS = [
  "https://images.pexels.com/photos/37429855/pexels-photo-37429855.png",
  "https://images.pexels.com/photos/33561822/pexels-photo-33561822.jpeg",
  "https://images.pexels.com/photos/32876098/pexels-photo-32876098.jpeg"
];
const SERVICE_IMGS = [
  "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96",
  "https://images.unsplash.com/photo-1734303023491-db8037a21f09",
  "https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

const heroLines = ["Beautiful", "Landscapes.", "Professionally", "Maintained."];
const lineVariant = {
  hidden: { y: "110%" },
  show: (i) => ({ y: "0%", transition: { duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] } })
};

const Hero = () => {
  const ref = useRef(null);
  const { openDialog } = useLeadDialog();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden" data-testid="hero">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={HERO_IMG} alt="Luxury landscaped garden" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </motion.div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-sage">
          Ode, Anand, Gujarat
        </motion.p>
        <h1 className="font-heading text-[3.25rem] font-black leading-[0.95] tracking-tightest text-white sm:text-7xl lg:text-[6.5rem]">
          {heroLines.map((line, i) => (
            <span key={i} className="reveal-line">
              <motion.span custom={i} variants={lineVariant} initial="hidden" animate="show" className="inline-block">
                {line === "Maintained." ? <span className="text-leaf">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }} className="mt-7 max-w-2xl text-base font-medium text-white/85 md:text-lg">
          Landscape Design • Garden Maintenance • Lawn Care • Plantation • Irrigation • AMC Services
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.7 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button onClick={() => openDialog()} data-testid="hero-site-visit" className="group flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:scale-105">
            Get Free Site Visit
            <ArrowRight size={20} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a href={`tel:${CONTACT.phoneRaw}`} data-testid="hero-call" className="flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-ink">
            <Phone size={20} weight="fill" /> Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeStrip = () => (
  <div className="border-y border-black/5 bg-sage/40 py-5" data-testid="marquee">
    <Marquee speed={45} gradient={false}>
      {["Landscape Design", "Garden Maintenance", "Lawn Development", "Drip Irrigation", "Tree Plantation", "AMC Services", "Seasonal Planting", "Hedge Trimming"].map((t, i) => (
        <span key={i} className="mx-8 font-heading text-2xl font-bold text-forest md:text-3xl">
          {t} <span className="mx-4 text-leaf">✦</span>
        </span>
      ))}
    </Marquee>
  </div>
);

const WhyChoose = () => (
  <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32" data-testid="why-choose">
    <div className="grid gap-10 lg:grid-cols-3">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">Why SK Landscaping</p>
        <h2 className="mt-4 font-heading text-4xl font-black leading-none tracking-tight text-ink sm:text-5xl">
          Trusted care for<br />gardens that last.
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          We combine craftsmanship, honest pricing and dependable maintenance so your outdoor space stays beautiful — season after season.
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <div className="group h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/60 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                <Icon name={w.icon} size={26} weight="duotone" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-ink">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const { openDialog } = useLeadDialog();
  return (
    <section className="bg-white py-24 md:py-32" data-testid="services">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">What we do</p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-none tracking-tight text-ink sm:text-5xl">Our Services</h2>
            </div>
            <Link to="/services" className="group flex items-center gap-2 text-sm font-bold text-forest">
              View all services <ArrowUpRight size={18} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const featured = i === 0 || i === 5;
            const img = SERVICE_IMGS[i % SERVICE_IMGS.length];
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.05} className={featured ? "sm:col-span-2" : ""}>
                <button onClick={() => openDialog(s.title)} data-testid={`service-card-${i}`} className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-cream p-6 text-left transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/5">
                  {featured && (
                    <div className="mb-5 h-40 overflow-hidden rounded-xl">
                      <img src={img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  )}
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-forest/10 text-forest">
                    <Icon name={s.icon} size={24} weight="duotone" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Enquire <ArrowRight size={14} weight="bold" />
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32" data-testid="process">
    <Reveal>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">How it works</p>
      <h2 className="mt-4 max-w-2xl font-heading text-4xl font-black leading-none tracking-tight text-ink sm:text-5xl">
        From first call to a garden that thrives.
      </h2>
    </Reveal>
    <div className="relative mt-16">
      <div className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-px bg-black/10 md:left-1/2" />
      <div className="space-y-10">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.05}>
            <div className={`relative flex items-start gap-6 md:w-1/2 ${i % 2 ? "md:ml-auto md:flex-row" : "md:flex-row-reverse md:text-right"}`}>
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest font-heading text-lg font-black text-white">
                {p.step}
              </div>
              <div className="pt-1.5">
                <h3 className="font-heading text-2xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="bg-ink py-24 text-white md:py-32" data-testid="projects">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Our work</p>
        <h2 className="mt-4 font-heading text-4xl font-black leading-none tracking-tight sm:text-5xl">Featured Projects</h2>
        <p className="mt-4 max-w-xl text-base text-white/60">
          We're a growing studio. Our first showcase gardens are on the way — check back soon to see them here.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={PROJECT_IMGS[i]} alt="Landscaping project" className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                  Project Coming Soon
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32" data-testid="testimonials">
    <Reveal>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">Kind words</p>
      <h2 className="mt-4 font-heading text-4xl font-black leading-none tracking-tight text-ink sm:text-5xl">Testimonials</h2>
    </Reveal>
    <div className="mt-12 grid gap-4 md:grid-cols-3">
      {[0, 1, 2].map((i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="flex h-full flex-col rounded-2xl border border-dashed border-black/15 bg-white p-8">
            <Quotes size={36} weight="fill" className="text-sage" />
            <p className="mt-5 flex-1 text-base italic leading-relaxed text-muted-foreground">
              Client Testimonial Coming Soon
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-sage/60" />
              <div>
                <div className="h-3 w-24 rounded bg-black/10" />
                <div className="mt-2 h-2.5 w-16 rounded bg-black/5" />
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

const About = () => (
  <section className="bg-sage/30 py-24 md:py-32" data-testid="about-preview">
    <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">About us</p>
        <h2 className="mt-4 font-heading text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">
          Rooted in quality.<br />Grown on trust.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
          SK Landscaping provides professional landscape design, garden maintenance, lawn development and annual maintenance services with a focus on quality, reliability and long-term customer relationships.
        </p>
        <Link to="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-forest">
          More about us <ArrowUpRight size={18} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-2xl">
          <img src={PROJECT_IMGS[2]} alt="Serene garden" className="aspect-[4/3] w-full object-cover" />
        </div>
      </Reveal>
    </div>
  </section>
);

const FaqSection = () => (
  <section className="mx-auto max-w-4xl px-5 py-24 md:px-8 md:py-32" data-testid="faq">
    <Reveal>
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-forest">Questions</p>
      <h2 className="mt-4 text-center font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">Frequently Asked</h2>
    </Reveal>
    <Reveal delay={0.1}>
      <Accordion type="single" collapsible className="mt-12" data-testid="faq-accordion">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-black/10">
            <AccordionTrigger className="py-5 text-left font-heading text-lg font-bold text-ink hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  </section>
);

const CTA = () => {
  const { openDialog } = useLeadDialog();
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32" data-testid="cta">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-forest px-8 py-16 text-center md:px-16 md:py-24">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-leaf/30 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-leaf/20 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              Let's Build Your Dream Garden
            </h2>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button onClick={() => openDialog()} data-testid="cta-quote" className="rounded-full bg-white px-8 py-4 text-base font-bold text-forest transition-transform duration-200 hover:scale-105">
                Request Quote
              </button>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="cta-whatsapp" className="flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 text-base font-bold text-white transition-colors duration-200 hover:bg-white/10">
                <WhatsappLogo size={22} weight="fill" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <WhyChoose />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <About />
      <FaqSection />
      <CTA />
    </>
  );
}

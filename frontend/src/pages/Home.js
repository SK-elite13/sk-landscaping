import { Link } from "react-router-dom";
import { PublicLayout } from "../components/PublicLayout";
import { Reveal } from "../components/Reveal";
import { WHY, CORE_SERVICES, FAQS } from "../data/content";
import { useLeadDialog } from "../context/LeadDialogContext";
import { waLink } from "../lib/api";

const HERO_BG = "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2000&auto=format&fit=crop";

export default function Home() {
  const { openDialog } = useLeadDialog();

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 pb-16 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${HERO_BG})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />

        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">ODE, ANAND, GUJARAT</p>
            
            {/* Headline with guaranteed spacing */}
            <h1 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
              Beautiful Landscapes.{" "}
              <span className="block sm:inline text-leaf">Professionally Maintained.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Science-backed, energy-efficient landscape design, site development, and long-term care tailored to Anand and Ode's microclimate data.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openDialog()}
                className="rounded-full bg-forest px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-transform hover:scale-105"
              >
                Get Free Site Visit →
              </button>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">Why SK Landscaping</p>
            <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">Trusted Care For Gardens That Last</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do / Services (Cleaned up, no icons) */}
      <section className="py-20 bg-sage/10 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">What We Do</p>
              <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">Our Services</h2>
            </Reveal>
            <Link to="/services" className="text-xs font-bold uppercase tracking-wider text-forest hover:underline">
              View All Services →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                  <button 
                    onClick={() => openDialog(s.title)} 
                    className="mt-6 w-full rounded-xl bg-forest py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  >
                    Enquire Now
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-forest">Questions</p>
            <h2 className="mt-2 text-center font-heading text-3xl font-black text-ink">Frequently Asked</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-ink">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

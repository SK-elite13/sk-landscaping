import { PublicLayout } from "../components/PublicLayout";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { useLeadDialog } from "../context/LeadDialogContext";

export default function AboutPage() {
  const { openDialog } = useLeadDialog();

  return (
    <PublicLayout>
      <PageHeader
        overline="About SK LANDSCAPING"
        title="Precision Landscaping Built to Last97785"
        subtitle="Data-driven, energy-efficient green space engineering for residential, commercial, and industrial clients."
        image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Story & Vision */}
      <section className="py-20 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">Our Story</p>
            <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">Science Over Guesswork</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Welcome to SK LANDSCAPING. We are a data-driven landscaping firm dedicated to creating energy-efficient, resilient green spaces for residential, commercial, and industrial sites.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We believe a garden should be built to last, not constantly replaced. Drawing on technical precision and an energy-conscious approach, we eliminate the common cycle of plant failure that costs clients time and money.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-black/5 bg-sage/20 p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-ink">Our Approach: Driven by Data</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every site has unique light, wind, and soil conditions. Using our proprietary database of climate-specific plants, we pair the exact right species to your specific location. The result is a vibrant landscape engineered for long-term growth.
              </p>
              <button
                onClick={() => openDialog()}
                className="mt-6 rounded-full bg-forest px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-105"
              >
                Schedule Site Analysis
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-sage/10 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Forward Thinking</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-ink">Our Vision</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To lead the transition toward zero-waste, energy-efficient, and scientifically managed green ecosystems across urban, commercial, and industrial landscapes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Core Purpose</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-ink">Our Mission</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  To eliminate plant failure through precision planning, microclimate mapping, and data-backed plant selection, delivering beautiful green spaces engineered for high survival.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

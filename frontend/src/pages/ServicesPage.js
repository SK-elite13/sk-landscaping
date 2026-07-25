import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { SERVICES } from "../data/content";
import { useLeadDialog } from "../context/LeadDialogContext";
import { PublicLayout } from "../components/PublicLayout";
import { ArrowRight } from "@phosphor-icons/react";

export default function ServicesPage() {
  const { openDialog } = useLeadDialog();
  return (
    <PublicLayout>
      <PageHeader
        overline="What we do"
        title="Complete landscaping & garden care."
        subtitle="From first design to lifelong maintenance — every service delivered with craftsmanship and care. Tap any service to request a free site visit."
        image="https://images.pexels.com/photos/32876098/pexels-photo-32876098.jpeg"
      />
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" data-testid="services-grid">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05}>
              <button
                onClick={() => openDialog(s.title)}
                data-testid={`services-page-card-${i}`}
                className="group flex h-full w-full flex-col rounded-2xl border border-black/5 bg-white p-8 text-left shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-forest/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sage/60 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                  <Icon name={s.icon} size={28} weight="duotone" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-6 flex items-center gap-2 text-sm font-bold text-forest">
                  Request site visit <ArrowRight size={16} weight="bold" className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}

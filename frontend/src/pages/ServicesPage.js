import { PublicLayout } from "../components/PublicLayout";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { CORE_SERVICES, SPECIALIZATIONS } from "../data/content";
import { useLeadDialog } from "../context/LeadDialogContext";

const SERVICE_IMGS = [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
  "https://images.unsplash.com/photo-1558904541-efa843a96f01",
  "https://images.unsplash.com/photo-1592417817098-8f3d6eb1626f",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
  "https://images.unsplash.com/photo-1534710961216-75c88202f43e",
  "https://images.unsplash.com/photo-1584467541268-b040f83be3fd",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
  "https://images.unsplash.com/photo-1598902108854-10e335adac99",
  "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
];

export default function ServicesPage() {
  const { openDialog } = useLeadDialog();

  return (
    <PublicLayout>
      <PageHeader
        overline="Our Landscaping & Maintenance Solutions"
        title="Design, Build & Care"
        subtitle="Complete landscape design, expert installation, and dedicated care tailored to keep your greenery thriving season after season."
        image="https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg"
      />

      {/* Core Services */}
      <section className="py-16 md:py-24 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">Primary Solutions</p>
          <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">Core Landscaping Services</h2>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img src={SERVICE_IMGS[i]} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink leading-snug">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                  <button onClick={() => openDialog(s.title)} className="mt-5 w-full rounded-xl bg-forest py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">
                    Enquire Now
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 md:py-24 bg-sage/20 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">Specialized Expertise</p>
            <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">Specializations</h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZATIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="h-48 overflow-hidden">
                    <img src={SERVICE_IMGS[i + 4]} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-5 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-ink leading-snug">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                    <button onClick={() => openDialog(s.title)} className="mt-5 w-full rounded-xl bg-forest py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90">
                      Request Quote
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

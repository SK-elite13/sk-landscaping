import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { useLeadDialog } from "../context/LeadDialogContext";
import { PublicLayout } from "../components/PublicLayout";

const CHAPTERS = [
  { n: "01", title: "Our promise", body: "SK Landscaping provides professional landscape design, garden maintenance, lawn development and annual maintenance services with a focus on quality, reliability and long-term customer relationships." },
  { n: "02", title: "Craft first", body: "Every lawn we lay, every hedge we shape and every bed we plant is treated as a piece of living design. We obsess over the details others overlook." },
  { n: "03", title: "Honest & reliable", body: "Transparent pricing, timely completion and dependable ongoing care. We build trust the way we build gardens — patiently and to last." },
  { n: "04", title: "For every space", body: "Homes, bungalows, farmhouses, societies, villas, commercial properties, schools and industries — we tailor our approach to your land and your goals." }
];

const STATS = [
  { v: "100%", l: "Free site inspections" },
  { v: "10+", l: "Landscaping services" },
  { v: "365", l: "Days of care via AMC" },
  { v: "24h", l: "Typical response time" }
];

export default function AboutPage() {
  const { openDialog } = useLeadDialog();
  return (
    <PublicLayout>
      <PageHeader
        overline="About SK Landscaping"
        title="Rooted in quality. Grown on trust."
        image="https://images.pexels.com/photos/33561822/pexels-photo-33561822.jpeg"
      />
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28" data-testid="about-manifesto">
        <div className="space-y-16">
          {CHAPTERS.map((c) => (
            <Reveal key={c.n}>
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-14">
                <span className="font-heading text-5xl font-black text-sage md:text-6xl">{c.n}</span>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">{c.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/75 md:text-xl">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-ink py-20 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06}>
              <div>
                <div className="font-heading text-5xl font-black text-leaf md:text-6xl">{s.v}</div>
                <div className="mt-2 text-sm text-white/60">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">Ready to grow something beautiful?</h2>
          <button onClick={() => openDialog()} data-testid="about-cta" className="mt-8 rounded-full bg-forest px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:scale-105">
            Request Free Site Visit
          </button>
        </Reveal>
      </section>
    </PublicLayout>
  );
}

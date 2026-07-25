import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { useLeadDialog } from "../context/LeadDialogContext";
import { PublicLayout } from "../components/PublicLayout";

const IMGS = [
  "https://images.pexels.com/photos/37429855/pexels-photo-37429855.png",
  "https://images.pexels.com/photos/33561822/pexels-photo-33561822.jpeg",
  "https://images.pexels.com/photos/32876098/pexels-photo-32876098.jpeg",
  "https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg",
  "https://images.unsplash.com/photo-1734303023491-db8037a21f09",
  "https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

export default function ProjectsPage() {
  const { openDialog } = useLeadDialog();
  return (
    <PublicLayout>
      <PageHeader
        overline="Our work"
        title="Projects in the making."
        subtitle="As a growing studio, our first signature gardens are being crafted right now. Soon this space will feature real transformations across homes, villas, farmhouses and commercial spaces."
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32" data-testid="projects-gallery">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IMGS.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={img} alt="Project preview" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/45 transition-colors duration-300 group-hover:bg-black/55">
                  <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    Project Coming Soon
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-16 rounded-2xl bg-sage/40 p-10 text-center md:p-14">
            <h2 className="font-heading text-3xl font-black tracking-tight text-ink sm:text-4xl">Want to be our next showcase?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink/70">Book a free site visit and let's create something worth featuring.</p>
            <button onClick={() => openDialog()} data-testid="projects-cta" className="mt-8 rounded-full bg-forest px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:scale-105">
              Request Free Site Visit
            </button>
          </div>
        </Reveal>
      </section>
    </PublicLayout>
  );
}

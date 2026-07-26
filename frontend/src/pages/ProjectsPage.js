import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { useLeadDialog } from "../context/LeadDialogContext";

const PROJECT_CONCEPTS = [
  {
    title: "Modern Villa Garden",
    category: "Residential Landscape Design",
    location: "Anand, Gujarat",
    img: "https://images.pexels.com/photos/37429855/pexels-photo-37429855.png",
    status: "Upcoming Showcase"
  },
  {
    title: "Luxury Estate Turf & Hardscape",
    category: "Farmhouse Development",
    location: "Vadodara Region",
    img: "https://images.pexels.com/photos/33561822/pexels-photo-33561822.jpeg",
    status: "Upcoming Showcase"
  },
  {
    title: "Terrace & Rooftop Planting",
    category: "Urban Greening",
    location: "Anand City",
    img: "https://images.pexels.com/photos/32876098/pexels-photo-32876098.jpeg",
    status: "Upcoming Showcase"
  },
  {
    title: "Automated Drip & Lawn Irrigation",
    category: "Smart Water Systems",
    location: "Kheda District",
    img: "https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg",
    status: "Upcoming Showcase"
  },
  {
    title: "Tropical Courtyard Garden",
    category: "Private Residence",
    location: "Central Gujarat",
    img: "https://images.unsplash.com/photo-1734303023491-db8037a21f09",
    status: "Upcoming Showcase"
  },
  {
    title: "Commercial Perimeter Greening",
    category: "Institutional Landscape",
    location: "Anand & Surrounding",
    img: "https://images.pexels.com/photos/37720375/pexels-photo-37720375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    status: "Upcoming Showcase"
  }
];

export default function ProjectsPage() {
  const { openDialog } = useLeadDialog();

  return (
    <div>
      <PageHeader
        overline="Signature Works"
        title="Upcoming Landscapes & Design Concepts"
        subtitle="Our studio is currently crafting signature gardens across homes, villas, farmhouses, and commercial spaces in Central Gujarat. Preview our design concepts below."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-20 md:px-8" data-testid="projects-gallery">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_CONCEPTS.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="self-start rounded-full border border-leaf/60 bg-leaf/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-leaf backdrop-blur-md mb-2">
                    {item.status}
                  </span>
                  <p className="text-xs font-medium text-white/70">{item.category} • {item.location}</p>
                  <h3 className="font-heading text-lg font-bold text-white mt-0.5">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action Banner */}
        <Reveal>
          <div className="mt-16 rounded-2xl bg-forest p-8 md:p-12 text-center text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Be Our Next Highlight</p>
            <h2 className="mt-2 font-heading text-2xl font-black sm:text-4xl">Want your garden featured as our next project?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-white/80">
              Schedule a free site visit in Anand, Nadiad, Vadodara, or surrounding areas. Let's design something worth showing off.
            </p>
            <button 
              onClick={() => openDialog("Projects Showcase Consultation")} 
              data-testid="projects-cta" 
              className="mt-6 rounded-xl bg-leaf px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-forest transition-transform duration-200 hover:scale-105 shadow-md"
            >
              Request Free Site Visit
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

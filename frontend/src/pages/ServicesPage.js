import { PageHeader } from "../components/PageHeader";
import { SERVICES_DATA } from "../data/servicesData";
import { ServiceCard } from "../components/ServiceCard";

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        overline="Landscaping & Maintenance Solutions"
        title="Design, Build & Care"
        subtitle="Complete landscape design, expert installation, and dedicated care tailored to keep your greenery thriving."
        image="https://images.pexels.com/photos/13131147/pexels-photo-13131147.jpeg"
      />

      <section className="py-12 md:py-20 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

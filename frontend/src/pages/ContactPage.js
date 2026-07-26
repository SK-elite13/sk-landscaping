import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { LeadForm } from "../components/LeadForm";
import { CONTACT, waLink } from "../lib/api";
import { Phone, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Call us", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
    { icon: WhatsappLogo, label: "WhatsApp", value: CONTACT.phone, href: waLink() },
    { icon: EnvelopeSimple, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MapPin, label: "Address", value: CONTACT.address, href: "https://www.google.com/maps?q=Ode, Anand, Gujarat, India" }
  ];

  return (
    <div>
      <PageHeader
        overline="Get in touch"
        title="Let's plan your garden."
        subtitle="Send us your details and we'll arrange a free, no-obligation site visit at your convenience."
      />
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32" data-testid="contact-section">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {items.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/60 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white">
                    <it.icon size={24} weight="fill" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                    <div className="mt-0.5 font-heading text-lg font-bold text-ink">{it.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Ode, Anand, Gujarat, India&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
              <h2 className="font-heading text-3xl font-black tracking-tight text-ink">Request a free site visit</h2>
              <p className="mt-2 text-base text-muted-foreground">We'll get back to you within 24 hours.</p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { LeadForm } from "../components/LeadForm";
import { CONTACT, waLink, waSecondaryLink } from "../lib/api";
import { Phone, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function ContactPage() {
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
              {/* Call Us Card (Both Numbers) */}
              <div className="flex items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/60 text-forest shrink-0">
                  <Phone size={24} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call us</div>
                  <div className="mt-0.5 space-y-0.5">
                    <a href={`tel:${CONTACT.phoneRaw}`} className="block font-heading text-base font-bold text-ink hover:text-forest transition-colors">
                      {CONTACT.phone} <span className="text-xs font-normal text-muted-foreground">(Main)</span>
                    </a>
                    <a href={`tel:${CONTACT.phoneSecondaryRaw}`} className="block font-heading text-sm font-bold text-ink/80 hover:text-forest transition-colors">
                      {CONTACT.phoneSecondary} <span className="text-xs font-normal text-muted-foreground">(Support)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card (Both Numbers) */}
              <div className="flex items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/60 text-forest shrink-0">
                  <WhatsappLogo size={24} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="mt-0.5 space-y-0.5">
                    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block font-heading text-base font-bold text-ink hover:text-forest transition-colors">
                      {CONTACT.phone} <span className="text-xs font-normal text-muted-foreground">(Main)</span>
                    </a>
                    <a href={waSecondaryLink()} target="_blank" rel="noopener noreferrer" className="block font-heading text-sm font-bold text-ink/80 hover:text-forest transition-colors">
                      {CONTACT.phoneSecondary} <span className="text-xs font-normal text-muted-foreground">(Business Support)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/60 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white shrink-0">
                  <EnvelopeSimple size={24} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="mt-0.5 font-heading text-base font-bold text-ink">{CONTACT.email}</div>
                </div>
              </a>

              {/* Address Card */}
              <a
                href="https://www.google.com/maps?q=Anand, Gujarat, India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/60 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-white shrink-0">
                  <MapPin size={24} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Address</div>
                  <div className="mt-0.5 font-heading text-base font-bold text-ink">{CONTACT.address}</div>
                </div>
              </a>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Anand, Gujarat, India&output=embed"
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

import React, { useState } from "react";
import { Phone, WhatsappLogo, EnvelopeSimple, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";
import { CONTACT, waLink, waSecondaryLink, submitLead } from "../api";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Residential / Home",
    service: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError("Please fill in your name and phone number.");
      return;
    }
    setLoading(true);
    setError("");

    try {
      await submitLead(formData);
      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit request. Please try again or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-16 pt-8 space-y-12 max-w-7xl mx-auto px-5 md:px-8">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-widest text-leaf">GET IN TOUCH</p>
        <h1 className="font-heading text-3xl sm:text-5xl font-black text-ink tracking-tight">
          Let's plan your garden.
        </h1>
        <p className="text-xs sm:text-sm text-ink/70 max-w-2xl leading-relaxed">
          Send us your details and we'll arrange a free, no-obligation site visit at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Phone Card */}
          <div className="p-5 bg-white rounded-2xl border border-black/5 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sage/30 flex items-center justify-center text-forest shrink-0">
              <Phone size={20} weight="bold" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-leaf">CALL US</p>
              <a href={`tel:${CONTACT.phoneRaw}`} className="block text-sm font-bold text-ink hover:text-forest transition-colors">
                {CONTACT.phone} <span className="text-[10px] font-normal text-ink/50">(Main)</span>
              </a>
              <a href={`tel:${CONTACT.phoneSecondaryRaw}`} className="block text-xs font-semibold text-ink/70 hover:text-forest transition-colors mt-0.5">
                {CONTACT.phoneSecondary} <span className="text-[10px] font-normal text-ink/50">(Support)</span>
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-5 bg-white rounded-2xl border border-black/5 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sage/30 flex items-center justify-center text-forest shrink-0">
              <WhatsappLogo size={20} weight="bold" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-leaf">WHATSAPP</p>
              <a href={waLink()} target="_blank" rel="noreferrer" className="block text-sm font-bold text-ink hover:text-forest transition-colors">
                {CONTACT.phone} <span className="text-[10px] font-normal text-ink/50">(Main)</span>
              </a>
              <a href={waSecondaryLink()} target="_blank" rel="noreferrer" className="block text-xs font-semibold text-ink/70 hover:text-forest transition-colors mt-0.5">
                {CONTACT.phoneSecondary} <span className="text-[10px] font-normal text-ink/50">(Business Support)</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-5 bg-white rounded-2xl border border-black/5 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sage/30 flex items-center justify-center text-forest shrink-0">
              <EnvelopeSimple size={20} weight="bold" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-leaf">EMAIL</p>
              <a href={`mailto:${CONTACT.email}`} className="block text-xs sm:text-sm font-bold text-ink hover:text-forest transition-colors">
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-5 bg-white rounded-2xl border border-black/5 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sage/30 flex items-center justify-center text-forest shrink-0">
              <MapPin size={20} weight="bold" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-leaf">ADDRESS</p>
              <p className="text-xs sm:text-sm font-bold text-ink">{CONTACT.address}</p>
            </div>
          </div>

          {/* Google Map Preview */}
          <div className="rounded-2xl overflow-hidden border border-black/5 shadow-sm aspect-video">
            <iframe
              title="SK Landscaping Location Map"
              src="https://maps.google.com/maps?q=Anand,%20Gujarat&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Site Visit Request Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-black/5 shadow-sm space-y-6">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">Request a free site visit</h2>
            <p className="text-xs text-ink/60 mt-1">We'll get back to you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="p-6 bg-sage/20 border border-leaf/30 rounded-2xl text-center space-y-3">
              <h3 className="font-heading text-lg font-bold text-forest">Thank You!</h3>
              <p className="text-xs text-ink/80 leading-relaxed">
                Your request has been submitted successfully. Our team will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-xs text-red-500 font-semibold">{error}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-xs focus:outline-none focus:border-forest bg-black/[0.02]"
                />
                <input
                  type="tel"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-xs focus:outline-none focus:border-forest bg-black/[0.02]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-xs focus:outline-none focus:border-forest bg-black/[0.02]"
                />
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/10 text-xs focus:outline-none focus:border-forest bg-black/[0.02] text-ink/80"
                >
                  <option value="Residential / Home">Residential / Home</option>
                  <option value="Commercial Facility">Commercial Facility</option>
                  <option value="Industrial Site">Industrial Site</option>
                  <option value="Farmhouse / Villa">Farmhouse / Villa</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Service you're interested in"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-black/10 text-xs focus:outline-none focus:border-forest bg-black/[0.02]"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your space (optional)"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-black/10 text-xs focus:outline-none focus:border-forest bg-black/[0.02]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-forest hover:bg-leaf text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <PaperPlaneTilt size={16} weight="bold" />
                {loading ? "Submitting..." : "Request Free Site Visit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

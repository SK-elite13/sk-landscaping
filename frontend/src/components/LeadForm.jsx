import { useState } from "react";
import { submitLead, CONTACT } from "../lib/api";

export const LeadForm = ({ defaultService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "Residential / Home",
    service: defaultService || "Turnkey Project",
    address: "",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Bulletproof WhatsApp fallback
  const sendToWhatsApp = () => {
    const message = 
      `*New Site Visit Request - SK Landscaping*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🏠 *Property:* ${formData.propertyType}\n` +
      `🛠 *Service:* ${formData.service}\n` +
      `📍 *Location/Address:* ${formData.address || "N/A"}\n` +
      `📝 *Notes:* ${formData.notes || "None"}`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CONTACT?.phoneRaw || "919313082732"}?text=${encodedMsg}`;
    window.open(waUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitLead(formData);
      setSuccess(true);
    } catch (err) {
      sendToWhatsApp();
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-sage/40 p-6 text-center space-y-2 border border-leaf/20">
        <h3 className="font-heading text-xl font-bold text-forest">Thank you!</h3>
        <p className="text-xs text-ink/80 leading-relaxed">
          We have received your site visit request and will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name & Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/70 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ketan Patel"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-xs font-medium focus:border-forest focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/70 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-xs font-medium focus:border-forest focus:outline-none"
          />
        </div>
      </div>

      {/* Property Type & Service */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/70 mb-1">
            Property Type *
          </label>
          <select
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-xs font-medium focus:border-forest focus:outline-none text-ink/80"
          >
            <option value="Residential / Home">Residential / Home</option>
            <option value="Farmhouse / Villa">Farmhouse / Villa</option>
            <option value="Commercial / Office">Commercial / Office</option>
            <option value="Industrial Site">Industrial Site</option>
            <option value="Housing Society">Housing Society</option>
            <option value="Institute / Campus">Institute / Campus</option>
            <option value="Hotel / Cafe">Hotel / Cafe</option>
            <option value="Resort, Party Plot & Event Venue">Resort, Party Plot & Event Venue</option>
            <option value="Government Project">Government Project</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/70 mb-1">
            Service Required *
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-xs font-medium focus:border-forest focus:outline-none text-ink/80"
          >
            <option value="Turnkey Project">Turnkey Project (Design to Execution)</option>
            <option value="Execution & Development">Execution & Development</option>
            <option value="Maintenance & Care (AMC)">Maintenance & Care (AMC)</option>
            <option value="Garden Renovation">Garden Renovation</option>
            <option value="Lawn Development">Lawn Development</option>
            <option value="Vertical Wall">Vertical Wall</option>
            <option value="Indoor / Balcony / Terrace">Indoor, Balcony & Terrace Garden</option>
            <option value="Kitchen Garden">Kitchen Garden</option>
            <option value="Orchard & Plantation">Orchard & Tree Plantation</option>
            <option value="Other Inquiry">Other Inquiry</option>
          </select>
        </div>
      </div>

      {/* Site Address / Location */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/70 mb-1">
          Site Address / Location *
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Near Borsad Chokdi, Anand (Landmark / Area / City)"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-xs font-medium focus:border-forest focus:outline-none"
        />
      </div>

      {/* Project Notes */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/70 mb-1">
          Project Notes (Optional)
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about plot size, preferred time for visit, or special requirements..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-xs font-medium focus:border-forest focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-forest py-4 text-xs font-bold uppercase tracking-wider text-white transition-transform duration-200 hover:bg-leaf active:scale-95 disabled:opacity-50 cursor-pointer shadow-md"
      >
        {loading ? "Submitting..." : "➤ Request Free Site Visit"}
      </button>
    </form>
  );
};

export default LeadForm;

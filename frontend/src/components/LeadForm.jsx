import { useState } from "react";
import { submitLead, CONTACT } from "../lib/api";

export const LeadForm = ({ defaultService = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Residential",
    service: defaultService,
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fallback function to open WhatsApp with pre-filled lead details
  const sendToWhatsApp = () => {
    const message = 
      `*New Site Visit Request - SK Landscaping*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || "N/A"}\n` +
      `🏠 *Property:* ${formData.propertyType}\n` +
      `🛠 *Service:* ${formData.service || "General Inquiry"}\n` +
      `📝 *Notes:* ${formData.notes || "None"}`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/${CONTACT?.phoneRaw || "919313082732"}?text=${encodedMsg}`;
    window.open(waUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Try submitting to API backend first
      await submitLead(formData);
      setSuccess(true);
    } catch (err) {
      // If API fails, seamlessly send to WhatsApp as a bulletproof fallback
      sendToWhatsApp();
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-xl bg-sage/40 p-6 text-center space-y-2">
        <h3 className="font-heading text-xl font-bold text-forest">Thank you!</h3>
        <p className="text-sm text-ink/80">
          We have received your request and will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Full name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-sm font-medium focus:border-forest focus:outline-none"
        />
        <input
          type="tel"
          required
          placeholder="Phone number *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-sm font-medium focus:border-forest focus:outline-none"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="email"
          placeholder="Email (optional)"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-sm font-medium focus:border-forest focus:outline-none"
        />
        <select
          value={formData.propertyType}
          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-sm font-medium focus:border-forest focus:outline-none"
        >
          <option value="Residential">Residential / Home</option>
          <option value="Commercial">Commercial / Office</option>
          <option value="Industrial">Industrial Site</option>
          <option value="Farmhouse">Farmhouse / Villa</option>
          <option value="Society">Housing Society</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Service you're interested in"
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-sm font-medium focus:border-forest focus:outline-none"
      />
      <textarea
        rows={3}
        placeholder="Tell us about your space (optional)"
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        className="w-full rounded-xl border border-black/10 bg-cream/50 px-4 py-3 text-sm font-medium focus:border-forest focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-forest py-4 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer"
      >
        {loading ? "Submitting..." : "➤ Request Free Site Visit"}
      </button>
    </form>
  );
};

export default LeadForm;

import React, { useState } from "react";
import { useLeadDialog } from "../context/LeadDialogContext";
import { X } from "lucide-react";
import { submitLead } from "../lib/api";

export function LeadDialog() {
  const { isOpen, closeLeadDialog } = useLeadDialog();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Garden Design");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitLead({ name, phone, service });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeLeadDialog();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-xl">
        <button onClick={closeLeadDialog} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        {submitted ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-bold text-[#2E7D32] mb-2">Thank You!</h3>
            <p className="text-gray-600 text-sm">We received your request and will call you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Get a Free Estimate</h3>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-[#2E7D32]"
                placeholder="Rajesh Patel"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-[#2E7D32]"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Service Needed</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-[#2E7D32]"
              >
                <option value="Garden Design">Garden Design</option>
                <option value="Lawn Maintenance">Lawn Care & Maintenance</option>
                <option value="Irrigation">Smart Irrigation</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3 bg-[#2E7D32] text-white font-semibold rounded-xl hover:bg-[#1B5E20]">
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

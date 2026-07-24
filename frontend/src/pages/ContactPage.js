import React from "react";
import { CONTACT, waLink } from "../lib/api";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Get In Touch</h1>
        <p className="text-gray-600 mb-8">Ready to transform your landscape? Reach out today.</p>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 space-y-4 max-w-md mx-auto text-left">
          <p><strong>Phone:</strong> {CONTACT.phone}</p>
          <p><strong>Email:</strong> {CONTACT.email}</p>
          <p><strong>Location:</strong> {CONTACT.address}</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block text-center mt-6 py-3 bg-[#2E7D32] text-white rounded-xl font-semibold">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

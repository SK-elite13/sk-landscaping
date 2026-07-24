import React from "react";
import { CONTACT } from "../lib/api";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-6">About SK Landscaping</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Based in {CONTACT.address}, SK Landscaping is committed to designing, building, and preserving breathtaking green outdoor environments. 
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether creating peaceful home gardens, restoring turf health, or engineering commercial irrigation networks, we deliver high-quality craftsmanship with a sustainable touch.
        </p>
      </div>
    </div>
  );
}

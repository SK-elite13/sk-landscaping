import React from "react";
import { SERVICES } from "../mockData";
import { waLink } from "../lib/api";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-4">Our Services</h1>
        <p className="text-gray-600 mb-12">Comprehensive landscaping solutions tailored to your property.</p>
        <div className="grid gap-12">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="p-8 bg-white rounded-2xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <img src={srv.heroImage} alt={srv.title} className="w-full md:w-1/3 h-56 object-cover rounded-xl" />
              <div className="flex-1">
                <span className="text-xs font-bold text-[#2E7D32] bg-[#C8E6C9] px-2.5 py-1 rounded-full">{srv.badge}</span>
                <h2 className="text-2xl font-bold mt-2 mb-3">{srv.title}</h2>
                <p className="text-gray-600 mb-4">{srv.description}</p>
                <a href={waLink(`Hi, I am interested in ${srv.title}`)} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2.5 bg-[#2E7D32] text-white rounded-xl font-semibold text-sm">
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

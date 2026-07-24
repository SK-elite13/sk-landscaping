import React from "react";
import { PROJECTS } from "../mockData";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-4">Featured Projects</h1>
        <p className="text-gray-600 mb-12">Take a look at some of our ongoing maintenance and design work.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <div key={proj.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img src={proj.image} alt={proj.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold text-[#2E7D32] uppercase tracking-wider">{proj.category} • {proj.location}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{proj.title}</h3>
                <p className="text-gray-600 text-sm">{proj.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

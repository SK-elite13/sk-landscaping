import React from "react";
import { PageHeader } from "../components/PageHeader";
import { useLeadDialog } from "../context/LeadDialogContext";

export default function AboutPage() {
  const { openDialog } = useLeadDialog();

  return (
    <div>
      {/* 1. Page Header (Top Banner) */}
      <PageHeader
        overline="About SK LANDSCAPING"
        title="Landscapes Designed to Last"
        subtitle="Thoughtfully planned landscape design, development, and maintenance for residential, commercial, and industrial properties across Central Gujarat."
        image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1600&auto=format&fit=crop"
      />

      {/* 2. Story & Our Approach */}
      <section className="py-16 md:py-20 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
              Our Story
            </p>
            <h2 className="mt-2 font-heading text-3xl font-black text-ink sm:text-4xl">
              Every Great Landscape Starts With Thoughtful Planning
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-muted-foreground">
              SK LANDSCAPING was founded with a simple belief that a beautiful landscape should continue growing healthier over time, not become a recurring replacement expense. We create outdoor spaces that are practical, attractive, and easy to maintain for homes, businesses, industries, and institutions.
            </p>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
              Instead of using the same approach everywhere, we study each site before selecting plants or preparing a layout. Every project helps us improve our knowledge, refine our methods, and deliver landscapes that provide long-term value to our clients.
            </p>
          </div>

          {/* 3. Our Approach Card */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-black/5 bg-sage/20 p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-ink">
                Our Approach
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every property is different. Before starting any project, we understand the available space, sunlight, site usage, maintenance requirements, and budget. This helps us recommend suitable plants and create landscapes that remain healthy, practical, and beautiful for years.
              </p>
              <button
                onClick={() => openDialog("About Page Site Visit")}
                className="mt-6 rounded-xl bg-forest px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-leaf cursor-pointer"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Section */}
      <section className="py-16 md:py-20 bg-sage/10 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision Card */}
            <div>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">
                    Looking Ahead
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-ink">
                    Our Vision
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    To become one of Gujarat's trusted landscaping companies by continuously improving our knowledge, services, and methods while creating sustainable outdoor spaces that remain beautiful for years.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">
                    Our Purpose
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-ink">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    To design, develop, and maintain landscapes through thoughtful planning, suitable plant selection, quality workmanship, and reliable maintenance that delivers lasting value to every client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

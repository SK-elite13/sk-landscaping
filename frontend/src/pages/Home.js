{/* Replace the current section header div with this: */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
  <div>
    <p className="text-xs font-bold uppercase tracking-widest text-leaf">
      WHAT WE DO
    </p>
    <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
      Our Services
    </h2>
  </div>
  <Link
    to="/services"
    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-leaf transition-colors"
  >
    View All Services <span className="text-base">↗</span>
  </Link>
</div>

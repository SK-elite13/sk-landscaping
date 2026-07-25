import { motion } from "framer-motion";

export const PageHeader = ({ overline, title, subtitle, image }) => (
  <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24" data-testid="page-header">
    {image && (
      <>
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/50" />
      </>
    )}
    <div className="relative mx-auto max-w-7xl px-5 md:px-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-xs font-bold uppercase tracking-[0.25em] ${image ? "text-sage" : "text-forest"}`}
      >
        {overline}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`mt-4 max-w-3xl font-heading text-5xl font-black leading-[0.95] tracking-tightest sm:text-6xl lg:text-7xl ${image ? "text-white" : "text-ink"}`}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-6 max-w-2xl text-lg leading-relaxed ${image ? "text-white/85" : "text-muted-foreground"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

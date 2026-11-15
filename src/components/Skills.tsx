import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-accent">Genres</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">Skills & Capabilities</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(portfolioData.skills).map(([cat, items], ci) => (
          <motion.div key={cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.08, duration: 0.5 }} className="rounded-xl bg-surface border border-border p-5">
            <h3 className="font-semibold text-text mb-3">{cat}</h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s, i) => (
                <motion.span key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: ci * 0.05 + i * 0.02, duration: 0.3 }} className="text-xs px-2.5 py-1 rounded-full bg-surface-2 text-text-muted border border-border hover:text-accent hover:border-accent/40 transition-colors">{s}</motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

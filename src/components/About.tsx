import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-accent">Episode 1 · The Pilot</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">{portfolioData.about.title}</h2>
      </div>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-4">
          {portfolioData.about.paragraphs.map((p, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-text-muted leading-relaxed">{p}</motion.p>
          ))}
        </div>
        <div className="md:col-span-2 grid grid-cols-1 gap-3">
          {portfolioData.about.principles.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="rounded-xl bg-surface border border-border p-4">
              <div className="font-semibold text-text mb-1">{p.title}</div>
              <div className="text-sm text-text-muted leading-relaxed">{p.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

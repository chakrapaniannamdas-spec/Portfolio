import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-accent">Credentials</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">Certifications</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {portfolioData.certifications.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }} className="rounded-xl bg-surface border border-border p-4 flex gap-3">
            <Award size={20} className="text-accent shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-text text-sm leading-snug">{c.name}</div>
              <div className="text-xs text-text-muted mt-1">{c.issuer}</div>
              <div className="text-[10px] uppercase tracking-widest text-accent/80 mt-1">{c.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

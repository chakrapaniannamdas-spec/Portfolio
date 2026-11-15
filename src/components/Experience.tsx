import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

function Episode({ exp, idx }: { exp: typeof portfolioData.experience[number]; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="relative pl-12 sm:pl-16">
      <div className="absolute left-0 sm:left-2 top-2 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-accent text-bg font-bold text-xs sm:text-sm flex items-center justify-center">
        S{String(idx + 1).padStart(2, "0")}
      </div>
      <div className="rounded-xl bg-surface border border-border p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="text-lg sm:text-xl font-bold text-text">{exp.company}</h3>
          <span className="text-[10px] uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded-full px-2 py-0.5">{exp.date}</span>
        </div>
        <div className="text-sm font-medium text-accent/90 mb-1">{exp.role}</div>
        <div className="text-xs text-text-muted mb-3">{exp.location}</div>
        <p className={`text-sm text-text-muted leading-relaxed ${open ? "" : "line-clamp-3"}`}>{exp.description}</p>
        <button onClick={() => setOpen(!open)} className="mt-2 text-xs text-accent hover:text-amber-400 font-medium">{open ? "Read less" : "Read more"}</button>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-accent">Episodes</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">Seasons & Episodes</h2>
      </div>
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-4">
          {portfolioData.experience.map((e, i) => (<Episode key={i} exp={e} idx={i} />))}
        </div>
      </div>
    </section>
  );
}

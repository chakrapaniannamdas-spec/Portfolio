import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: -1 | 1) => { ref.current?.scrollBy({ left: dir * 380, behavior: "smooth" }); };
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent">Originals</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">Featured Work</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scroll(-1)} className="p-2 rounded-full bg-surface border border-border hover:border-accent"><ChevronLeft size={18} /></button>
          <button onClick={() => scroll(1)} className="p-2 rounded-full bg-surface border border-border hover:border-accent"><ChevronRight size={18} /></button>
        </div>
      </div>
      <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
        {portfolioData.projects.map((p, i) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }} className="min-w-[300px] sm:min-w-[360px] snap-start rounded-xl overflow-hidden bg-surface border border-border flex flex-col">
            <div className="h-32 bg-gradient-to-br from-accent/30 via-surface-2 to-surface-2 flex items-center justify-center relative">
              <span className="text-6xl font-black text-accent/20">#{i + 1}</span>
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-accent border border-accent/30 rounded-full px-2 py-0.5">Top {i + 1}</span>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-accent mb-1">{p.role}</span>
              <h3 className="font-semibold text-text text-lg">{p.title}</h3>
              <p className="text-sm text-text-muted mt-2 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.tech.map((t) => (<span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-surface-2 text-text-muted border border-border">{t}</span>))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

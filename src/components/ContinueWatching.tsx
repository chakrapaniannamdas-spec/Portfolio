import { BookOpen, Briefcase, Film, Layers } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About", desc: "The Pilot", icon: BookOpen, progress: 60 },
  { id: "experience", label: "Experience", desc: "Seasons & Episodes", icon: Briefcase, progress: 80 },
  { id: "projects", label: "Projects", desc: "Originals", icon: Film, progress: 45 },
  { id: "skills", label: "Skills", desc: "Genres", icon: Layers, progress: 70 }
];

export default function ContinueWatching() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-lg font-semibold text-text mb-4">Continue Watching</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.button key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }} onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })} className="group text-left rounded-xl bg-surface border border-border hover:border-accent p-4 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <Icon size={20} className="text-accent" />
                <span className="text-[10px] uppercase tracking-widest text-text-muted">{s.desc}</span>
              </div>
              <div className="font-semibold text-text mb-3">{s.label}</div>
              <div className="h-1 rounded-full bg-surface-2 overflow-hidden"><div className="h-full bg-accent" style={{ width: `${s.progress}%` }} /></div>
              <div className="mt-2 text-[10px] text-text-muted">{s.progress}% watched</div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

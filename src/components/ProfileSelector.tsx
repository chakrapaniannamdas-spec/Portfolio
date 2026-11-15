import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { User, Briefcase, Users } from "lucide-react";

type Profile = typeof portfolioData.profiles[number];
const iconMap: Record<string, typeof User> = { recruiter: User, "engineering-manager": Briefcase, collaborator: Users };

export default function ProfileSelector({ onSelect }: { onSelect: (p: Profile) => void }) {
  return (
    <div className="fixed inset-0 z-[90] bg-bg flex flex-col items-center justify-center px-6">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-text mb-2">Who is watching?</motion.h1>
      <p className="text-text-muted mb-10 text-sm">Choose a perspective to personalize the view</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
        {portfolioData.profiles.map((p, i) => {
          const Icon = iconMap[p.id] ?? User;
          return (
            <motion.button key={p.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ scale: 1.05, y: -4 }} onClick={() => onSelect(p)} className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface border border-border hover:border-accent transition-colors">
              <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center group-hover:bg-accent group-hover:text-bg transition-colors"><Icon size={28} /></div>
              <div className="text-center">
                <div className="font-semibold text-text">{p.label}</div>
                <div className="text-xs text-text-muted mt-1">{p.hint}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

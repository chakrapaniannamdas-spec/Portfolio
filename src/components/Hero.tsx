import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import IntroModal from "./IntroModal";

export default function Hero() {
  const [showIntro, setShowIntro] = useState(false);
  return (
    <>
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(245,158,11,0.12), transparent 70%), linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 40%, #0f0f0f 100%)" }} />
        <div className="max-w-4xl w-full text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-accent/40 ring-4 ring-accent/10">
            <img src={portfolioData.hero.image} alt={portfolioData.name} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block text-xs uppercase tracking-widest text-accent mb-6 border border-accent/30 rounded-full px-3 py-1">
            Now Streaming · {portfolioData.location}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95]">
            {portfolioData.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-6 text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
            {portfolioData.hero.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={() => setShowIntro(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:bg-amber-400 transition-colors"><Play size={18} /> Play Intro</button>
            <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-2 text-text font-semibold border border-border hover:border-accent transition-colors">View Experience <ArrowRight size={18} /></button>
          </motion.div>
        </div>
      </section>
      {showIntro && <IntroModal onClose={() => setShowIntro(false)} />}
    </>
  );
}

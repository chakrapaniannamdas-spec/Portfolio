import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 200);
    const t2 = setTimeout(() => setStep(2), 2200);
    const t3 = setTimeout(() => onDone(), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);
  const letters = portfolioData.name.split("");
  return (
    <motion.div className="fixed inset-0 z-[100] bg-bg flex items-center justify-center flex-col px-6" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-text">
          {letters.map((l, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 20 }} animate={step >= 1 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.04, duration: 0.5 }} className="inline-block">
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </h1>
        <motion.p className="mt-4 text-sm sm:text-base text-text-muted tracking-widest uppercase" initial={{ opacity: 0 }} animate={step >= 2 ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}>
          {portfolioData.role}
        </motion.p>
      </div>
      <button onClick={onDone} className="absolute bottom-6 right-6 text-xs text-text-muted hover:text-text uppercase tracking-widest">Skip</button>
    </motion.div>
  );
}

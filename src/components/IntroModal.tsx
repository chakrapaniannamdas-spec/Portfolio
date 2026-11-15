import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const cards = [...portfolioData.about.paragraphs, ...Object.values(portfolioData.skills).flat().slice(0, 5)];

export default function IntroModal({ onClose }: { onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % cards.length), 2800);
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { clearInterval(t); window.removeEventListener("keydown", esc); };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur flex items-center justify-center px-6" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 p-2 text-text-muted hover:text-text"><X size={24} /></button>
      <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="text-center text-lg sm:text-2xl leading-relaxed text-text">
            {cards[idx]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

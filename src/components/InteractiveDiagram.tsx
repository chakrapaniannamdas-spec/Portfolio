import { motion } from "framer-motion";

export default function InteractiveDiagram() {
  return (
    <section id="architecture" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 scroll-mt-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent">Interactive Map</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">ELM Toolchain Architecture</h2>
        </div>
        <a 
          href="/elm-architecture.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-text-muted hover:text-accent border border-border rounded-md px-3 py-1.5"
        >
          Open Fullscreen ↗
        </a>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl overflow-hidden border border-border bg-surface"
      >
        <iframe
          src="/elm-architecture.html"
          title="ELM Toolchain Architecture Diagram"
          className="w-full h-[500px]"
          loading="lazy"
        />
      </motion.div>
      
      <p className="mt-4 text-sm text-text-muted">
        Hover over the nodes to explore the flow. Generated with Archify.
      </p>
    </section>
  );
}

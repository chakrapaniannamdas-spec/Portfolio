import { Mail, Github, Linkedin } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function FinalCTA() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
      <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-text">TO BE CONTINUED<span className="text-accent">...</span></h2>
      <p className="mt-4 text-text-muted">If this looks like the kind of leader you need in the room, let us talk.</p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-bg font-semibold hover:bg-amber-400 transition-colors"><Mail size={16} /> Email</a>
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-2 text-text border border-border hover:border-accent"><Linkedin size={16} /> LinkedIn</a>
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-2 text-text border border-border hover:border-accent"><Github size={16} /> GitHub</a>
      </div>
    </section>
  );
}

import { Menu, FileDown, User } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolio";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" }
];

export default function Header({ onChangeProfile, onOpenResume, activeSection }: { onChangeProfile: () => void; onOpenResume: () => void; activeSection: string }) {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-bold text-text tracking-tight">{portfolioData.name}</button>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className={`px-3 py-1.5 text-sm rounded-md transition-colors ${activeSection === n.id ? "text-accent" : "text-text-muted hover:text-text"}`}>{n.label}</button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenResume} className="hidden sm:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-surface-2 hover:bg-surface text-text border border-border"><FileDown size={14} /> Resume</button>
          <button onClick={onChangeProfile} className="hidden sm:inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-surface-2 hover:bg-surface text-text border border-border"><User size={14} /> Profile</button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-text"><Menu size={20} /></button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-bg px-4 py-3 flex flex-col gap-1">
          {navItems.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left px-3 py-2 text-sm text-text-muted hover:text-text rounded-md hover:bg-surface">{n.label}</button>
          ))}
          <button onClick={onOpenResume} className="text-left px-3 py-2 text-sm text-text-muted hover:text-text rounded-md hover:bg-surface">Resume</button>
          <button onClick={onChangeProfile} className="text-left px-3 py-2 text-sm text-text-muted hover:text-text rounded-md hover:bg-surface">Change Profile</button>
        </nav>
      )}
    </header>
  );
}

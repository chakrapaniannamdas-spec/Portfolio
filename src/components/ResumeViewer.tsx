import { useEffect } from "react";
import { X, Printer } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function ResumeViewer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[85] bg-black/85 backdrop-blur overflow-y-auto" onClick={onClose}>
      <div className="max-w-3xl mx-auto my-8 px-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end gap-2 mb-3">
          <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-accent text-bg font-semibold"><Printer size={14} /> Print / Save PDF</button>
          <button onClick={onClose} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-surface text-text border border-border"><X size={14} /> Close</button>
        </div>
        <div id="resume-sheet" className="bg-white text-black rounded-xl p-8 sm:p-10 shadow-2xl">
          <div className="border-b border-gray-300 pb-4 mb-4">
            <h1 className="text-3xl font-black">{portfolioData.name}</h1>
            <p className="text-sm text-gray-700 mt-1">{portfolioData.role}</p>
            <p className="text-xs text-gray-600 mt-2">{portfolioData.location} · {portfolioData.email} · {portfolioData.linkedin}</p>
          </div>
          <h2 className="font-bold text-sm uppercase tracking-wider mt-6 mb-2">Profile</h2>
          <p className="text-sm leading-relaxed text-gray-800">{portfolioData.about.paragraphs[0]}</p>
          <p className="text-sm leading-relaxed text-gray-800 mt-2">{portfolioData.about.paragraphs[1]}</p>
          <h2 className="font-bold text-sm uppercase tracking-wider mt-6 mb-2">Experience</h2>
          <div className="space-y-3">
            {portfolioData.experience.map((e, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-sm">{e.company}</div>
                  <div className="text-xs text-gray-600">{e.date}</div>
                </div>
                <div className="text-xs text-gray-700 font-medium">{e.role} · {e.location}</div>
                <p className="text-xs leading-relaxed text-gray-800 mt-1">{e.description}</p>
              </div>
            ))}
          </div>
          <h2 className="font-bold text-sm uppercase tracking-wider mt-6 mb-2">Skills</h2>
          {Object.entries(portfolioData.skills).map(([cat, items]) => (
            <div key={cat} className="mb-2 text-xs"><span className="font-semibold">{cat}: </span><span className="text-gray-800">{items.join(", ")}</span></div>
          ))}
          <h2 className="font-bold text-sm uppercase tracking-wider mt-6 mb-2">Certifications</h2>
          {portfolioData.certifications.map((c, i) => (
            <div key={i} className="text-xs text-gray-800"><span className="font-semibold">{c.name}</span> · {c.issuer} · {c.date}</div>
          ))}
          <h2 className="font-bold text-sm uppercase tracking-wider mt-6 mb-2">Education</h2>
          {portfolioData.education.map((e, i) => (
            <div key={i} className="text-xs text-gray-800 mb-1">
              <span className="font-semibold">{e.degree}</span> · {e.institution} · {e.year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

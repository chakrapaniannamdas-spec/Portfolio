import { useState } from "react";
import { portfolioData } from "./data/portfolio";
import Header from "./components/Header";
import OpeningSequence from "./components/OpeningSequence";
import ProfileSelector from "./components/ProfileSelector";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ResumeViewer from "./components/ResumeViewer";
import ContinueWatching from "./components/ContinueWatching";
import { useActiveSection } from "./hooks/useActiveSection";

type Profile = typeof portfolioData.profiles[number];
const DEFAULT_ORDER = ["hero", "about", "experience", "projects", "skills"];

export default function App() {
  const [openingSeen, setOpeningSeen] = useState(() => localStorage.getItem("opening-seen") === "true");
  const [activeProfile, setActiveProfile] = useState<Profile | null>(() => {
    const id = localStorage.getItem("active-profile");
    return portfolioData.profiles.find((p) => p.id === id) ?? null;
  });
  const [showSelector, setShowSelector] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const order = activeProfile?.order ?? DEFAULT_ORDER;
  const activeSection = useActiveSection(order);

  const finishOpening = () => { localStorage.setItem("opening-seen", "true"); setOpeningSeen(true); };
  const handleSelect = (p: Profile) => { localStorage.setItem("active-profile", p.id); setActiveProfile(p); setShowSelector(false); };

  const renderSection = (id: string) => {
    switch (id) {
      case "hero": return <Hero key={id} />;
      case "about": return <About key={id} />;
      case "experience": return <Experience key={id} />;
      case "projects": return <Projects key={id} />;
      case "skills": return <Skills key={id} />;
      default: return null;
    }
  };

  if (!openingSeen) return <OpeningSequence onDone={finishOpening} />;
  if (!activeProfile || showSelector) return <ProfileSelector onSelect={handleSelect} />;

  const rest = order.filter((id) => id !== "hero");

  return (
    <div className="min-h-screen bg-bg text-text">
      <Header onChangeProfile={() => setShowSelector(true)} onOpenResume={() => setShowResume(true)} activeSection={activeSection} />
      <main>
        {renderSection("hero")}
        <ContinueWatching />
        {rest.map((id) => (<div key={id}>{renderSection(id)}</div>))}
        <Certifications />
        <FinalCTA />
      </main>
      <Footer onChangeProfile={() => setShowSelector(true)} />
      {showResume && <ResumeViewer onClose={() => setShowResume(false)} />}
    </div>
  );
}

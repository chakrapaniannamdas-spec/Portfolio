import { portfolioData } from "../data/portfolio";

export default function Footer({ onChangeProfile }: { onChangeProfile: () => void }) {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-2">
        <span>© {new Date().getFullYear()} {portfolioData.name}</span>
        <button onClick={onChangeProfile} className="hover:text-accent">Change profile</button>
      </div>
    </footer>
  );
}

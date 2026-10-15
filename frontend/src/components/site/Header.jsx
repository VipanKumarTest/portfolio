import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Primitives";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { id: "#work", label: "Work" },
  { id: "#skills", label: "Skills" },
  { id: "#about", label: "About" },
  { id: "#contact", label: "Contact" },
];

export const useIST = () => {
  const fmt = () => new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const t = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
};

export const Header = ({ ready }) => {
  const time = useIST();
  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 px-4 md:px-10 pt-4"
      initial={{ y: -80, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : undefined}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.7, 0, 0.2, 1] }}
    >
      <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-[#0a0b0f]/85 backdrop-blur-xl pl-2 pr-2 md:pl-3 py-2">
        <button onClick={() => scrollToId("#top")} className="flex items-center gap-3 text-[#f2f1ec]" data-testid="header-logo-btn">
          <Logo className="w-9 h-9" />
          <span className="hidden sm:block font-display font-bold tracking-tight">Vipan Kumar</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollToId(l.id)} className="link-under text-sm text-zinc-300 hover:text-white transition-colors" data-testid={`nav-${l.label.toLowerCase()}`}>
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center gap-2 font-mono text-xs text-zinc-400" data-testid="header-ist-clock">
            <span className="w-1.5 h-1.5 rounded-full bg-[#54f446] animate-pulse" /> IST {time}
          </span>
          <button
            onClick={() => scrollToId("#contact")}
            className="rounded-full bg-[#54f446] text-[#0a0b0f] text-sm font-semibold px-5 py-2.5 hover:bg-[#f2f1ec] transition-colors"
            data-testid="header-hire-btn"
          >
            Hire me
          </button>
        </div>
      </div>
    </motion.header>
  );
};

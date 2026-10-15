import { ArrowUp } from "lucide-react";
import { useIST } from "./Header";
import { scrollToId } from "@/lib/scroll";

export const Footer = () => {
  const time = useIST();
  return (
    <footer className="relative border-t border-white/10 px-4 md:px-10 pt-16 pb-6 overflow-hidden" data-testid="footer">
      <div className="flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-zinc-400">
        <span data-testid="footer-ist-clock">India · IST {time}</span>
        <span>© {new Date().getFullYear()} Vipan Kumar</span>
        <button onClick={() => scrollToId("#top")} className="inline-flex items-center gap-2 hover:text-[#54f446] transition-colors" data-testid="footer-back-to-top">
          Back to top <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="mt-10 font-display font-extrabold uppercase tracking-[-0.06em] leading-[0.8] text-[19vw] text-[#f2f1ec] whitespace-nowrap select-none">
        Vipan<span className="text-[#54f446]">.</span>Kumar
      </p>
    </footer>
  );
};

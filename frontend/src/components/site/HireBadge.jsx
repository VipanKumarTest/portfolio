import { ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

export const HireBadge = () => (
  <button onClick={() => scrollToId("#contact")} className="group relative w-36 h-36 shrink-0" data-testid="hire-me-badge" aria-label="Hire me">
    <svg viewBox="0 0 200 200" className="absolute inset-0 spin-slow">
      <defs>
        <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <text className="font-mono" fontSize="12" letterSpacing="2.2" fill="#f2f1ec">
        <textPath href="#circ">EXCELLENCE IN WORK ✳ SHARED WISDOM ✳ HIRE ME ✳</textPath>
      </text>
    </svg>
    <span className="absolute inset-[30%] rounded-full bg-[#54f446] text-[#0a0b0f] flex items-center justify-center transition-transform duration-500 group-hover:scale-125">
      <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45" />
    </span>
  </button>
);

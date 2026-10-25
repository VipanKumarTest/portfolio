import { ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const R = 56;
const CIRC = 2 * Math.PI * R;

export const HireBadge = () => (
  <button onClick={() => scrollToId("#contact")} className="group relative w-36 h-36 shrink-0" data-testid="hire-me-badge" aria-label="Hire me">
    <svg viewBox="0 0 200 200" className="absolute inset-0 spin-slow" data-testid="hire-me-badge-text">
      <defs>
        <path id="circ" d={`M100,100 m-${R},0 a${R},${R} 0 1,1 ${R * 2},0 a${R},${R} 0 1,1 -${R * 2},0`} />
      </defs>
      <text className="font-mono" fontSize="12" fontWeight="500" fill="#f2f1ec" textLength={CIRC - 6} lengthAdjust="spacing">
        <textPath href="#circ">EXCELLENCE IN WORK ✳ SHARED WISDOM ✳ HIRE ME ✳</textPath>
      </text>
    </svg>
    <span className="absolute inset-[31%] rounded-full bg-[#54f446] text-[#0a0b0f] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
      <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45" />
    </span>
  </button>
);

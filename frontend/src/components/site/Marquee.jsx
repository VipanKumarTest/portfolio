import { MARQUEE } from "@/data/profile";

const Row = ({ reverse }) => (
  <div className="flex overflow-hidden">
    <div className={`marquee-track flex shrink-0 items-center whitespace-nowrap ${reverse ? "reverse" : ""}`}>
      {[...MARQUEE, ...MARQUEE].map((w, i) => (
        <span key={i} className="flex items-center">
          <span className={`font-display font-extrabold uppercase tracking-tighter text-6xl md:text-8xl px-6 md:px-10 ${i % 2 ? "text-stroke [--stroke:#0a0b0f] [--stroke-fill:#54f446]" : ""}`}>{w}</span>
          <span className="text-4xl md:text-6xl">✳</span>
        </span>
      ))}
    </div>
  </div>
);

export const Marquee = () => (
  <section className="relative bg-[#54f446] text-[#0a0b0f] py-6 md:py-10 -rotate-2 scale-[1.04] my-10" data-testid="marquee-section">
    <Row />
  </section>
);

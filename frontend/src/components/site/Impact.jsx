import { IMPACT } from "@/data/profile";
import { Reveal, SectionHead } from "./Primitives";

export const Impact = () => (
  <section className="bg-[#f2f1ec] text-[#0a0b0f] px-4 md:px-10 py-24 md:py-36" data-testid="impact-section">
    <SectionHead index="01" label="Real impact delivered" dark={false} />
    <Reveal>
      <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[0.95] max-w-5xl">
        Backends that stay fast under pressure — and stay <span className="bg-[#0a0b0f] text-[#54f446] px-3">secure</span> when it matters.
      </h2>
    </Reveal>
    <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/20">
      {IMPACT.map((m, i) => (
        <Reveal key={m.label} delay={i * 0.08} className={`border-r border-b border-black/20 ${m.featured ? "sm:col-span-2" : ""}`}>
          <div className={`group p-6 md:p-8 min-h-[260px] flex flex-col justify-between transition-colors duration-500 ${m.featured ? "bg-[#0a0b0f] text-[#f2f1ec]" : "hover:bg-[#0a0b0f] hover:text-[#f2f1ec]"}`} data-testid={`impact-metric-${i}`}>
            <span className={`font-mono text-xs ${m.featured ? "text-zinc-400" : "text-zinc-600 group-hover:text-zinc-400"}`}>0{i + 1}{m.featured ? " — Currently at Sardeck → Intradiem" : ""}</span>
            <div>
              <p className={`font-display font-extrabold tracking-tighter text-6xl md:text-7xl transition-colors ${m.featured ? "text-[#54f446]" : "group-hover:text-[#54f446]"}`}>{m.value}</p>
              <p className="mt-3 font-semibold">{m.label}</p>
              <p className={`mt-1 text-sm ${m.featured ? "text-zinc-400" : "text-zinc-600 group-hover:text-zinc-400"}`}>{m.note}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

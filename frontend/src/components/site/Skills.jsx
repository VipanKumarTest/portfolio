import { Server, Radio, Database, Smartphone, Cloud, ShieldCheck, Wrench } from "lucide-react";
import { SKILLS } from "@/data/profile";
import { Reveal, SectionHead } from "./Primitives";

const ICONS = { backend: Server, messaging: Radio, databases: Database, frontend: Smartphone, cloud: Cloud, security: ShieldCheck, tools: Wrench };

const Tile = ({ s, i }) => {
  const Icon = ICONS[s.id];
  const big = s.id === "backend";
  const wide = s.id === "tools";
  return (
    <Reveal delay={(i % 3) * 0.08} className={`${s.span} h-full`}>
      <div
        className={`group relative h-full rounded-3xl border border-white/10 p-6 md:p-8 overflow-hidden transition-colors duration-500 hover:border-[#54f446]/60 ${big ? "bg-[#54f446] text-[#0a0b0f] hover:border-[#0a0b0f]" : "bg-[#12141c]"} ${wide ? "lg:flex lg:items-center lg:justify-between lg:gap-10" : "flex flex-col min-h-[220px]"}`}
        data-testid={`skill-tile-${s.id}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Icon className={`w-5 h-5 ${big ? "" : "text-[#54f446]"}`} />
            <h3 className="font-display font-bold text-xl tracking-tight">{s.title}</h3>
          </div>
          {!wide && <span className={`font-mono text-xs ${big ? "text-[#0a0b0f]/70" : "text-zinc-400"}`}>0{i + 1}</span>}
        </div>
        {big && (
          <div className="mt-10 lg:mt-auto lg:pt-16">
            <span className="inline-block rounded-full bg-[#0a0b0f] text-[#54f446] font-mono text-xs uppercase tracking-[0.2em] px-3 py-1.5">{s.level}</span>
            <p className="mt-4 font-display font-extrabold tracking-tighter text-5xl sm:text-6xl xl:text-8xl leading-[0.85]">{s.lead}</p>
          </div>
        )}
        <div className={`flex flex-wrap gap-2 ${big ? "mt-8" : wide ? "mt-6 lg:mt-0" : "mt-8"}`}>
          {s.items.map((it) => (
            <span key={it} className={`rounded-full px-3.5 py-1.5 text-sm border transition-colors ${big ? "border-[#0a0b0f]/30 group-hover:bg-[#0a0b0f]/5" : "border-white/15 text-zinc-200 hover:border-[#54f446] hover:text-[#54f446]"}`}>
              {it}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export const Skills = () => (
  <section id="skills" className="px-4 md:px-10 py-24 md:py-36" data-testid="skills-section">
    <SectionHead index="03" label="Skills & technologies" />
    <Reveal>
      <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[0.95] max-w-4xl mb-14 md:mb-20">
        Deep in secure, scalable backends. <span className="text-zinc-400">Fluent across web &amp; mobile.</span>
      </h2>
    </Reveal>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
      {SKILLS.map((s, i) => <Tile key={s.id} s={s} i={i} />)}
    </div>
  </section>
);

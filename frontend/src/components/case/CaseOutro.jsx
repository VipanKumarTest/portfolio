import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Reveal, SectionHead } from "@/components/site/Primitives";

const OUTCOMES = [
  { t: "Parallel execution", d: "Batch tasks run across worker threads instead of a single queue." },
  { t: "Better efficiency", d: "Batch processing finishes faster with the same work." },
  { t: "Event-driven", d: "Tasks fire on their own triggers and adapt as events change." },
  { t: "Fully automated", d: "Background processing runs without manual intervention." },
];

export const CaseOutro = () => (
  <section className="px-4 md:px-10 py-24 md:py-32" data-testid="case-outcomes">
    <SectionHead index="03" label="What it enabled" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15">
      {OUTCOMES.map((o, i) => (
        <Reveal key={o.t} delay={i * 0.08} className="border-r border-b border-white/15">
          <div className="group p-6 md:p-8 min-h-[220px] flex flex-col justify-between hover:bg-[#54f446] hover:text-[#0a0b0f] transition-colors duration-500" data-testid={`case-outcome-${i}`}>
            <span className="font-mono text-xs text-zinc-400 group-hover:text-[#0a0b0f]/70">0{i + 1}</span>
            <div>
              <p className="font-display font-bold text-2xl tracking-tight">{o.t}</p>
              <p className="mt-2 text-sm text-zinc-300 group-hover:text-[#0a0b0f]/80">{o.d}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
    <p className="mt-6 font-mono text-xs text-zinc-400">Diagrams and code are simplified illustrations; production details are confidential to the client.</p>

    <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link to="/#work" className="group rounded-3xl border border-white/10 p-8 md:p-10 hover:border-[#54f446] transition-colors" data-testid="case-all-work-link">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Back to</span>
        <p className="mt-4 flex items-center gap-4 font-display font-extrabold uppercase tracking-tighter text-4xl md:text-6xl">
          <ArrowLeft className="w-8 h-8 transition-transform group-hover:-translate-x-2" /> All work
        </p>
      </Link>
      <Link to="/#contact" className="group rounded-3xl bg-[#54f446] text-[#0a0b0f] p-8 md:p-10" data-testid="case-contact-link">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0a0b0f]/70">Have a similar challenge?</span>
        <p className="mt-4 flex items-center justify-between gap-4 font-display font-extrabold uppercase tracking-tighter text-4xl md:text-6xl">
          Let's talk <ArrowUpRight className="w-8 h-8 transition-transform group-hover:rotate-45" />
        </p>
      </Link>
    </div>
  </section>
);

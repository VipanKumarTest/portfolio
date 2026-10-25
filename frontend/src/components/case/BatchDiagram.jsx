import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const EASE = [0.7, 0, 0.2, 1];
const CHUNKS = 8;
const WORKERS = 4;

const Block = ({ delay, dur, label }) => (
  <div className="relative h-9 rounded-md bg-white/[0.06] overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-[#54f446] origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: dur, ease: "linear" }}
    />
    <span className="relative z-10 flex h-full items-center px-2 font-mono text-[12px] text-zinc-300 mix-blend-difference">{label}</span>
  </div>
);

export const BatchDiagram = () => {
  const [run, setRun] = useState(0);
  const step = 0.45;
  return (
    <div className="rounded-3xl border border-white/10 bg-[#12141c] p-5 md:p-8" data-testid="batch-diagram">
      <div className="flex items-center justify-between gap-4 mb-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Illustrative — same work, two strategies</p>
        <button onClick={() => setRun((r) => r + 1)} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:border-[#54f446] hover:text-[#54f446] transition-colors" data-testid="batch-replay-btn">
          <RotateCcw className="w-3.5 h-3.5" /> Replay
        </button>
      </div>
      <div key={run} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="font-display font-bold text-xl">Sequential</p>
          <p className="text-sm text-zinc-400 mb-4">One thread works through every chunk in order.</p>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: CHUNKS }).map((_, i) => <Block key={i} delay={i * step} dur={step} label={`C${i + 1}`} />)}
          </div>
          <p className="mt-4 font-mono text-xs text-zinc-400">Time ≈ {CHUNKS} units</p>
        </div>
        <div>
          <p className="font-display font-bold text-xl text-[#54f446]">Multithreaded</p>
          <p className="text-sm text-zinc-400 mb-4">Chunks are split across a pool of {WORKERS} workers.</p>
          <div className="space-y-2">
            {Array.from({ length: WORKERS }).map((_, w) => (
              <div key={w} className="grid grid-cols-[64px_1fr_1fr] gap-2 items-center">
                <span className="font-mono text-xs text-zinc-400">thread-{w + 1}</span>
                <Block delay={0} dur={step} label={`C${w + 1}`} />
                <Block delay={step} dur={step} label={`C${w + 1 + WORKERS}`} />
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-zinc-400">Time ≈ {CHUNKS / WORKERS} units</p>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8, ease: EASE }} className="mt-6 h-px bg-gradient-to-r from-transparent via-[#54f446]/60 to-transparent" />
    </div>
  );
};

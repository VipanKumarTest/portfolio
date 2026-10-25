import { motion } from "framer-motion";
import { BATCH_RESULT } from "@/data/profile";

const Bar = ({ label, value, max, accent, delay }) => (
  <div>
    <div className="flex items-baseline justify-between gap-4 mb-2">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">{label}</span>
      <span className={`font-display font-bold text-xl ${accent ? "text-[#54f446]" : "text-[#f2f1ec]"}`}>{value}</span>
    </div>
    <div className="h-4 rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        className={`h-full rounded-full origin-left ${accent ? "bg-[#54f446]" : "bg-zinc-500"}`}
        style={{ width: `${(max.v / max.of) * 100}%` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay, duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
      />
    </div>
  </div>
);

export const BatchResult = () => {
  const r = BATCH_RESULT;
  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" data-testid="batch-result">
      <div className="lg:col-span-5 rounded-3xl bg-[#54f446] text-[#0a0b0f] p-6 md:p-8 flex flex-col justify-between min-h-[260px]">
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Measured result</p>
        <div>
          <p className="font-display font-extrabold tracking-tighter text-7xl md:text-8xl leading-[0.85]" data-testid="batch-result-value">{r.headline}</p>
          <p className="mt-3 font-semibold text-lg">{r.label}</p>
        </div>
      </div>
      <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#12141c] p-6 md:p-8 flex flex-col justify-center gap-8">
        <Bar label={r.before.label} value={r.before.value} max={{ v: r.before.bar, of: r.scale }} delay={0} />
        <Bar label={r.after.label} value={r.after.value} max={{ v: r.after.bar, of: r.scale }} accent delay={0.3} />
        <p className="text-sm text-zinc-400">{r.note}</p>
      </div>
    </div>
  );
};

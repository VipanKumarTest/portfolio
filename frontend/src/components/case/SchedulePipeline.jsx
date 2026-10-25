import { motion } from "framer-motion";
import { CalendarClock, Zap, Cog, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: CalendarClock, t: "Event defined", d: "A task is created with its own trigger — a time, a recurrence or a condition." },
  { icon: Zap, t: "Scheduled dynamically", d: "Registered at runtime — no redeploy. Updates reschedule it, removals cancel it." },
  { icon: Cog, t: "Triggered", d: "When the trigger fires, the task is handed to a background worker." },
  { icon: CheckCircle2, t: "Executed in background", d: "Work runs automatically, off the request path." },
];

const QUEUE = [
  { name: "One-time event", when: "fires once", state: "Scheduled" },
  { name: "Recurring event", when: "every interval", state: "Running" },
  { name: "Updated event", when: "new trigger", state: "Rescheduled" },
  { name: "Removed event", when: "—", state: "Cancelled" },
];

const stateColor = { Scheduled: "bg-[#0a0b0f] text-[#f2f1ec]", Running: "bg-[#54f446] text-[#0a0b0f]", Rescheduled: "bg-[#ffb547] text-[#0a0b0f]", Cancelled: "border border-black/30 text-zinc-600" };

export const SchedulePipeline = () => (
  <div className="relative" data-testid="schedule-pipeline">
    <div className="hidden md:block absolute top-7 left-[6%] right-[6%] h-px bg-black/20 overflow-hidden">
      <motion.div className="h-full bg-[#0a0b0f] origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 1.6, ease: [0.7, 0, 0.2, 1] }} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
      {STEPS.map((s, i) => (
        <motion.div key={s.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: 0.2 + i * 0.25, duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
          className="relative flex md:block gap-5" data-testid={`schedule-step-${i}`}>
          <span className={`relative z-10 shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${i === 3 ? "bg-[#54f446]" : "bg-[#0a0b0f] text-[#54f446]"}`}>
            <s.icon className="w-5 h-5" />
          </span>
          <div className="md:mt-6">
            <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
            <p className="font-display font-bold text-xl tracking-tight">{s.t}</p>
            <p className="mt-1 text-sm text-zinc-700 leading-relaxed">{s.d}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const EventQueue = () => (
  <div className="rounded-3xl border border-black/15 bg-white/60 backdrop-blur p-5 md:p-7" data-testid="event-queue">
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 mb-5">Illustrative — an event's lifecycle</p>
    <ul className="divide-y divide-black/10">
      {QUEUE.map((q, i) => (
        <motion.li key={q.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.15, duration: 0.6 }}
          className="flex items-center justify-between gap-4 py-3.5">
          <div>
            <p className="font-semibold">{q.name}</p>
            <p className="font-mono text-xs text-zinc-600">{q.when}</p>
          </div>
          <span className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] ${stateColor[q.state]}`}>{q.state}</span>
        </motion.li>
      ))}
    </ul>
  </div>
);

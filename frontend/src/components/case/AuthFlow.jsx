import { motion } from "framer-motion";
import { Smartphone, KeyRound, ShieldCheck, Server } from "lucide-react";

const NODES = [
  { icon: Smartphone, t: "Client", d: "Signs in, receives a short-lived JWT" },
  { icon: KeyRound, t: "Token check", d: "Signature and expiry validated on every call" },
  { icon: ShieldCheck, t: "Role check", d: "Authorization rules decide what the user may do" },
  { icon: Server, t: "Service", d: "Only verified, permitted requests reach the money logic" },
];

export const AuthFlow = () => (
  <div className="relative rounded-3xl border border-white/10 bg-[#12141c] p-6 md:p-10 overflow-hidden" data-testid="auth-flow">
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">Illustrative — the path of every request</p>
    <div className="hidden md:block absolute left-[12%] right-[12%] top-[118px] h-px bg-white/15">
      <motion.span
        className="absolute -top-1.5 w-3 h-3 rounded-full bg-[#54f446] shadow-[0_0_20px_#54f446]"
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {NODES.map((n, i) => (
        <motion.div key={n.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.15, duration: 0.7 }}
          className="relative flex md:flex-col md:items-center md:text-center gap-4" data-testid={`auth-node-${i}`}>
          <span className={`relative z-10 shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center border ${i === 3 ? "bg-[#54f446] text-[#0a0b0f] border-[#54f446]" : "bg-[#0a0b0f] text-[#54f446] border-white/15"}`}>
            <n.icon className="w-5 h-5" />
          </span>
          <div>
            <p className="font-display font-bold text-lg">{n.t}</p>
            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{n.d}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

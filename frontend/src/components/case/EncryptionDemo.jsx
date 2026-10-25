import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock, Fingerprint, CheckCircle2 } from "lucide-react";

const PLAIN = '{ "userId": "U-1024", "amount": 500, "type": "reward" }';
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const scramble = (s) => s.split("").map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)])).join("");

const Cipher = () => {
  const [text, setText] = useState(PLAIN);
  const [locked, setLocked] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setLocked((l) => !l), 2600);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (!locked) {
      setText(PLAIN);
      return undefined;
    }
    const t = setInterval(() => setText(scramble(PLAIN)), 90);
    return () => clearInterval(t);
  }, [locked]);
  return (
    <div className="rounded-2xl bg-[#0a0b0f] text-[#f2f1ec] p-5" data-testid="cipher-demo">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Payload</span>
        <span className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] transition-colors ${locked ? "bg-[#54f446] text-[#0a0b0f]" : "bg-white/10 text-zinc-300"}`}>
          {locked ? "AES encrypted" : "Plain JSON"}
        </span>
      </div>
      <p className={`font-mono text-sm break-all min-h-[3rem] ${locked ? "text-[#54f446]" : "text-zinc-200"}`}>{text}</p>
    </div>
  );
};

const STEPS = [
  { icon: Lock, t: "Encrypt", d: "Sensitive payloads are encrypted with AES before they leave the client." },
  { icon: Fingerprint, t: "Sign", d: "An HMAC signature is attached so any tampering is detectable." },
  { icon: CheckCircle2, t: "Verify & decrypt", d: "The server rejects bad signatures, then decrypts only trusted data." },
];

export const EncryptionDemo = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
    <div className="lg:col-span-5 rounded-3xl border border-black/15 bg-white/60 p-5 md:p-7 flex flex-col gap-5">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">Illustrative — sample data</p>
      <Cipher />
    </div>
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {STEPS.map((s, i) => (
        <motion.div key={s.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.15, duration: 0.7 }}
          className="rounded-3xl bg-[#0a0b0f] text-[#f2f1ec] p-6 flex flex-col justify-between min-h-[220px]" data-testid={`encrypt-step-${i}`}>
          <div className="flex items-center justify-between">
            <s.icon className="w-5 h-5 text-[#54f446]" />
            <span className="font-mono text-xs text-zinc-400">0{i + 1}</span>
          </div>
          <div>
            <p className="font-display font-bold text-xl">{s.t}</p>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{s.d}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

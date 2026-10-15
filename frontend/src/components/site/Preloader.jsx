import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Primitives";

export const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let id;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 1400);
      setCount(Math.round(p * 100));
      if (p < 1) id = requestAnimationFrame(tick);
      else setTimeout(onDone, 250);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [onDone]);

  return (
    <motion.div className="fixed inset-0 z-[100]" data-testid="preloader" exit={{ pointerEvents: "none" }}>
      <motion.div
        className="absolute inset-0 bg-[#54f446]"
        exit={{ y: "-100%" }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.7, 0, 0.2, 1] }}
      />
      <motion.div
        className="absolute inset-0 bg-[#0a0b0f] flex flex-col justify-between p-6 md:p-10"
        exit={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
      >
        <div className="flex items-center gap-3 text-[#f2f1ec]">
          <Logo className="w-10 h-10" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-zinc-400">Excellence in work · Shared wisdom · Enterprising spirit</span>
        </div>
        <div className="flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">Loading portfolio</span>
          <span className="font-display font-extrabold text-[28vw] md:text-[18vw] leading-[0.8] tracking-tighter text-[#f2f1ec]" data-testid="preloader-count">
            {count}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

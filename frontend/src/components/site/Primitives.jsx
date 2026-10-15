import { motion } from "framer-motion";

const EASE = [0.7, 0, 0.2, 1];

export const Logo = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="currentColor" opacity="0.06" />
    <path d="M12 16h9l9 24 9-24" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
    <path d="M42 16v32M52 16 42 32l10 16" fill="none" stroke="#54F446" strokeWidth="6" strokeLinejoin="round" strokeLinecap="square" />
  </svg>
);

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, play = true, className = "" }) => (
  <span className={`block overflow-hidden pb-[0.06em] ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "110%", rotate: 3 }}
      animate={play ? { y: "0%", rotate: 0 } : undefined}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const Overline = ({ children, dark = true, className = "" }) => (
  <p className={`font-mono text-xs tracking-[0.25em] uppercase ${dark ? "text-[#54f446]" : "text-[#0a0b0f]"} ${className}`}>
    {children}
  </p>
);

export const SectionHead = ({ index, label, dark = true }) => (
  <div className={`flex items-center justify-between border-b pb-4 mb-12 md:mb-20 ${dark ? "border-white/15" : "border-black/20"}`}>
    <Overline dark={dark}>({index}) {label}</Overline>
    <span className={`font-mono text-xs ${dark ? "text-zinc-400" : "text-zinc-600"}`}>VK/01</span>
  </div>
);

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { MaskLine, Overline } from "./Primitives";
import { HireBadge } from "./HireBadge";
import { CodeCard } from "./CodeCard";
import { scrollToId } from "@/lib/scroll";

const WORDS = ["Web.", "APIs.", "Android."];

const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="grid overflow-hidden pb-[0.12em] text-[#54f446]" data-testid="hero-rotating-word">
      {WORDS.map((w, k) => (
        <motion.span
          key={w}
          className="[grid-area:1/1]"
          animate={{ y: k === i ? "0%" : "110%", opacity: k === i ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
};

export const Hero = ({ ready }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="top" ref={ref} onMouseMove={onMove} className="relative min-h-screen overflow-hidden pt-28 md:pt-32 pb-10 px-4 md:px-10 flex flex-col" data-testid="hero-section">
      <div className="absolute inset-0 hairline-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#54f446]/10 blur-[120px]" />

      <div className="relative flex items-start justify-between gap-6">
        <MaskLine play={ready} delay={0.3}><Overline>Backend Developer — Spring Boot</Overline></MaskLine>
        <MaskLine play={ready} delay={0.4} className="hidden md:block"><span className="font-mono text-xs text-zinc-400">India · Available for work</span></MaskLine>
      </div>

      <h1 className="relative font-display font-extrabold uppercase tracking-[-0.06em] leading-[0.82] text-[22vw] md:text-[15vw] mt-10 md:mt-6" data-testid="hero-name">
        <motion.span style={{ x: xLeft }} className="block"><MaskLine play={ready} delay={0.45}>Vipan</MaskLine></motion.span>
        <motion.span style={{ x: xRight }} className="block md:pl-[18vw]">
          <MaskLine play={ready} delay={0.58}><span className="text-stroke">Kumar</span><span className="text-[#54f446]">.</span></MaskLine>
        </motion.span>
      </h1>

      <div className="relative mt-auto pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-5">
          <MaskLine play={ready} delay={0.8}>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight">I build things for the</p>
          </MaskLine>
          <MaskLine play={ready} delay={0.9}>
            <div className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none tracking-tighter"><RotatingWord /></div>
          </MaskLine>
          <motion.p initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : undefined} transition={{ delay: 1.1, duration: 0.8 }} className="mt-5 text-zinc-300 max-w-md text-sm md:text-base leading-relaxed">
            Software Developer at Benepik. Secure, scalable backends in Spring Boot — and smooth front-ends with React.js and React Native. Currently levelling up on Azure &amp; AWS.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 1.25, duration: 0.8 }} className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollToId("#work")} className="group inline-flex items-center gap-3 rounded-full bg-[#f2f1ec] text-[#0a0b0f] px-6 py-3.5 font-semibold hover:bg-[#54f446] transition-colors" data-testid="hero-view-work-btn">
              Check out my work <ArrowDownRight className="w-4 h-4 transition-transform group-hover:rotate-[-45deg]" />
            </button>
            <button onClick={() => scrollToId("#contact")} className="rounded-full border border-white/20 px-6 py-3.5 hover:border-[#54f446] hover:text-[#54f446] transition-colors" data-testid="hero-contact-btn">
              Get in touch
            </button>
          </motion.div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 [perspective:1200px]">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={ready ? { opacity: 1, y: 0 } : undefined} transition={{ delay: 1, duration: 1.1, ease: [0.7, 0, 0.2, 1] }}>
            <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}>
              <CodeCard />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute right-4 md:right-10 top-36 md:top-[30%] scale-[0.6] md:scale-100 origin-right"
        initial={{ scale: 0, rotate: -90 }}
        animate={ready ? { scale: 1, rotate: 0 } : undefined}
        transition={{ delay: 1.2, duration: 1, ease: [0.7, 0, 0.2, 1] }}
      >
        <HireBadge />
      </motion.div>
    </section>
  );
};

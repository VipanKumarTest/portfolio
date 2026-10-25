import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { MaskLine, Overline } from "@/components/site/Primitives";

const META = [
  { k: "Role", v: "Software Engineer — Backend" },
  { k: "Company", v: "Sardeck Services Pvt. Ltd." },
  { k: "Client", v: "Intradiem (US)" },
  { k: "Scale", v: "300K+ daily users" },
  { k: "Stack", v: "Java · Spring Boot · Microservices" },
];

export const CaseHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-10" data-testid="case-hero">
      <div className="absolute inset-0 hairline-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#54f446]/10 blur-[120px]" />
      <div className="relative flex items-center justify-between gap-6">
        <Link to="/#work" className="group inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-[#54f446] transition-colors" data-testid="case-back-link">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> All work
        </Link>
        <Overline>Case study · 01</Overline>
      </div>

      <h1 className="relative mt-12 md:mt-16 font-display font-extrabold uppercase tracking-[-0.06em] leading-[0.82] text-[16vw]" data-testid="case-title">
        <motion.span style={{ x }} className="block"><MaskLine delay={0.1}>Intradiem</MaskLine></motion.span>
      </h1>
      <div className="relative mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <MaskLine delay={0.3}>
            <p className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Workforce automation at <span className="text-[#54f446]">enterprise scale</span> — made parallel and event-driven.
            </p>
          </MaskLine>
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="lg:col-span-4 lg:col-start-9 text-zinc-300 leading-relaxed">
          How I contributed to Intradiem's microservices — speeding up batch work with multithreading and building dynamic event scheduling for automated background processing.
        </motion.p>
      </div>

      <motion.dl initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
        className="relative mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-5 border-t border-l border-white/15" data-testid="case-meta">
        {META.map((m) => (
          <div key={m.k} className="border-r border-b border-white/15 p-5 md:p-6">
            <dt className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">{m.k}</dt>
            <dd className="mt-2 font-display font-semibold text-lg leading-snug">{m.v}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
};

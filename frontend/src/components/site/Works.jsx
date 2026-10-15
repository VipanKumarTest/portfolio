import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, FILTERS } from "@/data/profile";
import { Reveal, SectionHead } from "./Primitives";
import { ProjectVisual } from "./ProjectVisual";

const Row = ({ p, i, onHover }) => (
  <motion.a
    layout
    href={p.href}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => onHover(p)}
    onMouseLeave={() => onHover(null)}
    className="group block border-b border-white/15 py-6 md:py-8"
    data-testid={`project-row-${p.id}`}
  >
    <div className="md:hidden mb-5 rounded-xl overflow-hidden"><ProjectVisual p={p} className="aspect-[4/3]" /></div>
    <div className="grid grid-cols-12 items-center gap-4">
      <span className="col-span-2 md:col-span-1 font-mono text-xs text-zinc-400">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="col-span-10 md:col-span-6 font-display font-bold tracking-tighter text-3xl sm:text-4xl md:text-6xl leading-none transition-transform duration-500 group-hover:translate-x-4 group-hover:text-[#54f446]">
        {p.title}
      </h3>
      <span className="col-span-6 col-start-3 md:col-start-auto md:col-span-3 text-sm text-zinc-300">{p.cat} <span className="text-zinc-500">/</span> {p.tool}</span>
      <span className="col-span-4 md:col-span-2 flex justify-end items-center gap-2 text-sm text-zinc-300">
        <span className="hidden lg:inline opacity-0 group-hover:opacity-100 transition-opacity">{p.cta}</span>
        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#54f446] group-hover:text-[#0a0b0f] group-hover:border-[#54f446] transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </span>
    </div>
  </motion.a>
);

export const Works = () => {
  const [filter, setFilter] = useState("all");
  const [hovered, setHovered] = useState(null);
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const list = PROJECTS.filter((p) => filter === "all" || p.type === filter);

  return (
    <section id="work" className="relative px-4 md:px-10 py-24 md:py-36" onMouseMove={(e) => { x.set(e.clientX); y.set(e.clientY); }} data-testid="works-section">
      <SectionHead index="02" label="Selected works" />
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <Reveal>
          <h2 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-6xl lg:text-8xl leading-[0.85]">
            Things I've<br /><span className="text-stroke">shipped</span><span className="text-[#54f446]">.</span>
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-2" data-testid="works-filters">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2 text-sm border transition-colors ${filter === f.id ? "bg-[#f2f1ec] text-[#0a0b0f] border-[#f2f1ec]" : "border-white/20 text-zinc-300 hover:border-[#54f446]"}`}
              data-testid={`works-filter-${f.id}`}
            >
              {f.label} <sup className="font-mono">{f.id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.type === f.id).length}</sup>
            </button>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        {list.map((p, i) => <Row key={p.id} p={p} i={i} onHover={setHovered} />)}
      </div>
      <motion.div
        className="hidden md:block pointer-events-none fixed left-0 top-0 z-40 w-[360px] aspect-[4/3] -ml-[180px] -mt-[135px] rounded-2xl overflow-hidden"
        style={{ x, y }}
        animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0, rotate: hovered ? -4 : 0 }}
        transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
        data-testid="works-hover-preview"
      >
        {hovered && <ProjectVisual p={hovered} className="w-full h-full" />}
      </motion.div>
    </section>
  );
};

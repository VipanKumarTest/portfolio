const Lines = ({ hue, n = 4 }) => (
  <div className="space-y-2">
    {Array.from({ length: n }).map((_, i) => (
      <div key={i} className="h-2 rounded-full" style={{ width: `${90 - i * 17}%`, background: i === 0 ? hue : "rgba(255,255,255,0.12)" }} />
    ))}
  </div>
);

const Phone = ({ p }) => (
  <div className="w-[38%] aspect-[9/19] rounded-[1.6rem] border-[6px] border-[#1d2030] bg-[#0a0b0f] p-3 flex flex-col gap-3 shadow-2xl">
    <div className="mx-auto w-10 h-1.5 rounded-full bg-[#1d2030]" />
    <div className="rounded-xl aspect-square" style={{ background: `linear-gradient(135deg, ${p.hue}, transparent)` }} />
    <Lines hue={p.hue} />
    <div className="mt-auto h-7 rounded-lg" style={{ background: p.hue }} />
  </div>
);

const Browser = ({ p }) => (
  <div className="w-[82%] rounded-xl border border-white/10 bg-[#0a0b0f] overflow-hidden shadow-2xl">
    <div className="flex gap-1.5 px-3 py-2 border-b border-white/10">
      {[0, 1, 2].map((i) => <span key={i} className="w-2 h-2 rounded-full bg-white/20" />)}
    </div>
    <div className="p-4 grid grid-cols-3 gap-3">
      <div className="col-span-2"><Lines hue={p.hue} n={3} /></div>
      <div className="row-span-2 rounded-lg" style={{ background: `linear-gradient(160deg, ${p.hue}, transparent)` }} />
      {[0, 1].map((i) => <div key={i} className="aspect-[4/3] rounded-lg bg-white/[0.06]" />)}
    </div>
  </div>
);

const Canvas = ({ p }) => (
  <div className="relative w-[82%] aspect-[4/3] rounded-xl border border-dashed border-white/25">
    <span className="absolute -top-3 left-3 font-mono text-[10px] px-1.5 bg-[#12141c] text-zinc-400">Frame 01</span>
    <div className="absolute left-[8%] top-[14%] w-[38%] aspect-square rounded-full" style={{ background: p.hue }} />
    <div className="absolute right-[10%] top-[20%] w-[34%] h-[46%] rounded-lg border-2" style={{ borderColor: p.hue }} />
    <div className="absolute left-[8%] right-[10%] bottom-[12%]"><Lines hue={p.hue} n={2} /></div>
    <span className="absolute right-[10%] top-[20%] w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white" />
  </div>
);

const SHAPES = { mobile: Phone, web: Browser, design: Canvas };

export const ProjectVisual = ({ p, className = "" }) => {
  const Shape = SHAPES[p.type];
  return (
    <div className={`relative overflow-hidden bg-[#12141c] flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at 70% 20%, ${p.hue}55, transparent 60%)` }} />
      <span className="absolute left-4 bottom-2 font-display font-extrabold uppercase tracking-tighter text-white/[0.06] text-7xl leading-none whitespace-nowrap">{p.title}</span>
      <div className="relative w-full h-full flex items-center justify-center py-6"><Shape p={p} /></div>
    </div>
  );
};

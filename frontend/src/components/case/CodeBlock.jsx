const TOKEN = /(\/\/.*$|"[^"]*"|@\w+|\b(?:public|private|final|new|return|class|void|static)\b|\b[A-Z]\w*\b)/g;

const colorOf = (t) => {
  if (t.startsWith("//")) return "#71717a";
  if (t.startsWith('"')) return "#ffb547";
  if (t.startsWith("@")) return "#64ffda";
  if (/^[A-Z]/.test(t)) return "#f2f1ec";
  return "#c792ea";
};

const Line = ({ text }) =>
  text.split(TOKEN).map((p, i) =>
    !p ? null : i % 2 ? <span key={i} style={{ color: colorOf(p) }}>{p}</span> : <span key={i} className="text-zinc-300">{p}</span>
  );

export const CodeBlock = ({ file, code, testid }) => (
  <div className="rounded-2xl border border-white/10 bg-[#12141c] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]" data-testid={testid}>
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 font-mono text-xs text-zinc-400">{file}</span>
    </div>
    <pre className="font-mono text-[12px] md:text-[13px] leading-6 p-5 overflow-x-auto">
      {code.split("\n").map((l, i) => (
        <div key={i} className="flex whitespace-pre">
          <span className="w-7 shrink-0 text-zinc-500 select-none">{i + 1}</span>
          <span><Line text={l} /></span>
        </div>
      ))}
    </pre>
  </div>
);

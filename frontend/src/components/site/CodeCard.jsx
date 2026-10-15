const LINES = [
  [["#c792ea", "@RestController"]],
  [["#c792ea", "public class "], ["#f2f1ec", "VipanKumar "], ["#a1a1aa", "{"]],
  [["#a1a1aa", "  "], ["#64ffda", "@GetMapping"], ["#a1a1aa", "(\"/build\")"]],
  [["#a1a1aa", "  "], ["#c792ea", "Stack "], ["#f2f1ec", "build"], ["#a1a1aa", "() {"]],
  [["#a1a1aa", "    return Stack."], ["#54f446", "of"], ["#a1a1aa", "("]],
  [["#ffb547", "      \"Spring Boot\", \"Kafka\","]],
  [["#ffb547", "      \"React\", \"React Native\""]],
  [["#a1a1aa", "    );"]],
  [["#a1a1aa", "  }"]],
  [["#a1a1aa", "}"]],
];

export const CodeCard = () => (
  <div className="relative rounded-2xl border border-white/10 bg-[#12141c]/80 backdrop-blur-xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden" data-testid="hero-code-card">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 font-mono text-xs text-zinc-400">VipanKumar.java</span>
    </div>
    <pre className="font-mono text-[12px] md:text-[13px] leading-6 p-5 overflow-x-auto">
      {LINES.map((line, i) => (
        <div key={i} className="flex">
          <span className="w-6 text-zinc-500 select-none">{i + 1}</span>
          <span>{line.map(([c, t], k) => <span key={k} style={{ color: c }}>{t}</span>)}</span>
        </div>
      ))}
    </pre>
    <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#54f446] to-transparent" />
  </div>
);

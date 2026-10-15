import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Copy, Loader2 } from "lucide-react";
import { PROFILE } from "@/data/profile";
import { MaskLine, Reveal, SectionHead } from "./Primitives";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TYPES = ["Backend / API", "Full-Stack Web", "Android App", "Full-time role"];

const Field = ({ label, ...props }) => (
  <label className="block border-b border-white/20 focus-within:border-[#54f446] transition-colors">
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">{label}</span>
    {props.rows ? (
      <textarea {...props} className="w-full bg-transparent py-3 text-lg outline-none resize-none placeholder:text-zinc-500" />
    ) : (
      <input {...props} className="w-full bg-transparent py-3 text-lg outline-none placeholder:text-zinc-500" />
    )}
  </label>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", project_type: TYPES[0] });
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent — I'll get back to you soon.");
      setForm({ name: "", email: "", message: "", project_type: TYPES[0] });
    } catch (err) {
      toast.error("Couldn't send right now. Please email me directly.");
    } finally {
      setBusy(false);
    }
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(PROFILE.email); toast.success("Email copied"); } catch { toast.error("Copy failed"); }
  };

  return (
    <section id="contact" className="px-4 md:px-10 py-24 md:py-36" data-testid="contact-section">
      <SectionHead index="05" label="Contact" />
      <h2 className="font-display font-extrabold uppercase tracking-tighter text-[14vw] md:text-[9vw] leading-[0.85]">
        <MaskLine>Let's build</MaskLine>
        <MaskLine delay={0.1}><span className="text-stroke">something</span> <span className="text-[#54f446]">real.</span></MaskLine>
      </h2>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4 space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Email</p>
            <div className="mt-2 flex items-center gap-3 flex-wrap">
              <a href={`mailto:${PROFILE.email}?subject=Hiring%20Inquiry`} className="link-under text-xl md:text-2xl font-display font-semibold break-all" data-testid="contact-email-link">{PROFILE.email}</a>
              <button onClick={copy} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#54f446] hover:text-[#54f446] transition-colors" data-testid="contact-copy-email-btn" aria-label="Copy email">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">Elsewhere</p>
            <ul className="mt-3 space-y-2">
              {PROFILE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-lg hover:text-[#54f446] transition-colors" data-testid={`contact-social-${s.label.toLowerCase()}`}>
                    {s.label} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
          <form onSubmit={submit} className="space-y-8" data-testid="contact-form">
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button type="button" key={t} onClick={() => setForm({ ...form, project_type: t })}
                  className={`rounded-full px-4 py-2 text-sm border transition-colors ${form.project_type === t ? "bg-[#54f446] text-[#0a0b0f] border-[#54f446]" : "border-white/20 text-zinc-300 hover:border-[#54f446]"}`}
                  data-testid={`contact-type-${t.split(" ")[0].toLowerCase()}`}>{t}</button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="Your name" required value={form.name} onChange={set("name")} placeholder="Jane Doe" data-testid="contact-name-input" />
              <Field label="Email" type="email" required value={form.email} onChange={set("email")} placeholder="jane@company.com" data-testid="contact-email-input" />
            </div>
            <Field label="Message" rows={4} required minLength={5} value={form.message} onChange={set("message")} placeholder="Tell me about your project…" data-testid="contact-message-input" />
            <button type="submit" disabled={busy} className="group inline-flex items-center gap-3 rounded-full bg-[#54f446] text-[#0a0b0f] pl-7 pr-2 py-2 font-semibold hover:bg-[#f2f1ec] transition-colors disabled:opacity-60" data-testid="contact-submit-btn">
              {busy ? "Sending…" : "Send message"}
              <span className="w-10 h-10 rounded-full bg-[#0a0b0f] text-[#54f446] flex items-center justify-center">
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />}
              </span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE } from "@/data/profile";
import { Reveal, SectionHead } from "./Primitives";

export const About = () => (
  <section id="about" className="bg-[#f2f1ec] text-[#0a0b0f] px-4 md:px-10 py-24 md:py-36" data-testid="about-section">
    <SectionHead index="04" label="About & experience" dark={false} />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <Reveal>
          <div className="relative aspect-[4/5] max-w-sm rounded-3xl bg-[#0a0b0f] overflow-hidden flex items-end p-6" data-testid="about-portrait-placeholder">
            <span className="absolute -right-6 -top-10 font-display font-extrabold text-[16rem] leading-none text-[#54f446] tracking-tighter">VK</span>
            <div className="relative">
              <p className="font-display text-[#f2f1ec] text-2xl font-bold">Vipan Kumar</p>
              <p className="font-mono text-xs text-zinc-400 mt-1">Software Engineer · Sardeck Services</p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="lg:col-span-7">
        <Reveal>
          <p className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
            Hello! I'm Vipan — I turn ideas into reliable, real-world software across web, mobile and backend systems.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-zinc-700 leading-relaxed">
            <p>I'm a Software Engineer at Sardeck Services Pvt. Ltd., where I work on microservices for Intradiem — a US workforce automation platform used by 300K+ people every day. Before that I built secure, enterprise-grade systems at Benepik. I hold an MCA (2023–2025) and a BCA (2020–2023).</p>
            <p>Alongside backend work, I use React.js and React Native to craft smooth, intuitive experiences. I keep improving through learning and hands-on experimentation — and I'd love to collaborate on impactful projects.</p>
          </div>
        </Reveal>
        <div className="mt-16 border-t border-black/20">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className="group grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-black/20" data-testid={`experience-item-${i}`}>
                <span className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 pt-2">{e.when}</span>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight">{e.role}</h3>
                    {e.href && (
                      <a href={e.href} target="_blank" rel="noopener noreferrer" className="shrink-0 w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-[#0a0b0f] hover:text-[#54f446] transition-colors" data-testid={`experience-link-${i}`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="mt-1 font-semibold">{e.org}{e.client && <span className="ml-2 inline-block rounded-full bg-[#0a0b0f] text-[#54f446] font-mono text-xs uppercase tracking-[0.15em] px-2.5 py-1 align-middle">{e.client}</span>}</p>
                  <p className="mt-2 text-zinc-700 max-w-xl">{e.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

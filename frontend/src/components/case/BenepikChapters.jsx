import { Reveal, SectionHead } from "@/components/site/Primitives";
import { Point } from "./Chapters";
import { AuthFlow } from "./AuthFlow";
import { EncryptionDemo } from "./EncryptionDemo";
import { CodeBlock } from "./CodeBlock";
import { motion } from "framer-motion";

const SECURITY_CODE = `// Illustrative pattern — simplified, not production code
@Bean
public SecurityFilterChain api(HttpSecurity http) throws Exception {
  return http
      .csrf(csrf -> csrf.disable())
      .sessionManagement(s -> s.sessionCreationPolicy(STATELESS))
      .authorizeHttpRequests(auth -> auth
          .requestMatchers("/auth/**").permitAll()
          .requestMatchers("/wallet/**").hasRole("USER")
          .anyRequest().authenticated())
      .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
      .build();
}`;

const HMAC_CODE = `// Illustrative pattern — simplified, not production code
boolean verify(String body, String signature, byte[] key) {
  Mac mac = Mac.getInstance("HmacSHA256");
  mac.init(new SecretKeySpec(key, "HmacSHA256"));
  byte[] expected = mac.doFinal(body.getBytes(UTF_8));
  return MessageDigest.isEqual(expected, Base64.getDecoder().decode(signature));
}`;

const TX = ["Request received", "Authenticated & authorized", "Validated & processed", "Recorded & confirmed"];

export const BPOverview = () => (
  <section className="bg-[#f2f1ec] text-[#0a0b0f] px-4 md:px-10 py-24 md:py-32" data-testid="case-overview">
    <SectionHead index="00" label="Overview" dark={false} />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <Reveal className="lg:col-span-7">
        <h2 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
          When an app moves <span className="bg-[#0a0b0f] text-[#54f446] px-3">money</span>, security isn't a feature — it's the foundation.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9 space-y-6">
        <Point k="The product" dark={false}>Benepik Plus is an application that handles monetary operations, so every login, request and transaction has to be trustworthy.</Point>
        <Point k="My part" dark={false}>I strengthened its security end to end — authentication, authorization, API encryption — and built scalable transaction processing workflows.</Point>
      </Reveal>
    </div>
  </section>
);

export const AuthChapter = () => (
  <section className="px-4 md:px-10 py-24 md:py-32" data-testid="case-auth">
    <SectionHead index="01" label="Authentication & authorization" />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
      <Reveal className="lg:col-span-6">
        <h2 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-6xl lg:text-7xl leading-[0.88]">
          Every request<br /><span className="text-stroke">proves</span> itself<span className="text-[#54f446]">.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 space-y-6">
        <Point k="Challenge">Monetary endpoints can't rely on trust — each call must prove who is asking and whether they're allowed.</Point>
        <Point k="What I built">Robust token-based authentication with JWT &amp; OAuth2 on Spring Security, plus role-based authorization in front of sensitive operations.</Point>
        <Point k="Result">Only verified, permitted requests ever reach the code that moves money.</Point>
      </Reveal>
    </div>
    <Reveal><AuthFlow /></Reveal>
    <Reveal className="mt-6"><CodeBlock file="SecurityConfig.java" code={SECURITY_CODE} testid="security-code" /></Reveal>
  </section>
);

export const EncryptionChapter = () => (
  <section className="bg-[#f2f1ec] text-[#0a0b0f] px-4 md:px-10 py-24 md:py-32" data-testid="case-encryption">
    <SectionHead index="02" label="API encryption & integrity" dark={false} />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
      <Reveal className="lg:col-span-6">
        <h2 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-6xl lg:text-7xl leading-[0.88]">
          Unreadable.<br /><span className="text-stroke [--stroke:#0a0b0f] [--stroke-fill:#f2f1ec]">Untouchable</span>.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 space-y-6">
        <Point k="Challenge" dark={false}>Payment data in transit must stay private and must not be altered on the way.</Point>
        <Point k="What I built" dark={false}>API encryption with AES for payload confidentiality and HMAC validation for request integrity.</Point>
        <Point k="Result" dark={false}>Intercepted traffic is unreadable, and tampered requests are rejected before processing.</Point>
      </Reveal>
    </div>
    <Reveal><EncryptionDemo /></Reveal>
    <Reveal className="mt-6"><CodeBlock file="SignatureVerifier.java" code={HMAC_CODE} testid="hmac-code" /></Reveal>
  </section>
);

export const TxChapter = () => (
  <section className="px-4 md:px-10 py-24 md:py-32" data-testid="case-transactions">
    <SectionHead index="03" label="Transaction workflows" />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
      <Reveal className="lg:col-span-6">
        <h2 className="font-display font-extrabold uppercase tracking-tighter text-5xl sm:text-6xl lg:text-7xl leading-[0.88]">
          Secure, at<br /><span className="text-[#54f446]">scale</span>.
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 space-y-6">
        <Point k="What I built">Scalable transaction processing workflows for secure monetary operations — every step checked before money moves.</Point>
      </Reveal>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4" data-testid="tx-steps">
      {TX.map((t, i) => (
        <motion.div key={t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: i * 0.15, duration: 0.7 }}
          className={`rounded-3xl p-6 min-h-[180px] flex flex-col justify-between ${i === 3 ? "bg-[#54f446] text-[#0a0b0f]" : "bg-[#12141c] border border-white/10"}`}>
          <span className={`font-mono text-xs ${i === 3 ? "text-[#0a0b0f]/70" : "text-zinc-400"}`}>Step 0{i + 1}</span>
          <p className="font-display font-bold text-2xl tracking-tight">{t}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

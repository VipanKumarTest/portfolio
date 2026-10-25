import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CaseHero } from "@/components/case/CaseHero";
import { BPOverview, AuthChapter, EncryptionChapter, TxChapter } from "@/components/case/BenepikChapters";
import { CaseOutro } from "@/components/case/CaseOutro";

const META = [
  { k: "Role", v: "Software Developer — Backend" },
  { k: "Company", v: "Benepik Technology" },
  { k: "Domain", v: "Secure monetary operations" },
  { k: "Security", v: "JWT & OAuth2 · AES · HMAC" },
  { k: "Stack", v: "Java · Spring Boot · Spring Security" },
];

const OUTCOMES = [
  { t: "Verified access", d: "Every request authenticated with tokens before it's served." },
  { t: "Least privilege", d: "Role-based authorization guards sensitive operations." },
  { t: "Private & tamper-proof", d: "AES-encrypted payloads with HMAC integrity checks." },
  { t: "Scalable transactions", d: "Workflows built to grow while keeping money movements secure." },
];

export default function CaseBenepikPlus() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Benepik Plus Case Study — Vipan Kumar";
    window.__lenis?.start();
    return () => { document.title = prev; };
  }, []);

  return (
    <>
      <Header ready />
      <main data-testid="case-benepik-page">
        <CaseHero
          index="02"
          title="Benepik Plus"
          tagline={<>Hardening an app that <span className="text-[#54f446]">moves money</span> — from login to ledger.</>}
          intro="How I secured Benepik Plus with token-based authentication, role-based authorization, encrypted and signed APIs, and scalable transaction workflows."
          meta={META}
        />
        <BPOverview />
        <AuthChapter />
        <EncryptionChapter />
        <TxChapter />
        <CaseOutro index="04" outcomes={OUTCOMES} next={{ to: "/work/intradiem", kicker: "Previous case study", label: "Intradiem" }} />
      </main>
      <Footer />
    </>
  );
}

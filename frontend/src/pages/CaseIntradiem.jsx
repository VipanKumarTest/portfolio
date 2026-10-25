import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CaseHero } from "@/components/case/CaseHero";
import { Overview, BatchChapter, ScheduleChapter } from "@/components/case/Chapters";
import { CaseOutro } from "@/components/case/CaseOutro";

export default function CaseIntradiem() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Intradiem Case Study — Vipan Kumar";
    window.__lenis?.start();
    return () => { document.title = prev; };
  }, []);

  return (
    <>
      <Header ready />
      <main data-testid="case-intradiem-page">
        <CaseHero />
        <Overview />
        <BatchChapter />
        <ScheduleChapter />
        <CaseOutro />
      </main>
      <Footer />
    </>
  );
}

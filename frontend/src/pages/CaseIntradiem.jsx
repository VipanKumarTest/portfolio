import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CaseHero } from "@/components/case/CaseHero";
import { Overview, BatchChapter, ScheduleChapter } from "@/components/case/Chapters";
import { CaseOutro } from "@/components/case/CaseOutro";

const META = [
  { k: "Role", v: "Software Engineer — Backend" },
  { k: "Company", v: "Sardeck Services Pvt. Ltd." },
  { k: "Client", v: "Intradiem (US)" },
  { k: "Scale", v: "300K+ daily users" },
  { k: "Stack", v: "Java · Spring Boot · Microservices" },
];

const OUTCOMES = [
  { t: "Parallel execution", d: "Batch tasks run across worker threads instead of a single queue." },
  { t: "60–70% faster batches", d: "Better batch processing performance with the same workload." },
  { t: "Event-driven", d: "Tasks fire on their own triggers and adapt as events change." },
  { t: "Fully automated", d: "Background processing runs without manual intervention." },
];

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
        <CaseHero
          index="01"
          title="Intradiem"
          tagline={<>Workforce automation at <span className="text-[#54f446]">enterprise scale</span> — made parallel and event-driven.</>}
          intro="How I contributed to Intradiem's microservices — speeding up batch work with multithreading and building dynamic event scheduling for automated background processing."
          meta={META}
        />
        <Overview />
        <BatchChapter />
        <ScheduleChapter />
        <CaseOutro outcomes={OUTCOMES} next={{ to: "/work/benepik-plus", kicker: "Next case study", label: "Benepik Plus" }} />
      </main>
      <Footer />
    </>
  );
}

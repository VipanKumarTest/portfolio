import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/site/Preloader";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Impact } from "@/components/site/Impact";
import { Works } from "@/components/site/Works";
import { Skills } from "@/components/site/Skills";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { scrollToId } from "@/lib/scroll";
import CaseIntradiem from "@/pages/CaseIntradiem";
import CaseBenepikPlus from "@/pages/CaseBenepikPlus";

const Home = () => {
  const [ready, setReady] = useState(!!window.location.hash);
  const done = useCallback(() => setReady(true), []);

  useEffect(() => {
    if (!window.__lenis) return;
    if (ready) window.__lenis.start();
    else window.__lenis.stop();
  }, [ready]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const t = setTimeout(() => scrollToId(hash), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{!ready && <Preloader key="pre" onDone={done} />}</AnimatePresence>
      <Header ready={ready} />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <Impact />
        <Works />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const ScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.95 });
    window.__lenis = lenis;
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="grain relative min-h-screen" data-testid="app-root">
      <BrowserRouter>
        <ScrollReset />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/intradiem" element={<CaseIntradiem />} />
          <Route path="/work/benepik-plus" element={<CaseBenepikPlus />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-left" theme="dark" />
    </div>
  );
}

export default App;

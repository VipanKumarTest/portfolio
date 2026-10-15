import { useCallback, useEffect, useState } from "react";
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

function App() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
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

  useEffect(() => {
    if (!window.__lenis) return;
    if (ready) window.__lenis.start();
    else window.__lenis.stop();
  }, [ready]);

  return (
    <div className="grain relative min-h-screen" data-testid="app-root">
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
      <Toaster position="bottom-left" theme="dark" />
    </div>
  );
}

export default App;

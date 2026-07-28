"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loader from "@/components/Loader";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);

  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    gsap.set(document.documentElement, { "--mouse-x": `${innerWidth / 2}px`, "--mouse-y": `${innerHeight / 2}px` });
    const xTo = gsap.quickTo(document.documentElement, "--mouse-x", { duration:.45, ease:"power3.out" });
    const yTo = gsap.quickTo(document.documentElement, "--mouse-y", { duration:.45, ease:"power3.out" });
    const onMove = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <Loader />
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

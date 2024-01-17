"use client";

import About from "@/components/about/About";
import Bio from "@/components/bio/Bio";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Tools from "@/components/tools/Tools";
import Lenis from "@studio-freight/lenis";
import Work from "@/components/work-together/Work";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Bio />

      <Tools />
      <Projects />
      <Work />
      <Contact />
    </main>
  );
}

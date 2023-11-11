"use client";

import About from "@/components/about/About";
import Bio from "@/components/bio/Bio";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Tools from "@/components/tools/Tools";
import Work from "@/components/work-together/Work";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
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

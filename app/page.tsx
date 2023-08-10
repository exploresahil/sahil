"use client";

import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}

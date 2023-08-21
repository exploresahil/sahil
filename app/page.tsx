"use client";

import About from "@/components/about/About";
import Bio from "@/components/bio/Bio";

import { motion } from "framer-motion";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Tools from "@/components/tools/Tools";
import useMousePosition from "@/utils/useMousePosition";
import { useEffect, useState } from "react";
import Header from "@/components/default/header/Header";
import Work from "@/components/work-together/Work";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/default/footer/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const { x, y } = useMousePosition();
  // Create a state to manage cursor visibility

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  const [isCursorVisible, setCursorVisibility] = useState(true);
  const [isCursorBig, setIsCursorBig] = useState(false);
  const [isEnterLogo, setIsEnterLogo] = useState(false);

  // Variant animation
  const variants = {
    default: {
      x: x - (isEnterLogo ? 50 : isCursorBig ? 100 : 10), // Adjust the cursor size and x position based on isEnterLogo and isCursorBig
      y: y - (isEnterLogo ? 50 : isCursorBig ? 100 : 10), // Adjust the cursor size and y position based on isEnterLogo and isCursorBig
      width: isEnterLogo ? 100 : isCursorBig ? 200 : 20, // Adjust the width based on isEnterLogo and isCursorBig
      height: isEnterLogo ? 100 : isCursorBig ? 200 : 20, // Adjust the height based on isEnterLogo and isCursorBig
    },
  };

  // Function to hide the cursor when entering the Hero component
  const handleHeroEnter = () => {
    setCursorVisibility(false);
  };

  // Function to show the cursor when leaving the Hero component
  const handleHeroLeave = () => {
    setCursorVisibility(true);
  };

  const handleMouseEnter = () => {
    setIsCursorBig(true);
  };

  const handleMouseleave = () => {
    setIsCursorBig(false);
  };

  const handleLogoEnter = () => {
    setIsEnterLogo(true);
  };

  const handleLogoLeave = () => {
    setIsEnterLogo(false);
  };

  return (
    <>
      <Header onMouseEnter={handleLogoEnter} onMouseLeave={handleLogoLeave} />
      <main>
        {windowWidth >= 1280 && (
          <motion.div
            variants={variants}
            animate="default"
            transition={{
              type: "tween",
              ease: "backOut",
            }}
            className={`cursor ${isCursorBig ? "big" : ""} ${
              isCursorVisible ? "" : "cursor-hidden"
            } ${isEnterLogo ? "logoBig" : ""}`}
          />
        )}
        <Hero onMouseEnter={handleHeroEnter} onMouseLeave={handleHeroLeave} />
        <About
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseleave}
        />
        <Bio onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave} />
        <Tools />
        <Projects
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
        />
        <Work />
        <Contact
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
        />
      </main>
      <Footer onMouseEnter={handleLogoEnter} onMouseLeave={handleLogoLeave} />
    </>
  );
}

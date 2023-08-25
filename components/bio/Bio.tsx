"use client";
import SplitType from "split-type";

import "./bio.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Bio = ({ onMouseEnter, onMouseLeave }: any) => {
  const bioRef = useRef<any>(null);
  const bioMainRef = useRef<any>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bio = new SplitType(bioRef.current, { types: "words" });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      gsap.fromTo(
        bio.words,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: bioRef.current,
            //markers: true,
            scrub: 0.2,
            start: "center bottom",
            end: "center 55%",
          },
        }
      );
      gsap.fromTo(
        bioMainRef.current,
        {
          backgroundColor: "#0c0c0c",
        },
        {
          backgroundColor: "#0a369d",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: bioMainRef.current,
            //markers: true,
            scrub: 0.2,
            start: "top bottom",
            end: "center center",
          },
        }
      );
    });
  }, []);

  const handleEnter = () => {
    onMouseEnter();
  };

  const handleLeave = () => {
    onMouseLeave();
  };

  return (
    <section id="bio" ref={bioMainRef}>
      <p ref={bioRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        I'm a person who loves to take pictures and make things look pretty. I'm
        also a developer with a passion for front-end development and design.
      </p>
    </section>
  );
};

export default Bio;

"use client";

import "./bio.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useLayoutEffect, useRef } from "react";

function Bio() {
  const bioMainRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement | any>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bio = new SplitType(bioRef.current, { types: "words" });

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
          trigger: bioMainRef.current,
          //markers: true,
          scrub: 0.2,
          start: "40% bottom",
          end: "center center",
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
  }, []);

  return (
    <section id="bio" ref={bioMainRef}>
      <p ref={bioRef}>
        I'm a person who loves to take pictures and make things look pretty. I'm
        also a developer with a passion for front-end development and design.
      </p>
    </section>
  );
}

export default Bio;

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Star from "../icons/Star";
import Img from "../default/Img";
import fourMen from "@/public/images/assets/four-men.png";
import SplitType from "split-type";

const Hero = () => {
  const scrollInfoRef = useRef(null);

  useLayoutEffect(() => {
    const textOne = new SplitType(".textOne", { types: "lines" });
    const textTwo = new SplitType(".textTwo", { types: "lines" });

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textOne.lines,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        stagger: 0.1,
        delay: 2.8,
      }
    );

    gsap.fromTo(
      textTwo.lines,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        stagger: 0.1,
        delay: 3,
      }
    );

    gsap.fromTo(
      scrollInfoRef.current,
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: scrollInfoRef.current,
          //markers: true,
          scrub: 0.2,
          start: "100px bottom",
          end: "100px 600px",
        },
      }
    );
  }, []);

  return (
    <section className="hero-container">
      <div className="container">
        <div className="headline">
          <p className="textOne" data-scroll data-scroll-speed="0.6">
            I Craft Digital Experiences,
          </p>
          <div className="line-second" data-scroll data-scroll-speed="0.6">
            <p className="textTwo">
              Turning <span className="pink">pixels</span> into{" "}
              <span className="pink">possibilities.</span>
            </p>
          </div>
        </div>
        <div data-scroll data-scroll-speed="1" className="star-container">
          <Star className="star" />
        </div>
        <div data-scroll data-scroll-speed="0.5" className="men-container">
          <Img
            src={fourMen}
            alt="four men standing nextb to each other poster"
          />
        </div>
      </div>
      <div className="scroll-info" ref={scrollInfoRef}>
        <p>portfolio</p>
        <p>scroll baby scroll</p>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Star from "../icons/Star";
import Img from "../default/Img";
import fourMen from "@/public/images/assets/four-men.png";

const Hero = () => {
  const scrollInfoRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
        <div className="headline" data-scroll data-scroll-speed="0.2">
          <div className="line-first">
            <p className="textOne">I Craft</p>
            <p className="textOne">Digital</p>
            <p className="textOne">Experiences,</p>
          </div>
          <div className="line-second">
            <p className="textTwo">Turning</p>
            <p className="textTwo">
              <span className="pink">pixels</span> into
            </p>
            <p className="textTwo">
              <span className="pink">possibilities.</span>
            </p>
          </div>
        </div>
        <div className="star-main" data-scroll data-scroll-speed="0.9">
          <div className="star-container">
            <Star className="star" />
          </div>
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

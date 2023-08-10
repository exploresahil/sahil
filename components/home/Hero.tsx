"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import Star from "../icons/Star";
import Img from "../default/Img";
import fourMen from "@/public/images/assets/four-men.png";
import SplitType from "split-type";

const Hero = () => {
  useLayoutEffect(() => {
    const textOne = new SplitType(".textOne", { types: "lines" });
    const textTwo = new SplitType(".textTwo", { types: "lines" });

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
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section className="hero-container">
      <div className="container">
        <div className="headline">
          <p className="textOne" data-scroll data-scroll-speed="0.8">
            I Craft Digital Experiences,
          </p>
          <div className="line-second" data-scroll data-scroll-speed="0.8">
            <p className="textTwo">
              Turning <span className="pink">pixels</span> into{" "}
              <span className="pink">possibilities</span>
            </p>
          </div>
        </div>
        <div data-scroll data-scroll-speed="1" className="star-container">
          <Star className="star" />
        </div>
        <div data-scroll data-scroll-speed="-0.8" className="men-container">
          <Img
            src={fourMen}
            alt="four men standing nextb to each other poster"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

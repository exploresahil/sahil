"use client";

import { MouseParallax } from "react-just-parallax";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../default/Button";

import clouds from "@/public/images/assets/pink-clouds.png";
import Img from "../default/Img";
import Star from "../icons/Star";

const Contact = () => {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      textRef.current,
      {
        x: 0,
      },
      {
        x: -1000,
        scrollTrigger: {
          trigger: textRef.current,
          //markers: true,
          scrub: 0.2,
          start: "top bottom",
          end: "200px top",
        },
      }
    );
  }, []);

  return (
    <div className="contact-container" id="contact">
      <div className="headline">
        <h2 ref={textRef}>
          let"s work together • let"s work together • let"s work together •
          let"s work together •
        </h2>
      </div>
      <div className="form-main">
        <div className="form-container">
          <form>
            <h3>Contact</h3>
            <div className="field name">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="field email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="field message">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <Button title="Send" />
          </form>
          <MouseParallax
            isAbsolutelyPositioned
            enableOnTouchDevice
            strength={0.06}
          >
            <Star className="starOne" />
          </MouseParallax>
          <MouseParallax
            isAbsolutelyPositioned
            enableOnTouchDevice
            strength={-0.05}
          >
            <Star className="starTwo" />
          </MouseParallax>
        </div>
        <div className="video-container">
          <MouseParallax
            isAbsolutelyPositioned
            zIndex={2}
            enableOnTouchDevice
            strength={0.05}
          >
            <video autoPlay loop muted>
              <source src="/images/assets/crystal-animation.webm" />
            </video>
          </MouseParallax>
          <div className="clouds-container">
            <Img src={clouds} alt="image of abstract pink clouds" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

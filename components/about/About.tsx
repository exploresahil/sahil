"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.scss";

import sahil from "@/public/assets/png/sahil.png";
import camera from "@/public/assets/png/camera-dynamic-gradient.png";
import puzzle from "@/public/assets/png/puzzle-dynamic-gradient.png";
import paint from "@/public/assets/png/paint-kit-dynamic-gradient.png";
import coffee from "@/public/assets/png/tea-cup-dynamic-gradient.png";
import { useLayoutEffect, useRef, useState } from "react";

const About = ({ onMouseEnter, onMouseLeave }: any) => {
  const helloRef = useRef(null);
  const heroContainerRef = useRef(null);
  const designerRef = useRef(null);
  const sahilRef = useRef(null);
  const sahilContainerRef = useRef(null);
  const cameraRef = useRef(null);
  const puzzleRef = useRef(null);
  const paintRef = useRef(null);
  const coffeeRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      helloRef.current,
      {
        y: 400,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: heroContainerRef.current,
          scrub: 0.2,
          //markers: true,
          start: "top bottom",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      designerRef.current,
      {
        y: 400,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: heroContainerRef.current,
          scrub: 0.2,
          //markers: true,
          start: "top bottom",
          end: "bottom center",
        },
      }
    );

    gsap.fromTo(
      sahilRef.current,
      {
        y: 100,
        scale: 0.5,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: sahilContainerRef.current,
          scrub: 0.2,
          //markers: true,
          start: "center bottom",
          end: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      cameraRef.current,
      {
        x: -100,
        scale: 0.5,
        opacity: 0,
      },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: sahilContainerRef.current,
          scrub: 0.2,
          //markers: true,
          start: "center bottom",
          end: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      puzzleRef.current,
      {
        x: -200,
        scale: 0.5,
        opacity: 0,
      },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: sahilContainerRef.current,
          scrub: 0.2,
          //markers: true,
          start: "center bottom",
          end: "bottom 90%",
        },
      }
    );

    gsap.fromTo(
      paintRef.current,
      {
        x: 100,
        scale: 0.5,
        opacity: 0,
      },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: sahilContainerRef.current,
          scrub: 0.2,
          //markers: true,
          start: "center bottom",
          end: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      coffeeRef.current,
      {
        x: 200,
        scale: 0.5,
        opacity: 0,
      },
      {
        x: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: sahilContainerRef.current,
          scrub: 0.2,
          //markers: true,
          start: "center bottom",
          end: "bottom 90%",
        },
      }
    );
  }, []);

  const handleHelloEnter = () => {
    onMouseEnter();
  };

  const handleHelloLeave = () => {
    onMouseLeave();
  };

  return (
    <section id="about">
      <div className="sahil-img-container" ref={sahilContainerRef}>
        <div className="img-container" ref={sahilRef}>
          <Image
            fill
            src={sahil}
            alt="An ai generated photo of Sahil Satpute"
            sizes="100"
          />
        </div>
        <div className="camera-container icon" ref={cameraRef}>
          <Image
            fill
            src={camera}
            alt="3d gradient image of the camera"
            sizes="100"
          />
        </div>
        <div className="puzzle-container icon" ref={puzzleRef}>
          <Image
            fill
            src={puzzle}
            alt="3d gradient image of a puzzle piece"
            sizes="100"
          />
        </div>
        <div className="paint-container icon" ref={paintRef}>
          <Image
            fill
            src={paint}
            alt="3d gradient image of paint brush"
            sizes="100"
          />
        </div>
        <div className="coffee-container icon" ref={coffeeRef}>
          <Image
            fill
            src={coffee}
            alt="3d gradient image of a coffee cup"
            sizes="100"
          />
        </div>
      </div>
      <div className="text-container">
        <div className="title-container" ref={heroContainerRef}>
          <h4
            className="hello-container"
            ref={helloRef}
            onMouseEnter={handleHelloEnter}
            onMouseLeave={handleHelloLeave}
          >
            <span className="hello">
              hello,
              <br />
            </span>{" "}
            my name is <span className="name">sahil satpute</span>
          </h4>
        </div>
        <div
          className="designer-container"
          ref={designerRef}
          onMouseEnter={handleHelloEnter}
          onMouseLeave={handleHelloLeave}
        >
          <div className="features">
            <Marquee pauseOnHover={true}>
              <p>
                UI design • Front-End • React • Next • Gsap • Locomotive • Web
                Animations •
              </p>
              <p>
                UI design • Front-End • React • Next • Gsap • Locomotive • Web
                Animations •
              </p>
            </Marquee>
          </div>
          <h4>
            i am a <span>fullstack designer</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;

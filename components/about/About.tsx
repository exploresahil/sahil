"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import sahil from "@/public/assets/png/sahil_art_land.png";
import { useLayoutEffect, useRef } from "react";

const About = ({ onMouseEnter, onMouseLeave }: any) => {
  const aboutRef = useRef(null);
  const imageContainerRef = useRef(null);
  const sahilRef = useRef(null);
  const infoRef = useRef(null);

  useLayoutEffect(() => {
    AOS.init();
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.fromTo(
      sahilRef.current,
      {
        height: "50vh",
      },
      {
        height: "100vh",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top center",
          end: "center center",
        },
      }
    );

    tl.fromTo(
      sahilRef.current,
      {},
      {
        scrollTrigger: {
          trigger: imageContainerRef.current,
          //markers: true,
          scrub: 0.5,
          start: "center center",
          end: "bottom center",
          pin: true,
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="title">
        <h4>~About~</h4>
      </div>
      <div className="info-container" ref={infoRef}>
        <div className="image-main" ref={imageContainerRef}>
          <div className="img-container sahil" ref={sahilRef}>
            <Image fill src={sahil} alt="gradient star" sizes="100" />
          </div>
        </div>
        <div className="text">
          <h4
            className="hello-container"
            data-aos="fade-up"
            onMouseEnter={() => {
              onMouseEnter();
            }}
            onMouseLeave={() => {
              onMouseLeave();
            }}
          >
            <span className="hello">
              hello,
              <br />
            </span>
            my name is <br />
            <span className="pink">sahil satpute</span>
          </h4>

          <h4
            className="designer-container"
            data-aos="fade-up"
            onMouseEnter={() => {
              onMouseEnter();
            }}
            onMouseLeave={() => {
              onMouseLeave();
            }}
          >
            i am a <br />
            <span className="yellow">fullstack designer</span>
          </h4>
        </div>
        <Marquee>
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
    </section>
  );
};

export default About;

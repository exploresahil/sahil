import Image from "next/image";
import "./about.scss";
import Marquee from "react-fast-marquee";

import sahil from "@/public/assets/images/sahil_wes_.png";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const titleOneRef = useRef<HTMLHeadingElement>(null);
  const titleTwoRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sahilRef = useRef<HTMLImageElement>(null);
  const gsapHelparRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      aboutRef.current,
      {
        height: "0vh",
      },
      {
        height: "100vh",
        scrollTrigger: {
          trigger: aboutRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top bottom",
          end: "top top",
        },
      }
    );

    gsap.fromTo(
      titleOneRef.current,
      {
        y: 400,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top center",
          end: "top 100",
        },
      }
    );

    gsap.fromTo(
      titleTwoRef.current,
      {
        y: 400,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top 65%",
          end: "top top",
        },
      }
    );

    gsap.fromTo(
      marqueeRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top center",
          end: "top center",
        },
      }
    );

    gsap.fromTo(
      sahilRef.current,
      {
        objectPosition: "bottom center",
      },
      {
        objectPosition: "center center",
        scrollTrigger: {
          trigger: aboutRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top bottom",
          end: "top top",
        },
      }
    );
    gsap.fromTo(
      gsapHelparRef.current,
      {
        height: "100vh",
      },
      {
        height: "0vh",
        scrollTrigger: {
          trigger: aboutRef.current,
          //markers: true,
          scrub: 0.5,
          start: "top bottom",
          end: "top top",
        },
      }
    );
  }, []);
  return (
    <>
      <section id="about" ref={aboutRef}>
        <div className="img-container">
          <Image
            src={sahil}
            alt="sahil satpute profile"
            fill
            sizes="100"
            ref={sahilRef}
          />
          <div className="text-container">
            <h3 ref={titleOneRef}>
              <span>hello,</span>
              <br />
              my name is
              <br />
              <span>sahil satpute</span>
            </h3>
            <h4 ref={titleTwoRef}>
              i am a{" "}
              <span>
                fullstack <br />
                designer
              </span>
            </h4>
            <div className="marquee" ref={marqueeRef}>
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
            <div className="text-bg" />
          </div>
        </div>
      </section>
      <div className="gspa-helper" ref={gsapHelparRef} />
    </>
  );
}

export default About;

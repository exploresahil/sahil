import Image from "next/image";
import "./tools.scss";
import { FaAsterisk } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const abstractOne =
  "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80";

const abstractTwo =
  "https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60";

function Tools() {
  const toolsRef = useRef<HTMLElement>(null);
  const gsapHelparRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(max-width: 799px)", () => {
      gsap.fromTo(
        toolsRef.current,
        {
          height: "0vh",
        },
        {
          height: "100vh",
          scrollTrigger: {
            trigger: toolsRef.current,
            //markers: true,
            scrub: 0.5,
            start: "top bottom",
            end: "top 10%",
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
            trigger: toolsRef.current,
            //markers: true,
            scrub: 0.5,
            start: "top bottom",
            end: "top top",
          },
        }
      );
    });

    mm.add("(min-width: 800px) and (max-width: 1023px)", () => {
      gsap.fromTo(
        toolsRef.current,
        {
          height: "0vh",
        },
        {
          height: "50vh",
          scrollTrigger: {
            trigger: toolsRef.current,
            //markers: true,
            scrub: 0.5,
            start: "top bottom",
            end: "top center",
          },
        }
      );

      gsap.fromTo(
        gsapHelparRef.current,
        {
          height: "50vh",
        },
        {
          height: "0vh",
          scrollTrigger: {
            trigger: toolsRef.current,
            // markers: true,
            scrub: 0.5,
            start: "top bottom",
            end: "top center",
          },
        }
      );
    });

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        toolsRef.current,
        {
          height: "0vh",
        },
        {
          height: "100vh",
          scrollTrigger: {
            trigger: toolsRef.current,
            //markers: true,
            scrub: 0.5,
            start: "top bottom",
            end: "top 10%",
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
            trigger: toolsRef.current,
            //markers: true,
            scrub: 0.5,
            start: "top bottom",
            end: "top top",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section id="tools" ref={toolsRef}>
        <h3>Tools</h3>
        <div className="tools-container">
          <div className="development-creative-container">
            <div className="icon-container">
              <Image src={abstractOne} alt="abstract" fill sizes="100" />
            </div>
            <div className="items-container">
              <h4>• Development</h4>
              <ul>
                <li>html</li>
                <li>css</li>
                <li>scss</li>
                <li>js</li>
                <li>react</li>
                <li>next</li>
                <li>sanity</li>
                <li>supabase</li>
              </ul>
            </div>
          </div>
          <div className="development-creative-container">
            <div className="icon-container asterisk">
              <Image src={abstractTwo} alt="abstract" fill sizes="100" />
            </div>
            <div className="items-container">
              <h4>• Creative</h4>
              <ul>
                <li>adobe xd</li>
                <li>illustrator</li>
                <li>lightroom</li>
                <li>photoshop</li>
                <li>primere pro</li>
                <li>after effects</li>
                <li>dimension</li>
                <li>stable diffusion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-container">
          <FaAsterisk size={500} />
          <RiMastercardFill size={500} />
        </div>
        <div className="bg" />
      </section>
      <div className="gspa-helper" ref={gsapHelparRef} />
    </>
  );
}

export default Tools;

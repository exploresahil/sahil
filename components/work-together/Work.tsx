import "./work.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Work = () => {
  const workRef = useRef(null);
  const workTextRef = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      workTextRef.current,
      {
        x: 0,
      },
      {
        x: -800,
        ease: "linear",
        scrollTrigger: {
          trigger: workRef.current,
          //markers: true,
          scrub: 0.2,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <section id="work" ref={workRef}>
      <p ref={workTextRef}>
        • let"s work together • let"s work together • let"s work together •
        let"s work together
      </p>
    </section>
  );
};

export default Work;

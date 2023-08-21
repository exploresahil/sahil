import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./tools.scss";
import rocket from "@/public/assets/png/rocket-dynamic-gradient.png";
import brush from "@/public/assets/png/paint-brush-dynamic-gradient.png";
import { useLayoutEffect, useRef } from "react";

const ricketList = [
  {
    title: "HTML",
  },
  {
    title: "SCSS",
  },
  {
    title: "JS",
  },
  {
    title: "REACT",
  },
  {
    title: "NEXT",
  },
  {
    title: "SANITY",
  },
];

const brushList = [
  {
    title: "Adobe XD",
  },
  {
    title: "Illustrator",
  },
  {
    title: "Lightroom",
  },
  {
    title: "Photoshop",
  },
  {
    title: "Premiere Pro",
  },
  {
    title: "After Effects",
  },
  {
    title: "Dimension",
  },
  {
    title: "Stable Diffusion",
  },
];

const Tools = () => {
  const handleRocketMouseEnter = (event: any) => {
    gsap.to(event.target, { rotationY: 0, duration: 0.3 });
  };

  const handleRocketMouseLeave = (event: any) => {
    gsap.to(event.target, { rotationY: -20, duration: 0.3 });
  };

  const handleBrushMouseEnter = (event: any) => {
    gsap.to(event.target, { rotationY: 0, duration: 0.3 });
  };

  const handleBrushMouseLeave = (event: any) => {
    gsap.to(event.target, { rotationY: 20, duration: 0.3 });
  };

  const rocketListRef = useRef(null);
  const toolsRef = useRef(null);
  const skillsRef = useRef(null);
  const rockertRef = useRef(null);
  const brushRef = useRef(null);
  const brushListRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      skillsRef.current,
      {
        opacity: 0,
        y: 400,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: toolsRef.current,
          scrub: 0.2,
          //markers: true,
          start: "top bottom",
          end: "200px center",
        },
      }
    );

    gsap.fromTo(
      rocketListRef.current,
      {
        scale: 3,
        opacity: 0,
        rotateY: 45,
        y: 200,
      },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        y: 0,
        scrollTrigger: {
          trigger: toolsRef.current,
          scrub: 0.2,
          //markers: true,
          start: "top bottom",
          end: "center center",
        },
      }
    );

    gsap.fromTo(
      rockertRef.current,
      {
        x: 200,
      },
      {
        x: 1,

        scrollTrigger: {
          trigger: toolsRef.current,
          scrub: 0.2,
          //markers: true,
          start: "top bottom",
          end: "200px center",
        },
      }
    );

    gsap.fromTo(
      brushListRef.current,
      {
        scale: 3,
        opacity: 0,
        rotateY: -45,
        y: 200,
        x: 400,
      },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: toolsRef.current,
          scrub: 0.2,
          //markers: true,
          start: "top bottom",
          end: "center center",
        },
      }
    );
    gsap.fromTo(
      brushRef.current,
      {
        x: -400,
      },
      {
        x: 1,

        scrollTrigger: {
          trigger: toolsRef.current,
          scrub: 0.2,
          //markers: true,
          start: "top bottom",
          end: "200px center",
        },
      }
    );
  }, []);

  return (
    <section id="tools" ref={toolsRef}>
      <h4 ref={skillsRef}>~SKILLS~</h4>
      <div className="skills-container">
        <div className="rocket-container">
          <div className="img-container" ref={rockertRef}>
            <Image fill src={rocket} alt="gradient rocket" sizes="100" />
          </div>
          <ul ref={rocketListRef}>
            {ricketList.map((item, index) => (
              <li
                key={index}
                onMouseEnter={handleRocketMouseEnter}
                onMouseLeave={handleRocketMouseLeave}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="brush-container">
          <div className="img-container" ref={brushRef}>
            <Image fill src={brush} alt="gradient brush" sizes="100" />
          </div>
          <ul ref={brushListRef}>
            {brushList.map((item, index) => (
              <li
                key={index}
                onMouseEnter={handleBrushMouseEnter}
                onMouseLeave={handleBrushMouseLeave}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;

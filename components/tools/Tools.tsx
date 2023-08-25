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

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      gsap.fromTo(
        toolsRef.current,
        {
          height: 0,
        },
        {
          height: "1000px",
          scrollTrigger: {
            trigger: toolsRef.current,
            //markers: true,
            scrub: true,
          },
        }
      );
    });
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

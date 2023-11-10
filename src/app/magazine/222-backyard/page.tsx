"use client";

import "@/app/magazine/style.scss";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import { brand } from "./db";

const page = () => {
  const titleRef = useRef<HTMLHeadingElement | any>(null);
  const titleDescRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const title = new SplitType(titleRef.current, { types: "words" });

    const tl = gsap.timeline();

    tl.fromTo(
      title.words,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        stagger: 0.05,
        opacity: 1,
      }
    );

    tl.fromTo(
      titleDescRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    tl.fromTo(
      ".brand-card",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <section id="brandPage">
      <div className="title-text">
        <h2 ref={titleRef}>{brand[0].brandTitle}</h2>
        <p ref={titleDescRef}>{brand[0].brandDesc}</p>
      </div>
      <div className="brand-card-container">
        {brand[0].brandImages.map((brandImage, i) => (
          <div key={i} className="brand-card">
            <div className="img-container">
              <Image
                src={brandImage.image}
                alt=""
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
            <div className="line" />
            <p>{brandImage.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;

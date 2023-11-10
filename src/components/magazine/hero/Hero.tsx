"use client";

import Image from "next/image";
import "./hero.scss";
import Link from "next/link";
import SplitType from "split-type";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const brands = [
  {
    srno: "00-1",
    title: "Three Beans",
    cover:
      "https://i.postimg.cc/qM8BGMXF/278528147-1838109503045292-5069646706982681758-n.jpg",
    desc: "PHOTOGRAPHY - RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
    year: "2017 - 2022",
    link: "/magazine/three-beans",
  },
  {
    srno: "00-2",
    title: "Collective Blends",
    cover:
      "https://i.postimg.cc/q7Xrm8y2/321813934-2539267282882867-1065032683129824880-n.jpg",
    desc: "PHOTOGRAPHY - RESEARCH - STRATEGY - DESIGN",
    year: "2018 - 2023",
    link: "/magazine/collective-blends",
  },
  {
    srno: "00-3",
    title: "222 Backyard",
    cover: "https://i.postimg.cc/9XwxfBh3/ESA-2331-19-min.jpg",
    desc: "PHOTOGRAPHY - RESEARCH - STRATEGY - DESIGN",
    year: "2018 - 2023",
    link: "/magazine/222-backyard",
  },
  {
    srno: "00-4",
    title: "Dessert Bar",
    cover:
      "https://i.postimg.cc/PJbJ3m8C/311725805-470916581659350-115462037486202544-n.jpg",
    desc: "PHOTOGRAPHY - RESEARCH - STRATEGY - DESIGN",
    year: "2018 - 2023",
    link: "/magazine/dessert-bar",
  },
];

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement | any>(null);
  const titleDescRef = useRef<HTMLParagraphElement>(null);
  const router = useRouter();

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
    <section id="magazineHero">
      <div className="title-text">
        <h2 ref={titleRef}>
          A Visual Feast of Culinary Elegance and Liquid Delights.
        </h2>
        <p ref={titleDescRef}>
          Unveiling the Artistry Behind Every Sip and Bite
        </p>
      </div>
      <div className="brands-container">
        {brands.map((brand, i) => (
          <Link href={brand.link} key={i} className="brand-card">
            <div className="card">
              <div className="img-container">
                <Image
                  src={brand.cover}
                  alt={brand.title}
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
              </div>
              <div className="line" />
              <div className="text-container">
                <p>{brand.desc}</p>
                <p>{brand.year}</p>
              </div>
              <div className="brand-title">
                <h3>{brand.title}</h3>
                <button
                  onClick={() => {
                    router.push(brand.link);
                  }}
                >
                  view
                </button>
              </div>
            </div>
            <p className="srno">{brand.srno}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;

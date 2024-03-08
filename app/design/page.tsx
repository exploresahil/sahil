"use client";
import { BiGlobe } from "react-icons/bi";

import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

const brandData = [
  {
    title: "• three beans",
    image: "https://i.postimg.cc/jCY7CzX0/three-beans-logo-2x.png",
    desc: "Discover Three Beans in Nagpur, where generations converge over exceptional coffee and delightful bites. With a luxurious touch and a cozy ambiance, it's more than a café - it's a thriving community hub.",
    link: "/design",
    extLink: "https://www.instagram.com/threebeansnagpur/",
  },
  {
    title: "• tripusers.com",
    image: "https://i.postimg.cc/0jpHQX8M/Asset-1-2x.png",
    desc: "Tripusers.com has been a reliable travel partner for a decade, assisting over 10,000 explorers from 14 countries. Their expert team tailors journeys, offering dream destinations, seasonal deals.",
    link: "/design",
    extLink: "https://www.tripusers.com/",
  },
  {
    title: "• brush.ish",
    image: "https://i.postimg.cc/HksMW1X2/Asset-9-2x.png",
    desc: "brush.ish: Where art, travel, and aesthetics converge. Join in to draw the world with a spectrum of creative expressions - mural, acrylic, gauche, clay. Unleash your inner artist, spilling colors on the canvas of life.",
    link: "/design",
    extLink: "https://linktr.ee/brush.ish",
  },
  {
    title: "• dessertbar",
    image: "https://i.postimg.cc/kMZSHWvw/db-dark.png",
    desc: "Indulge in a decade of sweet success with DessertBar, your culinary companion. Chef Aditi Jain and her team craft dreamy delights and seasonal wonders, tailored for your taste buds.",
    link: "/design",
    extLink: "https://www.instagram.com/dessertbar__/",
  },
];

const page = () => {
  const titleRef = useRef<HTMLHeadingElement | any>(null);
  const brandRef = useRef<HTMLDivElement | any>(null);

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
      ".brand-container",
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
    <section id="designSecton">
      <h2 ref={titleRef}>Logo Design</h2>
      <div className="grid">
        {brandData.map((item, index) => (
          <div key={index} className="brand-container" ref={brandRef}>
            <h3>{item.title}</h3>
            <div className="img-container">
              <Image
                src={item.image}
                alt="three beans logo"
                fill
                sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
              />
            </div>
            <p>{item.desc}</p>
            <div className="links">
              <Link href={item.link}>View Project</Link>
              <Link href={item.extLink} target="_blank">
                <BiGlobe color="white" size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;

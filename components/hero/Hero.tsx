"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./hero.scss";
import star from "@/public/assets/png/star-dynamic-gradient.png";
import useMousePosition from "@/utils/useMousePosition";
import { useState } from "react";

const Hero = ({ onMouseEnter, onMouseLeave }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHeroEnter, setIsHeroEnter] = useState(true);
  const { x, y } = useMousePosition();
  const maskSize = isHeroEnter ? (isHovered ? 400 : 20) : 0;

  // Logic to hide cursor when entering the Hero component
  const handleMouseEnter = () => {
    onMouseEnter();
    // You can add custom logic here if needed
  };

  // Logic to show cursor when leaving the Hero component
  const handleMouseLeave = () => {
    onMouseLeave();
    // You can add custom logic here if needed
  };

  return (
    <section
      id="hero"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="star-container">
        <div className="img-container">
          <Image fill src={star} alt="gradient star" sizes="100" />
        </div>
      </div>
      <div className="hero-title-container">
        <div className="text-main">
          <h3>I Craft Digital Experiences,</h3>
        </div>
        <motion.div
          className="text-highlight"
          animate={{
            WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{
            type: "tween",
            ease: "backOut",
          }}
          onMouseEnter={() => {
            setIsHeroEnter(true);
          }}
          onMouseLeave={() => {
            setIsHeroEnter(false);
          }}
        >
          <h3
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            Turning <span>pixels</span> into <span>possibilities.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

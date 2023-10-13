"use client";

import { FaAsterisk } from "react-icons/fa";
import "./hero.scss";
import { RiMastercardFill } from "react-icons/ri";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import { useState } from "react";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const maskSize = isHovered ? 400 : 20;

  return (
    <section id="hero">
      <div className="hero-title">
        <h2>
          I craft <br />
          digital <br />
          experiences,
        </h2>
        <h2>
          Turning <br />
          pixels into <br />
          possibilities.
        </h2>
      </div>
      <motion.div
        className="text-highlight"
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${
            y - 138.4 - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
      >
        <h2
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          Turning <br />
          pixels into <br />
          possibilities.
        </h2>
      </motion.div>
      <div className="bg-container">
        <FaAsterisk size={500} />
        <RiMastercardFill size={500} />
      </div>
    </section>
  );
}

export default Hero;

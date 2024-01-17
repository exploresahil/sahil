"use client";

import { useLayoutEffect, useRef, useState } from "react";
import "./dropdownMenu.scss";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownMenuItems, dropdownMenuSlide } from "@/utils/anim";

const menuItems = [
  {
    title: "home",
  },
  {
    title: "About",
  },
  {
    title: "Projects",
  },
  {
    title: "Contact",
  },
];

const page = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);

  const onButtonClick = () => {
    setIsActive(!isActive);
  };

  useLayoutEffect(() => {
    const dropdownClose = (e: any) => {
      if (
        !dropdownRef.current?.contains(e.target) &&
        !menuButtonRef.current?.contains(e.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", dropdownClose);

    return () => {
      document.removeEventListener("mousedown", dropdownClose);
    };
  }, []);

  return (
    <section id="dropdownMenu">
      <div className="header">
        <h3>dropdown menu</h3>
        <button onClick={onButtonClick} ref={menuButtonRef}>
          <div className={`slider ${isActive ? "slider-close" : ""}`}>
            <div className="menu open">menu</div>
            <div className="menu close">close</div>
          </div>
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={dropdownMenuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="menu-dropdown"
            ref={dropdownRef}
          >
            <h4>Menu</h4>
            <ul>
              {menuItems.map((item, i) => (
                <motion.li
                  variants={dropdownMenuItems}
                  custom={i}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  key={i}
                  onClick={onButtonClick}
                >
                  {item.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default page;

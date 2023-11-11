"use client";

import { useEffect, useRef, useState } from "react";
import "./slideMenu.scss";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownMenuItems, slideMenuSlide } from "@/utils/anim";

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
  const slideRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);

  const onButtonClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const dropdownClose = (e: any) => {
      if (
        !slideRef.current?.contains(e.target) &&
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
    <section id="slideMenu">
      <div className="header">
        <h3>slide menu</h3>
        <button onClick={onButtonClick} ref={menuButtonRef}>
          <div className={`slider ${isActive ? "slider-close" : ""}`}>
            <div className="menu open">menu</div>
            <div className="menu close">close</div>
          </div>
        </button>
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              variants={slideMenuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="slide-menu"
              ref={slideRef}
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
                    <div className="circle" />
                    {item.title}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default page;

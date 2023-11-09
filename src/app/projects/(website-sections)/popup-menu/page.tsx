"use client";

import "./popupMenu.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownMenuItems, popupMenu } from "@/utils/anim";
import { useMediaQuery } from "react-responsive";

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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [isActive, setIsActive] = useState(false);

  const onButtonClick = () => {
    setIsActive(!isActive);
  };

  const isTablet = useMediaQuery({ minWidth: 820, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const responsiveVariants = isTablet
    ? popupMenu.responsive.tablet
    : isDesktop
    ? popupMenu.responsive.desktop
    : popupMenu.responsive.mobile;

  return (
    <section id="popupMenu">
      <div className="header">
        <h3>pop-up menu</h3>
        <button onClick={onButtonClick} ref={menuButtonRef}>
          <div className={`slider ${isActive ? "slider-close" : ""}`}>
            <div className="menu open">menu</div>
            <div className="menu close">close</div>
          </div>
        </button>
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              variants={responsiveVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="popup-menu"
            >
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  display: "none",
                  transition: {
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
              >
                Menu
              </motion.h4>
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

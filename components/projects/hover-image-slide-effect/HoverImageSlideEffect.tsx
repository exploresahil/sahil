"use client";
import "./style.scss";
import "./style.scss";
import { useState, useEffect } from "react";

const HoverImageSlideEffect = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        />
      );
    });
  };

  const colorize = (el: any) => {
    el.style.backgroundColor = "black";
    setTimeout(() => {
      el.style.backgroundColor = "transparent";
    }, 300);
  };
  return (
    <section className="container">
      <div className="body">
        <p>Where Ideas Take Shape and Pixels Find Purpose</p>
      </div>
      <div className="grid">
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={index} className="column">
                {getBlocks()}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default HoverImageSlideEffect;

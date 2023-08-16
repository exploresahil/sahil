"use client";

import { useEffect, useState } from "react";

const page = () => {
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
          onMouseEnter={(e: any) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
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
    <div className="pixel-cursor-container">
      <div className="small-screen">
        <p>View on larger screen with mouse pointer for better experience</p>
      </div>
      <div className="text">
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
    </div>
  );
};

export default page;

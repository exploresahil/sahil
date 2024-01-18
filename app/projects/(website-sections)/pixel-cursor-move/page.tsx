"use client";

import "./style.scss";
import React, { useState, useEffect } from "react";
const page = () => {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return Array.apply(null, Array(nbOfBlocks)).map(function (_, index) {
      return React.createElement("div", {
        onMouseEnter: function (e) {
          colorize(e.target);
        },
        key: index,
      });
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
          Array.apply(null, Array(20)).map(function (_, index) {
            return React.createElement(
              "div",
              { key: index, className: "column" },
              getBlocks()
            );
          })}
      </div>
    </section>
  );
};

export default page;

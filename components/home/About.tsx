"use client";

import { useEffect } from "react";

import Marquee from "react-fast-marquee";

import Img from "../default/Img";

import sahilMask from "@/public/images/logo/sahil-mask.png";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 1250;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="sahil-info-container">
        <div className="info-container">
          <div className="info-top">
            <div
              className="info left"
              data-aos="flip-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              <p className="hello">hello,</p>
              <p>
                my name is <span>sahil satpute</span>
              </p>
              <p>i am a fullstack designer</p>
              <div className="features">
                <Marquee pauseOnHover={true}>
                  <p>
                    UI design • Front-End • React • Next • Gsap • Locomotive •
                    Web Animations •
                  </p>
                  <p>
                    UI design • Front-End • React • Next • Gsap • Locomotive •
                    Web Animations •
                  </p>
                </Marquee>
              </div>
            </div>

            <div
              className="info right"
              data-aos="flip-down"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              <p>
                I'm a person who loves to take pictures and make things look
                pretty. I'm also a developer with a passion for front-end
                development and design.
              </p>
            </div>
          </div>
          <div
            className="bio-container"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
          >
            <ul>
              <li>HTML | CSS | JS | REACT | NEXT | SANITY</li>
              <li>
                Adobe XD | Adobe Illustrator | Adobe Lightroom | Adobe Photoshop
                | Adobe Premiere Pro | Adobe After Effects | Adobe Dimension
              </li>
              <li>Stable Diffusion</li>
            </ul>
          </div>
        </div>
        <div
          className="sahil-mask-container"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
        >
          <Img src={sahilMask} alt="Profile image of Sahil Satpute" />
        </div>
      </div>
    </div>
  );
};

export default About;

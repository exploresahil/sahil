"use client";

import { MouseParallax, ScrollParallax } from "react-just-parallax";

import Button from "../default/Button";

import clouds from "@/public/images/assets/pink-clouds.png";
import Img from "../default/Img";
import Star from "../icons/Star";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-main">
        <div className="form-container">
          <form>
            <h3>Contact</h3>
            <div className="field name">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="field email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="field message">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <Button title="Send" />
          </form>
          <MouseParallax
            isAbsolutelyPositioned
            enableOnTouchDevice
            strength={0.06}
          >
            <Star className="starOne" />
          </MouseParallax>
          <MouseParallax
            isAbsolutelyPositioned
            enableOnTouchDevice
            strength={-0.05}
          >
            <Star className="starTwo" />
          </MouseParallax>
        </div>
        <div className="video-container">
          <MouseParallax
            isAbsolutelyPositioned
            zIndex={2}
            enableOnTouchDevice
            strength={0.05}
          >
            <video autoPlay loop muted>
              <source src="/images/assets/crystal-animation.webm" />
            </video>
          </MouseParallax>
          <div className="clouds-container">
            <Img src={clouds} alt="image of abstract pink clouds" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

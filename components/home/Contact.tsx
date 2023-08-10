"use client";

import { MouseParallax } from "react-just-parallax";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

import Button from "../default/Button";

import clouds from "@/public/images/assets/pink-clouds.png";
import Img from "../default/Img";
import Star from "../icons/Star";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_m1jb0h7",
          "template_mtt26pg",
          form.current,
          "3BqcQQwx-yjPI9VdD"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Sent");
            setIsEmailSent(true);

            // Hide the success message after 3 seconds
            setTimeout(() => {
              setIsEmailSent(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
            console.log("Not Sent");
          }
        );
    }
  };

  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      textRef.current,
      {
        x: 0,
      },
      {
        x: -1000,
        scrollTrigger: {
          trigger: textRef.current,
          //markers: true,
          scrub: 0.2,
          start: "top bottom",
          end: "200px top",
        },
      }
    );
  }, []);

  return (
    <div className="contact-container" id="contact">
      <div className="headline">
        <h2 ref={textRef}>
          let"s work together • let"s work together • let"s work together •
          let"s work together •
        </h2>
      </div>
      <div className="form-main">
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <h3>Contact</h3>
            <div className="field name">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="field email">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="user_email"
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
            <div className="button-container">
              <Button type="submit" title="Send" />
              {isEmailSent && <p className="success-message">Message Sent!</p>}
            </div>
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

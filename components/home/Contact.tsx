"use client";

import { MouseParallax } from "react-just-parallax";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { TiTick } from "react-icons/ti";
import dynamic from "next/dynamic";
import clouds from "@/public/images/assets/pink-clouds.png";
import Img from "../default/Img";
import Star from "../icons/Star";
import LoadingAnim from "../default/LoadingAnim";

const Crystal = dynamic(() => import("../crystal/Crystal"), {
  ssr: false,
});

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      showLoading();
      try {
        const result = await emailjs.sendForm(
          "service_m1jb0h7",
          "template_mtt26pg",
          form.current,
          "3BqcQQwx-yjPI9VdD"
        );
        console.log(result.text);
        setIsEmailSent(true);
        setTimeout(() => {
          setIsEmailSent(false);
        }, 1500);
        form.current.reset();
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message); // Log the error message
        }
      } finally {
        hideLoading();
      }
    }
  };

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
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
          let"s work together • let"s work together • let"s work together •
          let"s work together • let"s work together • let"s work together •
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
              <button
                type="submit"
                className={isLoading ? "loading-button" : ""}
              >
                {isLoading ? (
                  <LoadingAnim />
                ) : isEmailSent ? (
                  <>
                    Sent! <TiTick />
                  </>
                ) : (
                  "Send"
                )}
              </button>
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
            <Crystal />
          </MouseParallax>
          <div className="clouds-container">
            <Img src={clouds} alt="image of abstract pink clouds" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });

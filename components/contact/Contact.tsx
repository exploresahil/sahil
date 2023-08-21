"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { TiTick } from "react-icons/ti";
import LoadingAnim from "../default/loading/LoadingAnim";
import { MouseParallax } from "react-just-parallax";

const Crystal = dynamic(() => import("../Crystal/Crystal"), {
  ssr: false,
});

const Contact = ({ onMouseEnter, onMouseLeave }: any) => {
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

  // Logic to hide cursor when entering the Hero component
  const handleMouseEnter = () => {
    onMouseEnter();
    // You can add custom logic here if needed
  };

  // Logic to show cursor when leaving the Hero component
  const handleMouseLeave = () => {
    onMouseLeave();
    // You can add custom logic here if needed
  };
  return (
    <section id="contact">
      <div className="video-container">
        <MouseParallax enableOnTouchDevice strength={0.05}>
          <Crystal />
        </MouseParallax>
        <h4>Contact</h4>
      </div>
      <form ref={form} onSubmit={sendEmail}>
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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isLoading ? (
              <LoadingAnim />
            ) : isEmailSent ? (
              <>
                Sent! <TiTick />
              </>
            ) : (
              <p>Send</p>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });

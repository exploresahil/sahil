"use client";
import { FC } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface StarProps {
  className: string;
}

const Star: FC<StarProps> = ({ className }) => {
  const starRef = useRef(null);

  useLayoutEffect(() => {
    gsap.from(starRef.current, {
      xPercent: 50,
      yPercent: 50,
      scale: 0,
      opacity: 0,
      ease: "power4.out",
      duration: 1.2,
      delay: 3.2,
    });
  }, []);

  return (
    <svg className={className} viewBox="0 0 95.91 91.3">
      <g ref={starRef} data-name="Layer 1">
        <path d="m48.62,19.68L61.86.35c.45-.66,1.49-.33,1.47.48l-.65,23.42c-.02.57.54.97,1.08.78l22.07-7.85c.76-.27,1.4.61.91,1.25l-14.29,18.56c-.35.45-.13,1.1.41,1.26l22.47,6.62c.77.23.77,1.32,0,1.55l-22.47,6.62c-.54.16-.76.82-.41,1.26l14.29,18.56c.49.64-.15,1.52-.91,1.25l-22.07-7.85c-.53-.19-1.09.22-1.08.78l.65,23.42c.02.8-1.02,1.14-1.47.48l-13.24-19.33c-.32-.47-1.01-.47-1.33,0l-13.24,19.33c-.45.66-1.49.33-1.47-.48l.65-23.42c.02-.57-.54-.97-1.08-.78l-22.07,7.85c-.76.27-1.4-.61-.91-1.25l14.29-18.56c.35-.45.13-1.1-.41-1.26L.58,46.42c-.77-.23-.77-1.32,0-1.55l22.47-6.62c.54-.16.76-.82.41-1.26l-14.29-18.56c-.49-.64.15-1.52.91-1.25l22.07,7.85c.53.19,1.09-.22,1.08-.78l-.65-23.42c-.02-.8,1.02-1.14,1.47-.48l13.24,19.33c.32.47,1.01.47,1.33,0Z" />
      </g>
    </svg>
  );
};

export default Star;

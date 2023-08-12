import { useEffect, useRef } from "react";

const Crystal = () => {
  const isAppleDevice = /(iPad|iPhone|iPod|Macintosh)/.test(
    navigator.userAgent
  );

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    // Add event listener for user interaction (e.g., button click)
    document.addEventListener("click", playVideo);

    return () => {
      // Clean up event listener when component is unmounted
      document.removeEventListener("click", playVideo);
    };
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <video autoPlay loop muted playsInline preload="metadata" ref={videoRef}>
      <source
        src={
          isAppleDevice
            ? "/images/assets/crystal-animation.mov"
            : "/images/assets/crystal-animation.webm"
        }
      />
    </video>
  );
};

export default Crystal;

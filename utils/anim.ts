export const dropdownMenuSlide = {
  initial: { y: "calc(-100% - 100px)", backgroundColor: "#f6f6f6" },
  enter: {
    y: "0",
    backgroundColor: "#0a369d",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "calc(-100% - 100px)",
    backgroundColor: "#f6f6f6",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const dropdownMenuItems = {
  initial: { scale: 0 },
  enter: (i: any) => ({
    scale: 1,
    transition: { delay: 0.2 + i * 0.1 },
  }),
  exit: {
    scale: 0,
    display: "none",
  },
};

export const slideMenuSlide = {
  initial: { x: "calc(100% + 100px)", backgroundColor: "#f6f6f6" },
  enter: {
    x: "0",
    backgroundColor: "#0a369d",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    backgroundColor: "#f6f6f6",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const popupMenu = {
  responsive: {
    mobile: {
      initial: {
        width: "73px",
        height: "30px",
        top: "10px",
        right: "6vw",
        padding: 0,
      },
      enter: {
        width: "calc(100vw - 10vw)",
        height: "500px",
        top: "5px",
        right: "5vw",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
        padding: "60px 6vw 40px 6vw",
      },
      exit: {
        width: "73px",
        height: "30px",
        top: "10px",
        right: "6vw",
        padding: 0,
        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
      },
    },
    tablet: {
      initial: {
        width: "73px",
        height: "30px",
        top: "10px",
        right: "6vw",
        padding: 0,
      },
      enter: {
        width: "calc(100vw - 50vw)",
        height: "300px",
        top: "5px",
        right: "5.5vw",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
        padding: "60px 6vw 40px 6vw",
      },
      exit: {
        width: "73px",
        height: "30px",
        top: "10px",
        right: "7vw",
        padding: 0,
        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
      },
    },
    desktop: {
      initial: {
        width: "73px",
        height: "30px",
        top: "10px",
        right: "6vw",
        padding: 0,
      },
      enter: {
        width: "400px",
        height: "300px",
        top: "5px",
        right: "5.5vw",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
        padding: "60px 2vw 40px 2vw",
      },
      exit: {
        width: "73px",
        height: "30px",
        top: "10px",
        right: "6vw",
        padding: 0,
        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
      },
    },
  },
};

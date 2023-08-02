const sidebarTransition = { type: "tween", duration: 0.4 };

const springTransition = {
  type: "spring",
  duration: 0.8,
};

const slideDown = {
  initial: { y: "-100%" },
  animate: {
    y: "0%",
    transition: sidebarTransition,
  },
  exit: { y: "-100%", transition: sidebarTransition },
};
export { slideDown };

export const scaleAnimation = {
  initial: { opacity: 0 },
  animate: (delay = 0) => ({
    opacity: 1,
    scale: [1, 1.3, 1],
    transition: {
      delay,
      type: "spring",
      duration: 0.4,
    },
  }),
};

export const scaleY = {
  initial: {
    opacity: 0,
    scaleY: 0.8,
  },
  animate: (delay = 0) => ({
    opacity: 1,
    scaleY: 1,
    transition: { delay, ...springTransition },
  }),
};

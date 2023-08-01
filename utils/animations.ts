const sidebarTransition = { type: "tween", duration: 0.4 };

const slideDown = {
  initial: { y: "-100%" },
  animate: {
    y: "0%",
    transition: sidebarTransition,
  },
  exit: { y: "-100%", transition: sidebarTransition },
};
export { slideDown };

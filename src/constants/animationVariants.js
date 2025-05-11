export const WELCOME_CONTAINER_VARIANTS = {
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: "blur(10px)",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const WELCOME_CHILD_VARIANTS = {
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
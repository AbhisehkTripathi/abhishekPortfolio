export const hoverCard = {
  rest: {
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

export const hoverGlow = {
  rest: {
    boxShadow: "0 0 0 rgba(124, 92, 255, 0)",
  },
  hover: {
    boxShadow: "0 0 30px rgba(124, 92, 255, 0.15), 0 0 60px rgba(90, 215, 255, 0.1)",
    transition: { duration: 0.3 },
  },
};

export const hoverLift = {
  whileHover: {
    y: -8,
    scale: 1.02,
  },
  transition: { type: "spring", stiffness: 200, damping: 20 },
};

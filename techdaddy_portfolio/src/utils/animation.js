// Animation utilities using Framer Motion

export const pageTransition = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export const glowEffect = {
  boxShadow: "0 0 8px rgba(0, 255, 255, 0.6), 0 0 12px rgba(0, 255, 255, 0.4)",
  transition: { duration: 0.3, ease: "easeOut" }
};
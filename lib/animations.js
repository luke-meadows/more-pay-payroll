export const pageTransition = {
  hidden: {
    left: 0,
    transition: { duration: 0.5 },
  },
  enter: {
    left: '-100%',
    transition: { duration: 0.5 },
  },
  exit: {
    left: 0,
    transition: { duration: 0.5 },
  },
};

export const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const elementVariant = {
  hidden: {
    opacity: 0,
    y: 80,
    transition: {
      ease: 'easeOut',
      duration: 0.6,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.6,
    },
  },
};
// export const elementVariant = {
//   hidden: {
//     color: 'blue',
//     y: 500,
//     transition: { duration: 0.5 },
//   },
//   show: {
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

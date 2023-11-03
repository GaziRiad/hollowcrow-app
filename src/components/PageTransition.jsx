import { motion } from "framer-motion";

function PageTransition({ children }) {
  const opacityAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // const zoomAnimation = {
  //   initial: { scale: 0.7, opacity: 1 },
  //   animate: { scale: 1, opacity: 1 },
  //   exit: { scale: 0.7, opacity: 1 },
  // };

  // const rotateAnimation = {
  //   initial: { rotateY: 90 },
  //   animate: { rotateY: 0 },
  //   exit: { rotateY: -90 },
  // };

  // const widthAnimation = {
  //   initial: { width: 0 },
  //   animate: { width: "100%" },
  //   exit: { width: "100%", x: window.innerWidth },
  // };

  return (
    <motion.div
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;

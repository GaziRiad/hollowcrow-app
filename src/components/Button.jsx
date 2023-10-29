import { motion } from "framer-motion";

function Button({ children, navigation = false }) {
  if (navigation)
    return (
      <motion.button
        className={`rounded-full shadow-sm uppercase tracking-wider bg-primary text-white text-center font-secondary font-semibold px-8 py-2 md:text-lg`}
        whileTap={{ scale: 0.9 }}
      >
        {children}
      </motion.button>
    );

  return (
    <motion.button
      className={`rounded-full shadow-sm uppercase tracking-wider bg-white text-primary text-sm text-center font-secondary font-bold px-6 py-3.5 md:text-lg`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;

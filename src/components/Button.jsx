import { motion } from "framer-motion";

function Button({ children, bgcolor = "white" }) {
  return (
    <motion.button
      className={`rounded-full shadow-sm uppercase tracking-wider bg-${bgcolor} text-primary text-sm text-center font-secondary font-bold px-6 py-3.5 md:text-lg`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;

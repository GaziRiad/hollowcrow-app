import { motion } from "framer-motion";

function Feature({ src, name }) {
  return (
    <div className="w-52 flex flex-col items-center justify-center gap-5 ">
      <motion.img
        initial={{ opacity: 0.8, scale: 1 }}
        whileHover={{ opacity: 1, scale: 1.2 }}
        src={src}
        className="w-32 md:w-40"
      />
      <p className=" text-black-800 uppercase text-lg font-semibold text-center md:text-xl">
        {name}
      </p>
    </div>
  );
}

export default Feature;

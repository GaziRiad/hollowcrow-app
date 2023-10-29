import { motion } from "framer-motion";

function Feature({ src, name }) {
  return (
    <div className="w-44 flex flex-col items-center justify-center gap-2 md:w-48">
      <motion.img src={src} className="w-32 md:w-40" />
      <p className=" text-black-800 uppercase text-lg font-semibold text-center md:text-xl">
        {name}
      </p>
    </div>
  );
}

export default Feature;

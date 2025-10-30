import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// --- Card Component ---
const Card = ({ heading, description, imgSrc }) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-64 w-full cursor-pointer overflow-hidden bg-slate-300"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-20 flex h-full flex-col justify-between p-4 text-white transition-all duration-500">
        <FiArrowRight className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h4>
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- AnimatedLetter Helper Component ---
const letterVariants = {
  hover: {
    y: "-50%",
  },
};

const AnimatedLetter = ({ letter }) => {
  return (
    <div className="inline-block h-[40px] overflow-hidden font-semibold text-2xl">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default Card;

"use client"

import { motion } from "framer-motion";

const TrickWords = ({ text }: { text: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  return (
    <motion.div
      className="overflow-hidden flex flex-wrap justify-center gap-1"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TrickWords;

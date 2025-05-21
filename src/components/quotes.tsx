"use client";

import React from "react";
import TrickWords from "./ui/trickWord";
import { motion } from "framer-motion";

const Quotes = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="section flex justify-center pb-40 lg:pb-60"
    >
      <div className="flex flex-col justify-center items-center text-center max-w-4xl">
        <p className="small">
          <TrickWords text="I'm a software developer and graphic designer who builds scalable,user-friendly applications while crafting visually compelling designs that enhance digital experiences. Always eager to learn, solve problems, and bring ideas to life with clean, maintainable code." />
        </p>
        <div className="vertical-stripe dark:bg-white/30 bg-gray-800 my-5"></div>
        <p className="small">
          <TrickWords text="There is no Rules. Create without Limits" />
        </p>
      </div>
    </motion.div>
  );
};

export default Quotes;

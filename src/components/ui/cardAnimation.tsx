"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

export const CardAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="relative transition-all flex flex-col items-center justify-center p-4 gap-2 w-full rounded-lg border dark:border-white/10 border-black/10 hover:border-[var(--accent-color)] hover:shadow-[0px_0px_15px_3px_var(--accent-color)]"
      style={{
        transition: "all 0.4s ease-out",
      }}
    >
      {children}
    </motion.div>
  );
};

export const BoxGlow = ({ children }: { children: ReactNode }) => {
    return (
      <motion.div
        className="relative transition-all flex flex-col items-center justify-center p-4 gap-2 w-24 aspect-square rounded-lg border dark:border-white/10 border-black/10 hover:border-[var(--accent-color)] hover:shadow-[0px_0px_15px_3px_var(--accent-color)]"
        style={{
          transition: "all 0.4s ease-out",
        }}
      >
        {children}
      </motion.div>
    );
  };
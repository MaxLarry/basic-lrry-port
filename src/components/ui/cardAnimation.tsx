"use client";

import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";

const CardAnimation = ({ children }: { children: ReactNode }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative transition-all flex flex-col items-center justify-center p-4 gap-2 w-24 aspect-square rounded-lg border dark:border-white/10 border-black/10"
      style={{
        background: isHovering
          ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 0px 0px 15px 3px var(--accent-color))`
          : "transparent",
        boxShadow: isHovering
          ? `0px 0px 15px 3px var(--accent-color)`
          : "0px 0px 0px transparent",
        transition: "all 0.4s ease-out",
      }}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimation;

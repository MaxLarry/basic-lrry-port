"use client";

import React, { ReactNode, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
interface BoxGlowProps {
  children: ReactNode;
  delay?: number;
}

export const CardAnimation = () => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(125px 125px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();

      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <motion.div
      className=" absolute inset-0 border border-[--primary-color] rounded-lg"
      style={{
        WebkitMaskImage: maskImage,
        maskImage,
      }}
      ref={border}
    ></motion.div>
  );
};

export const BoxGlow: React.FC<BoxGlowProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3, delay }}
      className="relative transition-all flex flex-col items-center justify-center p-4 gap-2 w-20 lg:w-24 aspect-square rounded-lg border dark:border-white/10 border-black/10 hover:border-[var(--accent-color)] hover:shadow-[0px_0px_15px_3px_var(--accent-color)]"
      style={{
        transition: "all 0.4s ease-out",
      }}
    >
      {children}
    </motion.div>
  );
};

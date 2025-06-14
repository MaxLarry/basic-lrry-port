"use client";

import React, { useEffect, useState } from "react";
import { minetechnStack, designStack } from "@/src/lib/data";
import Image from "next/image";
import { CardAnimation, BoxGlow } from "@/src/components/ui/cardAnimation";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const TechStack = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []); 

  return (
    <motion.div
      initial={{
        y: 25,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        delay: 0.1,
        ease: "easeOut",
      }}
      className="section flex justify-center h-full"
    >
      <div className="flex w-full items-center flex-col">
        <h1 className="uppercase mb-8">Tech Stack</h1>
        <div className="flex flex-col gap-10 items-center">
          <div>
            <p className="small w-full opacity-60 text-center mb-5 uppercase">
              🚀 Software Development
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {minetechnStack.map((item, index) => {
                // const typenito = typeof item.logo; // debug
                // console.log(typenito);
                if (!mounted) return null;

                const logoSrc =
                  typeof item.logo === "object"
                    ? "src" in item.logo
                      ? item.logo.src
                      : theme === "dark"
                      ? item.logo.dark.src
                      : item.logo.light.src
                    : item.logo;
                return (
                  <BoxGlow key={index}  delay={index * 0.2}>
                    <CardAnimation />
                    <Image
                      src={logoSrc}
                      width={0}
                      height={35}
                      alt={`${item.name}-svg`}
                      className="lg:w-9 w-6"
                      suppressHydrationWarning
                    ></Image>
                    <p className="name opacity-60">{item.name}</p>
                  </BoxGlow>
                );
              })}
            </div>
          </div>
          <div>
            <p className="small w-full opacity-60 text-center mb-5 uppercase">
              ✨ Design
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {designStack.map((item, index) => {
                if (!mounted) return null;
                const logoSrc =
                  typeof item.logo === "object"
                    ? "src" in item.logo
                      ? item.logo.src
                      : theme === "dark"
                      ? item.logo.dark.src
                      : item.logo.light.src
                    : item.logo;
                return (
                  <BoxGlow key={index} delay={index * 0.2}>
                    <CardAnimation />
                    <Image
                      src={logoSrc}
                      width={0}
                      height={35}
                      alt={`${item.name}-svg`}
                      className="lg:w-9 w-6"
                      suppressHydrationWarning
                    ></Image>
                    <p className="name opacity-60">{item.name}</p>
                  </BoxGlow>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;

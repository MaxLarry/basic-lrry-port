"use client";

import React from "react";
import { minetechnStack, designStack } from "@/src/lib/data";
import Image from "next/image";
import { CardAnimation, BoxGlow } from "@/src/components/ui/cardAnimation";
import { useTheme } from "next-themes";

const techStack = () => {
  const { theme } = useTheme();
  return (
    <div className="section flex justify-center h-full">
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

                const logoSrc =
                  typeof item.logo === "object"
                    ? "src" in item.logo
                      ? item.logo.src
                      : theme === "dark"
                      ? item.logo.dark.src
                      : item.logo.light.src
                    : item.logo;
                return (
                  <BoxGlow key={index}>
                    <Image
                      src={logoSrc}
                      width={35}
                      height={35}
                      alt={`${item.name}-svg`}
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
                const logoSrc =
                  typeof item.logo === "object"
                    ? "src" in item.logo
                      ? item.logo.src
                      : theme === "dark"
                      ? item.logo.dark.src
                      : item.logo.light.src
                    : item.logo;
                return (
                  <BoxGlow key={index}>
                    <Image
                      src={logoSrc}
                      width={35}
                      height={35}
                      alt={`${item.name}-svg`}
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
    </div>
  );
};

export default techStack;

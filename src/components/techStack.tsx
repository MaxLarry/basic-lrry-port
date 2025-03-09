"use client";

import React from "react";
import { minetechnStack, designStack } from "@/src/lib/data";
import Image from "next/image";
import CardAnimation from "@/src/components/ui/cardAnimation";

const techStack = () => {
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
              {minetechnStack.map((item, index) => (
                <CardAnimation key={index}>
                    <Image
                      src={item.logo}
                      width={35}
                      height={35}
                      alt={`${item.name}-svg`}
                    ></Image>
                    <p className="name opacity-60">{item.name}</p>
                </CardAnimation>
              ))}
            </div>
          </div>
          <div>
            <p className="small w-full opacity-60 text-center mb-5 uppercase">
              ✨ Design
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {designStack.map((item, index) => (
                <CardAnimation key={index}>
                  <Image
                    src={item.logo}
                    width={35}
                    height={35}
                    alt={`${item.name}-svg`}
                  ></Image>
                  <p className="name opacity-60">{item.name}</p>
                </CardAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default techStack;

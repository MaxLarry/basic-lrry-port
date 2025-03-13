"use client";

import React from "react";
import { CardAnimation } from "./ui/cardAnimation";

type TryData = {
  name: string;
  desc: string;
  techTags: string[];
  links: string;
}[];

const tryData: TryData = [
  {
    name: "Mannavision",
    desc: "Automated attendance system that can recognize faces and check if they are wearing masks. Features real-time detection, attendance logging, and reporting capabilities for schools and offices.",
    techTags: ["React", "NodeJS", "MongoDB"],
    links: "itoooo",
  },
  {
    name: "Bakanaman",
    desc: "Automated attendance system that can recognize faces and check if they are wearing masks. Features real-time detection, attendance logging, and reporting capabilities for schools and offices.",
    techTags: ["React", "NodeJS", "MongoDB"],
    links: "itoooo",
  },
  {
    name: "Voice",
    desc: "Automated attendance system that can recognize faces and check if they are wearing masks. Features real-time detection, attendance logging, and reporting capabilities for schools and offices.",
    techTags: ["React", "NodeJS", "MongoDB"],
    links: "itoooo",
  },
];

const projects = () => {
  return (
    <div id="projects" className="section-project px-0 pb-32">
      <div className="flex flex-col justify-center">
        <div className="">
          <h1 className="uppercase mb-5 text-center">Projects</h1>
          <div className="stripe dark:bg-white/30 bg-gray-800 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {tryData.map((prj) => (
            <div className="relative p-4 w-full h-full gap-2 items-center bg-black/20   rounded-lg " key={prj.name}>
            <CardAnimation ></CardAnimation>
                <div  className="fles flex-col">
                  <h2>{prj.name}</h2>
                  <p className="small">{prj.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;

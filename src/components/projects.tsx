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
  {
    name: "Voice",
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
          {tryData.map((prj, index) => (
            <div
              className="relative p-5 w-full h-full gap-2 items-center dark:bg-neutral-950/70 bg-neutral-100 rounded-lg "
              key={`${prj.name} - ${index}`}
            >
              <CardAnimation></CardAnimation>
              <div className="flex flex-col">
                <h2>{prj.name}</h2>
                <p className="small mt-4 dark:text-gray-400 text-gray-700">{prj.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-start mt-8">
                {prj.techTags.map((tag, index) => (
                  <span key={`${tag}-${index}`} className="text-xs rounded-full px-4 py-1 dark:bg-neutral-900 bg-neutral-200 cursor-default"> 
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;

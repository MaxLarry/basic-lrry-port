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
    desc: "blablslablsbasblabslablsbalbslabslablsabslbalsabl",
    techTags: ["React", "NodeJS", "MongoDB"],
    links: "itoooo",
  },
  {
    name: "Bakanaman",
    desc: "blablslablsbasblabslablsbalbslabslablsabslbalsabl",
    techTags: ["React", "NodeJS", "MongoDB"],
    links: "itoooo",
  },
  {
    name: "Voice",
    desc: "blablslablsbasblabslablsbalbslabslablsabslbalsabl",
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
            <CardAnimation key={prj.name}>
                <div>
                    <div></div>
                </div>
                
                {prj.name}</CardAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;

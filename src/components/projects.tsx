"use client";

import React, { useState } from "react";
import { CardAnimation } from "./ui/cardAnimation";
import { graphics } from "../lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type TryData = {
  name: string;
  desc: string;
  techTags: string[];
  links: string;
}[];

const tryData: TryData = [
  {
    name: "Mannavision",
    desc: "A portfolio website built for static use to showcase multimedia projects. It also offers services like video editing, graphic design, photo manipulation, and social media management.",
    techTags: ["PWA", "HTML", "CSS", "JavaScript"],
    links: "#",
  },
  {
    name: "PalaWonder",
    desc: "A blogsite for travelers who love exploring Palawan, Philippines. Users can write blogs, share experiences, and showcase hidden gems that make Palawan worth visiting.",
    techTags: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    links: "#",
  },
  {
    name: "RentConnect-Admin",
    desc: "The admin dashboard for RentConnect. It helps manage property listings, users, safety compliance, messages, and system activity. Designed to monitor and control the platform efficiently.",
    techTags: ["React", "Node.js", "MongoDB", "Tailwind"],
    links: "#",
  },
  {
    name: "FireApp",
    desc: "Automated attendance system that can recognize faces and check if they are wearing masks. Features real-time detection, attendance logging, and reporting capabilities for schools and offices.",
    techTags: ["Python", "Django"],
    links: "#",
  },
  {
    name: "My Fancy Portfolio",
    desc: "An unfinished personal portfolio project started in late 2023. Meant to showcase projects, skills, and creative work with smooth animations and a modern layout.",
    techTags: ["React JS", "GSAP", "Lenis", "Tailwind"],
    links: "#",
  },
  {
    name: "E-commerce Site",
    desc: "A personal project that builds an online store with an admin panel. Designed for business owners to manage products, sales, and customers easily.",
    techTags: ["Next.js", "Supabase", "Tailwind"],
    links: "#",
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div id="projects" className="section-project px-0 pb-32">
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className=""
        >
          <h1 className="uppercase mb-5 text-center">Projects</h1>
          <div className="stripe dark:bg-white/30 bg-gray-800 mb-6"></div>

          <p className="small w-full opacity-60 text-center mb-5 uppercase">
            Software Projects
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {tryData.map((prj, index) => (
            <motion.div
              key={`${prj.name}-${index}`}
              initial={{ x: index % 2 === 0 ? -50 : 50, y: 20, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              onMouseEnter={() => {
                setModal({ active: true, index: index });
              }}
              className="relative p-5 w-full h-full gap-2 items-center dark:bg-neutral-950/70 bg-neutral-100 rounded-lg"
            >
              <CardAnimation />
              <div className="flex flex-col">
                <h2>{prj.name}</h2>
                <p className="small mt-4 dark:text-gray-400 text-gray-700">
                  {prj.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-start mt-8">
                {prj.techTags.map((tag, idx) => (
                  <span
                    key={`${tag}-${idx}`}
                    className="text-xs rounded-full px-4 py-1 dark:bg-neutral-900 bg-neutral-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          className="small w-full opacity-60 text-center mb-5 uppercase"
        >
          Graphics and Design
        </motion.p>
        <div className="grid grid-cols-8 auto-rows-auto gap-1 lg:gap-3 mb-10">
          {graphics.map((prj, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative object-cover rounded-lg"
              key={`${prj.name} - ${index}`}
              style={{
                gridColumn: `${prj.position.colStart} / ${prj.position.colEnd}`,
                gridRow: `${prj.position.rowStart} / ${prj.position.rowEnd}`,
              }}
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={prj.src}
                width={0}
                height={0}
                alt={prj.alt}
                className="w-full h-full object-cover lg:rounded-lg rounded-md"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

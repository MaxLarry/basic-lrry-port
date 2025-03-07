"use client";

import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";
import Image from "next/image";
import LrryJhn from "@/app/img/LJA_icon.svg";

const header = () => {
  return (
    <header className="fixed inset-0 z-50 px-4 py-2 lg:py-4">
      <div className="max-w-7xl mx-auto bg-white/10 dark:bg-black/50 backdrop-blur-md rounded-2xl border dark:border-white/10 border-black/10">
        <div className="flex justify-between items-center h-14 py-0 lg:py-2 lg:h-16 px-4 lg:px-8">
          <div className="flex items-center cursor-pointer">
            <a href="/" title="logo">
              <Image
                src={LrryJhn}
                width={50}
                height={50}
                alt="lrry logo"
                loading="lazy"
                className=""
              ></Image>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3 cursor-pointer uppercase">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              offset={-100}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              offset={-100}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              offset={-100}
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              offset={-100}
            >
              Socials
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              offset={-100}
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;

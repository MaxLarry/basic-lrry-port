"use client";

import { Link } from "react-scroll";
import NextLink from "next/link";
import React from "react";
import Image from "next/image";
import LrryJhn from "@/src/img/LJA_icon.svg";
import ThSwitch from "./toggleSwitch";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }} // Start position above screen
      animate={{ y: 0, opacity: 1 }} // Animate to normal position
      transition={{ type: "spring", stiffness: 20, damping: 10 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2 lg:py-4"
    >
      <div className="max-w-7xl mx-auto bg-white/10 dark:bg-black/50 backdrop-blur-md rounded-2xl border dark:border-white/10 border-black/10">
        <div className="flex justify-between items-center h-14 py-0 lg:py-2 lg:h-16 px-4 lg:px-8">
          <div className="flex items-center cursor-pointer">
            <NextLink href="/" title="Home">
              <Image
                src={LrryJhn}
                alt="Lrry Jhn logo"
                style={{ width: "40px", height: "auto" }}
                loading="lazy"
                className="h-auto"
              />
            </NextLink>
          </div>
          <div className="hidden md:flex items-center gap-4 uppercase">
            <Link
              className="text-sm font-larry-semibold cursor-pointer"
              activeClass="active"
              to="home"
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
              className="text-sm font-larry-semibold cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              offset={-100}
            >
              About-me
            </Link>
            <Link
              className="text-sm font-larry-semibold cursor-pointer"
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
              className="text-sm font-larry-semibold cursor-pointer"
              activeClass="active"
              to="services"
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
              className="text-sm font-larry-semibold cursor-pointer"
              activeClass="active"
              to="contact"
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
          <div className="hidden md:flex">
            <ThSwitch />
          </div>
          <div className="md:hidden flex cursor-pointer">
            <Menu></Menu>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

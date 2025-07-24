"use client";

import { Link } from "react-scroll";
import NextLink from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import LrryJhn from "@/src/img/LJA_icon.svg";
import ThSwitch from "./toggleSwitch";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import CardMenu from "../components/ui/cardMenu";
import { sections } from "@/src/lib/data";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
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
              {sections.map(({ id, label }) => {
                const isExternal = id.startsWith("/");

                return isExternal ? (
                  <NextLink
                    key={id}
                    href={id}
                    className="text-sm font-larry-semibold cursor-pointer"
                    onClick={() => setMenu(false)}
                  >
                    {label}
                  </NextLink>
                ) : (
                  <Link
                    key={id}
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-sm font-larry-semibold cursor-pointer"
                    onClick={() => setMenu(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex">
                <ThSwitch />
              </div>
              <div className="md:hidden flex cursor-pointer">
                <div
                  className="w-7 h-7 cursor-pointer z-2 flex justify-center items-center rounded-full dark:bg-white/30 bg-black/10"
                  onClick={() => setMenu(!menu)}
                >
                  {menu ? <X className="w-4" /> : <Menu className="w-4" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
      <CardMenu menu={menu} setMenu={setMenu} />
    </>
  );
};

export default Header;

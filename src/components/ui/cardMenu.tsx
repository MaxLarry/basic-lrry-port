"use client";

import React from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { sections } from "@/src/lib/data";
type CardMenuProps = {
  menu: boolean;
  setMenu: (value: boolean) => void;
};

const CardMenu = ({ menu, setMenu }: CardMenuProps) => {
  if (!menu) return null;

  return (
    <div className="inset-0 fixed items-center justify-center md:hidden flex z-10 bg-white/10 dark:bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="h-72 w-72 flex items-center justify-center bg-white dark:bg-black rounded-tr-3xl rounded-bl-3xl border dark:border-white/10 border-black/10"
      >
        <div className="flex flex-col items-center gap-4 uppercase">
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
      </motion.div>
    </div>
  );
};

export default CardMenu;

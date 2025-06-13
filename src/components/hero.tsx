"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const Hero = () => {
  const [disabled, setDisabled] = useState(false);

  const email = "larryjohnadonga.dev@gmail.com";

  const handleCopy = () => {
    if (disabled) return;

    setDisabled(true);

    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success(`EMAIL COPIED: ${email}`, {
          description: "You can now send me an email",
        });

        // Reset after 3 seconds
        setTimeout(() => {
          setDisabled(false);
        }, 5000);
      })
      .catch(() => {
        // Optional: handle error
        setDisabled(false);
        toast.error("Failed to copy email");
      });
  };

  return (
    <div className="section flex items-center h-[550px]" id="home">
      <div className="flex flex-col justify-start gap-3">
        <motion.div
          initial={{
            y: -15,
            // filter: "blur(10px)",
            opacity: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="flex items-center gap-4"
        >
          <p className="">Hi, I&apos;m Larry John.</p>
          <div className="inline-flex w-fit items-center rounded-full bg-black dark:bg-white text-center px-3 py-1 text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-xs lg:text-sm text-white dark:text-black">
              Available for work
            </span>
          </div>
        </motion.div>

        {/* Big Title* */}
        <motion.div
          className="flex flex-col gap-5 lg:gap-9 max-w-4xl mb-3"
          initial={{
            rotateX: 24, // Tilt forward
            y: 25,
            skewX: -20,
            filter: "blur(10px)",
            opacity: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            rotateX: 0, // Tilt forward
            y: 0,
            skewX: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <h1 className="big">
            Bridging logic and{" "}
            <span className="italic bg-gradient-to-r from-[#007cf0] via-[#00dfd8] to-[#7928ca] bg-clip-text text-transparent animated-gradient">
              creativity{" "}
            </span>{" "}
            in the digital space.
          </h1>
        </motion.div>
        <motion.div
          initial={{
            y: 25,
            opacity: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <p className="small">
            I&apos;m a software developer and graphic designer passionate about
            building scalable, user-friendly applications and crafting visually
            compelling designs that enhance digital experiences.
          </p>
        </motion.div>
        <motion.div
          initial={{
            y: 25,
            filter: "blur(5px)",
            opacity: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="flex flex-row gap-5 items-center"
        >
          <span
            className=" button button-link prim gap-2 cursor-pointer"
            onClick={handleCopy}
          >
            <Copy className="w-4"></Copy> Copy Email
          </span>
          <Link
            className=" button button-link non-prim gap-2"
            href="/message-me"
          >
            <Plus className="w-4"></Plus> Hire me
          </Link>
        </motion.div>
      </div>
      <Toaster />
    </div>
  );
};

export default Hero;

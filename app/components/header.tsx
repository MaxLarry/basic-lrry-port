"use client";

import React from "react";
import Image from "next/image";
import LrryJhn from "@/app/img/LJA_icon.svg";
import Link from "next/link";

const header = () => {
  return (
    <div className="flex justify-between cursor-pointer">
      <div className="">
        <Image src={LrryJhn} width={50} height={50} alt="lrry logo" loading="lazy" className=""></Image>
      </div>
      <div className="flex gap-2">
            <Link href='/'>Home</Link>
            <Link href='/'>Projects</Link>
            <Link href='/'>Services</Link>
            <Link href='/'>Socials</Link>
            <Link href='/'>Contacts</Link>
      </div>
    </div>
  );
};

export default header;

"use client";

import { Sun, Moon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // to avoid hydration mismatch sabi

  return (
      <div
        className="w-7 h-7 cursor-pointer z-2 flex justify-center items-center rounded-full dark:bg-white/30 bg-black/10"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun width={17}></Sun> : <Moon width={17}></Moon>}
      </div>
      
  );
};

export default ToggleSwitch;

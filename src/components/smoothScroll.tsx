"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust scrolling speed
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      syncTouch: true, // Syncs touch interactions
      wheelMultiplier: 1, // Adjust scroll sensitivity
      gestureOrientation: "vertical", // Enable vertical scrolling
    });

    const animate = (time: number) => {
      lenis.raf(time); // Ensure the time parameter has a number type
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return null; // No UI needed
};

export default SmoothScroll;

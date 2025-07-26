"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function Bigname() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      let direction = 1;

      function roll(
        targets: string,
        vars: gsap.TweenVars = {},
        reverse = false
      ) {
        vars.ease ||= "none";

        const tl = gsap.timeline({
          repeat: -1,
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 10);
          },
        });

        const elements = gsap.utils.toArray<HTMLElement>(targets);
        const clones = elements.map((el) => {
          const clone = el.cloneNode(true) as HTMLElement;
          el.parentNode?.appendChild(clone);
          return clone;
        });

        const positionClones = () =>
          elements.forEach((el, i) =>
            gsap.set(clones[i], {
              position: "absolute",
              overwrite: false,
              top: el.offsetTop,
              left:
                el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth),
            })
          );

        positionClones();
        console.log("gumana na!");

        elements.forEach((el, i) =>
          tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...vars }, 0)
        );

        window.addEventListener("resize", () => {
          const time = tl.totalTime();
          tl.totalTime(0);
          positionClones();
          tl.totalTime(time);
        });

        return tl;
      }

      const roll1 = roll(".big-name .name-wrap", { duration: 17 });

      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
            gsap.to([roll1], { timeScale: direction, overwrite: true });
          }
        },
      });

      return () => {
        scrollTrigger.kill();
        roll1.kill();
      };
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
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
      className="big-name"
      ref={containerRef}
    >
      <div
        className="name-h1"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="4"
        data-scroll-position="top"
      >
        <div className="name-wrap">
          <h1 className="no-select once-in once-in-secondary">
            Larry John Andonga<span className="spacer">•</span>
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export default Bigname;

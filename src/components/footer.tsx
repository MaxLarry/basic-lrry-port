"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FollowMe from "@/src/img/essentials/./follow-me-lja-v3.png";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const instagramLink = "https://www.instagram.com/larrevision";
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100086583787043";
  const linkedinLink =
    "https://www.linkedin.com/in/larry-john-andonga-674080278/";

  const messages = ["Get in touch", "Click to copy"];

  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className=" py-0" id="contact">
      <div className="stripe dark:bg-white/30 bg-gray-800"></div>

      <div className="section-footer">
        <div className="prefooter">
          <div className="section-title-labels footer-title">
            <motion.div
              className="label message"
              animate={{ y: isHovered ? "-100%" : "0%" }}
              transition={{ duration: 0.3 }}
            >
              Let's work together
            </motion.div>
            <motion.div
              className="label message transition-transform duration-300 ease-in-out"
              style={{
                transform: isHovered ? "translateY(-100%)" : "translateY(0%)",
              }}
            >
              click to send Message
            </motion.div>
          </div>
          <div className="relative items-center flex justify-center w-full">
            <Link
              className="message-box text-center py-4 px-8 relative cursor-pointer bg-black/5 rounded-[16px] hover:scale-95 transition-transform duration-500 ease-in-out"
              href={"/message-me"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h1 className="uppercase">Send me a Message</h1>
              <p className="small opacity-60">
                "Break free, create without boundaries"
              </p>
              <div className="opacity-[0.26] border border-dashed border-black dark:border-white rounded-[16px] w-full h-full absolute inset-0"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="section-footer footer">
        <div className="wrap-wide">
          <div className="stripe dark:bg-white bg-gray-800"></div>
          <div className="footer-wrap">
            <div className="credits">
              <p className="small">
                <a
                  href="https:/larry-portry.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {year ?? "..."} &copy; LarryJohn
                </a>
              </p>
            </div>
            <div className="social-icons social-hover ">
              <Link
                href={facebookLink}
                className="social-ico facebook"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  fill="url(#a)"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      x2="50%"
                      y1="97.078%"
                      y2="0%"
                      id="a"
                    ></linearGradient>
                  </defs>
                  <path
                    fill="#000000"
                    className="circle"
                    d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
                  />
                  <path
                    className="facebook"
                    fill="#ffff"
                    d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                  />
                </svg>
              </Link>
              <Link
                href={instagramLink}
                className="social-ico instagram"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-label="Follow us on LinkedIn"
                >
                  <path d="M12,3.8c2.67,0,2.986.01,4.041.058A5.552,5.552,0,0,1,17.9,4.2a3.31,3.31,0,0,1,1.9,1.9,5.552,5.552,0,0,1,.344,1.857C20.188,9.014,20.2,9.33,20.2,12s-.01,2.986-.058,4.041A5.552,5.552,0,0,1,19.8,17.9a3.31,3.31,0,0,1-1.9,1.9,5.552,5.552,0,0,1-1.857.344c-1.054.048-1.371.058-4.041.058s-2.987-.01-4.041-.058A5.552,5.552,0,0,1,6.1,19.8a3.31,3.31,0,0,1-1.9-1.9,5.552,5.552,0,0,1-.344-1.857C3.812,14.986,3.8,14.67,3.8,12s.01-2.986.058-4.041A5.552,5.552,0,0,1,4.2,6.1,3.31,3.31,0,0,1,6.1,4.2,5.552,5.552,0,0,1,7.959,3.86C9.014,3.812,9.33,3.8,12,3.8M12,2c-2.716,0-3.056.012-4.123.06a7.355,7.355,0,0,0-2.427.465A5.106,5.106,0,0,0,2.525,5.45,7.355,7.355,0,0,0,2.06,7.877C2.012,8.944,2,9.284,2,12s.012,3.056.06,4.123a7.355,7.355,0,0,0,.465,2.427A5.106,5.106,0,0,0,5.45,21.475a7.355,7.355,0,0,0,2.427.465C8.944,21.989,9.284,22,12,22s3.056-.011,4.123-.06a7.355,7.355,0,0,0,2.427-.465,5.106,5.106,0,0,0,2.925-2.925,7.355,7.355,0,0,0,.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123a7.355,7.355,0,0,0-.465-2.427A5.106,5.106,0,0,0,18.55,2.525a7.355,7.355,0,0,0-2.427-.465C15.056,2.012,14.716,2,12,2Z"></path>
                  <path d="M12,6.865A5.135,5.135,0,1,0,17.135,12,5.135,5.135,0,0,0,12,6.865Zm0,8.468A3.333,3.333,0,1,1,15.333,12,3.333,3.333,0,0,1,12,15.333Z"></path>
                  <circle cx="17.338" cy="6.662" r="1.2"></circle>
                </svg>
              </Link>
              <Link
                href={linkedinLink}
                className="social-ico linkedin"
                target="_blank"
                aria-label="Follow us on LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.9,20.9H17.166V15.053c0-1.394-.028-3.188-1.944-3.188-1.945,0-2.242,1.517-2.242,3.085V20.9H9.249V8.877h3.584v1.639h.048a3.932,3.932,0,0,1,3.538-1.942c3.78,0,4.479,2.488,4.479,5.726v6.6ZM5.036,7.232A2.167,2.167,0,1,1,7.2,5.064,2.165,2.165,0,0,1,5.036,7.232ZM6.906,20.9H3.165V8.877H6.906Z"></path>
                </svg>
              </Link>
              <Image
                className="social-sticker"
                src={FollowMe}
                alt="follow-me-larry"
                loading="lazy"
                height={600}
                width={600}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

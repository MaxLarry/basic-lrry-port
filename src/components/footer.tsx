"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const messages = ["Get in touch", "Click to copy"];
  return (
    <footer className=" py-0">
      <div className="stripe dark:bg-white/30 bg-gray-800"></div>

      <div className="section-footer">
        <div className="prefooter">
          <div className="section-title-labels footer-title">
            <div className="label message">get in touch</div>
            <div className="label message">click to copy</div>
          </div>
          <div className="relative items-center flex justify-center w-full">
            <div className="text-center py-4 px-8 relative cursor-pointer bg-black/5 rounded-[16px] hover:scale-95 transition-all ease-in-out">
              <h1 className="uppercase">Let's Work Together</h1>
              <p className="opacity-60">
                "Break free, create without boundaries"
              </p>
              <div className="opacity-[0.26] border border-dashed border-black dark:border-white rounded-[16px] w-full h-full absolute inset-0"></div>
            </div>
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
                <a href="https:/larry-portry.vercel.app" target="_blanks">
                  {currentYear} &copy; LarryJohn
                </a>
              </p>
            </div>
            <div className="social-icons social-hover ">
              <a href="#" className="social-ico twitter" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-label="Follow us on LinkedIn"
                >
                  <path d="M22.459,5.5a8.763,8.763,0,0,1-2.471.678A4.337,4.337,0,0,0,21.88,3.794,8.907,8.907,0,0,1,19.144,4.83,4.3,4.3,0,0,0,11.7,7.768a4.446,4.446,0,0,0,.111.983A12.194,12.194,0,0,1,2.935,4.266a4.226,4.226,0,0,0-.582,2.166,4.307,4.307,0,0,0,1.914,3.584,4.292,4.292,0,0,1-1.949-.539V9.53A4.306,4.306,0,0,0,5.77,13.753a4.342,4.342,0,0,1-1.935.075,4.318,4.318,0,0,0,4.028,2.989,8.629,8.629,0,0,1-5.339,1.842A9.277,9.277,0,0,1,1.5,18.6a12.254,12.254,0,0,0,6.613,1.932A12.159,12.159,0,0,0,20.361,8.3c0-.183,0-.367-.013-.551A8.69,8.69,0,0,0,22.5,5.516Z"></path>
                </svg>
              </a>
              <a href="#" className="social-ico instagram" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-label="Follow us on LinkedIn"
                >
                  <path d="M12,3.8c2.67,0,2.986.01,4.041.058A5.552,5.552,0,0,1,17.9,4.2a3.31,3.31,0,0,1,1.9,1.9,5.552,5.552,0,0,1,.344,1.857C20.188,9.014,20.2,9.33,20.2,12s-.01,2.986-.058,4.041A5.552,5.552,0,0,1,19.8,17.9a3.31,3.31,0,0,1-1.9,1.9,5.552,5.552,0,0,1-1.857.344c-1.054.048-1.371.058-4.041.058s-2.987-.01-4.041-.058A5.552,5.552,0,0,1,6.1,19.8a3.31,3.31,0,0,1-1.9-1.9,5.552,5.552,0,0,1-.344-1.857C3.812,14.986,3.8,14.67,3.8,12s.01-2.986.058-4.041A5.552,5.552,0,0,1,4.2,6.1,3.31,3.31,0,0,1,6.1,4.2,5.552,5.552,0,0,1,7.959,3.86C9.014,3.812,9.33,3.8,12,3.8M12,2c-2.716,0-3.056.012-4.123.06a7.355,7.355,0,0,0-2.427.465A5.106,5.106,0,0,0,2.525,5.45,7.355,7.355,0,0,0,2.06,7.877C2.012,8.944,2,9.284,2,12s.012,3.056.06,4.123a7.355,7.355,0,0,0,.465,2.427A5.106,5.106,0,0,0,5.45,21.475a7.355,7.355,0,0,0,2.427.465C8.944,21.989,9.284,22,12,22s3.056-.011,4.123-.06a7.355,7.355,0,0,0,2.427-.465,5.106,5.106,0,0,0,2.925-2.925,7.355,7.355,0,0,0,.465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123a7.355,7.355,0,0,0-.465-2.427A5.106,5.106,0,0,0,18.55,2.525a7.355,7.355,0,0,0-2.427-.465C15.056,2.012,14.716,2,12,2Z"></path>
                  <path d="M12,6.865A5.135,5.135,0,1,0,17.135,12,5.135,5.135,0,0,0,12,6.865Zm0,8.468A3.333,3.333,0,1,1,15.333,12,3.333,3.333,0,0,1,12,15.333Z"></path>
                  <circle cx="17.338" cy="6.662" r="1.2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="social-ico linkedin"
                target="_blank"
                aria-label="Follow us on LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.9,20.9H17.166V15.053c0-1.394-.028-3.188-1.944-3.188-1.945,0-2.242,1.517-2.242,3.085V20.9H9.249V8.877h3.584v1.639h.048a3.932,3.932,0,0,1,3.538-1.942c3.78,0,4.479,2.488,4.479,5.726v6.6ZM5.036,7.232A2.167,2.167,0,1,1,7.2,5.064,2.165,2.165,0,0,1,5.036,7.232ZM6.906,20.9H3.165V8.877H6.906Z"></path>
                </svg>
              </a>
              <Image
                className="social-sticker"
                data-src="https://onenil.com/assets/img/OneNil_2021_Sticker_VOL1_FOLLOW.png"
                src="https://onenil.com/assets/img/OneNil_2021_Sticker_VOL1_FOLLOW.png"
                height={100}
                width={100}
                alt="Follow us"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

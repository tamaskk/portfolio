import React, { useRef } from "react";
import me from "../assets/me.webp";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section
      className="text-[#2d2e32] bg-[#f9f9f9] flex flex-col justify-center items-center h-auto lg:h-screen relative w-full py-[11rem] lg:py-0"
      id="home"
    >
      <div className="mx-auto max-w-[1100px] px-10">
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col gap-y-10"
        >
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-y-[5rem]">
            <div className="flex flex-col w-full lg:w-3/5 pr-0 lg:pr-[145px] text-center lg:text-left gap-y-14">
              <h1 className="text-7xl lg:text-[6rem] font-bold">
                Front-End React Developer
              </h1>
              <p className="text-3xl">
                Hello, I'm Tamas Krisztian Kalman from Hungary. A young
                passoinate Front-End React Developer based in Budapest, Hungary.
                📍
              </p>
              <div className="flex flex-row gap-5 items-center justify-center lg:justify-start">
                <NavLink to="https://www.linkedin.com/in/tamaskrisztiankalman/">
                  <img src={linkedin} className="h-14 cursor-pointer" alt="" />
                </NavLink>
                <NavLink to="https://github.com/tamaskk">
                  <img src={github} className="h-14 cursor-pointer" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="w-4/5 lg:w-2/5">
              <div className="w-full border-black border-4 rounded-full hover:p-4  hover:scale-110 transition-all duration-300">
                <img src={me} className="rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0">
            <p className="text-3xl flex flex-row justify-center lg:justify-end items-center w-[10%] text-right gap-5 border-b border-black lg:border-0">
              Languages <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-20">
              <div className="flex flex-row items-center justify-center gap-20">
                <img
                  src="https://skillicons.dev/icons?i=js,ts"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0">
            <p className="text-3xl flex flex-row justify-center lg:justify-end items-center w-[10%] text-right gap-5 border-b border-black lg:border-0">
              Frontend <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-20">
              <div className="flex flex-row items-center justify-center gap-10 lg:gap-20">
                <img
                  src="https://skillicons.dev/icons?i=html,css"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
                                <img
                  src="https://skillicons.dev/icons?i=react,mui"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=tailwindcss,bootstrap"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0">
            <p className="text-3xl justify-center lg:justify-end items-center w-[10%] text-right flex flex-row gap-5 border-b border-black lg:border-0">
              Backend <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-20">
              <div className="flex flex-row items-center justify-center gap-10 lg:gap-20">
                <img
                  src="https://skillicons.dev/icons?i=next,nodejs"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
                                <img
                  src="https://skillicons.dev/icons?i=mongo,firebase"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
                <img
                  src="https://skillicons.dev/icons?i=aws"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0 w-full">
            <p className="text-3xl flex flex-row justify-center lg:justify-end items-center gap-5 w-[10%] text-right border-b border-black lg:border-0">
              Tools <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-20">
              <div className="flex flex-row items-center justify-center gap-10 lg:gap-20">
                <img
                  src="https://skillicons.dev/icons?i=github,git"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                />
                                <img
                  src="https://static-00.iconduck.com/assets.00/jira-icon-512x512-kkop6eik.png"
                  className="hover:-translate-y-5 transition-all duration-500 w-[48px] h-[48px]"
                  alt="skill-icon"
                />

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;

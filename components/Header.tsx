import React, { useRef } from "react";
import me from "@/assets/me.webp";
import github from "@/assets/github.svg";
import linkedin from "@/assets/linkedin.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section
      className="text-[#2d2e32] bg-[#f9f9f9] flex flex-col justify-center items-center h-auto lg:min-h-auto relative w-full py-[2rem] lg:py-10"
      id="home"
    >
      <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
        <motion.div
          initial={{ y: "-30px", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col gap-y-10"
        >
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-y-[5rem]">
            <div className="flex flex-col w-full lg:w-[70%] pr-0 lg:pr-[105px] text-center lg:text-left gap-y-14">
              <h1 className="text-3xl lg:text-[3rem] font-bold leading-snug">
                Front-End React Developer
              </h1>
              <p className="text-lg lg:text-2xl">
                Hello, I'm Tamas Krisztian Kalman from Hungary. A young
                passoinate Front-End React Developer based in Budapest, Hungary.
                📍
              </p>
              <div className="flex flex-row gap-5 items-center justify-center lg:justify-start">
                <Link href="https://www.linkedin.com/in/tamaskrisztiankalman/">
                  <Image
                    src={linkedin}
                    className="cursor-pointer"
                    width={28}
                    height={28}
                    alt=""
                  />
                </Link>
                <Link href="https://github.com/tamaskk">
                  <Image
                    src={github}
                    className="cursor-pointer"
                    width={28}
                    height={28}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="w-4/5 lg:w-2/5">
              <div className="w-full border-black border-4 rounded-full hover:p-4  hover:scale-110 transition-all duration-300">
                <Image alt="me" src={me} className="rounded-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0">
            <p className="text-2xl flex flex-row justify-center font-extralight lg:justify-end items-center w-[14%] text-right gap-5 border-b border-black lg:border-0">
              Languages <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-10">
              <div className="flex flex-row items-center justify-center gap-20">
                <img
                  src="https://skillicons.dev/icons?i=js,ts"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={96}
                  height={48}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0">
            <p className="text-2xl flex flex-row justify-center font-extralight lg:justify-end items-center w-[14%] text-right gap-5 border-b border-black lg:border-0">
              Frontend <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-10">
              <div className="flex flex-row items-center justify-center gap-5 lg:gap-10">
                <img
                  src="https://skillicons.dev/icons?i=html,css"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={96}
                  height={48}
                />
                <img
                  src="https://skillicons.dev/icons?i=react,mui"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={96}
                  height={48}
                />
                <img
                  src="https://skillicons.dev/icons?i=tailwindcss,bootstrap"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={96}
                  height={48}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0">
            <p className="text-2xl justify-center lg:justify-end items-center font-extralight w-[14%] text-right flex flex-row gap-5 border-b border-black lg:border-0">
              Backend <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-10">
              <div className="flex flex-row items-center justify-center gap-5 lg:gap-10">
                <img
                  src="https://skillicons.dev/icons?i=next,nodejs"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={96}
                  height={48}
                />
                <img
                  src="https://skillicons.dev/icons?i=mongo,firebase"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={96}
                  height={48}
                />
                <img
                  src="https://skillicons.dev/icons?i=aws"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={48}
                  height={48}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-start gap-y-10 lg:gap-y-0">
            <p className="text-2xl flex flex-row justify-center lg:justify-end font-extralight items-center gap-5 w-[14%] text-right border-b border-black lg:border-0">
              Tools <span className="hidden lg:block">|</span>
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center gap-y-10 lg:gap-y-0 lg:gap-20 px-10">
              <div className="flex flex-row items-center justify-center gap-10 lg:gap-10">
                <img
                  src="https://skillicons.dev/icons?i=github,git"
                  className="hover:-translate-y-5 transition-all duration-500"
                  alt="skill-icon"
                  width={96}
                  height={48}
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/jira-icon-512x512-kkop6eik.png"
                  className="hover:-translate-y-5 transition-all duration-500 w-[48px] h-[48px]"
                  alt="skill-icon"
                  width={48}
                  height={48}
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



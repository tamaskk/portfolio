import React from "react";
import setup from "@/assets/nubelson-fernandes-QNch8putqnU-unsplash.webp";
import text from "@/assets/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import meindraw from "@/assets/11602236_21004063.webp";
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

const About = () => {
  return (
    <section className="h-auto mx-auto max-w-[1100px] px-10 py-32 bg-white" id="about">
             <motion.div 
          initial={{ y: '-30px', opacity: 0}}
          whileInView={{ y: '0', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto lg:mx-0">
        <div className="w-full h-auto flex items-center justify-center relative">
          <Image alt="setup" src={setup} className="rounded-3xl w-auto h-full lg:h-auto" />
          <div className="w-40 h-40 lg:w-40 lg:h-40 bg-white absolute -bottom-10 -left-10 rounded-full flex items-center justify-center">
            <Image alt="meindraw" src={meindraw} className="h-20 lg:h-20 w-auto" />
            <Image alt="text" src={text} className="w-full h-full absolute top-0 left-0 animate-pulse" />
          </div>
        </div>

        <div className="flex flex-col text-center lg:text-left items-center lg:items-start justify-between gap-y-4">
          <p className="uppercase text-blue-500 text-xl font-extrabold">
            About me
          </p>
          <p className="text-lg lg:text-lg text-black">
            A passionate Front-End developer from Budapest, Hungary 📍
          </p>
          <p className="text-md text-gray-600">
            I am a Junior Front-End Developer with a strong skill set in HTML,
            CSS, JavaScript, TypeScript, React, TailwindCSS, MUI, Next.js and Nodejs. I have a passion
            for creating responsive websites that deliver an excellent user
            experience. My specialization involves designing dynamic and
            engaging interfaces through the use of clean, optimized code and the
            latest development tools and methods. Additionally, I am a
            collaborative team player who excels in working with
            cross-functional teams to produce exceptional web applications.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

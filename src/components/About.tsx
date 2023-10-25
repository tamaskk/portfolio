import React from "react";
import setup from "../assets/nubelson-fernandes-QNch8putqnU-unsplash.jpg";
import text from "../assets/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
import meindraw from "../assets/11602236_21004063.jpg";
import '../App.css'

const About = () => {
  return (
    <section className="h-auto mx-auto max-w-[1100px] px-10 py-32" id="about">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-20 mx-auto lg:mx-0">
        <div className="w-full h-auto flex items-center justify-center relative">
          <img src={setup} className="rounded-3xl w-auto h-full lg:h-[35rem]" />
          <div className="w-40 h-40 lg:w-60 lg:h-60 bg-white absolute -bottom-10 -left-10 rounded-full flex items-center justify-center">
            <img src={meindraw} className="h-20 lg:h-40 w-auto" />
            <img src={text} className="w-full h-full absolute top-0 left-0 spinning" />
          </div>
        </div>

        <div className="flex flex-col text-center lg:text-left items-center lg:items-start justify-between gap-y-10">
          <p className="uppercase text-blue-500 text-4xl font-extrabold">
            About me
          </p>
          <p className="text-4xl lg:text-5xl">
            A passionate Front-End developer from Budapest, Hungary 📍
          </p>
          <p className="text-3xl text-gray-600">
            I am a Junior Front-End Developer with a strong skill set in HTML,
            CSS, JavaScript, TypeScript, React, and Tailwind. I have a passion
            for creating responsive websites that deliver an excellent user
            experience. My specialization involves designing dynamic and
            engaging interfaces through the use of clean, optimized code and the
            latest development tools and methods. Additionally, I am a
            collaborative team player who excels in working with
            cross-functional teams to produce exceptional web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

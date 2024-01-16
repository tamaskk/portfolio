import React from "react";
import github from "../assets/githubforbutton.svg";
import arrow from "../assets/arrowforbutton.svg";
import { Link, NavLink } from "react-router-dom";

interface PropsType {
  name: string;
  date: string;
  emoji: string;
  img: string;
  describe: string;
  technology1: string;
  technology2: string;
  urlToCode: string;
  urlToLiveDemo: string;
  version: number;
}

const Projectcard: React.FC<PropsType> = ({
  name,
  date,
  emoji,
  img,
  describe,
  technology1,
  technology2,
  urlToCode,
  urlToLiveDemo,
  version,
}) => {
  return (
    <article
      className={`w-full h-[65rem] lg:h-[40rem] p-8 flex flex-col ${
        version === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
      } lg:flex-row rounded-2xl bg-white items-center justify-center border-2 border-white shadow-lg hover:border-gray-300 transition-all duration-300`}
    >
      <div className="w-full lg:w-3/5 h-auto lg:h-full">
        <img src={img} className="h-auto lg:h-full w-full rounded-xl" />
      </div>
      <div className="flex flex-col items-center justify-between h-full w-full lg:w-2/5 px-0 lg:px-10 text-center pt-10">
        <h1 className="text-3xl lg:text-4xl font-bold">
          {name}{" "}
          <span className="text-gray-600 text-2xl lg:text-3xl font-semibold">({date})</span>{" "}
          <span className="text-2xl lg:text-3xl">
            {emoji}
            </span>
        </h1>
        <p className="text-[1.3rem] px-5 font-semibold text-gray-500">{describe}</p>
        <div className="flex flex-row gap-5 items-center">
          <div className="shadow-xl text-3xl font-bold p-4">{technology1}</div>
          <div className="shadow-xl text-3xl font-bold p-4">{technology2}</div>
        </div>
        <div className="flex flex-row items-center justify-evenly w-full">
          <NavLink to={urlToCode} target="_blank">
            <button className="group py-3 px-7 shadow-lg">
              <div className="flex flex-row gap-2 items-center justify-center">
                <h1 className="group-hover:text-blue-500 text-4xl">Code</h1>
                <img src={github} className="h-9 w-auto" />
              </div>
              <div className="border-[1px] border-white w-0 group-hover:border-blue-500 group-hover:w-full transition-all duration-300"></div>
            </button>
          </NavLink>
          <NavLink to={urlToLiveDemo} target="_blank" >
            <button className="group py-3 px-7 shadow-lg">
              <div className="flex flex-row gap-2 items-center justify-center">
                <h1 className="group-hover:text-blue-500 text-4xl">
                  Live Demo
                </h1>
                <img src={arrow} className="h-9 w-auto" />
              </div>
              <div className="border-[1px] border-white w-0 group-hover:border-blue-500 group-hover:w-full transition-all duration-300"></div>
            </button>
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default Projectcard;

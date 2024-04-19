import React from "react";
import github from "@/assets/githubforbutton.svg";
import arrow from "@/assets/arrowforbutton.svg";
import Link from "next/link";
import Image from "next/image";

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
  desciption: boolean;
  controlledImgSize?: boolean
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
  desciption,
  controlledImgSize
}) => {
  return (
    <article
      className={`w-full h-auto lg:h-auto p-4 flex flex-col ${
        version === 1 ? "lg:flex-row" : "lg:flex-row-reverse"
      } lg:flex-row rounded-2xl bg-white items-center justify-center border-2 border-white shadow-lg hover:border-gray-300 transition-all duration-300`}
    >
      <div className="w-full lg:w-3/5 h-auto lg:h-full flex flex-col items-center justify-center ">
        {
          controlledImgSize ? (
            <Image
              alt="asdasd"
              src={img}
              className="h-auto lg:h-72 w-auto"
              width={100}
            />
          ) : (
            <Image
              alt="asdasd"
              src={img}
              className="h-auto lg:h-auto w-full rounded-xl"
              />
          )
        }
      </div>
      <div className="flex flex-col items-center justify-start h-full w-full lg:w-2/5 px-0 lg:px-10 text-center pt-2 gap-y-4">
        <h1 className="text-3xl lg:text-xl font-bold text-black">
          {name}{" "}
          <span className="text-gray-600 text-2xl lg:text-xl font-semibold">
            ({date})
          </span>{" "}
          <span className="text-2xl lg:text-xl">{emoji}</span>
        </h1>
        <p className="text-[0.8rem] px-5 font-normal text-gray-500">
          {describe}
        </p>
        <div className="flex flex-row gap-5 items-center">
          <div className="shadow-xl text-black text-xl font-bold p-4 rounded-lg">
            {technology1}
          </div>
          <div className="shadow-xl text-black text-xl font-bold p-4 rounded-lg">
            {technology2}
          </div>
        </div>
        <div className="flex flex-row items-center justify-evenly w-full gap-5">
          {!desciption && (
            <>
              <Link href={urlToCode} target="_blank" className="h-20 w-full">
                <button className="group py-3 px-7 shadow-lg">
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <h1 className="group-hover:text-blue-500 text-lg text-black">
                      Code
                    </h1>
                    <Image alt="github" src={github} className="h-9 w-auto" />
                  </div>
                  <div className="border-[1px] border-white w-0 group-hover:border-blue-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              </Link>
              <Link
                href={urlToLiveDemo}
                target="_blank"
                className="h-20 w-full"
              >
                <button className="group py-3 px-7 shadow-lg w-full">
                  <div className="flex flex-row gap-2 items-center justify-center w-full">
                    <h1 className="group-hover:text-blue-500 text-sm text-black w-full whitespace-nowrap">
                      Live Demo
                    </h1>
                    <Image alt="arrow" src={arrow} className="h-9 w-auto" />
                  </div>
                  <div className="border-[1px] border-white w-0 group-hover:border-blue-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              </Link>
            </>
          )}
                    {desciption && (
            <>
              <Link
                href={urlToLiveDemo}
                className="h-20 w-full"
              >
                <button className="group py-3 px-7 shadow-lg w-auto">
                  <div className="flex flex-row gap-2 items-center justify-center w-full">
                    <h1 className="group-hover:text-blue-500 text-xl text-black w-full whitespace-nowrap">
                      Description
                    </h1>
                    <Image alt="arrow" src={arrow} className="h-9 w-auto" />
                  </div>
                  <div className="border-[1px] border-white w-0 group-hover:border-blue-500 group-hover:w-full transition-all duration-300"></div>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default Projectcard;

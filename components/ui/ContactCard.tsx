import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contactcard: React.FC<{
  img: string;
  contactType: string;
  contactInfo: string;
  link: string;
}> = ({ img, contactInfo, contactType, link }) => {
  return (
    <Link href={link}>
      <article className="flex flex-col lg:flex-row  items-center justify-start gap-5 cursor-pointer ">
        <Image src={img} alt="imgforcontact" width={24} className="" />
        <div className="">
          <p className="text-3xl lg:text-xl font-medium  text-black text-center lg:text-left">{contactType}</p>
          <p className="text-md whitespace-normal lg:text-xl text-gray-500 cursor-pointer text-center lg:text-left">{contactInfo}</p>
        </div>
      </article>
    </Link>
  );
};

export default Contactcard;

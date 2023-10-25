import React from "react";
import { NavLink } from "react-router-dom";

const Contactcard: React.FC<{
  img: string;
  contactType: string;
  contactInfo: string;
  link: string;
}> = ({ img, contactInfo, contactType, link }) => {
  return (
    <NavLink to={link}>
      <article className="flex flex-row items-center justify-start gap-5 cursor-pointer">
        <img src={img} className="w-9" />
        <div>
          <p className="text-3xl lg:text-4xl font-bold">{contactType}</p>
          <p className="text-2xl lg:text-3xl text-gray-500 cursor-pointer">{contactInfo}</p>
        </div>
      </article>
    </NavLink>
  );
};

export default Contactcard;

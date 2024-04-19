import React from "react";
import Projectcard from "./ui/projectCard";
import picture from "@/assets/nubelson-fernandes-QNch8putqnU-unsplash.jpg";
import phone from "@/assets/1.webp";
import tellmeyoursotry from "@/assets/TellMeYourStory.webp";
import carrental from "@/assets/carrent.webp";
import gym from "@/assets/gymapp.webp";
import ecommerce from "@/assets/ecommerce.webp";
import palapia from "@/assets/palapia.webp";
import logo from "@/assets/logo.png";
import pawcontrol from "@/assets/pawtext.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "PawControl",
      date: "2024 Feb",
      emoji: "🐶",
      img: pawcontrol,
      technology1: "React-Native",
      technology2: "TamagUI",
      describe:
      "The PawControl is a PHP backend and React frontend based mobile application for both IPhone and Andoid. The application is designed to be user-friendly and easy to use, with a focus on simplicity and efficiency. The conception of the project is to help the pet owners to locate their pets.",
      urlToCode: "/project/pawcontrol",
      urlToLiveDemo: "/project/pawcontrol",
      version: 2,
      description: true,
      controlledImgSize: true,
    },
    {
      name: "VoyageStack",
      date: "2024 Jan",
      emoji: "✍️",
      img: logo,
      technology1: "NextJS",
      technology2: "AWS",
      describe:
      "The VoyageStack is a web-based corporate governance system that allows companies to manage their board meetings, resolutions, and other corporate governance activities. The system is designed to be user-friendly and easy to use, with a focus on simplicity and efficiency.",
      urlToCode: "/project/voyagestack",
      urlToLiveDemo: "/project/voyagestack",
      version: 1,
      description: true,
      controlledImgSize: false,
    },
    {
      name: "Food sharing social media",
      date: "2023 Dec",
      emoji: "🍔",
      img: palapia,
      technology1: "Next.js",
      technology2: "MongoDB",
      describe:
      "Palapia: Culinary excellence with secure JWT authentication for registration/login. Explore diverse dishes on the main page, filterable with an elegant panel. Authenticated users enjoy full recipes, contribute, and save favorites. Profiles allow password changes and insights. Admins manage recipes, approvals, declines, and removals. Efficiently handle contact messages and deletion requests for a polished user experience.",
      urlToCode: "https://github.com/tamaskk/palapia",
      urlToLiveDemo: "https://palapia.vercel.app/",
      version: 2,
      description: false,
      controlledImgSize: false,
    },
    {
      name: "Car rental app",
      date: "2023 Aug",
      emoji: "🚗",
      describe:
        "This web application simplifies car rental, allowing users to pick vehicles, select pickup and drop-off cities, and set dates. It offers detailed information on available cars. Additionally, users can explore sections such as About Us, Vehicle Models, Testimonials, Our Team, and Contact for a comprehensive rental experience.",
      img: carrental,
      technology1: "React",
      technology2: "TailwindCSS",
      urlToCode: "https://github.com/tamaskk/carrental",
      urlToLiveDemo: "https://ktcarrent.netlify.app",
      version: 1,
      description: false,
      controlledImgSize: false,
    },
    {
      date: "2023 Oct",
      describe:
        "This minimalist furniture e-commerce site offers easy navigation, highlighting product categories and top items on the main page. Users can browse and filter products by category. Individual product pages provide descriptions and images, with an option to add items to the cart. The cart is accessible via the navbar, allowing users to manage quantities and review prices efficiently.",
      emoji: "🛋️",
      img: ecommerce,
      name: "Minimalist Ecommerce",
      technology1: "React",
      technology2: "Typescript",
      urlToCode: "https://github.com/tamaskk/minimalistecommerce",
      urlToLiveDemo: "https://minimalistecommerce.netlify.app",
      version: 2,
      description: false,
      controlledImgSize: false,
    },
    {
      date: "2023 Oct",
      describe:
        "This gym web application features an About section, providing insights into the gym. Our Courses offers a comprehensive list of available fitness programs. Users can explore a banner section for yearly memberships, delve into individual coaches to access unique exercise routines, read testimonials, and find contact details for further inquiries, creating a well-rounded fitness experience.",
      emoji: "🏋️",
      img: gym,
      name: "Gym App",
      technology1: "Typescript",
      technology2: "TailwindCSS",
      urlToCode: "https://github.com/tamaskk/gymapp",
      urlToLiveDemo: "https://ktgymapp.netlify.app",
      version: 1,
      description: false,
      controlledImgSize: false,
    },
    {
      date: "2023 Nov",
      describe:
        "This GSM Shop App, your one-stop solution for mobile needs. Easily browse and choose from a wide range of repair services and brand-new phones. Contact us, explore FAQs, and find exclusive offers for the ultimate mobile shopping experience.",
      emoji: "📱",
      img: phone,
      name: "GSM Shop",
      technology1: "Typescript",
      technology2: "TailwindCSS",
      urlToCode: "https://github.com/tamaskk/gsmshop",
      urlToLiveDemo: "https://gsmshop.netlify.app/",
      version: 2,
      description: false,
      controlledImgSize: false,
    },
  ];
  return (
    <section className="h-auto py-10 w-full bg-[#f9f9f9]" id="projects">
      <motion.div
        initial={{ y: "-30px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-[1100px] px-10 flex flex-col gap-y-24"
      >
        <div className="flex flex-col gap-y-5">
          <p className="uppercase text-blue-500 text-lg font-extrabold text-center lg:text-left">
            Projects
          </p>
          <p className="text-lg font-medium text-center lg:text-left text-black">
            Each project are close to my heart because all of them are uniqe and
            made by me! ❤️
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-[auto] gap-y-20">
          {projects.map((project, index) => (
            <Projectcard
              key={index}
              date={project.date}
              describe={project.describe}
              emoji={project.emoji}
              img={project.img as any}
              name={project.name}
              technology1={project.technology1}
              technology2={project.technology2}
              urlToCode={project.urlToCode}
              urlToLiveDemo={project.urlToLiveDemo}
              version={project.version}
              desciption={project.description}
              controlledImgSize={project.controlledImgSize}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

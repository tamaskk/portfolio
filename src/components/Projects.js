import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Projectcard from "./Projectcard";
import phone from "../assets/1.webp";
import tellmeyoursotry from "../assets/TellMeYourStory.webp";
import carrental from "../assets/carrent.webp";
import gym from "../assets/gymapp.webp";
import ecommerce from "../assets/ecommerce.webp";
import palapia from "../assets/palapia.webp";
import { motion } from "framer-motion";
const Projects = () => {
    const projects = [
        {
            name: "Story writer social media",
            date: "2024 Jan",
            emoji: "✍️",
            img: tellmeyoursotry,
            technology1: "NodeJS",
            technology2: "AWS",
            describe: "Elevate your narrative journey with secure JWT authentication. Explore and share stories seamlessly—upload with a text editor and secure AWS storage. Authenticated users engage dynamically through comments and likes. The profile page enables password changes and story reviews. Admin capabilities cover story management and responsive contact handling.",
            urlToCode: "",
            urlToLiveDemo: "",
            version: 1,
        },
        {
            name: "Food sharing social media",
            date: "2023 Dec",
            emoji: "🍔",
            img: palapia,
            technology1: "Next.js",
            technology2: "MongoDB",
            describe: "Palapia: Culinary excellence with secure JWT authentication for registration/login. Explore diverse dishes on the main page, filterable with an elegant panel. Authenticated users enjoy full recipes, contribute, and save favorites. Profiles allow password changes and insights. Admins manage recipes, approvals, declines, and removals. Efficiently handle contact messages and deletion requests for a polished user experience.",
            urlToCode: "https://github.com/tamaskk/palapia",
            urlToLiveDemo: "https://palapia.vercel.app/",
            version: 2,
        },
        {
            name: "Car rental app",
            date: "2023 Aug",
            emoji: "🚗",
            describe: "This web application simplifies car rental, allowing users to pick vehicles, select pickup and drop-off cities, and set dates. It offers detailed information on available cars. Additionally, users can explore sections such as About Us, Vehicle Models, Testimonials, Our Team, and Contact for a comprehensive rental experience.",
            img: carrental,
            technology1: "React",
            technology2: "TailwindCSS",
            urlToCode: "https://github.com/tamaskk/carrental",
            urlToLiveDemo: "https://ktcarrent.netlify.app",
            version: 1,
        },
        {
            date: "2023 Oct",
            describe: "This minimalist furniture e-commerce site offers easy navigation, highlighting product categories and top items on the main page. Users can browse and filter products by category. Individual product pages provide descriptions and images, with an option to add items to the cart. The cart is accessible via the navbar, allowing users to manage quantities and review prices efficiently.",
            emoji: "🛋️",
            img: ecommerce,
            name: "Minimalist Ecommerce",
            technology1: "React",
            technology2: "Typescript",
            urlToCode: "https://github.com/tamaskk/minimalistecommerce",
            urlToLiveDemo: "https://minimalistecommerce.netlify.app",
            version: 2,
        },
        {
            date: "2023 Oct",
            describe: "This gym web application features an About section, providing insights into the gym. Our Courses offers a comprehensive list of available fitness programs. Users can explore a banner section for yearly memberships, delve into individual coaches to access unique exercise routines, read testimonials, and find contact details for further inquiries, creating a well-rounded fitness experience.",
            emoji: "🏋️",
            img: gym,
            name: "Gym App",
            technology1: "Typescript",
            technology2: "TailwindCSS",
            urlToCode: "https://github.com/tamaskk/gymapp",
            urlToLiveDemo: "https://ktgymapp.netlify.app",
            version: 1,
        },
        {
            date: "2023 Nov",
            describe: "This GSM Shop App, your one-stop solution for mobile needs. Easily browse and choose from a wide range of repair services and brand-new phones. Contact us, explore FAQs, and find exclusive offers for the ultimate mobile shopping experience.",
            emoji: "📱",
            img: phone,
            name: "GSM Shop",
            technology1: "Typescript",
            technology2: "TailwindCSS",
            urlToCode: "https://github.com/tamaskk/gsmshop",
            urlToLiveDemo: "https://gsmshop.netlify.app/",
            version: 2,
        },
    ];
    return (_jsx("section", { className: "h-auto py-60 w-full bg-[#f9f9f9]", id: "projects", children: _jsxs(motion.div, { initial: { y: "-30px", opacity: 0 }, whileInView: { y: "0", opacity: 1 }, viewport: { once: true }, transition: { duration: 1 }, className: "mx-auto max-w-[1100px] px-10 flex flex-col gap-y-24", children: [_jsxs("div", { className: "flex flex-col gap-y-5", children: [_jsx("p", { className: "uppercase text-blue-500 text-4xl font-extrabold text-center lg:text-left", children: "Projects" }), _jsx("p", { className: "text-3xl lg:text-3xl font-black text-center lg:text-left", children: "Each project are close to my heart because all of them are uniqe and made by me! \u2764\uFE0F" })] }), _jsx("div", { className: "grid grid-cols-1 grid-rows-[auto] gap-y-20", children: projects.map((project, index) => (_jsx(Projectcard, { date: project.date, describe: project.describe, emoji: project.emoji, img: project.img, name: project.name, technology1: project.technology1, technology2: project.technology2, urlToCode: project.urlToCode, urlToLiveDemo: project.urlToLiveDemo, version: project.version }, index))) })] }) }));
};
export default Projects;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../App.css";
import boy from "../assets/child-light-skin-tone.svg";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const menuOpenHandler = () => {
        setMenuOpened((prev) => !prev);
    };
    return (_jsxs("nav", { className: "w-screen fixed top-0 left-0 right-0 z-50 bg-white", children: [_jsxs("div", { className: "hidden lg:flex justify-between items-center w-full h-auto py-8 px-24 rounded-b-lg", children: [_jsxs("div", { className: "flex flex-row items-center justify-center gap-5", children: [_jsx("p", { className: "name text-xl lg:text-4xl", children: "Tamas Krisztian Kalman" }), _jsx("img", { src: boy, className: "w-14 h-auto" })] }), _jsxs("div", { className: "gap-8 hidden lg:flex flex-row items-center justify-center w-fit min-w-fit", children: [_jsxs("div", { className: "group min-w-fit cursor-pointer", children: [_jsx(ScrollLink, { to: "home", smooth: true, duration: 500, activeClass: "text-blue-500", className: " text-3xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "Home" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] }), _jsxs("div", { className: "group min-w-fit cursor-pointer", children: [_jsx(ScrollLink, { to: "about", smooth: true, offset: -50, duration: 500, activeClass: "text-blue-500", className: " text-3xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "About" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] }), _jsxs("div", { className: "group min-w-fit cursor-pointer", children: [_jsx(ScrollLink, { to: "projects", smooth: true, offset: 50, duration: 500, activeClass: "text-blue-500", className: " text-3xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "Projects" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] }), _jsxs("div", { className: "group min-w-fit cursor-pointer", children: [_jsx(ScrollLink, { to: "contact", smooth: true, offset: 50, duration: 500, activeClass: "text-blue-500", className: " text-3xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "Contact" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] })] })] }), _jsxs("div", { className: "flex items-center justify-between lg:hidden w-full h-auto py-8 px-10", children: [_jsxs("div", { className: "flex flex-row items-center justify-center gap-5", children: [_jsx("p", { className: "name text-2xl lg:text-4xl", children: "Tamas Krisztian Kalman" }), _jsx("img", { src: boy, className: "w-10 h-auto" })] }), _jsxs("div", { className: "flex flex-col", onClick: menuOpenHandler, children: [_jsx("div", { className: `w-10 h-1 bg-black rounded-lg mb-2` }), _jsx("div", { className: `w-10 h-1 bg-black rounded-lg mb-2` }), _jsx("div", { className: `w-10 h-1 bg-black rounded-lg` })] })] }), _jsxs("div", { className: `w-screen h-screen ${menuOpened ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 right-0  gap-y-14 flex lg:hidden flex-col items-center justify-center min-w-fit transition-all duration-300 bg-white z-20`, children: [_jsxs("div", { className: "flex flex-col fixed top-8 right-8", onClick: menuOpenHandler, children: [_jsx("div", { className: `w-10 h-1 bg-black rounded-lg translate-y-3 rotate-45` }), _jsx("div", { className: `w-10 h-1 bg-black rounded-lg translate-y-2 -rotate-45` })] }), _jsxs("div", { className: "group min-w-fit", children: [_jsx(ScrollLink, { to: "home", smooth: true, duration: 500, activeClass: "text-blue-500", onClick: menuOpenHandler, className: " text-5xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "Home" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] }), _jsxs("div", { className: "group min-w-fit", children: [_jsx(ScrollLink, { to: "about", smooth: true, duration: 500, onClick: menuOpenHandler, activeClass: "text-blue-500", className: " text-5xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "About" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] }), _jsxs("div", { className: "flex flex-row items-center justify-center gap-5", children: [_jsx("p", { className: "name text-2xl", children: "Tamas Krisztian Kalman" }), _jsx("img", { src: boy, className: "w-10 h-auto" })] }), _jsxs("div", { className: "group min-w-fit", children: [_jsx(ScrollLink, { to: "projects", smooth: true, offset: 50, duration: 500, onClick: menuOpenHandler, activeClass: "text-blue-500", className: " text-5xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "Projects" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] }), _jsx(ScrollLink, { to: "contact", smooth: true, duration: 500, onClick: menuOpenHandler, activeClass: "text-blue-500", className: " text-5xl text-black font-bold group-hover:text-blue-500 transition-all duration-300 pb-4", children: "Contact" }), _jsx("div", { className: "w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all duration-300" })] })] }));
};
export default Navbar;
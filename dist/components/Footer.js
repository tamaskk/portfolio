import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import github from '../assets/graygithub.svg';
import linkedin from '../assets/graylinkedin.svg';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (_jsx("footer", { className: 'w-full bg-[#2d2e32]', children: _jsxs("div", { className: "h-auto mx-auto max-w-[1100px] px-10 py-32 flex flex-col lg:flex-row items-center justify-between gap-y-10", id: "about", children: [_jsx("h1", { className: 'text-gray-200 text-4xl font-bold text-center lg:text-left', children: "Made by Tamas Krisztian Kalman. 2023." }), _jsxs("div", { className: 'flex flex-row gap-10', children: [_jsx(NavLink, { to: "", children: _jsx("img", { src: github, className: 'w-10', alt: "git" }) }), _jsx(NavLink, { to: "", children: _jsx("img", { src: linkedin, className: 'w-10', alt: "linked" }) })] })] }) }));
};
export default Footer;

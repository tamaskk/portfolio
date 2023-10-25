import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
const Contactcard = ({ img, contactInfo, contactType, link }) => {
    return (_jsx(NavLink, { to: link, children: _jsxs("article", { className: "flex flex-row items-center justify-start gap-5 cursor-pointer", children: [_jsx("img", { src: img, className: "w-9" }), _jsxs("div", { children: [_jsx("p", { className: "text-3xl lg:text-4xl font-bold", children: contactType }), _jsx("p", { className: "text-2xl lg:text-3xl text-gray-500 cursor-pointer", children: contactInfo })] })] }) }));
};
export default Contactcard;

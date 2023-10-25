import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
    return (_jsx("div", { className: "overflow-hidden h-auto", children: _jsxs(BrowserRouter, { children: [_jsx(Navbar, {}), _jsx(Header, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Contact, {}), _jsx(Footer, {})] }) }));
}
export default App;

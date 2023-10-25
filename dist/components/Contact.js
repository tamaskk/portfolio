import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import github from "../assets/githubforcontact.svg";
import linkedin from "../assets/linkedinforcontact.svg";
import Contactcard from "./Contactcard";
const Contact = () => {
    //    const [toSend, setToSend] = useState<ContactForm>({
    //      full_name: "",
    //      email_address: "",
    //      message: "",
    //    });
    //    const nameRef = useRef<HTMLInputElement>();
    //    const emailRef = useRef<HTMLInputElement>();
    //    const messageRef = useRef<HTMLTextAreaElement>();
    //    useEffect(() => {
    //     setToSend({
    //       full_name: nameRef?.current?.value || '',
    //       email_address: emailRef?.current?.value || '',
    //       message: messageRef?.current?.value ||''
    //     });
    //   }, [nameRef?.current?.value, emailRef?.current?.value, messageRef?.current?.value]);
    //    const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    //      e.preventDefault();
    //      emailjs
    //        .send("service_1kq51ze", "template_hmpjeqi", toSend, "m7KF6JVhAXeRyhv8J")
    //        .then((response: EmailJSResponseStatus) => {
    //          // Email sent successfully
    //          setToSend({
    //            full_name: "",
    //            email_address: "",
    //            message: "",
    //          });
    //        })
    //        .catch((err: Error) => {
    //          console.log("Failed...", err);
    //        });
    //    };
    return (_jsx("section", { children: _jsxs("div", { className: "h-auto mx-auto max-w-[1100px] px-10 py-32", id: "about", children: [_jsxs("div", { className: "flex flex-col gap-y-5", children: [_jsx("p", { className: "uppercase text-blue-500 text-4xl font-extrabold", children: "Contact" }), _jsx("p", { className: "text-4xl lg:text-6xl", children: "Start our journey tomorrow..." }), _jsx("p", { className: "text-2xl font-light lg:text-3xl", children: "How do you like your coffee? For me it's 2 sugars and a bit of milk." })] }), _jsx("div", { className: "grid grid-cols-1 shadow-lg p-10 rounded-xl", children: _jsx("div", { className: "flex flex-col items-center justify-center", children: _jsxs("div", { className: "flex flex-col items-start justify-center gap-y-10 py-20", children: [_jsx(Contactcard, { contactType: "Location", contactInfo: "Budapest, Hungary", img: location, link: "https://www.google.com/maps/place/Budapest/@47.4810954,18.9654983,11z/data=!3m1!4b1!4m6!3m5!1s0x4741c334d1d4cfc9:0x400c4290c1e1160!8m2!3d47.497912!4d19.040235!16zL20vMDk1d18?entry=ttu" }), _jsx(Contactcard, { contactType: "Mail", contactInfo: "kalman.tamaskrisztian@gmail.com", img: email, link: "mailto:kalman.tamaskrisztian@gmail.com" }), _jsx(Contactcard, { contactType: "LinkedIn", contactInfo: "http://linkedin.com/tamaskrisztian", img: linkedin, link: "http://linkedin.com/tamaskrisztian" }), _jsx(Contactcard, { contactType: "Github", contactInfo: "https://github.com/tamaskrisztian", img: github, link: "https://github.com/tamaskrisztian" })] }) }) })] }) }));
};
export default Contact;

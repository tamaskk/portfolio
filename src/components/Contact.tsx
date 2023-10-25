import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import location from "../assets/location.svg";
import email from "../assets/email.svg";
import github from "../assets/githubforcontact.svg";
import linkedin from "../assets/linkedinforcontact.svg";
import arrow from "../assets/arrowforbutton.svg";
import Contactcard from "./Contactcard";

interface ContactForm {
    full_name: string;
    email_address: string;
    message: string;
    [key: string]: string; // This allows for additional properties
  }
  
const Contact = (): JSX.Element => {
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

  return (
    <section id="contact">
      <div className="h-auto mx-auto max-w-[1100px] px-10 py-32" id="about">
        <div className="flex flex-col gap-y-5">
          <p className="uppercase text-blue-500 text-4xl font-extrabold">
            Contact
          </p>
          <p className="text-4xl lg:text-6xl">Start our journey tomorrow...</p>
          <p className="text-2xl font-light lg:text-3xl">
            How do you like your coffee? For me it's 2 sugars and a bit of milk.
          </p>
        </div>
        <div className="grid grid-cols-1 shadow-lg p-10 rounded-xl">
            <div className="flex flex-col items-center justify-center">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-10 py-20">
            <Contactcard
              contactType="Location"
              contactInfo="Budapest, Hungary"
              img={location}
              link="https://www.google.com/maps/place/Budapest/@47.4810954,18.9654983,11z/data=!3m1!4b1!4m6!3m5!1s0x4741c334d1d4cfc9:0x400c4290c1e1160!8m2!3d47.497912!4d19.040235!16zL20vMDk1d18?entry=ttu"
            />
            <Contactcard
              contactType="Mail"
              contactInfo="kalman.tamaskrisztian@gmail.com"
              img={email}
              link="mailto:kalman.tamaskrisztian@gmail.com"
            />
            <Contactcard
              contactType="LinkedIn"
              contactInfo="/tamaskrisztiankalman"
              img={linkedin}
              link="https://www.linkedin.com/in/tamaskrisztiankalman"
            />
            <Contactcard
              contactType="Github"
              contactInfo="/tamaskk"
              img={github}
              link="https://github.com/tamaskk"
              />
              </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center">
             <form
               onSubmit={sendEmail}
              className="flex flex-col items-start justify-start text-left gap-y-10 py-20 p-5"
            >
              <div className="flex flex-col items-start justify-start gap-y-5">
                <label htmlFor="full_name" className="text-4xl font-bold">
                  Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                   value={toSend.full_name}
                   onChange={(e) => setToSend({ ...toSend, [e.target.name]: e.target.value })}
                  placeholder="Sam Smith"
                  className="border-gray-400 border-b rounded-t-2xl active:outline-none focus:outline-none py-3 pl-2 pr-14 text-3xl text-black shadow-lg placeholder:text-gray-300 placeholder:text-2xl"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-y-5">
                <label htmlFor="email_address" className="text-4xl font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email_address"
                  id="email_address"
                  placeholder="samsmith1992@gmail.com"
                   value={toSend.email_address}
                   onChange={(e) => setToSend({ ...toSend, [e.target.name]: e.target.value })}
                  className="border-gray-400 border-b rounded-t-2xl active:outline-none focus:outline-none py-3 pl-2 pr-14 text-3xl text-black shadow-lg placeholder:text-gray-300 placeholder:text-2xl"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-y-5">
                <label htmlFor="message" className="text-4xl font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                   value={toSend.message}
                   onChange={(e) => setToSend({ ...toSend, [e.target.name]: e.target.value })}
                  placeholder="Hey How you doing today?..."
                  className="border-gray-400 border-b rounded-t-2xl active:outline-none focus:outline-none py-3 pl-2 pr-10 text-3xl text-black shadow-lg placeholder:text-gray-300 placeholder:text-xl"
                  required
                />
              </div>
              <div className="group">
                <button
                  type="submit"
                  className="flex flex-row items-center justify-center text-3xl gap-2 group hover:text-blue-500 transition-all duration-300"
                >
                  {" "}
                  Send <img src={arrow} className="" />{" "}
                </button>
                <div className="w-0 border border-white group-hover:w-full group-hover:border-blue-500 transition-all duration-300"></div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

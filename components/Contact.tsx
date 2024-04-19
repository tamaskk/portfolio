import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import location from "@/assets/location.svg";
import email from "@/assets/email.svg";
import github from "@/assets/githubforcontact.svg";
import linkedin from "@/assets/linkedinforcontact.svg";
import { motion } from "framer-motion";
import Contactcard from "./ui/ContactCard";

interface ContactForm {
  full_name: string;
  email_address: string;
  message: string;
  [key: string]: string; // This allows for additional properties
}

const Contact = (): JSX.Element => {
  return (
    <section id="contact">
      <motion.div
        initial={{ y: "-30px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-auto mx-auto max-w-[1100px] px-10 py-14"
        id="about"
      >
        <div className="flex flex-col text-black">
          <p className="uppercase text-blue-500 text-lg font-extrabold mb-2">
            Contact
          </p>
          <p className="text-lg lg:text-2xl font-semibold">Start our journey tomorrow...</p>
          <p className="text-lg font-light lg:text-lg">
            How do you like your coffee? For me it's 2 sugars and a bit of milk.
          </p>
        </div>
        <div className="grid grid-cols-1 shadow-lg p-2 lg:p-10 rounded-xl">
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-10 py-10 lg:py-20">
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
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

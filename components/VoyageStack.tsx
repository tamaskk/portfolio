import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import voyagestack1 from "@/assets/voyagestack1.png";
import voyagestack2 from "@/assets/voyagestack2.png";
import voyagestack3 from "@/assets/voyagestack3.png";
import voyagestack4 from "@/assets/voyagestack4.png";
import voyagestack5 from "@/assets/voyagestack5.png";
import { useRouter } from "next/router";

const ProjectDescription = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-5 lg:px-0">
      <div className="h-24 text-black py-4 cursor-pointer ">
        <p 
        className="hover:border-blue-400 hover:text-blue-400 border-b-2 border-white transition-all duration-300"
        onClick={() => router.push("/")}
        >
          Back to the Main page
        </p>
      </div>
      <h1 className="text-5xl font-bold text-black w-full text-center">VoyageStack</h1>
      <div className="max-w-[1000px] w-full flex flex-col items-center mt-10">
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">
            Introduction of the project
          </p>
          <p className="text-gray-500 text-center lg:text-left">
            The VoyageStack is a web-based corporate governance system that
            allows companies to manage their board meetings, resolutions, and
            other corporate governance activities. The system is designed to be
            user-friendly and easy to use, with a focus on simplicity and
            efficiency.
          </p>
          <ul className="list-disc ml-10">
            <li className="text-black">
              Web-based so companies can access it from anywhere
            </li>
            <li className="text-black">
              User-friendly interface for easy navigation
            </li>
            <li className="text-black">
              Secure and reliable system for data protection
            </li>
            <li className="text-black">
              Fast database access for quick retrieval of information
            </li>
          </ul>
        </div>
        <Image src={logo} alt="logo" width={300} className="my-20 mx-auto" />
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">Description</p>
          <p className="text-gray-500 text-center lg:text-left">
            At the beginning of 2024, the owner of the project approached me for
            the first time expressing their interest in entrusting me with the
            project. Following our initial meeting, it became evident to me that
            this project resonated deeply with me, not only due to the
            technologies involved, which align seamlessly with my portfolio, but
            also because of the sheer complexity and intrigue of the system.
            After our first meeting, we promptly reached an agreement, and work
            commenced the very next day, persisting to this day.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">Login Page</p>
          <p className="text-gray-500 text-center lg:text-left">
            The login page is the first page that users see when they access the
            system. It is designed to be simple and easy to use, with a focus on
            security and data protection. Users can log in using their email
            address and password, and the system will verify their credentials
            before allowing them access to the system.
          </p>
          <Image src={voyagestack1} alt="logo" className="my-20 mx-auto" />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">Register Page</p>
          <p className="text-gray-500 text-center lg:text-left">
            The register page is where new users can create an account and gain
            access to the system. Users can enter their first name, last name,
            email address, and password, and the system will create an account
            for them. Once the account is created the user have to verify their
            email address before they can access the system.
          </p>
          <Image src={voyagestack2} alt="logo" className="my-20 mx-auto" />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">Company Register</p>
          <p className="text-gray-500 text-center lg:text-left">
            After a successful login, the user can register their company. The
            user can enter the company name, address, and other relevant
            information, and the system will create a company profile for them.
            The company profile can then be used to manage board meetings,
            resolutions, and other corporate governance activities.
          </p>
          <Image src={voyagestack4} alt="logo" className="my-20 mx-auto" />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">Permissions</p>
          <p className="text-gray-500 text-center lg:text-left">
            In the settings page the user can manage the permissions of the
            users in the company. The user can assign different roles to the
            users, such as admin, editor, and viewer or anything what the user
            wants. The permissions can be changed at any time, and the system
            will update the user's access accordingly.
          </p>
          <Image src={voyagestack3} alt="logo" className="my-20" />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">Rest</p>
          <p className="text-gray-500 text-center lg:text-left">
            Because of the privacy of the project, I can't show more of the
            project in photos. But the whole system is really wide and has a lot
            of functionalities like calendar, tasks, client management, partner
            managament, filer management, etc. The project is still under development
            and will be finished around 2024 August / September.
          </p>
          <Image src={voyagestack5} alt="logo" className="my-20 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;

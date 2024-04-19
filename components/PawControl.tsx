import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import pawtext from "@/assets/pawtext.png";
import pawcontrol1 from "@/assets/pawcontrol1.png";
import pawcontrol2 from "@/assets/pawcontrol2.png";
import pawcontrol3 from "@/assets/pawcontrol3.png";
import pawcontrol4 from "@/assets/pawcontrol4.png";
import pawcontrol5 from "@/assets/pawcontrol5.png";
import { useRouter } from "next/router";

const ProjectDescriptionPawControl = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center flex-center lg:justify-start px-5 lg:px-0">
      <div className="h-24 text-black py-4 cursor-pointer ">
        <p
          className="hover:border-blue-400 hover:text-blue-400 border-b-2 border-white transition-all duration-300"
          onClick={() => router.push("/")}
        >
          Back to the Main page
        </p>
      </div>
      <h1 className="text-5xl font-bold text-black">PawControl</h1>
      <div className="max-w-[1000px] w-full flex flex-col items-center mt-10">
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="font-semibold text-2xl text-black text-center lg:text-left w-full">
            Introduction of the project
          </p>
          <p className="text-gray-500 w-full text-center lg:text-left">
            The PawControl is a PHP backend and React frontend based mobile
            application for both IPhone and Andoid. The application is designed
            to be user-friendly and easy to use, with a focus on simplicity and
            efficiency. The conception of the project is to help the pet owners
            to locate their pets.
          </p>
          <ul className="list-disc ml-10">
            <li className="text-black">For both IPhone and Android devices</li>
            <li className="text-black">
              User-friendly interface for easy navigation
            </li>
            <li className="text-black">
              Notification after every X minutes about the pets location
            </li>
            <li className="text-black">Easy to use and easy to set up.</li>
          </ul>
        </div>
        <Image src={pawtext} alt="logo" width={200} className="my-20 mx-auto" />
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <p className="font-semibold text-2xl text-black text-center lg:text-left w-full">Description</p>
          <p className="text-gray-500 text-center lg:text-left">
            In January 2024, the project leader approached me with the
            opportunity to undertake the frontend development of the project,
            which I initially greeted with enthusiasm. However, the challenge
            emerged when I realized that the framework required was React
            Native, a technology I had never previously worked with. Despite
            this, I quickly acquired the necessary skills within a remarkably
            short timeframe to commence work on the project. Approximately two
            weeks later, we initiated the collaboration.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">Login Page</p>
          <p className="text-gray-500 text-center lg:text-left">
            The user can enter their email address and password, and the system
            will authenticate the user and grant access to the system. If the
            user forgets their password, they can click on the forgot password
            link and the system will send them an email with a link to reset
            their password.
          </p>
          <Image src={pawcontrol1} alt="logo" className="my-20 mx-auto" width={300} />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black text-center lg:text-left w-full">Register Page</p>
          <p className="text-gray-500 text-center lg:text-left">
            The register page is where new users can create an account and gain
            access to the system. Users can enter their first name, last name,
            email address, phone number, and password, and the system will
            create an account for them. Once the account is created the user
            have to verify their email address before they can access the
            system.
          </p>
          <Image src={pawcontrol2} alt="logo" className="my-20 mx-auto" width={300} />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black w-full text-center lg:text-left">MainPage</p>
          <p className="text-gray-500 text-center lg:text-left">
            After a successful login, the user can see the map with the location
            of the pet. The user can set the time when the system should notify
            them about the location of the pet. The user can also see the
            battery status of the pet's collar.
          </p>
          <Image src={pawcontrol3} alt="logo" className="my-20 mx-auto" width={300} />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black text-center lg:text-left w-full">Settings</p>
          <p className="text-gray-500 text-center lg:text-left">
            In the settings page the user can change the password, turn on/off
            the notifications, change the language of the application, delete
            the account and logout.
          </p>
          <Image src={pawcontrol4} alt="logo" className="my-20 mx-auto" width={300} />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 w-full mt-10">
          <p className="font-semibold text-2xl text-black text-center lg:text-left w-full">Devices</p>
          <p className="text-gray-500 text-center lg:text-left">
            In the devices page the user can add a new device, see the list of
            devices, change certain settings of the device and delete the device.
          </p>
          <Image src={pawcontrol5} alt="logo" className="my-20 mx-auto" width={300} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionPawControl;

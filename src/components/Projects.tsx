import React from "react";
import Projectcard from "./Projectcard";
import picture from "../assets/nubelson-fernandes-QNch8putqnU-unsplash.jpg";
import resturaurant from "../assets/restaurant.png";
import photography from "../assets/photgraphy.png";
import carrental from "../assets/carrent.png";
import gym from "../assets/gymapp.png";
import ecommerce from "../assets/ecommerce.png";

const Projects = () => {
  return (
    <section className="h-auto py-60 w-full bg-[#f9f9f9]" id="projects">
      <div className="mx-auto max-w-[1100px] px-10 flex flex-col gap-y-24">
        <div className="flex flex-col gap-y-5">
          <p className="uppercase text-blue-500 text-4xl font-extrabold text-center lg:text-left">
            Projects
          </p>
          <p className="text-3xl lg:text-3xl font-black text-center lg:text-left">
            Each projects are close to my heart because all of them are uniqe
            and made by me! ❤️
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-[auto] gap-y-20">
          <Projectcard
            date="2023 Aug"
            describe="This web application simplifies car rental, allowing users to pick vehicles, select pickup and drop-off cities, and set dates. It offers detailed information on available cars. Additionally, users can explore sections such as About Us, Vehicle Models, Testimonials, Our Team, and Contact for a comprehensive rental experience."
            emoji="🚗"
            img={carrental}
            name="Car rental app"
            technology1="React"
            technology2="TailwindCSS"
            urlToCode="https://github.com/tamaskk/carrental"
            urlToLiveDemo="https://ktcarrent.netlify.app"
            key="1"
            version={1}
          />
          <Projectcard
            date="2023 Oct"
            describe="         
            This minimalist furniture e-commerce site offers easy navigation, highlighting product categories and top items on the main page. Users can browse and filter products by category. Individual product pages provide descriptions and images, with an option to add items to the cart. The cart is accessible via the navbar, allowing users to manage quantities and review prices efficiently."
            emoji="🛋️"
            img={ecommerce}
            name="Minimalist Ecommerce"
            technology1="React"
            technology2="Typescript"
            urlToCode="https://github.com/tamaskk/minimalistecommerce"
            urlToLiveDemo="https://minimalistecommerce.netlify.app"
            key="2"
            version={2}
          />
          <Projectcard
            date="2023 Aug"
            describe="
            This web app simplifies food orders, allowing users to select dishes from diverse categories, pay with cash or card, and customize the menu. It provides detailed summaries for daily, weekly, monthly, and yearly expenses. Additionally, the user can reset the summary in the settings for a clean slate.
            "
            emoji="🥡"
            img={resturaurant}
            name="Resturant app"
            technology1="React"
            technology2="TailwindCSS"
            urlToCode="https://github.com/tamaskk/restaurantapp"
            urlToLiveDemo=""
            key="3"
            version={1}
          />
          <Projectcard
            date="2023 Sep"
            describe="
            This web application streamlines photography services, enabling users to view a photographer's portfolio, send messages, and access password-protected albums. In the admin section, photographers can upload albums, set passwords, and manage album details. The application also features a calendar for scheduling photography appointments, creating a comprehensive photography experience."
            emoji="📷"
            img={photography}
            name="Photography App"
            technology1="React"
            technology2="TailwindCSS"
            urlToCode="https://github.com/tamaskk/photographyapp"
            urlToLiveDemo=""
            key="4"
            version={2}
          />
          <Projectcard
            date="2023 Oct"
            describe="
            This gym web application features an About section, providing insights into the gym. Our Courses offers a comprehensive list of available fitness programs. Users can explore a banner section for yearly memberships, delve into individual coaches to access unique exercise routines, read testimonials, and find contact details for further inquiries, creating a well-rounded fitness experience."
            emoji="🏋️"
            img={gym}
            name="Gym App"
            technology1="Typescript"
            technology2="TailwindCSS"
            urlToCode="https://github.com/tamaskk/gymapp"
            urlToLiveDemo="https://ktgymapp.netlify.app"
            key="5"
            version={1}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

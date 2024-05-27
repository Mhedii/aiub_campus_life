import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div>
          <img
            src="https://www.aiub.edu/Files/Templates/NewAIUB/assets/images/logo/BANNER-HEADING.png"
            alt=""
            className=" h-[2rem]"
          />
        </div>
        <div className="bg-[#004ea2] h-[2.75rem] grid grid-cols-3  mt-[2rem] lg:mt-[0.75rem] ">
          <div className="text-white flex text-right justify-end mt-2 gap-4 text-xl hover:cursor-pointer  h-fit">
            <Link to="/">Home</Link>

            <Link to="/activities">Student Activities</Link>
          </div>
          <div className="relative shadow-2xl shadow-white rounded-full hover:shadow-[#004ea2] mx-auto mt-[-2rem] ">
            <Link to="/">
              <img
                src="https://www.aiub.edu/Files/Templates/NewAIUB/assets/images/aiub-logo.svg"
                alt=""
                className="mx-auto h-[8rem]  hover:scale-105 "
              />
            </Link>
          </div>
          <div className="text-white flex text-left mt-2 gap-4 text-xl hover:cursor-pointer  h-fit">
            <Link to="/clubs">Clubs</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className="flex gap-2 ml-4 mt-4">
          <img
            src="https://www.aiub.edu/Files/Templates/NewAIUB/assets/images/aiub-logo.svg"
            alt=""
            className="h-20   "
          />
          <div className="text-primary font-medium text-xs ">
            <p>American</p>
            <p> International</p>
            <p>University-</p>
            <p>Bangladesh</p>
            <p className="text-black font-thin">where leaders are created</p>
          </div>
        </div>
        <div className="bg-[#004ea2] h-[2rem] text-white items-center flex text-xs justify-evenly  mt-2 ">
          <Link className="hover:cursor-pointer" to="/">
            Home
          </Link>
          <Link className="hover:cursor-pointer" to="/activities">
            Student Activities
          </Link>
          <Link className="hover:cursor-pointer" to="/clubs">
            Clubs
          </Link>
          <Link className="hover:cursor-pointer" to="/facilities">
            Facilities
          </Link>
          <Link className="hover:cursor-pointer" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

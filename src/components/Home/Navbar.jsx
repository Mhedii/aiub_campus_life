import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.aiub.edu/Files/Templates/NewAIUB/assets/images/logo/BANNER-HEADING.png"
          alt=""
          className=" h-[2rem]"
        />
      </div>
      <div className="bg-[#004ea2] h-[2.75rem] grid grid-cols-3  mt-[0.75rem] ">
        <div className="text-white flex text-right justify-end mt-2 gap-4 text-xl hover:cursor-pointer  h-fit">
          <Link to="/">Home</Link>

          <Link to="/activities">Student Activities</Link>
        </div>
        <div className="relative shadow-2xl shadow-white rounded-full hover:shadow-[#004ea2] mx-auto mt-[-2rem] ">
          <img
            src="https://www.aiub.edu/Files/Templates/NewAIUB/assets/images/aiub-logo.svg"
            alt=""
            className="mx-auto h-[8rem]  hover:scale-105 "
          />
        </div>
        <div className="text-white flex text-left mt-2 gap-4 text-xl hover:cursor-pointer  h-fit">
          <Link to="/clubs">Clubs</Link>

          <Link to="/facilities">Facilities</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

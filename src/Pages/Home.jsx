import React from "react";
import Activities from "../components/Home/Activities";
import Facility from "../components/Home/Facility";
import ClubInfo from "../components/Home/ClubInfo";

const Home = () => {
  return (
    <div className="border border-gray-200 shadow-lg xl:mx-[20rem] lg:mx-[10rem]  mt-[2rem] p-[1.5rem] rounded-md ">
      <Activities />
      <Facility />
      <ClubInfo />
    </div>
  );
};

export default Home;

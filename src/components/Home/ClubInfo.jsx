import React from "react";
import clubs from "../../fakeData/clubs.json";
import { Link } from "react-router-dom";
const ClubInfo = () => {
  return (
    <div>
      <div className="w-fit   mt-4">
        <p className="text-secondary font-medium text-2xl  ">Clubs</p>
        <hr className="border-t-4 border-secondary mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] mt-[1.5rem] ">
        {clubs.slice(0, 10).map((club) => (
          <>
            <Link to={`/clubs/${club.name} `}>
              <div
                className="card w-full shadow-2xl hover:cursor-pointer hover:scale-105 hover:border hover:border-secondary h-30 rounded-md relative "
                key={club.id}
                style={{ height: "200px" }}
              >
                <img
                  src={club.image}
                  alt={club.name}
                  className="h-full w-full "
                />
                <div className="absolute  w-full bg-secondary h-full text-white p-2 opacity-0 transition-all duration-700 ease-in-out flex justify-center items-center text-center hover:opacity-80 ">
                  {club.name}
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
      <Link to="/clubs">
        <button className="btn bg-transparent text-primary hover:bg-primary hover:text-white font-medium text-lg mx-auto flex mt-8">
          See More
        </button>
      </Link>
    </div>
  );
};

export default ClubInfo;

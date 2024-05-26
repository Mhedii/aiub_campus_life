import React from "react";
import clubs from "../../fakeData/clubs.json";
import { Link } from "react-router-dom";
const ClubInfo = () => {
  return (
    <div>
      <div className="mx-[20rem] border border-gray-200 mt-[2rem] p-[1.5rem] rounded-md shadow-lg">
        <div className="w-fit   mt-4">
          <p className="text-secondary font-medium text-2xl  ">Clubs</p>
          <hr className="border-t-4 border-secondary mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-[1.5rem] mt-[1.5rem] ">
          {clubs.slice(0, 4).map((club) => (
            <>
              <Link to={`/clubs/${club.name} `}>
                <div
                  className="card w-full bg-base-100 shadow-2xl hover:cursor-pointer hover:scale-105 hover:border hover:border-secondary "
                  key={club.id}
                >
                  {/* <figure>
                    <img src={club.image} alt="Shoes" />
                  </figure> */}
                  <div className="card-body">
                    <div className="flex justify-between">
                      <h2 className="card-title">
                        <div className="badge badge-primary text-white py-3  text-md">
                          {club.name}
                        </div>
                        {/* <div className="badge badge-primary text-white py-3  text-md">
                          {club.organizer}
                        </div> */}
                      </h2>
                      <div>
                        <p className="font-medium text-secondary">
                          {club.contact}
                        </p>
                      </div>
                    </div>
                    <p className="text-justify text-lg">
                      {club.description.slice(0, 150)}....
                    </p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
        <Link to="/activities">
          <button className="btn bg-transparent text-primary hover:bg-primary hover:text-white font-medium text-lg mx-auto flex mt-8">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClubInfo;

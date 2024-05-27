import React from "react";
import facilities from "../fakeData/facilities.json";
import { Link } from "react-router-dom";
const Facilities = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)]">
      <div>
        <div className="xl:mx-[20rem] lg:mx-[15rem] border border-gray-200 mt-[2rem] p-[1.5rem] rounded-md shadow-lg">
          <div className="w-fit   mt-4">
            <p className="text-secondary font-medium text-2xl  ">Facilities</p>
            <hr className="border-t-4 border-secondary mt-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mt-[1.5rem] ">
            {facilities.map((facility) => (
              <>
                <Link to={`/facilities/${facility.name} `}>
                  <div
                    className="card w-full bg-base-100 shadow-2xl hover:cursor-pointer hover:scale-105 hover:border hover:border-secondary "
                    key={facility.id}
                  >
                    <figure>
                      <img
                        src={facility.image}
                        alt={facility.name}
                        className="h-[10rem]"
                      />
                    </figure>

                    <div className="card-body pt-2 ">
                      <h2 className="card-title">
                        <div className="badge badge-primary text-white py-3  text-md">
                          {facility.name}
                        </div>
                      </h2>

                      <p className="text-justify text-lg">
                        {facility.description.slice(0, 150)}....
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;

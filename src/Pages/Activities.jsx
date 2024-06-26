import React from "react";
import studentActivities from "../fakeData/studentActivities.json";
import { Link } from "react-router-dom";
const Activities = () => {
  return (
    <div>
      <div className="xl:mx-[20rem] lg:mx-[10rem] shadow-lg border border-gray-200 mt-[8rem] p-[1.5rem] rounded-md ">
        <div className="w-fit   mt-4">
          <p className="text-secondary font-medium text-2xl  ">Activities</p>
          <hr className="border-t-4 border-secondary mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] mt-[1.5rem] ">
          {studentActivities.map((activity) => (
            <Link to={`/activities/${activity.name} `} key={activity.id}>
              <div
                className="card w-full bg-base-100 shadow-2xl hover:cursor-pointer 
                transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-450 hover:border hover:border-secondary"
              >
                <figure>
                  <img
                    src={activity.image}
                    className="h-[15rem] w-auto"
                    alt="Shoes"
                  />
                </figure>

                <div>
                  <p className="font-medium text-secondary justify-end flex pt-1 pe-3">
                    On {activity.date} at {activity.time}
                  </p>
                </div>
                <div className="card-body pt-2 ">
                  <h2 className="card-title flex-col lg:flex-row">
                    <div className="badge badge-primary text-white py-3  text-xs">
                      {activity.name}
                    </div>
                    <div className="badge badge-primary text-white py-3  text-xs ">
                      {activity.organizer}
                    </div>
                  </h2>
                  <p className="text-justify text-lg">
                    {activity.description.slice(0, 150)}....
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;

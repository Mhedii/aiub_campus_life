import React from "react";
import studentActivities from "../../fakeData/studentActivities.json";
import { Link } from "react-router-dom";
const Activities = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)]">
      <div>
        <p className="text-primary mx-auto font-bold text-3xl text-center mt-[4rem]">
          On Campus
        </p>
        <div className="mx-[20rem] border border-gray-200 mt-[2rem] p-[1.5rem] rounded-md shadow-lg">
          <div className="w-fit   mt-4">
            <p className="text-secondary font-medium text-2xl  ">Activities</p>
            <hr className="border-t-4 border-secondary mt-2" />
          </div>
          <div className="grid grid-cols-2 gap-[1.5rem] mt-[1.5rem] ">
            {studentActivities.slice(0, 4).map((activity) => (
              <>
                <Link to={`/activities/${activity.name} `}>
                  <div
                    className="card w-full bg-base-100 shadow-2xl hover:cursor-pointer hover:scale-105 hover:border hover:border-secondary "
                    key={activity.id}
                  >
                    <figure>
                      <img src={activity.image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <div className="flex justify-between">
                        <h2 className="card-title">
                          <div className="badge badge-primary text-white py-3  text-md">
                            {activity.name}
                          </div>
                          <div className="badge badge-primary text-white py-3  text-md">
                            {activity.organizer}
                          </div>
                        </h2>
                        <div>
                          <p className="font-medium text-secondary">
                            On {activity.date} at {activity.time}
                          </p>
                        </div>
                      </div>
                      <p className="text-justify text-lg">
                        {activity.description.slice(0, 150)}....
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
    </div>
  );
};

export default Activities;

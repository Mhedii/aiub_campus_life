import React from "react";
import { useParams } from "react-router-dom";
import studentActivities from "../../fakeData/studentActivities.json";

const SingleActivity = () => {
  const { id } = useParams(); // Change to id instead of name

  const activity = studentActivities.find((item) => item.name === id);

  if (!activity) {
    return <div>Activity not found</div>;
  }

  return (
    <div>
      <div className="xl:mx-[20rem] lg:mx-[15rem] mx-[1rem] border border-gray-200 mt-[8rem] p-[1.5rem] rounded-md ">
        <div className="justify-center text-center flex">
          <p className="text-3xl text-secondary font-medium   w-fit">
            {activity.name}
            <hr className="border-t-4 border-secondary mt-2" />
          </p>
        </div>
        <div className="justify-end text-end font-medium text-sm md:text-lg my-4">
          <p>
            Organized By:{" "}
            <span className="font-normal">{activity.organizer}</span>
          </p>
          <p>
            Date: <span className="font-normal">{activity.date}</span>
          </p>
          <p>
            Time: <span className="font-normal">{activity.time}</span>
          </p>
          <p>
            Location: <span className="font-normal">{activity.location}</span>
          </p>
        </div>
        <img src={activity.image} alt="" className="mx-auto" />
        <div className="   ">
          <p className="text-2xl text-secondary font-medium   w-fit">
            Description
            <hr className="border-t-2 border-secondary  " />
          </p>
        </div>
        <div className="text-justify text-lg font-normal text-gray-500  mt-4">
          <p className="mb-4">{activity.description}</p>

          <p className="mb-4">{activity.description}</p>

          <p className="mb-4">{activity.description}</p>

          <p className="mb-4">{activity.description}</p>

          {activity.description}
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;

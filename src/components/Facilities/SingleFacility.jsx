import React from "react";
import { useParams } from "react-router-dom";
import facilities from "../../fakeData/facilities.json";

const SingleFacility = () => {
  const { id } = useParams();

  const facility = facilities.find((item) => item.name === id);

  if (!facility) {
    return <div>facility not found</div>;
  }

  return (
    <div>
      <div className="xl:mx-[20rem] lg:mx-[15rem] mx-[1rem] shadow-lg border border-gray-200 mt-[8rem] p-[1.5rem] rounded-md ">
        <div className="justify-center text-center flex">
          <p className="text-3xl text-secondary font-medium   w-fit">
            {facility.name}
            <hr className="border-t-4 border-secondary mt-2" />
          </p>
        </div>
        <div className="justify-end text-end font-medium text-lg ">
          <p>
            Location: <span className="font-normal">{facility.location}</span>
          </p>
        </div>
        <img src={facility.image} alt="" className="mx-auto" />
        <div className="   ">
          <p className="text-2xl text-secondary font-medium   w-fit">
            Description
            <hr className="border-t-2 border-secondary  " />
          </p>
        </div>
        <div className="text-justify text-lg font-normal text-gray-500  mt-4">
          <p className="mb-4">{facility.description}</p>

          <p className="mb-4">{facility.description}</p>

          <p className="mb-4">{facility.description}</p>

          <p className="mb-4">{facility.description}</p>

          {facility.description}
        </div>
      </div>
    </div>
  );
};

export default SingleFacility;

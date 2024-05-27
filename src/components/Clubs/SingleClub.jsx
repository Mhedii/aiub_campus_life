import React from "react";
import { useParams } from "react-router-dom";
import clubs from "../../fakeData/clubs.json";

const SingleClub = () => {
  const { id } = useParams(); // Change to id instead of name

  const club = clubs.find((item) => item.name === id);

  if (!club) {
    return <div>club not found</div>;
  }

  return (
    <div>
      <div className="xl:mx-[20rem] lg:mx-[15rem] mx-[1rem] border border-gray-200 mt-[8rem] p-[1.5rem] rounded-md ">
        <div className="justify-center text-center flex">
          <p className="text-3xl text-secondary font-medium   w-fit">
            {club.name}
            <hr className="border-t-4 border-secondary mt-2" />
          </p>
        </div>

        <img src={club.image} alt="" className="mx-auto h-[20rem] w-[20rem]" />

        <div className="text-justify text-lg font-normal text-gray-500  mt-4">
          <div className="">
            <p className="text-xl text-secondary font-medium   w-fit">
              Objective
              <hr className="border-t-2 border-secondary mt-2" />
            </p>
          </div>
          <p className="mb-4">{club.objective}</p>
          <div className="">
            <p className="text-xl text-secondary font-medium   w-fit">
              Activities
              <hr className="border-t-2 border-secondary mt-2" />
            </p>
          </div>
          <p className="mb-4">{club.activities}</p>
          <div className="">
            <p className="text-xl text-secondary font-medium   w-fit">
              Membership
              <hr className="border-t-2 border-secondary mt-2" />
            </p>
          </div>
          <p className="mb-4">{club.membership}</p>
          <div className="">
            <p className="text-xl text-secondary font-medium   w-fit">
              Leadership
              <hr className="border-t-2 border-secondary mt-2" />
            </p>
          </div>
          <p className="mb-4">{club.leadership}</p>
          <div className="">
            <p className="text-xl text-secondary font-medium   w-fit">
              Future Outlook
              <hr className="border-t-2 border-secondary mt-2" />
            </p>
          </div>
          {club.future_outlook}
        </div>
      </div>
    </div>
  );
};

export default SingleClub;

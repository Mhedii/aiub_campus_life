import React from "react";
import facilities from "../../fakeData/facilities.json";

const Facility = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)]">
      <div>
        <div className="w-fit   mt-4">
          <p className="text-secondary font-medium text-2xl  ">Facilities</p>
          <hr className="border-t-4 border-secondary mt-2" />
        </div>
        <div className=" gap-[1.5rem] mt-[1.5rem] ">
          {facilities.map((facility, index) => (
            <>
              {index === 0 || index % 2 === 0 ? (
                <>
                  <div className="card card-side bg-base-100 shadow-xl grid grid-cols-4 mb-4">
                    <figure className="col-span-4 md:col-span-2 lg:col-span-1">
                      <img src={facility.image} alt={facility.name} />
                    </figure>
                    <div className="card-body col-span-4 md:col-span-2 lg:col-span-3">
                      <h2 className="card-title justify-end text-primary">
                        {facility.name}
                      </h2>
                      <p className="text-justify">{facility.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="card card-side bg-base-100 shadow-xl grid grid-cols-4 mb-4">
                    <div className="card-body col-span-4 md:col-span-2 lg:col-span-3">
                      <h2 className="card-title justify-start text-primary">
                        {facility.name}
                      </h2>
                      <p className="text-justify">{facility.description}</p>
                    </div>
                    <figure className="col-span-4 md:col-span-2 lg:col-span-1">
                      <img src={facility.image} alt={facility.name} />
                    </figure>
                  </div>
                </>
              )}

              {/* <Link to={`/facilities/${Facility.name} `}>
                  <div
                    className="card w-full bg-base-100 shadow-2xl hover:cursor-pointer hover:scale-105 hover:border hover:border-secondary "
                    key={Facility.id}
                  >
                    <figure>
                      <img src={Facility.image} alt={Facility.name} />
                    </figure>
                 
                    <div className="card-body pt-2 ">
                      <h2 className="card-title">
                        <div className="badge badge-primary text-white py-3  text-md">
                          {Facility.name}
                        </div>
                        <div className="badge badge-primary text-white py-3  text-md ">
                          {Facility.location}
                        </div>
                      </h2>

                      <p className="text-justify text-lg">
                        {Facility.description.slice(0, 150)}....
                      </p>
                    </div>
                  </div>
                </Link> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;

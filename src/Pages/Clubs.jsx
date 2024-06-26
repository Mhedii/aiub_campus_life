import React from "react";
import clubs from "../fakeData/clubs.json";
import { useNavigate } from "react-router-dom";
const Clubs = () => {
  const navigate = useNavigate();

  const handleRowClick = (clubName) => {
    navigate(`/clubs/${clubName}`);
  };

  return (
    <div>
      <div className="xl:mx-[20rem] lg:mx-[15rem] border border-gray-200 mt-[8rem] p-[1.5rem] rounded-md">
        <div className="w-fit mt-4 mx-auto">
          <p className="text-secondary font-medium text-2xl ">Clubs</p>
          <hr className="border-t-4 border-secondary mt-2" />
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-center">
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center">
              {clubs.map((club, index) => (
                <tr
                  key={club.id}
                  className="hover:bg-slate-200 hover:cursor-pointer"
                  onClick={() => handleRowClick(club.name)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="h-12 w-12 rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {club.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {club.contact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clubs;

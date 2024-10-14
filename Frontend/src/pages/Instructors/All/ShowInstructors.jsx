import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";

const ShowInstructors = () => {
  const axiosInstance = useAxiosFetch();
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axiosInstance.get("/instructors").then((res) => setInstructors(res.data));
  }, []);
  return (
    <div className="mt-12 dark:bg-black w-[80%] mx-auto">
     
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  pt-28">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="max-w-xs">
            <div className="bg-white dark:bg-gray-950 dark:border-secondary dark:shadow-white border hover:-translate-y-1 hover:border-secondary cursor-pointer duration-200 rounded-lg py-3">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={instructor.photoUrl}
                  alt="John Doe"
                />
              </div>
              <div className="p-2">
                <h3 className="text-center dark:text-white text-xl text-gray-900 font-medium leading-8">
                  {instructor.name}
                </h3>
                <div className="text-center dark:text-gray-400 text-base font-semibold text-gray-600">
                  <p>Instructor</p>
                </div>
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 dark:text-gray-400 text-gray-700 font-semibold">
                        Email:
                      </td>
                      <td className="px-2 py-2 dark:text-gray-400 font-semibold text-gray-700 ">{instructor.email}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 dark:text-gray-400 font-semibold text-gray-800 ">
                        Contact:
                      </td>
                      <td
                        className={`px-2 py-2 dark:text-gray-400 italic  ${
                          instructor.phone || "text-red-400"
                        }`}
                      >
                        {instructor.phone ? instructor.phone : "Not Provided"}
                      </td>
                    </tr>
                    
                  </tbody>
                </table>

                <div className="text-center my-3">
                  {/* <a
                    className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    View Profile
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShowInstructors;

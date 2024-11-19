/* eslint-disable no-unused-vars */
import React from "react";
import CloudCheck from '../../../../public/cloud-fluency.webp'
import { Link } from "react-router-dom";
const Page = () => {
  return (
    <div className="flex flex-col mt-[6%] md:flex-row items-center lg:w-[85%] md:w-[85%] sm:w-full w-full mx-auto justify-center h-full lg:p-4 md:p-4 sm:p-0 p-0">
      <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
      <div className="md:w-1/2 w-full">
          <img
            src={CloudCheck}
            alt="Placeholder Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2 w-full flex  flex-col items-center md:items-start">
          <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-4">
          Build organization-wide cloud fluency
          </h2>
          <p className="text-gray-800 text-base sm:text-md mt-2">
          Get teams across your org speaking the same language and ahead of the cloud curve with the most effective, hands-on, and comprehensive platform for cloud learning at scale.


          </p>
          <Link to={"/viewplans"}>
          <button className="bg-red-600 text-sm font-bold mt-7 text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500 transition-all">
            View Plans{" "}
          </button>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Page;

/* eslint-disable no-unused-vars */
import React from "react";
import CloudCheck from '../../../../public/cloud-astronaut.webp'
const Page = () => {
  return (
    <div className="flex flex-col mt-[6%] md:flex-row items-center lg:w-[80%] md:w-[80%] sm:w-full w-full mx-auto justify-center h-full lg:p-4 md:p-4 sm:p-0 p-0">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="p-6 md:w-1/2 w-full flex flex-col items-center md:items-start">
          <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-4">
          Effective and engaging
          </h2>
          <p className="text-gray-800 text-base sm:text-md mt-2">
          We’ve helped more than 2.2 million engineers and 4,000+ businesses build modern tech skills and learn to cloud — and we’d love to help you, too.

We use proven adult learning principles to create a tailored, effective learning experience for all skill levels. Only A Cloud Guru offers the freshest courses and labs, paired with comprehensive tools and presented by instructors every bit as unique as you are.
          </p>
          <button className="bg-red-600 text-sm font-bold mt-7 text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500 transition-all">
            Watch Video{" "}
          </button>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={CloudCheck}
            alt="Placeholder Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import SolutionImage from '../../../public/acg-solutions.webp'

const Page = () => {
  return (
    <div className="flex flex-col mt-[8%] md:flex-row items-center lg:w-[80%] md:w-[80%] sm:w-full w-full mx-auto justify-center h-full lg:p-4 md:p-4 sm:p-0 p-0">
      <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 w-full">
          <img
            src={SolutionImage}
            alt="Placeholder Image"
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="p-6 md:w-1/2 w-full flex flex-col items-center md:items-start">
          <span className='text-red-600 font-bold text-lg'>Online demo</span>
          <h2 className="text-4xl text-gray-800 font-extrabold mt-4 mb-4">See our solutions in action</h2>
          <p className="text-gray-800 text-base sm:text-md mt-2">
            Check out our demos to see in action the platform features that'll transform your teams, and get all the details straight from the experts who know your problems—and your solutions—best.
          </p>
          <button className="bg-red-600 font-bold mt-7 text-white px-6 py-2 rounded-3xl hover:bg-red-500 duration-500 transition-all">
            Tour Solutions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;

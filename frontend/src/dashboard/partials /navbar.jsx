/* eslint-disable no-unused-vars */
import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Page = () => {
  return (

    <header className="bg-slate-100 shadow-xl">
      <div className="">
        <div className="flex justify-between items-center p-2">
          <div></div>

          <div className="flex items-center gap-1.5 mr-2">
            <div className="relative mt-1 ">
              <div className="absolute -top-2 right-0.5 bg-orange-800 px-1.5 text-sm text-white font-bold rounded-full">
                3
              </div>
              <IoIosNotifications className="text-3xl text-orange-600 mr-2 cursor-pointer" />
            </div>

            <div>
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt=""
              />
            </div>
            <Link to={"/"} className="ml-1.5">
              <button className="py-2 px-6 rounded-md bg-purple-600 text-white font-bold">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Page;

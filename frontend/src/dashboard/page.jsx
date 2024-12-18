/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./partials /navbar";
import Sidebar from "./partials /sidebar";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;

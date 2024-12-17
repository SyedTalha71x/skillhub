/* eslint-disable no-unused-vars */
import React from 'react';

const Page = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              New Project
            </button>
            <div className="ml-4 relative">
              <img
                className="h-8 w-8 rounded-full"
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Page;


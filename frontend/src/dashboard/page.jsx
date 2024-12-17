/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './partials /navbar' 
import Sidebar from './partials /sidebar' 

const Page = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="container mx-auto">
            {/* Dashboard Content Goes Here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Dashboard Widgets */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                {/* Add your overview content */}
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Statistics</h2>
                {/* Add your statistics content */}
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
                {/* Add your recent activity content */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Page
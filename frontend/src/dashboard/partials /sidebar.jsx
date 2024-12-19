/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/dashboard' },
    { name: 'Users', icon: '📁', href: '/dashboard/users' },
    { name: 'Tasks', icon: '✅', href: '/dashboard/tasks' },
    { name: 'Calendar', icon: '📅', href: '/dashboard/calendar' },
    { name: 'Reports', icon: '📈', href: '/dashboard/reports' },
    { name: 'Settings', icon: '⚙️', href: '/dashboard/settings' },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-2 left-2 z-50 bg-gray-800 text-white p-2 rounded-md shadow-lg"
      >
        {!isOpen && <IoMenu className="text-2xl" />}
      </button>

      <div className={`
         fixed inset-y-0 left-0 z-40 transform duration-500 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:inset-0
      `}>
        <aside className="bg-slate-100 shadow-xl text-black w-64 h-full p-4">
          <button
            onClick={toggleSidebar}
            className="absolute top-2 right-2 text-white overflow-hidden bg-gray-700 p-2 rounded-full hover:bg-gray-600 md:hidden"
          >
            <IoClose className="text-2xl" />
          </button>

          <nav className="mt-12">
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className="mb-4">
                  <Link
                    to={item.href}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3 text-sm">{item.icon}</span>
                    <span className='text-sm'>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
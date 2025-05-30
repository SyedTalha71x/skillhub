/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { PiBooksDuotone } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setDropDown = (menuName) =>{
    setDropdownStates((prevState)=>({
         ...prevState,
    [menuName]: !prevState[menuName]
    }))
     
  }

  const menuItems = [
    { name: "Dashboard", icon: <MdOutlineDashboard />, href: "/dashboard" },
    { name: "Users", icon: <FaUsers />, href: "/dashboard/users" },
    {
      name: "Courses",
      icon: <PiBooksDuotone />,
      subItems: [
        { name: "Create Course", href: "/dashboard/createCourse" },
        { name: "Edit Course", href: "/dashboard/editCourse" },
      ],
    },
    {
      name: "Reports",
      icon: <SiSimpleanalytics />,
      href: "/dashboard/reports",
    },
    { name: "Settings", icon: <IoMdSettings />, href: "/dashboard/settings" },
    { name: "Roles and Permissions", icon: <IoMdSettings />,
      subItems: [
        { name: "Users", href: "/dashboard/courses/create" },
        { name: "Roles to users", href: "/dashboard/courses/delete" },
        { name: "Permission to roles", href: "/dashboard/courses/delete" },
      ],
    },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-2 left-2 z-50 bg-gray-800 text-white p-2 rounded-md shadow-lg"
      >
        {!isOpen && <IoMenu className="text-2xl" />}
      </button>

      <div
        className={`
         fixed inset-y-0 left-0 z-40 transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:inset-0
      `}
      >
        <aside className="bg-slate-100 shadow-xl text-black w-64 h-full p-4">
          <button
            onClick={toggleSidebar}
            className="absolute top-2 right-2 text-white overflow-hidden bg-gray-700 p-2 rounded-full hover:bg-gray-600 md:hidden"
          >
            <IoClose className="text-2xl" />
          </button>

          <nav className="mt-12">
            <ul className="space-y-2">
              {menuItems.map((item) =>
                item.subItems ? (
                  <li key={item.name}>
                    <div
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 hover:text-white cursor-pointer transition-colors duration-200"
                      onClick={()=>{setDropDown(item.name)}}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-sm ">
                        {dropdownStates[item.name] ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                      </span>
                    </div>
                    <ul
                      className={`ml-6 overflow-hidden transition-[max-height] duration-500 ${
                        dropdownStates[item.name] ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.name}
                          className="flex items-center gap-1 p-1"
                        >
                          <div className="text-gray-500">
                            <GoDotFill />
                          </div>
                          <Link
                            to={subItem.href}
                            className="block p-2 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200 text-sm w-full"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  </li>
                )
              )}
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

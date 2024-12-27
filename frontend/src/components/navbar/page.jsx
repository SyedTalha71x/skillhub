/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Layout, Menu, Drawer } from "antd";
import { X } from "lucide-react";
import {
  MenuOutlined,
  SearchOutlined,
  DownOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import SemiNavbar from "../seminavbar/page";

const GlobalStyle = createGlobalStyle`
  .custom-menu.ant-menu {
    background-color: transparent;
    border-bottom: none;
  }
  .custom-menu.ant-menu .ant-menu-item,
  .custom-menu.ant-menu .ant-menu-submenu-title {
    color: #9ca3af !important;
  }
  .custom-menu.ant-menu .ant-menu-item:hover,
  .custom-menu.ant-menu .ant-menu-submenu-title:hover {
    color: white !important;
  }
  .custom-menu.ant-menu .ant-menu-submenu-arrow {
    color: #9ca3af !important;
  }
  .ant-menu-horizontal {
    border-bottom: none !important;
  }
  .ant-menu-horizontal > .ant-menu-item::after,
  .ant-menu-horizontal > .ant-menu-submenu::after {
    border-bottom: none !important;
  }
  .ant-drawer .ant-drawer-content {
    background-color: #242145;
  }
  .ant-drawer .ant-drawer-header {
    background-color: #242145;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .ant-drawer .ant-drawer-title {
    color: white;
  }
  .ant-drawer .ant-drawer-close {
    color: white;
  }
  .ant-menu {
    background: transparent;
    color: #9ca3af;
  }
`;

const { Header } = Layout;

const Navbar = () => {
  const [UserRole, setUserRole] = useState("");
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    company: "",
    jobRole: "",
    phone: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const checkRole = localStorage.getItem("UserRole");
    if (checkRole) {
      setUserRole(checkRole || "");
    }
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      const input = document.querySelector('input[type="text"]');
      if (input) input.value = "";
    }
  };

  const menuItems = [
    {
      key: "solutions",
      label: "Solutions",
      children: [
        {
          key: "for-individuals",
          label: (
            <Link to="/" className="hover:text-white">
              For Individuals
            </Link>
          ),
        },
        {
          key: "for-teams",
          label: (
            <Link to="/" className="hover:text-white">
              For Teams
            </Link>
          ),
        },
        {
          key: "for-enterprise",
          label: (
            <Link to="/" className="hover:text-white">
              For Enterprise
            </Link>
          ),
        },
      ],
    },
    {
      key: "products",
      label: "Products",
      children: [
        {
          key: "skills",
          label: (
            <Link to="/skills" className="hover:text-white">
              Skills
            </Link>
          ),
        },
        {
          key: "flow",
          label: (
            <Link to="/" className="hover:text-white">
              Flow
            </Link>
          ),
        },
        {
          key: "labs",
          label: (
            <Link to="/" className="hover:text-white">
              Labs
            </Link>
          ),
        },
      ],
    },
    {
      key: "resources",
      label: "Resources",
      children: [
        {
          key: "blog",
          label: (
            <Link to="/" className="hover:text-white">
              Blog
            </Link>
          ),
        },
        {
          key: "customer-stories",
          label: (
            <Link to="/" className="hover:text-white">
              Customer Stories
            </Link>
          ),
        },
        {
          key: "support",
          label: (
            <Link to="/" className="hover:text-white">
              Support
            </Link>
          ),
        },
      ],
    },
  ];

  const mobileMenuItems = [
    ...menuItems,
    {
      key: "contact-sales",
      label: (
        <button className="w-full text-left px-4 py-2 text-sm font-semibold text-white border-2 border-blue-700 rounded-xl transition-all duration-500">
          <div
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Contact Sales
          </div>
        </button>
      ),
    },
    UserRole === "Admin" || UserRole === "Instructor" && {
      key: "dashboard",
      label: (
        <button className="w-full text-left px-4 py-2 text-sm font-semibold text-white bg-[#EC008C]  rounded-xl transition-all duration-300">
          <Link to="/dashboard">Dashboard</Link>
        </button>
      ),
    },
  ];

  return (
    <>
      <SemiNavbar />
      <GlobalStyle />
      <Header className="bg-[#242145] p-6 shadow-2xl sticky top-0 z-50">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white md:hidden"
              onClick={showDrawer}
            >
              <MenuOutlined className="h-5 w-5" />
            </button>
            <a href="/" className="flex items-center text-white mr-8">
              <svg
                className="h-8 w-8 mr-2 bg-red-600 rounded-full p-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z" />
              </svg>
              <span className="font-bold text-xl">Skillhub</span>
            </a>
            <div className="hidden md:block">
              <Menu
                mode="horizontal"
                items={menuItems}
                expandIcon={<DownOutlined />}
                className="custom-menu text-md font-semibold"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className=" md:inline-flex items-center justify-center p-2 rounded-md text-white "
              onClick={toggleSearch}
            >
              <SearchOutlined className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="hidden md:inline-flex items-center px-4 py-2 text-sm border-2 border-blue-700 font-semibold rounded-xl text-white hover:bg-purple-600 transition-all duration-500">
              <div
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Contact Sales
              </div>
            </button>
            {UserRole === "Admin" || UserRole === 'Instructor' && (
              <button className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl text-white bg-[#EC008C] transition-all duration-300">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            )}
          </div>
        </div>

        {searchVisible && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
              onClick={toggleSearch}
            />
            <div className="absolute left-0 right-0 top-full bg-[#242145] shadow-md z-50">
              <div className="px-4 py-4 flex justify-between items-center">
                <input
                  type="text"
                  className="text-white text-lg bg-transparent border-none outline-none flex-grow placeholder-white"
                  placeholder="What do you want to learn?"
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="p-2 rounded-md text-white hover:text-blue-400 transition-colors duration-200"
                >
                  <CloseOutlined className="text-xl" />
                </button>
              </div>
            </div>
          </>
        )}

        <Drawer
          placement="left"
          onClose={onClose}
          visible={visible}
          bodyStyle={{ padding: "16px 0" }}
          width={280}
        >
          <Menu
            mode="inline"
            items={mobileMenuItems}
            style={{ borderRight: "none" }}
            className="space-y-4 custom-menu"
          />
        </Drawer>
      </Header>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto   bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="relative mt-[7%] p-1  w-full max-w-lg mx-auto bg-[#1e1b38] rounded-lg shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                Schedule a Demo
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#2d2a4a] text-sm text-white rounded outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-[#2d2a4a] text-sm text-white rounded outline-none"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="Business Email"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#2d2a4a] text-sm text-white rounded outline-none"
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#2d2a4a] text-sm text-white rounded outline-none"
                  required
                />
                <select
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#2d2a4a] text-sm text-white rounded outline-none"
                  required
                >
                  <option value="">Select Job Role</option>
                  <option value="manager">Manager</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#2d2a4a] text-sm text-white rounded outline-none"
                  required
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-[#2d2a4a] text-sm text-white rounded outline-none"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
                <div className="text-sm text-gray-400">
                  By filling out this form and clicking submit, you acknowledge
                  our{" "}
                  <a href="#" className="text-pink-500 hover:underline">
                    privacy policy
                  </a>
                  .
                </div>
                <button
                  type="submit"
                  className="w-full p-2 text-white bg-pink-600 rounded hover:bg-pink-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
"use client";

import React, { useState } from "react";
import { Layout, Menu, Drawer } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  DownOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .custom-menu.ant-menu {
    background-color: transparent;
    border-bottom: none;
  }
  .custom-menu.ant-menu .ant-menu-item,
  .custom-menu.ant-menu .ant-menu-submenu-title {
    color: #9ca3af !important; /* text-gray-400 */
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
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      // Reset the input when closing
      const input = document.querySelector('input[type="text"]');
      if (input) input.value = "";
    }
  };

  const menuItems = [
    {
      key: "solutions",
      label: "Solutions",
      children: [
        { key: "for-individuals", label: "For Individuals" },
        { key: "for-teams", label: "For Teams" },
        { key: "for-enterprise", label: "For Enterprise" },
      ],
    },
    {
      key: "products",
      label: "Products",
      children: [
        { key: "skills", label: "Skills" },
        { key: "flow", label: "Flow" },
        { key: "labs", label: "Labs" },
      ],
    },
    {
      key: "resources",
      label: "Resources",
      children: [
        { key: "blog", label: "Blog" },
        { key: "customer-stories", label: "Customer Stories" },
        { key: "support", label: "Support" },
      ],
    },
  ];

  const mobileMenuItems = [
    ...menuItems,
    {
      key: "contact-sales",
      label: (
        <button className="w-full text-left px-4 py-2 text-sm font-semibold text-white border-2 border-blue-700 rounded-xl hover:bg-purple-600 transition-all duration-500">
          Contact Sales
        </button>
      ),
    },
    {
      key: "view-plans",
      label: (
        <button className="w-full text-left px-4 py-2 text-sm font-semibold text-white bg-[#EC008C] hover:bg-[#D1007D] rounded-xl transition-all duration-300">
          View plans
        </button>
      ),
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Header className="bg-[#242145] p-6 relative shadow-2xl">
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
              Contact Sales
            </button>
            <button className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl text-white bg-[#EC008C] hover:bg-[#D1007D] transition-all duration-300">
              View plans
            </button>
          </div>
        </div>

        {searchVisible && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
              onClick={toggleSearch}
            />
            <div className="absolute left-0  right-0 top-full bg-[#242145] shadow-md z-50">
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
    </>
  );
};

export default Navbar;

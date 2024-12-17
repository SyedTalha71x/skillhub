/* eslint-disable no-unused-vars */
import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Projects', icon: '📁' },
    { name: 'Tasks', icon: '✅' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Reports', icon: '📈' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;


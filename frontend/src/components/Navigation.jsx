import React, { useState } from 'react';
import {
  Gear,
  Bell,
  UserCircle,
} from '@phosphor-icons/react';

const Navigation = () => {
  const [selected, setSelected] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard' },
    { name: 'People' },
    { name: 'Hiring' },
    { name: 'Devices' },
    { name: 'Apps' },
    { name: 'Salary' },
    { name: 'Calendar' },
    { name: 'Reviews' },
  ];

  return (
    <div className="fixed top-8 right-8 flex items-center gap-1 p-1
                    md:gap-3 md:p-0 lg:gap-4 xl:gap-5">
      
      {/* Main Navigation */}
      <div className="bg-white rounded-full px-1 py-1
                      md:px-1 md:py-1 lg:px-1 lg:py-1 xl:px-1 xl:py-1">
        <nav>
          <ul className="flex items-center gap-1 md:gap-3 lg:gap-4 xl:gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setSelected(item.name)}
                  className={`px-2 py-1 rounded-full font-light text-xs transition-all duration-200
                              md:px-4 md:py-2 md:text-base lg:px-5 lg:py-3 lg:text-lg xl:px-6 xl:py-4 xl:text-xl ${
                    selected === item.name
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-full p-2">
        <button className="flex items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
          <Gear className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
          <span className="text-xs md:text-base lg:text-lg xl:text-xl font-medium hidden sm:inline">Settings</span>
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-full ">
        <button className=" text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200 p-3">
          <Bell className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
        </button>
      </div>

      {/* User Profile */}
      <div className="bg-white/90 backdrop-blur-sm rounded-full">
        <button className=" text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200 p-3">
          <UserCircle className="h-10 w-10  md:w-10 md:h-10" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
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
    <div className="fixed top-8 right-8 flex items-center gap-2 p-1">
      
      {/* Main Navigation */}
      <div className="bg-white rounded-full px-1 py-1">
        <nav>
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => setSelected(item.name)}
                  className={`px-2 py-1 rounded-full font-light text-xs transition-all duration-200
                              md:px-2.5 md:py-1 md:text-xs lg:px-3 lg:py-1.5 lg:text-sm xl:px-4 xl:py-2 xl:text-base ${
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
      <div className="bg-white rounded-full p-1">
        <button className="flex items-center gap-1 p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
          <Gear className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          <span className="text-xs md:text-sm font-medium hidden sm:inline">Settings</span>
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-full">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
          <Bell className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* User Profile */}
      <div className="bg-white/90 backdrop-blur-sm rounded-full">
        <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
          <UserCircle className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;

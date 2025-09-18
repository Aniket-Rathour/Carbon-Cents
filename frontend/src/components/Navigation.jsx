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
    <div className="fixed top-8 right-8 flex items-center space-x-4">
      <div className="bg-white rounded-full p-2 flex items-center h-16">
        <nav className="h-full">
          <ul className="flex items-center space-x-2 h-full">
            {navItems.map((item) => (
              <li key={item.name} className="h-full flex items-center">
                <a
                  href="#"
                  onClick={() => setSelected(item.name)}
                  className={`px-4 rounded-full font-medium h-full flex items-center ${
                    selected === item.name
                      ? 'bg-[#303030] text-white'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-white rounded-full p-2 flex items-center h-16">
        <a href="#" className="flex items-center text-gray-500 hover:text-gray-900 px-4 py-2 space-x-2">
          <Gear size={24} />
          <span>Settings</span>
        </a>
      </div>
      <div className="bg-white rounded-full p-2 flex items-center h-16">
        <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2">
          <Bell size={24} />
        </a>
      </div>
      <div className="bg-white rounded-full p-2 flex items-center h-16">
        <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2">
          <UserCircle size={32} />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
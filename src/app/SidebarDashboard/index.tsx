import React from 'react';
import { Home, FileText, ClipboardList, TrendingUp } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: Home, size: 'w-12 h-12' },
    { name: 'Grades', icon: FileText, size: 'w-12 h-12 ml-[-23px]' },
    { name: 'Assignments', icon: ClipboardList, size: 'w-12 h-12' }, // Increased size for Assignments
    { name: 'Trends', icon: TrendingUp, size: 'w-12 h-12' }
  ];

  return (
    <div className="h-screen w-72 bg-purple-600 text-white flex flex-col">
      {/* Logo */}
      <div className="p-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12">
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
              <rect x="3" y="3" width="8" height="18" />
              <rect x="13" y="3" width="8" height="18" />
              <circle cx="7" cy="12" r="2" fill="white" />
            </svg>
          </div>
          <span className="text-2xl font-bold">Ubora BC</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-6 py-4 ">
        <ul className="space-y-16 mt-16">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center space-x-6 p-4 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-16 h-16"> {/* Container for icon */}
                    <Icon 
                      className={item.size}
                      strokeWidth={item.name === 'Assignments' ? 3 : 2}
                    />
                  </div>
                  <span className="text-3xl font-medium">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
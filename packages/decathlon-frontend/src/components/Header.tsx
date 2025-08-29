import React from "react";
import {
  FaBars,
  FaSearch,
  FaBook,
  FaFileInvoice,
  FaStore,
  FaShoppingCart,
  FaGlobe,
} from "react-icons/fa";
import avatarImg from "../assets/photo.jpg";

export const Header: React.FC = () => {
  const navItems = [
    { icon: <FaBook />, label: "References" },
    { icon: <FaFileInvoice />, label: "Quotes" },
    { icon: <FaStore />, label: "Store" },
    { icon: <FaShoppingCart />, label: "Cart" },
    { icon: <FaGlobe />, label: "EN" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-300 shadow-sm">
      {/* Top Row */}
      <div className="flex items-center h-28 px-6 justify-between">
        {/* Left side: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <button className="text-blue-800 text-2xl p-2 cursor-pointer">
            <FaBars />
          </button>
          <img src="/logo.png" alt="Logo" className="h-16 object-contain" />
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-full">
            <FaSearch className="text-gray-400 mr-3 text-2xl" />
            <input
              type="text"
              placeholder="Search for a product"
              className="bg-transparent border-none outline-none w-full text-base"
            />
          </div>
        </div>

        {/* Right side: Nav */}
        <nav className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="flex flex-col items-center text-blue-800 hover:text-blue-900 cursor-pointer"
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <span className="text-xs font-normal">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Row Menu */}
      <div className="flex items-center justify-between px-8 bg-white mb-4">
        <ul className="flex gap-8 text-blue-800 font-medium text-lg py-3">
          <li className="cursor-pointer hover:underline">Our Products</li>
          <li className="cursor-pointer hover:underline">Customization</li>
          <li className="cursor-pointer hover:underline">More Services</li>
          <li className="cursor-pointer hover:underline">Our Tips</li>
          <li className="cursor-pointer hover:underline">Sales & Deals</li>
        </ul>

        <div className="flex items-center ml-auto bg-blue-800 border border-gray-300 rounded-full px-4 py-1 gap-2 cursor-pointer text-white">
          <div
            className="w-12 h-12 rounded-full flex-shrink-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${avatarImg})` }}
          />
          <div className="flex flex-col text-base font-medium leading-tight">
            <span>Hello</span>
            <span className="text-green-400 font-semibold">Jean-Pierre</span>
          </div>
        </div>
      </div>
    </header>
  );
};

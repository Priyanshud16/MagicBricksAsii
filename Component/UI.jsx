import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaHome,
  FaRupeeSign,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const MagicBricksLayout = () => {
  const [activeTab, setActiveTab] = useState("PG");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Buy", "Rent", "New Projects", "PG", "Plot", "Commercial"];
  return (
    <div className="font-sans">
      {/* Navbar */}
      {/* Navbar */}
      <nav className="bg-red-600 text-white px-6 py-3 flex justify-between items-center relative">
        {/* Left Side - Logo and Location Dropdown */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">magicbricks</h1>
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Dehradun</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* Right Side - Login and Post Property */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Login</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>

          <button className="bg-white text-red-600 px-4 py-1 rounded-full text-sm font-semibold">
            Post Property{" "}
            <span className="text-xs bg-yellow-400 p-1 rounded-[7px]">
              FREE
            </span>
          </button>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
          <button className="bg-yellow-400 text-red-600 px-4 py-2 rounded">
            Post Property FREE
          </button>
          {menuItems.map((item) => (
            <span
              key={item}
              className="text-gray-700 font-medium cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <nav className="bg-white shadow-md px-6 py-3 items-center justify-between w-full hidden lg:flex">
        {/* Left Side - Menu Items */}
        <ul className="flex space-x-6 text-gray-700 font-medium text-sm items-center justify-around w-[70%]">
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Buy</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Rent</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Sell</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Home Loans</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Home Interiors</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>

          <li className="relative group cursor-pointer flex items-center">
            MB Advice{" "}
            <span className="bg-yellow-400 text-xs font-bold text-white px-1 ml-1 rounded">
              NEW
            </span>
          </li>
          <div className="hidden md:flex cursor-pointer">
            <span className="text-sm">Help</span>
            <span className="ml-1 mt-1">
              <IoIosArrowDown />
            </span>
          </div>
        </ul>
      </nav>

      {/* Search Section */}
      <div className="flex justify-center items-center py-6 px-4">
        <div
          className="flex flex-wrap md:flex-nowrap items-center bg-white rounded-full px-4 py-2 w-full md:w-3/5 
    border-none shadow-none md:border md:shadow-md"
        >
          {/* Location Input */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-red-100 text-red-600 w-full md:w-auto">
            <FaMapMarkerAlt />
            <input
              type="text"
              placeholder="Dehradun"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Separator (Hidden on Mobile) */}
          <span className="hidden md:block border-l h-6 mx-2"></span>

          {/* Occupancy Type */}
          <div className="flex items-center gap-2 px-3 py-2 w-full md:w-auto">
            <FaHome />
            <input
              type="text"
              placeholder="Occupancy Type"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Separator (Hidden on Mobile) */}
          <span className="hidden md:block border-l h-6 mx-2"></span>

          {/* Budget Input */}
          <div className="flex items-center gap-2 px-3 py-2 w-full md:w-auto">
            <FaRupeeSign />
            <input
              type="text"
              placeholder="Budget"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Search Button (Full-width on mobile, auto on larger screens) */}
          <button className="bg-red-600 text-white flex items-center gap-2 px-5 py-2 rounded-full w-full md:w-auto mt-3 md:mt-0 sm:ml-[150px] lg:ml-[100px]">
            <FaSearch />
            Search
          </button>
        </div>
      </div>

      {/* PG & Hostel Listings */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-4 text-center">
          Find a PG & Hostel in Dehradun Away from{" "}
          <i className="font-black text-xl">Home</i>
        </h3>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center space-x-3 md:space-x-6 text-gray-700 font-semibold py-4">
          {menuItems.map((item) => (
            <div
              key={item}
              className="relative cursor-pointer px-2 md:px-4"
              onClick={() => setActiveTab(item)}
            >
              <span
                className={`${
                  activeTab === item ? "text-black" : "text-gray-500"
                }`}
              >
                {item}
              </span>
              {activeTab === item && (
                <div className="absolute left-0 w-full h-1 bg-red-600 rounded-md mt-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* PG/Hostel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              img: "https://th.bing.com/th/id/OIP.vEsUWQLQWAJM5D0OiFY70AHaE8?rs=1&pid=ImgDetMain",
              title: "Student Friendly PG's",
            },
            {
              img: "https://thumbs.dreamstime.com/b/outdoor-portrait-cute-young-black-girl-smiling-african-pe-lying-down-grass-people-30878726.jpg",
              title: "PG for Girls",
            },
            {
              img: "https://image.freepik.com/free-photo/portrait-of-student-boy_23-2147668972.jpg",
              title: "PG for Boys",
            },
            {
              img: "https://img.freepik.com/premium-photo/teen-college-girls-group-smiling-teen-girls-group-collge-student-girls_207225-420.jpg?w=1380",
              title: "Hostel for Girls",
            },
          ].map(({ img, title }) => (
            <div
              key={title}
              className="relative border rounded shadow-md overflow-hidden"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-4">
                <h4 className="font-semibold text-white">{title}</h4>
                <a href="#" className="text-blue-400">
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagicBricksLayout;

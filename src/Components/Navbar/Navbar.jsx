import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle opening the search modal
  const openSearchModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle closing the search modal
  const closeSearchModal = () => {
    setIsModalVisible(false);
    setSearchQuery(""); // Clear the search query when closing
  };

  // Function to handle the hamburger menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center md:px-20 py-4">
      {/* Logo Section */}
      <div
        className={`flex items-center mb-1 md:mb-0 w-[180px] h-[180px] ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
        } transition-transform duration-700 backdrop-filter backdrop-blur-lg`}
      >
        <img src="./zidio.png" alt="zidio" />
        <Link to={"/"} className="text-4xl font-bold text-blue-800" />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          className="text-3xl text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Right Section - Nav Links, Search & Quote Button */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <Link to="/" className="font-bold">Home</Link>
          </li>
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <Link to="/about" className="font-bold">About</Link>
          </li>
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <Link to="/services" className="font-bold">Services</Link>
          </li>
          <li className="hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <Link to="/contact" className="font-bold" >Contact</Link>
          </li>
          {/* Search Icon */}
          <li className="flex items-center hover:text-blue-800 transition duration-500 cursor-pointer text-lg">
            <button
              onClick={openSearchModal}
              className="flex items-center text-2xl"
              aria-label="Search"
            >
              <IoSearch className="mr-1" />
            </button>
          </li>
        </ul>
        {/* Get a Quote Button */}
        <button className="bg-blue-700 text-white rounded p-2 px-6 py-4 mt-4 md:mt-0">
          Get a Quote
        </button>
      </div>

      {/* Search Modal */}
      {isModalVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-700 ease-in-out ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSearchModal}
        >
          <div
            className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 transform scale-0"
            style={{
              transform: isModalVisible ? "scale(1)" : "scale(0.9)",
              transition:
                "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-3/4 md:w-1/2 p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md text-white placeholder-gray-400"
            />
            <button
              onClick={closeSearchModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

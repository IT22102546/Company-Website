import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaLightbulb,
  FaCamera,
  FaFileDownload,
  FaStore,
} from "react-icons/fa";
import { MdSupport, MdOutlineExplore } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 50,
    });
  }, []);

  return (
    <header className="bg-black text-white">
      {/* Top Section */}
      <div
        className="flex items-center justify-between px-4 py-3"
        data-aos="fade-down"
      >
        {/* Logo */}
        <Link to="/">
          <div className="text-lg font-bold flex items-center space-x-2">
            <span className="text-red-500">ZHIYUN</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          className="hidden md:flex space-x-6 items-center"
          data-aos="fade-left"
        >
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaCamera className="mr-2" /> Gimbals
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaLightbulb className="mr-2" /> Lights
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaShoppingCart className="mr-2" /> Life
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <MdSupport className="mr-2" /> Tutorials
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <MdSupport className="mr-2" /> Service & Support
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaFileDownload className="mr-2" /> Download
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <MdOutlineExplore className="mr-2" /> Explore
          </a>
         
         
        </nav>

        {/* Store and Toggle Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="hidden md:block hover:text-gray-300 items-center"
          >
            <FaStore className="mr-2" /> Store
          </a>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="w-6 h-6" data-aos="zoom-in" />
            ) : (
              <FaBars className="w-6 h-6" data-aos="zoom-out" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-gray-800 text-white space-y-4 p-4"
          data-aos="fade-in"
        >
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaCamera className="mr-2" /> Gimbals
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaLightbulb className="mr-2" /> Lights
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaShoppingCart className="mr-2" /> Life
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <MdSupport className="mr-2" /> Tutorials
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <MdSupport className="mr-2" /> Service & Support
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <FaFileDownload className="mr-2" /> Download
          </a>
          <a href="#" className="flex items-center hover:text-gray-300">
            <MdOutlineExplore className="mr-2" /> Explore
          </a>
          <a href="#" className="flex items-center hover:text-gray-300 mb-3">
            <FaStore className="mr-2" /> Store
          </a>
       
        </div>
      )}

      {/* Bottom Section */}
      <div className="sticky top-0 bg-gray-800 text-white shadow-md z-10">
        <div
          className="flex flex-col md:flex-row items-center justify-between px-4 py-4 space-y-4 md:space-y-0"
          data-aos="fade-up"
        >
          <div className="text-lg font-bold">CRANE-M 3S</div>
          <div className="flex flex-wrap justify-center md:space-x-6 space-x-0">
            <a href="#" className="hover:text-gray-300 px-2">
              Overview
            </a>
            <a href="#" className="hover:text-gray-300 px-2">
              Specs
            </a>
            <a href="#" className="hover:text-gray-300 px-2">
              Q&A
            </a>
            <a href="#" className="hover:text-gray-300 px-2">
              See Camera Compatibility
            </a>
            <a href="#" className="hover:text-gray-300 px-2">
              Download
            </a>
          </div>
          <a
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            data-aos="zoom-in"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
}

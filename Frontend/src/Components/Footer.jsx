import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div data-aos="fade-up">
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-400">CRANE Series</a></li>
              <li><a href="#" className="hover:text-slate-400">WEEBILL Series</a></li>
              <li><a href="#" className="hover:text-slate-400">SMOOTH Series</a></li>
              <li><a href="#" className="hover:text-slate-400">FIVERAY Series</a></li>
              <li><a href="#" className="hover:text-slate-400">MOLUS Series</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-semibold mb-4">Where to Buy</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-400">Official Online Stores</a></li>
              <li><a href="#" className="hover:text-slate-400">Authorized Online Stores</a></li>
              <li><a href="#" className="hover:text-slate-400">Retail Stores</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-semibold mb-4">Technical Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-400">Product Support</a></li>
              <li><a href="#" className="hover:text-slate-400">Download</a></li>
              <li><a href="#" className="hover:text-slate-400">Repair Services</a></li>
              <li><a href="#" className="hover:text-slate-400">See Camera Compatibility</a></li>
              <li><a href="#" className="hover:text-slate-400">After-Sales Policies</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-slate-400">About ZHIYUN</a></li>
              <li><a href="#" className="hover:text-slate-400">Newsroom</a></li>
              <li><a href="#" className="hover:text-slate-400">Media Kit</a></li>
              <li><a href="#" className="hover:text-slate-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-slate-400">Feedback</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-semibold mb-4">Subscribe to us</h4>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-md">&gt;</button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="text-sm text-gray-400 text-center md:text-left">
            Guilin Zhishen Information Technology Co., Ltd. © 2015 - 2024 All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Use</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          className="mt-4 flex justify-center space-x-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a href="#" className="text-gray-400 hover:text-white text-xl group">
            <FaFacebookF />
            <span className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Facebook</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl group">
            <FaTwitter />
            <span className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Twitter</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl group">
            <FaInstagram />
            <span className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Instagram</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl group">
            <FaLinkedinIn />
            <span className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">LinkedIn</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl group">
            <FaYoutube />
            <span className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">YouTube</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl group">
            <FaTiktok />
            <span className="absolute left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">TikTok</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

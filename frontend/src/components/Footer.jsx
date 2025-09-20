import React from "react";
import { FaLinkedin, FaBehance, FaDribbble, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-4 ">
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-extralight">YourBrand</h2>
          <p className="mt-4 text-gray-400 max-w-xs">
            Let’s create something amazing together. Reach out anytime to discuss a collaboration or just connect with our team.
          </p>
          <button className="mt-6 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
            CONTACT US →
          </button>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-light mb-4">Our Address</h3>
          <p className="text-gray-400">hello@yourbrand.com</p>
          <p className="text-gray-400 mt-2">+91 98765 43210 (WhatsApp/Telegram)</p>
          <p className="text-gray-400 mt-2">123 Street Name, City, Country</p>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaBehance size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaDribbble size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className=" font-extralight ">
          <h3 className="text-xl font-light mb-4">Navigation</h3>
          <ul className=" space-y-3">
            <li><a href="#" className="hover:text-yellow-500">HOME</a></li>
            <li><a href="#" className="hover:text-yellow-500">WORKS</a></li>
            <li><a href="#" className="hover:text-yellow-500">BLOG</a></li>
            <li><a href="#" className="hover:text-yellow-500">ABOUT US</a></li>
            <li><a href="#" className="hover:text-yellow-500">CONTACT</a></li>
            <li><a href="#" className="hover:text-yellow-500">PORTFOLIO</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

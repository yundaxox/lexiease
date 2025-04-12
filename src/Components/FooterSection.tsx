
import { FaInstagram, FaGlobe, FaYoutube, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Logo from '../assets/LexiEase.svg';

const Footer = () => {
  return (
    <footer className="bg-[#2d3142] text-white px-30 pt-10 pb-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div>
          <a href="/"><img src={Logo} alt="" /></a>
          <p className="text-sm text-white mb-4">
            Making reading accessible for everyone.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-300 mb-4">
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            
            <a href="#"><FaGlobe className="hover:text-white" /></a>
          
            <a href="#"><FaYoutube className="hover:text-white" /></a>
          </div>

          {/* Footer Navigation */}
          <div className="flex space-x-4">
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/features" className="hover:text-gray-300">Features</a>
          <a href="/our-team" className="hover:text-gray-300">Our Team</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          <a href="/faq" className="hover:text-gray-300">FAQ</a>
        </div>

        </div>

        {/* Right Section */}
        <div className="text-sm text-white space-y-2">
          <div className="flex items-start">
            <FaMapMarkerAlt className="mr-2 mt-1" />
            <span>003215 Kathmandu, Putalisadak 03</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>XZY@support.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-500 mt-2 pt-4  text-center text-sm text-white">
        <p>© Copyright 2025, All Rights Reserved by LexiEase</p>
      </div>
    </footer>
  );
};

export default Footer;

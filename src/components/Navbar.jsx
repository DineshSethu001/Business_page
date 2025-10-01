import React, { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  return (
    <nav className="fixed top:0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex justify-between  px-4 sm:px-6 lg:px-8 md:h-20 h-16 items-center ">
        {/* logo */}
        <div className="cursor-pointer flex items-center gap-1">
          <img src={logo} alt="" className="w-14 h-14" />
          <p className="">D - Code</p>
        </div>
        {/* mobile view menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>
        {/* nav items */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              onClick={() => setActiveLink(link.href)}
              href={link.href}
              key={index}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                activeLink === link.href
                  ? "text-blue-600 after:w-full"
                  : "text-gray-600 hover:text-gray-900  "
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/*  */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newletter">Get In Touch</a>
        </button>
        .{" "}
      </div>

      {/* mobile menu items */}

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="space-y-3 mx-auto px-4 container">
            {navLinks.map((link, index) => (
              <a onClick={()=>{
                setActiveLink(link.href)
                setIsMenuOpen(false)
              }} key={index} className={`block text-sm font-medium py-2 ${activeLink === link.href ?"text-blue-600":"text-gray-600 hover:text-gray-900"}`} href={link.href}>
                {link.label}
              </a>
            ))}
             <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newletter">Get In Touch</a>
        </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

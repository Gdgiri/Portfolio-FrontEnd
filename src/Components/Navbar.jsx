import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Button } from "flowbite-react"; // Ensure you have Flowbite installed if you want to use it.

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // State to track the active link

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link state
  };

  const downloadResume = () => {
    // Trigger a download programmatically
    const link = document.createElement("a");
    link.href = "/mern-syllabus.pdf";
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Side - Brand Name */}
        <div className="text-xl font-bold text-gray-800">
          <span className="text-2xl text-red-600">Creative</span>
          <span> Hill</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            onClick={() => handleLinkClick("home")} // Update active link on click
            className={`${
              activeLink === "home" ? "text-red-600 font-bold" : "text-gray-700"
            } hover:text-red-500`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={`${
              activeLink === "about"
                ? "text-red-600 font-bold"
                : "text-gray-700"
            } hover:text-red-500`}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            onClick={() => handleLinkClick("portfolio")}
            className={`${
              activeLink === "portfolio"
                ? "text-red-600 font-bold"
                : "text-gray-700"
            } hover:text-red-500`}
          >
            Portfolio
          </Link>
          <Link
            to="/gallery"
            onClick={() => handleLinkClick("gallery")}
            className={`${
              activeLink === "gallery"
                ? "text-red-600 font-bold"
                : "text-gray-700"
            } hover:text-red-500`}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => handleLinkClick("contact")}
            className={`${
              activeLink === "contact"
                ? "text-red-600 font-bold"
                : "text-gray-700"
            } hover:text-red-500`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side - Download CV Button */}
        <div>
          <Button
            color="failure"
            className="hidden md:block"
            onClick={downloadResume}
          >
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

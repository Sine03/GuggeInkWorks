import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto py-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Address</h2>
            <p>123 Main Street</p>
            <p>City, Country</p>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <p>Social Media Links</p>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

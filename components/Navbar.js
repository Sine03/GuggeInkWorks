import React from "react";
import ScrollButton from "./ScrollButton";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Gugge Inkworks</div>
        <ul className="flex space-x-4">
          <li>
            <ScrollButton targetId="home" label="Hem" />
          </li>
          <li>
            <ScrollButton targetId="kontakt" label="Kontakt" />
          </li>
          <li>
            <ScrollButton targetId="portfolio" label="Portfolio" />
          </li>
          <li>
            <ScrollButton targetId="plats" label="Plats" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Doktorfot</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:underline">
              HEM
            </a>
          </li>
          <li>
            <a href="//tjanster" className="text-white hover:underline">
              TJÄNSTER & PRISER
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              ORTOPEDISK INLÄGG
            </a>
          </li>
          <li>
            <Link href="/Wowb">
              <p className="text-white hover:underline">KONTAKTER</p>
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              BOKA TID
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

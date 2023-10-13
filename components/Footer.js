import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-stone-900 text-white ">
      <div className="container lg:mx-auto py-6 ">
        <div className="flex flex-wrap justify-between items-center mx-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 ">
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <p>Kontakt via instagram</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Plats</h2>
            <p>Lund City</p>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold  ">Follow Me</h2>
            <p>
              Instagram{" "}
              <span className="text-blue-500 flex">
                <a
                  href="https://www.instagram.com/guggeInkworks/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @guggeinkworks
                </a>
              </span>
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <p className="text-center">
          {new Date().getFullYear()} Gugge Inkworks No rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Home = () => {
  const scrollToKontakt = () => {
    const kontaktSection = document.getElementById("kontakt");
    if (kontaktSection) {
      kontaktSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 3; // Number of images per page

  const handleImageClick = (imageIndex) => {
    setSelectedImage(`${imageIndex + 1}.webp`);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const totalPages = Math.ceil(6 / imagesPerPage); // Total number of pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of images to display on the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  return (
    <div>
      <div id="home" className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="/test.mp4"
          type="video/mp4"
        >
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white text-center">
            <h1 className="bg-clip-border p-4 md:p-6 bg-blue-600/0 rounded-2xl text-3xl md:text-6xl font-bold mb-4">
              Hemmagaddar <br /> Abstrakt konst möter rå äkthet.
            </h1>
            <button
              onClick={scrollToKontakt}
              className="bg-blue-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-base md:text-lg hover:bg-blue-700 transition duration-300"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
      <div
        id="kontakt"
        className="bg-black p-4 md:p-8 text-center h-screen flex flex-col justify-center items-center"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-white text-base md:text-xl">
            <div className="flex mb-2 md:mb-4 justify-center">
              <span className="font-bold  text-3xl md:text-4xl">
                Blod, svett och bläck
              </span>
            </div>
            <br />
            Själva essensen av individualitet och kreativitet. En underground
            rörelse där individer väljer hemmagjorda tatueringar för att bryta
            normer och vill använda sin kropp som canvas. Välkommen till en
            subkultur där tatueringar blir konstverk och uttryck aldrig bleknar.
            <p className="my-6">
              <a
                href="https://www.instagram.com/guggeInkworks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Kontakt:
                <span className="text-blue-500 flex justify-center text-2xl">
                  @guggeinkworks
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div id="portfolio">
        <div className="bg-black p-4 md:p-8 text-center min-h-screen flex flex-col justify-center items-center overflow-y-auto">
          <div className="container mx-auto">
            <div className="text-white text-base md:text-xl">
              <div className="flex mb-4 justify-center">
                <span className="font-bold text-3xl md:text-4xl">
                  Portfolio
                </span>
              </div>
              {/* Start of Portfolio Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 9 }, (_, index) => (
                  <div
                    key={index}
                    className="bg-black p-2 md:p-4 rounded-lg shadow-md cursor-pointer"
                    onClick={() => handleImageClick(index)}
                  >
                    <Image
                      src={`/${index + 1}.webp`}
                      alt={`Portfolio Item ${index + 1}`}
                      width={600}
                      height={400}
                      layout="responsive"
                    />
                  </div>
                ))}
              </div>
              {/* End of Portfolio Items */}
            </div>
          </div>
          {selectedImage && (
            <div
              className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-80"
              onClick={handleCloseImage}
            >
              <div className="bg-black bg-opacity-90 p-4 rounded-lg shadow-md">
                <Image
                  src={`/${selectedImage}`}
                  alt="Selected Portfolio Item"
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        id="plats"
        className="bg-black p-4 md:p-8 text-center h-screen flex flex-col justify-center items-center"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-white text-base md:text-lg">
            <span className="font-bold text-3xl md:text-4xl">
              Du hittar oss här!
            </span>
            <br />
            <div className="mt-4 md:mt-8 flex justify-center">
              <iframe
                title="Business Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d562.0337266217925!2d13.190653928601622!3d55.70402675397923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTXCsDQyJzE0LjUiTiAxM8KwMTEnMjguNyJF!5e0!3m2!1ssv!2sse!4v1693575800390!5m2!1ssv!2sse"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <p className="text-white mt-2 md:mt-4 text-base md:text-lg">
            Ni hittar mig i centrala Lund, hör av er via Instagram för exakt
            plats. Välkommen!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

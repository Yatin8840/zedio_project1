import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true); // Loader state
  const [isVisible, setIsVisible] = useState(false); // Hero content visibility
  const [isLoaded, setIsLoaded] = useState(false); // Image load state

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoaderVisible(false);
      setIsVisible(true); // Show hero content after loader is gone
    }, 1000);

    return () => clearTimeout(loaderTimer); // Cleanup timer on unmount
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const cardData = [
    {
      title: "3+ Years Experience",
      description:
        "Over 3 years of expertise delivering unparalleled solutions and insights for your success",
      image: "./card-image-1.png",
    },
    {
      title: "Dedicated Members",
      description:
        "Passionate team members dedicated to exceeding expectations and achieving mutual success",
      image: "./card-image-2.png",
    },
    {
      title: "Valuable Supports",
      description:
        "Tailored support and guidance ensuring reliability and innovation every step of the way",
      image: "./card-image-3.png",
    },
  ];

  return (
    <div>
      {/* Full Page Loader */}
      {isLoaderVisible && (
        <div className="full-loader">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot" style={{ animationDelay: "0.2s" }}></div>
            <div className="dot" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      {!isLoaderVisible && (
        <div
          className="relative bg-center bg-cover h-[500px] sm:h-[400px] md:h-[600px] lg:h-[700px] z-[-1]"
          style={{
            backgroundImage:
              "url('https://www.microsoft.com/en-us/research/uploads/prod/2023/03/AI_Microsoft_Research_Header_1920x720.png')",
          }}
        >
          <div
            className={`absolute top-[42%] left-[8%] transform -translate-y-1/2 pl-2 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-5 opacity-0"
            } transition-transform duration-700`}
          >
            <h1 className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-2xl">
              SOFTWARE DEVELOPMENT & CONSULTANCY
            </h1>
            <br />
            <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans">
              BUSINESS INNOVATION
            </p>
            <br />
            <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans">
              THROUGH TECHNOLOGY
            </p>
            <br />
            <p className="text-gray-300 text-base sm:text-lg md:text-xl">
              Leading Business Evolution with Tailored and{" "}
              <p>Innovative Software Solutions for Sustainable Growth</p>
            </p>
            <br /> <br />
            <div className="space-x-4 hover:bg-transparent">
              <button className="btn-slide-bg border-blue-600 mb-2 bg-blue-600 rounded px-6 py-2 cursor-pointer hover:bg-transparent">
                Let's Talk &nbsp; →
              </button>
              <button className="btn-slide-bg border-blue-600 mb-2 bg-blue-600 rounded px-4 py-2 space-x-2 cursor-pointer">
                Read More &nbsp; →
              </button>
            </div>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] flex space-x-4">
            <img
              src="./hero-shape.png"
              alt="shape"
              className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] animate-slow-spin"
            />
            <img
              src="./hero-thumb.png"
              alt="boy"
              onLoad={handleImageLoad} // Call handleImageLoad when image loads
              className={`${
                isLoaded
                  ? "transition-all duration-1000 ease-in-out filter-none"
                  : "filter blur-lg"
              }`}
            />
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
      {/* Card Section */}
      <div className="card-stack-container">
        {cardData.map((card, index) => (
          <div className="card" id={`card${index + 1}`} key={index}>
            <img
              src={card.image}
              alt={card.title} // Add alt text for accessibility
              className="card-image" // Add a class for styling (if needed)
            />
            <h1 className="font-bold">{card.title}</h1>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Hero;

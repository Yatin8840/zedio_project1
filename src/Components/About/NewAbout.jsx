import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import AboutTeam from "../Team/AboutTeam";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

function About() {
  const videoRef = useRef(null);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
  const { theme } = useContext(ThemeContext);

  const cardData = [
    {
      title: "Business Growth",
      description:
        "Boost your business with strategies to reach new markets, optimize operations, and increase profits.",
      imgSrc: "https://zidio.in/assets/images/home-3/feature-icon-1.png",
    },
    {
      title: "eCommerce",
      description:
        "Enhance your online presence with user-friendly eCommerce solutions and secure payment gateways.",
      imgSrc: "https://zidio.in/assets/images/home-3/feature-icon-2.png",
    },
    {
      title: "Secure Database",
      description:
        "Safeguard your data with robust security measures and industry-standard compliance.",
      imgSrc: "https://zidio.in/assets/images/home-3/feature-icon-3.png",
    },
    {
      title: "Audience Growth",
      description:
        "Expand your reach by connecting with your target audience to drive visibility and growth.",
      imgSrc: "https://zidio.in/assets/images/home-3/feature-icon-4.png",
    },
  ];

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1000);

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div>
      {isLoaderVisible && (
        <div className="full-loader">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot" style={{ animationDelay: "0.2s" }}></div>
            <div className="dot" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      )}

      <div className="relative h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="3255275-uhd_3840_2160_25fps.mp4" 
          muted
          loop
          autoPlay
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
        <div className="relative z-10 px-4">
          <p className="text-white text-lg uppercase tracking-wide mb-4">
            Innovative Digital Solutions
          </p>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transforming Ideas into <br /> Reality
          </h1>

          <p className="text-gray-300 max-w-2xl mb-6">
            At Zidio Development, we merge technology and creativity to deliver
            bespoke software and applications that empower businesses worldwide.
          </p>

          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Get Started &rarr;
          </button>
        </div>
      </div>

      <div className="my-12 px-4">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Change to 1 for small screens
          spaceBetween={10} 
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 1000, 
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} 
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          speed={1200}
        >
          {cardData.map((card, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
              onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            >
              <div
                className={`rounded-3xl p-4 mx-auto h-[400px] relative flex flex-col items-center justify-center ${
                  theme === "light"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                } transition duration-300 ease-in-out transform hover:outline hover:outline-cyan-500 hover:outline-4`}
              >
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className={`absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] ${
                    theme === "light" ? "filter invert" : "filter"
                  }`} 
                />
                <h2 className="text-lg font-bold mt-8">{card.title}</h2>
                <br />
                <p className="text-sm">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative h-[80vh] flex justify-center items-center">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="853789-hd_1920_1080_25fps.mp4"
          muted
          loop
          autoPlay
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 z-10 gap-10 p-4">
          <div></div>
          <div>
            <p className="text-white text-lg mt-4">
              Software Development & Consultancy
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-8">
              Who we are and <br /> What we do?
            </h1>
            <p className="text-white text-md mb-8">
              Welcome to Zidio Development Pvt. Ltd. We are a trailblazing
              software development company where innovation meets expertise. Our
              team of skilled developers and creative thinkers specializes in
              turning complex ideas into user-friendly digital solutions. From
              custom software to cutting-edge mobile apps, we're dedicated to
              engineering excellence and pushing the boundaries of technology.
              At Zidio, we believe in the power of collaboration, continuous
              learning, and adapting to the ever-evolving digital landscape.
              We're not just developers; we're visionaries committed to
              delivering impactful software solutions that drive success for
              businesses globally. Stay connected with us for insights into our
              groundbreaking projects, tech trends, career opportunities, and
              our journey in shaping the future of technology.
            </p>
            <div className="flex flex-col md:flex-row items-center text-white space-y-4 md:space-y-0 md:space-x-4 mt-10">
              <div className="flex flex-col justify-center">
                <h1 className="mb-2">
                  <span className="mr-2">&#10003;</span>Company and Research
                </h1>
                <h1>
                  <span className="mr-2">&#10003;</span>Business and Research
                </h1>
              </div>

              {/* Center this div vertically */}
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 border-4 border-blue-500 rounded-full flex items-center justify-center text-white p-2">
                  <h1 className="text-xl">100%</h1>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="mb-2">Business Solution</h1>
                <h1>Level is high</h1>
              </div>
            </div>

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              More About &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-black text-white py-24 px-4 lg:px-44">
        <div className="w-full max-w-screen-md mb-12 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg">
            Meet our team of dedicated professionals committed to delivering
            excellence and innovation in every project we undertake.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Explore Team
          </button>
        </div>
      </div>

      <AboutTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default About;

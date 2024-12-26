import React, { useContext, useEffect, useState, useRef } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Footer from "../Footer/Footer";
import "./Services.css";

function Services() {
  const { theme } = useContext(ThemeContext);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const swiperRef = useRef(null);

  // Add this line to declare and initialize activeContent
  const [activeContent, setActiveContent] = useState("content1");

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoaderVisible(false);
    }, 1000);

    return () => clearTimeout(loaderTimer);
  }, []);

  const services = [
    {
      title: "Cloud Services",
      description:
        "Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-1.png",
    },
    {
      title: "IT Management ",
      description:
        "Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-2.png",
    },
    {
      title: "Software Renew",
      description:
        "Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-3.png",
    },
    {
      title: "Machine Learning",
      description:
        "Develop and implement machine learning models to automate processes and drive intelligent decision-making.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-4.png",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-5.png",
    },
    {
      title: "Web Development",
      description:
        "Design and build responsive, high-performance websites using the latest web technologies.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-6.png",
    },
    {
      title: "Cyber Security",
      description:
        "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-7.png",
    },
    {
      title: "Data Analytic",
      description:
        "Transform raw data into valuable insights, enabling informed and strategic business decisions.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-8.png",
    },
  ];

  const contentData = {
    content1:
      "Develop, maintain, and enhance websites with a focus on performance, scalability, and user experience. You'll work with modern web technologies to build responsive and dynamic web applications.",
    content2:
      "Design intuitive and visually appealing user interfaces that provide a seamless user experience. You'll create wireframes, prototypes, and high-fidelity designs that align with user needs and business goals.",
    content3:
      "Analyze complex datasets to uncover insights and drive data-driven decisions. You'll build predictive models, perform statistical analyses, and work with machine learning algorithms to solve business challenges",
    content4:
      "Design and develop mobile applications for iOS and Android platforms. You'll work with cross-functional teams to deliver apps that are user-friendly, performant, and aligned with business objectives.",
  };
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
      <div className="relative bg-center bg-cover h-[500px] sm:h-[400px] md:h-[600px] lg:h-[700px] z-[-1]">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="8865877-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <h1 className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-orange-200 font-extrabold text-5xl shadow-lg z-10 bg-black bg-opacity-50 rounded-lg p-2">
          Our Services
        </h1>
        <div className="w-[230px] h-[50px] border ml-24 justify-center flex items-center text-white font-sans-serif space-x-4 rounded-md z-10">
          <span>Home</span>
          <span>{">"}</span>
          <span>Services</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="relative z-10 text-white font-normal text-center">
        <h4
          className={`text-center ${
            theme === "light" ? "text-blue-700" : "text-white"
          }`}
        >
          What We Provides?
        </h4>
        <br />
        <h4
          className={`text-center ${
            theme === "light" ? "text-black" : "text-blue-600"
          } font-extrabold text-[52px]`}
        >
          Provide Interactive IT Solution & Business Services
        </h4>

        <div className="my-12">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
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
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
            speed={1200}
          >
            {services.map((service, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
              >
                <div
                  className={`rounded-3xl p-6 max-w-sm mx-auto h-[500px] relative flex flex-col items-center justify-center ${
                    theme === "light"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  } transition duration-300 ease-in-out transform hover:outline hover:outline-cyan-500 hover:outline-4`}
                >
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px]"
                  />
                  <h2 className="text-xl font-bold mt-10">{service.title}</h2>
                  <br />
                  <p>{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-black text-white text-center">
        <h1 className="text-4xl pt-11 pb-20">
          {" "}
          {/* Reduced padding */}
          Inspire and Get <span className="text-blue-700">Inspired</span> by
          Professional Experts
        </h1>
      </div>
      <div className="flex bg-black text-white min-h-90vh space-x-8 pl-10">
        {" "}
        {/* Removed pb-10 */}
        {/* Left Side with Semi-Circle and List */}
        <div className="w-1/2  relative flex justify-center items-center ml-32">
          {/* Rotated Semi-circle */}
          <span className="border-4 border-blue-700 rounded-t-full w-[230px] h-[115px] rotate-90 border-b-0 flex justify-center absolute left-[-50px]">
            <div className="relative flex justify-center">
              {/* List Items aligned along the curve */}
              <ul className="absolute top-[-150px] text-gray-400 mb-10 w-full flex flex-col items-center rotate-[-90deg] space-y-8">
                {" "}
                {/* Added space-y-8 */}
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-10"
                  onMouseEnter={() => setActiveContent("content1")}
                >
                  Web Developer
                </li>
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-28"
                  onMouseEnter={() => setActiveContent("content2")}
                >
                  UI/UX Designer
                </li>
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-52"
                  onMouseEnter={() => setActiveContent("content3")}
                >
                  Data Science & Analytics
                </li>
                <li
                  className="text-2xl cursor-pointer hover:text-white whitespace-nowrap ml-28"
                  onMouseEnter={() => setActiveContent("content4")}
                >
                  Mobile App Developer
                </li>
              </ul>
            </div>
          </span>
        </div>
        {/* Right Side Content */}
        <div className="w-1/2 p-6 flex flex-col justify-center items-start">
          {/* Conditional Content for Each List Item */}
          {activeContent === "content1" && (
            <div className="flex justify-center mb-2">
              {" "}
              {/* Reduced mb-4 to mb-2 */}
              <img
                src="nik-73_kRzs9sqo-unsplash.jpg"
                alt="Web Developer"
                className="w-96 h-64 object-cover rounded-xl mb-2"
              />
            </div>
          )}
          {activeContent === "content2" && (
            <div className="flex justify-center mb-2">
              <img
                src="Screenshot 2024-10-02 103843.png"
                alt="UI/UX Designer"
                className="w-96 h-64 object-cover rounded-xl mb-2"
              />
            </div>
          )}
          {activeContent === "content3" && (
            <div className="flex justify-center mb-2">
              <img
                src="nik-73_kRzs9sqo-unsplash.jpg"
                alt="Data Science & Analytics"
                className="w-96 h-64 object-cover rounded-xl mb-2"
              />
            </div>
          )}
          {activeContent === "content4" && (
            <div className="flex justify-center mb-2">
              <img
                src="Screenshot 2024-10-02 103843.png"
                alt="Mobile App Developer"
                className="w-96 h-64 object-cover rounded-xl mb-2"
              />
            </div>
          )}
          <div className="flex justify-center">
            <p className="bg-gray-700 p-2 text-sm rounded-2xl mr-5">Internship</p>
            <p className="bg-gray-700 p-2 text-sm rounded-2xl">Remote</p>
          </div>
          <p className="mt-2">{contentData[activeContent]}</p>

          <button className="mt-6 bg-blue-700 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 transition-colors duration-300">
            Apply Now &rarr;
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;

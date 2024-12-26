import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Sample team members data
const teammembers = [
  {
    name: "Animesh Singh",
    position: "Full Stack Web Developer",
    imgSrc: "https://zidio.in/assets/images/team/animesh.jpg",
  },
  {
    name: "Harsh Das",
    position: "Developer Team Lead",
    imgSrc: "https://zidio.in/assets/images/team/harash.jpg",
  },
  {
    name: "Pitabas Pradhan",
    position: "HR Manager",
    imgSrc: "https://zidio.in/assets/images/team/final-pitabas.jpg",
  },
  {
    name: "Chandan Mishra",
    position: "Data Scientist",
    imgSrc: "https://zidio.in/assets/images/team/chandan.png",
  },
  {
    name: "Salma Husain Salsabila",
    position: "Developer Team Lead",
    imgSrc: "https://zidio.in/assets/images/team/salama.JPG",
  },
];

const AboutTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="bg-gray-300 dark:bg-gray-800 p-8 transition-colors duration-300 px-4 md:px-8 lg:px-16 pt-20">
      <div className="flex flex-col md:flex-row content-center mb-20">
        <h1 className="text-3xl md:text-5xl mb-4 md:mb-0 md:mr-32">
          Meet Our Dedicated Members
          <br />
          For Any Enquiry
        </h1>
        {/* Align button to the right side */}
        <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          All Members &rarr;
        </button>
      </div>

      <div>
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} // Default for small screens
          spaceBetween={10} // Space between slides for small screens
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          speed={1200}
        >
          {teammembers.map((team, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
              onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
            >
              {/* Card Container */}
              <div className="relative group bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-900 rounded-lg shadow-md overflow-hidden max-w-xs mx-auto transition-colors duration-300">
                {/* Image */}
                <div className="team-thumb">
                  <img
                    src={team.imgSrc}
                    alt={team.name}
                    className="w-80 h-80 object-cover"
                  />
                </div>
                {/* Team Member Info */}
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold">{team.name}</h4>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">{team.position}</p>
                </div>
                
                {/* Social Media Icons */}
                <div className="team-social-icon-box absolute inset-0 bg-blue-200 bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  <ul className="flex space-x-5 text-3xl"> {/* Increased icon size */}
                    <li>
                      <a href="#" className="text-blue-500">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-400">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-blue-600">
                      <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-pink-500">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutTeam;

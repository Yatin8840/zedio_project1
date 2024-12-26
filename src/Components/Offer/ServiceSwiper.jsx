import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; 
import { Pagination, EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import { ThemeContext } from "../../ThemeContext";

function ServiceSwiper() {
  const { theme } = useContext(ThemeContext);

  const services = [
    { title: "Cloud Services", description: "Deliver scalable cloud solutions...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-1.png" },
    { title: "IT Management", description: "Provide comprehensive IT infrastructure management...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-2.png" },
    { title: "Software Renew", description: "Manage and streamline software renewals...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-3.png" },
    { title: "Machine Learning", description: "Develop and implement machine learning models...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-4.png" },
    { title: "Digital Marketing", description: "Boost your online presence with tailored digital strategies...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-5.png" },
    { title: "Web Development", description: "Design and build responsive websites...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-6.png" },
    { title: "Cyber Security", description: "Safeguard your digital assets with robust solutions...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-7.png" },
    { title: "Data Analytic", description: "Transform raw data into valuable insights...", imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-8.png" },
  ];

  return (
    <div className="my-12">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // Default view for small screens
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        speed={1200}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className={`rounded-lg shadow-lg p-6 max-w-xs mx-auto h-[400px] relative flex flex-col items-center justify-center ${
                theme === "light"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-black"
              }`}
            >
              <div
                className="absolute top-2 right-2 rounded-full w-[40px] h-[40px] flex items-center justify-center"
                style={{ backgroundColor: "#E6EEFB", color: "blue" }}
              >
                {index + 1}
              </div>

              <img
                src={service.imgSrc}
                alt={service.title}
                className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[60px] h-[60px]"
              />
              <h2 className="text-lg md:text-xl font-bold mt-16">{service.title}</h2>
              <p className="text-center mt-2 text-sm md:text-base">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ServiceSwiper;

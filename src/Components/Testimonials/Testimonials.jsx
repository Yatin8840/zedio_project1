import React, { useContext } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules"; 
import { ThemeContext } from "../../ThemeContext"; // 
const reviews = [
  {
    name: "Sonika Bibi",
    image: "https://zidio.in/assets/images/home-2/pintu.jpeg",
    position: "UI Designer",
    review:
      "Completely extend leveraged customer service rather than performance based imperatives. Magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology.",
  },
  {
    name: "Jhon D. Alexon",
    position: "UI Designer",
    image: "https://zidio.in/assets/images/home-2/SaveInsta.App_452075928_18239507287281300_4779034483683661459_n.jpg",
    review:
      "Completely extend leveraged customer service rather than performance based imperatives. Magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology.",
  },
  {
    name: "Tomar Amar Nani",
    position: "UI Designer",
    image: "https://zidio.in/assets/images/home-2/Dave_s_Music_400x400.jpg",
    review:
      "Completely extend leveraged customer service rather than performance based imperatives. Magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology.",
  },
  {
    name: "Tomar Amar Nana",
    position: "UI Designer",
    image: "https://zidio.in/assets/images/home-2/JnZPX-PG_400x400.jpg",
    review:
      "Completely extend leveraged customer service rather than performance based imperatives. Magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology.",
  },
];

const Testimonials = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-gray-200 text-black"
      } py-12 pt-36 transition duration-300`}
    >
      <h2 className="text-center text-3xl font-bold mb-20">What Our Clients Say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} 
        autoplay={{ delay: 3000 }} 
        modules={[Autoplay, Navigation]}
        loop={true} 
        className="w-full max-w-4xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-full w-36 h-36 mb-10"
              />
              <p className="max-w-2xl italic mb-8">"{review.review}"</p>
              <h4 className="text-lg font-semibold mb-4">{review.name}</h4>
              <p className="max-w-2xl italic mb-4">{review.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

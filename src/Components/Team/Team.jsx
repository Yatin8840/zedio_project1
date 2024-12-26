import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const teammembers = [
  {
    name: "Animesh Singh",
    position: "Full Stack Web Developer",
    imgSrc: "https://zidio.in/assets/images/team/animesh.jpg",
  },
  {
    name: "Salma Husain Salsabila",
    position: "UI/UX Designer",
    imgSrc: "https://zidio.in/assets/images/team/salama.JPG",
  },
  {
    name: "Chandan Mishra",
    position: "Data Scientist",
    imgSrc: "https://zidio.in/assets/images/team/chandan.png",
  },
  {
    name: "Harsha Das",
    position: "Developer Team Lead",
    imgSrc: "https://zidio.in/assets/images/team/harash.jpg",
  },
];

function Team() {
  return (
    <div className="relative">
      <div className="relative w-full h-[800px]">
        <img
          src="https://zidio.in/assets/images/team/team-bg.jpg"
          alt="Team Background"
          className="w-full h-full object-cover"
        />

        <span className="absolute top-10 left-1/2 transform -translate-x-1/2 text-black text-center font-semibold text-4xl md:text-5xl">
          Meet the Dedicated Team
        </span>

        <div className="flex items-center text-blue-600 absolute top-28 left-1/2 transform -translate-x-1/2 text-center font-semibold text-lg md:text-xl space-x-4">
          <Link to="/contact">
            <img
              src="https://ausdroid.net/wp-content/uploads/2017/05/contacts.png"
              alt="Contact Icon"
              className="w-[50px] h-[50px]"
            />
          </Link>
          <span>for any Query</span><br /><br />
        </div>
        <br /><br />

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 mt-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teammembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative group bg-white rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 shadow-lg">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={member.imgSrc}
                      alt={`Image of ${member.name}, ${member.position}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Content */}
                  <div className="absolute inset-0 bg-blue-500 bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <h3 className="text-white text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-white text-lg">{member.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Team;

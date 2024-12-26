import React from 'react';
import ServiceSwiper from './ServiceSwiper';

function Offer() {
  return (
    <div className="relative">
      <img
        src="https://zidio.in/assets/images/home-2/service-bg.png"
        alt="Background"
        className="w-full h-auto"
      />
      
      {/* IT Support For Business */}
      <span className='absolute left-1/2 transform -translate-x-1/2 top-1/3 text-white text-center font-semibold text-[20px] md:text-[30px] lg:text-[40px]'>
        IT Support For Business
      </span>

      {/* What We Are Offering */}
      <span className='absolute left-1/2 transform -translate-x-1/2 top-1/2 text-blue-700 text-center font-bold text-[30px] md:text-[40px] lg:text-[60px]'>
        What We Are Offering
      </span>

      <ServiceSwiper />
    </div>
  );
}

export default Offer;

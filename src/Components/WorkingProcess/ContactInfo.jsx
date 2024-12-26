import React from 'react';
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="flex justify-center space-x-40">
      <div className="contact-info-container flex p-6 bg-gray-100 rounded-md space-x-5 items-center text-blue-600 w-[250px]">
        <FaPhone />
        <div className="contact-info-content ml-7 items-center">
          <p className="text-gray-700 font-semibold text-center items-center">Call Us Anytime</p>
          <p className="text-blue-800 font-bold">+918455807965</p>
        </div>
      </div>
      <div className="contact-info-container flex items-center p-4 bg-gray-100 rounded-md space-x-7 text-blue-600 w-[250px]">
        <FaEnvelope />
        <div className="contact-info-content ml-2">
          <p className="text-gray-700 font-semibold">Send Email</p>
          <p className="text-blue-800 font-bold">support@zidio.in</p>
        </div>
      </div>
      <div className="contact-info-container flex items-center p-4 bg-gray-100 rounded-md space-x-7 text-blue-700 w-[250px]">
        <FaClock />
        <div className="contact-info-content ml-2">
          <p className="text-gray-700 font-semibold">Opening Hours</p>
          <p className="text-blue-800 font-bold">Mon-Fri (9:00 - 5:30)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

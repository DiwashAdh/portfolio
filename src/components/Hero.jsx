import profile from '../assets/B23ED550-D02A-4C77-A1E8-7B3EF63B8AB1_1_201_a.jpeg';
import profile2 from "../assets/IMG_1669.jpeg"
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

export default function Hero() {

  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
      const profileTimer = setTimeout(() => {
        setShowProfile(true);
      }, 100); // Delay before name animation starts

      const nameTimer = setTimeout(() => {
          setShowName(true);
      }, 200); // Delay before name animation starts

      const titleTimer = setTimeout(() => {
          setShowTitle(true);
      }, 300); // Delay before title animation starts

      const contactTimer = setTimeout(() => {
        setShowContact(true);
      }, 400); // Delay before title animation starts

      const statusTimer = setTimeout(() => {
          setShowStatus(true);
      }, 500); // Delay before status animation starts

      return () => {
          clearTimeout(profileTimer);
          clearTimeout(nameTimer);
          clearTimeout(titleTimer);
          clearTimeout(statusTimer);
          clearTimeout(contactTimer);
      }; // Cleanup
  }, []);

  return (

    <div className="text-back-700 flex flex-col items-center justify-center pt-28">


      {/* Profile Image */}
      <div className="relative mb-10">
        <img
          className={`rounded-full w-28 h-28 object-cover shadow-lg ${showProfile ? 'slide-up' : 'opacity-0'}`}
          src={profile}
          alt="Profile"
        />
      </div>

      {/* Name and Title */}
      <div className="text-center">
                <h1 className={`font-serif text-6xl font-light ${showName ? 'slide-up' : 'opacity-0'}`}>Diwash Adhikari</h1>
                <p className={`text-lg text-gray-700 ${showTitle ? 'slide-up' : 'opacity-0'}`}>Full-Stack & Robotics </p>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-center mt-4">
                <p className={`text-center text-lg text-gray-500 ${showStatus ? 'slide-up' : 'opacity-0'}`}>
                    Over three years of experience building exceptional <br />
                    websites and robotics
                </p>
            </div>


      {/* Social Media Icons
      <div className="flex space-x-6 mt-6">
        <FaTwitter className="text-2xl hover:text-gray-400 cursor-pointer" />
        <FaGithub className="text-2xl hover:text-gray-400 cursor-pointer" />
        <FaLinkedin className="text-2xl hover:text-gray-400 cursor-pointer" />
        <FaEnvelope className="text-2xl hover:text-gray-400 cursor-pointer" />
      </div> */}

      {/* Call-to-Action Buttons */}
      <div className="flex mt-6 space-x-6">
      <div className={`${showContact ? 'slide-in-left' : 'opacity-0'}`}>
        <button className={`bg-gray-700 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-2xl transition duration-300 `}>
          Contact me
        </button>
      </div>

      <div className={`${showContact ? 'slide-in-right' : 'opacity-0'}`}>
        <button className={`bg-white text-gray-600 py-2 px-4 rounded-full shadow-lg hover:shadow-2xl transition duration-300 `}>
          Copy email
        </button>
      </div>
      </div>

    </div>
  );
}

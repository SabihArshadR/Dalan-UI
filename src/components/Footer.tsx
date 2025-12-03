"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaBehance,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import Logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#202020] text-gray-300 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-3 gap-14">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="-ml-1">
              <Image src={Logo} alt="logo" />
            </div>
          </div>
          <p className="text-gray-400 leading-6">
            Loren ipsum dolor consectetur adipiscing elit sed do eiusmod tempor
            incididunt know you labore et dolore magna aliqua consectetur
            adipiscing. Loren ipsum dolor consectetur adipiscing elit sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex space-x-5 text-gray-400 text-lg mt-6">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaBehance className="hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-white tracking-wider text-lg mb-6">
            LATEST POST
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>
              Loren ipsum dolor consectetur elito
              <div className="border-b border-gray-700 mt-2" />
            </li>

            <li>
              Loren ipsum dolor consectetur elito
              <div className="border-b border-gray-700 mt-2" />
            </li>

            <li>Loren ipsum dolor consectetur elito</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white tracking-wider text-lg mb-6">
            CONTACT INFO
          </h3>

          <ul className="space-y-5 text-gray-400">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-500" />
              <span>Call Us 0 (245) 378-6748</span>
            </li>

            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-500" />
              <span>info@mail.com</span>
            </li>

            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span>California, USA</span>
            </li>

            <li className="flex items-center space-x-3">
              <FaClock className="text-yellow-500" />
              <span>Monday - Friday 9am - 6 pm</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 border-t border-gray-700"></div>

      <div className="max-w-[1400px] mx-auto px-6 mt-8 flex items-center justify-between text-sm">
        <p className="text-gray-400">
          {new Date().getFullYear()} © Copyright Dalan. All rights reserved.
        </p>

        <a href="#" className="text-yellow-500 cursor-pointer tracking-widest">
          GO TOP
        </a>
      </div>
    </footer>
  );
}

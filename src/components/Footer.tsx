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
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#202020] text-[#BABABA] pb-10 font-roboto lg:px-[250px]">
      <div className=" mx-auto px-6 lg:flex lg:grid-cols-2 lg:gap- gap-14">
        <div>
          <div className="flex items-center space-x-3">
            <div className="-ml-1">
              <Image src={Logo} alt="logo" className="w-[100px] h-[100px] mt-3 object-cover"/>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col space-y-3 text-[#BABABA] text-lg mt-6">
              <FaFacebookF className="hover:text-white cursor-pointer w-[8px] h-[15px]" />
              <FaTwitter className="hover:text-white cursor-pointer w-[14px] h-[15px]" />
              <FaBehance className="hover:text-white cursor-pointer w-[17px] h-[15px]" />
            </div>
            <div>
              <p className="text-[#BABABA] max-w-[511px] text-sm leading-6 mt-5">
                Loren ipsum dolor consectetur adipiscing elit sed do eiusmod
                tempor incididunt know you labore et dolore magna aliqua
                consectetur adipiscing. Loren ipsum dolor consectetur adipiscing
                elit sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:ml-14 pt-10">
          <div>
            <h3 className="text-white tracking-wider text-[22px] mb-6">
              LATEST POST
            </h3>

            <ul className="space-y-4 text-[#BABABA] text-sm">
              <li>
                Loren ipsum dolor consectetur elito
                <div className="border-b border-dashed border-[#454545] mt-2" />
              </li>

              <li>
                Loren ipsum dolor consectetur elito
                <div className="border-b border-dashed border-[#454545] mt-2" />
              </li>

              <li>Loren ipsum dolor consectetur elito</li>
            </ul>
          </div>
          <div className="lg:ml-14">
            <h3 className="text-white tracking-wider text-[22px] mb-6">
              CONTACT INFO
            </h3>

            <ul className="space-y-4 text-[#BABABA] text-[15px]">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="" />
                <span>Call Us 0 (245) 378-6748</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="" />
                <span>info@mail.com</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="" />
                <span>California, USA</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaClock className="" />
                <span>Monday - Friday 9am - 6 pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mt-16 border-t  border-[#2F2929]"></div>

      <div className="max-w-[1320px] px-6 mt-8 flex items-center justify-between text-sm">
        <p className="text-[#BABABA] text-[13px]">
          {new Date().getFullYear()} © Copyright Dalan. All rights reserved.
        </p>

        <a
          href="#"
          className="text-blue cursor-pointer tracking-widest text-[11px]"
        >
          GO TOP
        </a>
      </div>
    </footer>
  );
}

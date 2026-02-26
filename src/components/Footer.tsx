"use client";

import Image from "next/image";
import {
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
              <Image src={Logo} alt="logo" className="w-[150px] h-[150px] mt-3 object-contain translate-y-[-27px] translate-x-[-50px]"/>
            </div>
          </div>
          <p className="text-[#BABABA] max-w-[511px] text-sm leading-6 mt-5">
            JES is a premier EPCC contractor in Pakistan and Qatar for oil, gas, and chemical process industries. We deliver turnkey solutions with one-point control for civil, mechanical, and E&I since 2009.
          </p>
        </div>
        <div className="lg:flex lg:ml-14 pt-10">
          <div>
            <h3 className="text-white tracking-wider text-[22px] mb-6">
              LATEST POST
            </h3>

            <ul className="space-y-4 text-[#BABABA] text-sm">
              <li>
                EPCC and industrial project updates
                <div className="border-b border-dashed border-[#454545] mt-2" />
              </li>

              <li>
                Gas plants and pipeline projects
                <div className="border-b border-dashed border-[#454545] mt-2" />
              </li>

              <li>Quality and HSE at JES</li>
            </ul>
          </div>
          <div className="lg:ml-14">
            <h3 className="text-white tracking-wider text-[22px] mb-6">
              CONTACT INFO
            </h3>

            <ul className="space-y-4 text-[#BABABA] text-[15px]">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="" />
                <span>Contact JES for enquiries</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="" />
                <span>info@jes.com.pk</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="" />
                <span>Karachi, Pakistan — Lahore, Islamabad, Sadiqabad</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaClock className="" />
                <span>Monday - Friday 8:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mt-16 border-t  border-[#2F2929]"></div>

      <div className="max-w-[1320px] px-6 mt-8 flex items-center justify-between text-sm">
        <p className="text-[#BABABA] text-[13px]">
          {new Date().getFullYear()} © Copyright JES. All rights reserved.
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

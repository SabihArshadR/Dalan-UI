"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
  FaShoppingCart,
  FaCog,
  FaArrowDown,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-[#262424] text-gray-300 text-sm lg:block hidden">
        <div className="mx-[315px] h-[42.5px] flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <FaFacebookF className="text-white cursor-pointer w-[8px] h-[14px]" />
            <FaTwitter className="text-white cursor-pointer w-[13px] h-[14px]" />
            <FaLinkedinIn className="text-white cursor-pointer w-[12px] h-[14px]" />
            <FaGooglePlusG className="text-white cursor-pointer w-[18px] h-[14px]" />
          </div>
          <div className="flex items-center space-x-6 text-sm font-roboto text-[#e0e0e0]">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-[14px] h-[14px]" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="w-[11px] h-[14px]" />
              <span>+234 567 234 875</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-[14px] h-[14px]" />
              <span>Mon-Fri: 8:00 - 16:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#262424] relative border-b border-white">
        {/* <div className="absolute left-0 top-0 bottom-0 w-[550px] bg-[#FFBC13] skew-x-45"></div> */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[600px] h-[73px] bg-white
    [clip-path:polygon(0_0,85%_0,100%_100%,0_100%)]"
        >
          <div className="flex lg:justify-end">
            <Image src={Logo} alt="logo" className="mr-44 object-cover h-[70px] w-[110px]" />
          </div>
        </div>

        <div className="relative h-[72px] flex items-center ml-[400px] gap-64 font-[10px] font-roboto tracking-[1px] leading-px">
          <div className="flex items-center space-x-3 z-10">
            <div className="-ml-1"></div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <nav className="hidden md:flex items-center space-x-10 text-white text-[13px] font-semibold">
                <a
                  className="text-green cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  HOME
                </a>
                {/* <div className="hover:text-[#FFBC14] flex items-center space-x-2">
              <a className=" cursor-pointer">E-SHOP </a>
              <FaAngleDown className="w-[9px] h-[13px]" />
            </div> */}
                {/* <a className="hover:text-[#FFBC14] cursor-pointer">PAGES</a> */}
                <div
                  className="relative cursor-pointer"
                  onMouseEnter={() => setPagesOpen(true)}
                  onMouseLeave={() => setPagesOpen(false)}
                >
                  <div className="hover:text-green flex items-center space-x-2">
                    <span className="">PAGES</span>
                    <FaAngleDown className="w-[9px] h-[13px]" />
                  </div>

                  <div
                    className={`
                  absolute left-0 mt-2 w-40 bg-[#262626] shadow-lg rounded
                  overflow-hidden py-5 transition-all duration-300
                  ${
                    pagesOpen
                      ? "max-h-60 opacity-100 w-52"
                      : "max-h-0 opacity-0"
                  }
                `}
                  >
                    <a
                      className="block px-4 py-5 hover:text-green"
                      onClick={() => router.push("/blogpage")}
                    >
                      BLOG PAGE
                    </a>
                    <a
                      className="block px-4 py-5 hover:text-green"
                      onClick={() => router.push("/gallery")}
                    >
                      GALLERY
                    </a>
                    {/* <a
                  className="block px-4 py-2 hover:text-[#FFBC14]"
                  onClick={() => router.push("/gallery")}
                >
                  Single Gallery
                </a> */}
                    <a
                      className="block px-4 py-5 hover:text-green"
                      onClick={() => router.push("/services")}
                    >
                      SERVICES
                    </a>
                    <a
                      className="block px-4 py-5 hover:text-green"
                      onClick={() => router.push("/about")}
                    >
                      ABOUT PAGE
                    </a>
                  </div>
                </div>
                {/* <a className="hover:text-[#FFBC14] cursor-pointer">BLOG</a> */}

                <div
                  className="relative cursor-pointer"
                  onMouseEnter={() => setBlogOpen(true)}
                  onMouseLeave={() => setBlogOpen(false)}
                >
                  <div className="flex items-center space-x-2 hover:text-green">
                    <span className="">BLOG</span>
                    <FaAngleDown className="w-[9px] h-[13px]" />
                  </div>

                  <div
                    className={`
                  absolute left-0 mt-2 w-40 bg-[#262626] shadow-lg rounded
                  overflow-hidden transition-all duration-300 py-5
                  ${
                    blogOpen ? "max-h-40 opacity-100 w-52" : "max-h-0 opacity-0"
                  }
                  `}
                  >
                    <a
                      className="block px-4 py-5 hover:text-green"
                      onClick={() => router.push("/blogpage")}
                    >
                      BLOG PAGE
                    </a>
                    <a
                      className="block px-4 py-5 hover:text-green"
                      onClick={() => router.push("/singleblog")}
                    >
                      SINGLE PAGE
                    </a>
                  </div>
                </div>

                <a
                  className="hover:text-green cursor-pointer"
                  onClick={() => router.push("/gallery")}
                >
                  GALLERY
                </a>
                <a
                  className="hover:text-green cursor-pointer"
                  onClick={() => router.push("/contact")}
                >
                  CONTACT
                </a>
              </nav>
            </div>
            <div className="mr-[350px]">
              <div className="hidden md:flex items-center space-x-6 ml-[150px]  text-white">
                <FaSearch className="cursor-pointer w-[14px] h-[15px] hover:text-green" />

                {/* <div className="relative cursor-pointer">
              <FaShoppingCart className="w-[14px] h-[15px] hover:text-[#FFBC14]" />
              <span className="absolute -top-2 -right-3 bg-[#FFBC14] text-black text-[10px] rounded-full px-1 py-2 font-roboto">
              4
              </span>
              </div> */}

                <FaCog className="cursor-pointer w-[13px] h-[15px] hover:text-green" />
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#262626] flex flex-col text-white px-6 py-4 space-y-4 border-t border-gray-700">
            <a onClick={() => router.push("/")}>HOME </a>
            {/* <a>E-SHOP </a> */}
            <a>PAGES </a>
            <a onClick={() => router.push("/blogpage")}>BLOG </a>
            <a onClick={() => router.push("/gallery")}>GALLERY </a>
            <a onClick={() => router.push("/contact")}>CONTACT </a>
          </div>
        )}
      </div>
      <div className="h-[120px] md:h-[110px]" />
    </header>
  );
}

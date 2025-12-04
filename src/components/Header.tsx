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
} from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/logoheader.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-[#262424] text-gray-300 text-sm lg:block hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaGooglePlusG className="hover:text-white cursor-pointer" />
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>+234 567 234 875</span>
            </div>
            <span>Mon-Fri: 8:00 - 16:00</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#262424] relative border-b border-yellow-500">
        {/* <div className="absolute left-0 top-0 bottom-0 w-[550px] bg-[#FFBC13] skew-x-45"></div> */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[550px] bg-[#FFBC13]
    [clip-path:polygon(0_0,85%_0,100%_100%,0_100%)]"
        >
          <div className="flex lg:justify-end">
            <Image src={Logo} alt="logo" className="mr-32" />
          </div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3 z-10">
            <div className="-ml-1"></div>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center space-x-10 text-white text-[14px] font-semibold">
            <a className="text-[#FFBC14] cursor-pointer lg:ml-20">HOME</a>
            <a className="hover:text-[#FFBC14] cursor-pointer">E-SHOP</a>
            {/* <a className="hover:text-[#FFBC14] cursor-pointer">PAGES</a> */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <span className="hover:text-[#FFBC14]">PAGES</span>

              <div
                className={`
                  absolute left-0 mt-2 w-40 bg-[#1f1f1f] shadow-lg rounded
                  overflow-hidden transition-all duration-300
                  ${pagesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <a className="block px-4 py-2 hover:bg-[#FFBC14] hover:text-black">
                  Blog Page
                </a>
                <a className="block px-4 py-2 hover:bg-[#FFBC14] hover:text-black">
                  Gallery
                </a>
                <a className="block px-4 py-2 hover:bg-[#FFBC14] hover:text-black">
                  Single Gallery
                </a>
                <a className="block px-4 py-2 hover:bg-[#FFBC14] hover:text-black">
                  Services
                </a>
                <a className="block px-4 py-2 hover:bg-[#FFBC14] hover:text-black" >
                  About Page
                </a>
              </div>
            </div>
            {/* <a className="hover:text-[#FFBC14] cursor-pointer">BLOG</a> */}

            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setBlogOpen(true)}
              onMouseLeave={() => setBlogOpen(false)}
            >
              <span className="hover:text-[#FFBC14]">BLOG</span>

              <div
                className={`
                  absolute left-0 mt-2 w-40 bg-[#1f1f1f] shadow-lg rounded
                  overflow-hidden transition-all duration-300
                  ${blogOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <a className="block px-4 py-2 hover:bg-[#FFBC14] hover:text-black">
                  Blog Page
                </a>
                <a className="block px-4 py-2 hover:bg-[#FFBC14] hover:text-black">
                  Single Page
                </a>
              </div>
            </div>

            <a className="hover:text-[#FFBC14] cursor-pointer"  onClick={()=>router.push("/gallery")}>GALLERY</a>
            <a className="hover:text-[#FFBC14] cursor-pointer"  onClick={()=>router.push("/contact")}>CONTACT</a>
          </nav>

          <div className="hidden md:flex items-center space-x-6 text-white">
            <FaSearch className="cursor-pointer" />

            <div className="relative cursor-pointer">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-[#FFBC14] text-black text-[10px] rounded-full px-1 font-bold">
                4
              </span>
            </div>

            <FaCog className="cursor-pointer" />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-[#262626] text-white px-6 py-4 space-y-4 border-t border-gray-700">
            <a>HOME</a>
            <a>E-SHOP</a>
            <a>PAGES</a>
            <a>BLOG</a>
            <a>GALLERY</a>
            <a>CONTACT</a>
          </div>
        )}
      </div>
      <div className="h-[120px] md:h-[110px]" />
    </header>
  );
}

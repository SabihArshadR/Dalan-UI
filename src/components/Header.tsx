"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-[#262424] text-gray-300 text-sm lg:block hidden">
        <div className="mx-[315px] h-[42.5px] flex items-center justify-end">
          <div className="flex items-center space-x-6 text-sm font-roboto text-[#e0e0e0]">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-[14px] h-[14px]" />
              <span>info@jes.com.pk</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="w-[11px] h-[14px]" />
              <span>Karachi · Lahore · Islamabad</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-[14px] h-[14px]" />
              <span>Mon-Fri: 8:00 - 16:00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#262424] relative border-b border-white">
        <div
          className="absolute left-0 top-0 bottom-0 w-[600px] h-[150px] bg-white
    [clip-path:polygon(0_0,85%_0,100%_100%,0_100%)]"
        >
          <div className="flex lg:justify-end">
            <Image
              src={Logo}
              alt="logo"
              className="lg:mr-[105px] object-contain h-[250px] lg:w-[250px] w-[180px] translate-y-[-53px]"
            />
          </div>
        </div>

        <div className="relative h-[149px] flex items-center lg:ml-[400px] gap-64 font-[10px] font-roboto tracking-[1px] leading-px">
          <div className="flex items-center space-x-3 z-10">
            <div className="-ml-1" />
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
                <a
                  className="hover:text-green cursor-pointer"
                  onClick={() => router.push("/about")}
                >
                  ABOUT US
                </a>
                <a
                  className="hover:text-green cursor-pointer"
                  onClick={() => router.push("/blogpage")}
                >
                  BLOG
                </a>
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
            <div className="lg:mr-[350px]" />
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden mr-5 text-2xl flex text-black"
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-[#262626] flex flex-col text-white px-6 py-4 space-y-4 border-t border-gray-700">
            <a onClick={() => router.push("/")}>HOME</a>
            <a onClick={() => router.push("/about")}>ABOUT US</a>
            <a onClick={() => router.push("/blogpage")}>BLOG</a>
            <a onClick={() => router.push("/gallery")}>GALLERY</a>
            <a onClick={() => router.push("/contact")}>CONTACT</a>
          </div>
        )}
      </div>
      <div className="h-[120px] md:h-[110px]" />
    </header>
  );
}

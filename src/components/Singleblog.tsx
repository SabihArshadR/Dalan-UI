"use client";

import Image from "next/image";
import { useState } from "react";
import Avatar from "@/assets/comment.jpg"

export default function CommentSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  return (
    <div className="py-16 bg-white">
      <div className="container max-w-[1320px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        <div className="lg:col-span-3">
          
              <div className="w-full border-b border-[#e1e1e1] mb-5"></div>
          <div className="flex justify-between items-center text-[12px] font-bold text-[#787878] mb-5">

            <span className="cursor-pointer">&lt; PREV POST</span>

            <div className="flex justify-center">
              <div className="w-8 h-8 grid grid-cols-3 grid-rows-3 gap-[2px] cursor-pointer">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="bg-green"></span>
                ))}
              </div>
            </div>

            <span className="cursor-pointer">NEXT POST &gt;</span>
          </div>
              <div className="w-full border-b border-[#e1e1e1] mb-7"></div>

          <h2 className="text-center font-semibold tracking-[1px] text-[24px] font-roboto text-[#333333] mb-10">
            COMMENTS ON THIS POST
          </h2>
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="border-2 border-[#F9F9F9] p-10 mb-10 text-center max-w-[896px] mx-auto"
            >
              <div className="flex justify-center mb-4">
                <div className="relative h-20 w-20">
                  <Image
                    src={Avatar}
                    alt="Commenter"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>

              <h3 className="tracking-[3px] text-black font-roboto text-[13px]">{index === 0 ? "EPC Client" : "Oil & Gas Partner"}</h3>

              <p className="text-gray-500 text-xs mt-1">
                {index === 0 ? "27 JAN 2015" : "27 JUNE 2016"}
              </p>

              <p className="text-[#676767] font-roboto mt-4 leading-6 text-sm max-w-[832px] mx-auto">
                JES delivered on schedule with strict adherence to HSE and quality. Their one-point EPCC approach simplified coordination and reduced interface issues. We would engage them again for oil and gas projects.
              </p>

              <button className="mt-5 border border-green hover:bg-green hover:text-white cursor-pointer text-black px-4 py-1 text-xs uppercase transition-colors duration-500">
                Reply
              </button>
            </div>
          ))}
          <form className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <input
                type="text"
                placeholder="Name :"
                className="border border-[#DDDDDD]   w-full px-3 py-4 text-sm outline-none text-black"
              />

              <input
                type="email"
                placeholder="Email :"
                className="border border-[#DDDDDD] text-[16px] w-full px-3 py-2 text-sm outline-none text-black"
              />

              <input
                type="text"
                placeholder="Number :"
                className="border border-[#DDDDDD] text-[16px] w-full px-3 py-2 text-sm outline-none text-black"
              />
            </div>

            <textarea
              placeholder="Message :"
              rows={5}
              className="border border-[#DDDDDD] text-[16px] w-full px-3 py-2 text-sm outline-none text-black"
            ></textarea>
            <div className="flex justify-center">

            <button className="mt-6 bg-green text-white px-7 py-4 text-[16px] font- uppercase font-bold tracking-[2px]">
              Submit
            </button>
            </div>
          </form>
        </div>
        {/* <aside className="space-y-10">
          <div>
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-[#FFBC13] text-center py-2 bg-[#F9F9F9]">INSTAGRAM</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="relative h-20">
                <Image src="/insta1.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-20">
                <Image src="/insta2.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="relative h-20">
                <Image src="/insta3.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">TOP TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {["Install", "Design", "Video", "Branding", "Packaging"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

        </aside> */}
      </div>
    </div>
  );
}

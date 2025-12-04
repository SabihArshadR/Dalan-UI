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
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* LEFT COMMENTS SECTION */}
        <div className="lg:col-span-3">
          
          {/* NAVIGATION (Prev / Grid / Next) */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-10">
            <span className="cursor-pointer">&lt; PREV POST</span>

            <div className="flex justify-center">
              <div className="w-8 h-8 grid grid-cols-3 grid-rows-3 gap-[2px] cursor-pointer">
                {[...Array(9)].map((_, i) => (
                  <span key={i} className="bg-yellow-500"></span>
                ))}
              </div>
            </div>

            <span className="cursor-pointer">NEXT POST &gt;</span>
          </div>

          {/* TITLE */}
          <h2 className="text-center font-semibold tracking-wide text-lg mb-10">
            COMMENTS ON THIS POST
          </h2>

          {/* COMMENT BOXES */}
          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 p-10 mb-10 text-center"
            >
              {/* Avatar */}
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

              <h3 className="font-semibold text-gray-800">JOHN DOE</h3>

              <p className="text-gray-500 text-xs mt-1">
                {index === 0 ? "27 JAN 2015" : "27 JUNE 2016"}
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed text-sm max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, in urna molestie tristique. A
                fermentum sed at, facilisis facilisis lacinia aliquam fusce
                volutpat, porta ligula nibh vel congue diam. Sed ligula erat
                molestie cras montes in, facilisis eu elit, ac suscipit
                pellentesque, praesent fringilla sit amet in suspendisse.
              </p>

              <button className="mt-5 bg-yellow-500 text-white px-4 py-1 text-xs uppercase">
                Reply
              </button>
            </div>
          ))}

          {/* COMMENT FORM */}
          <form className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <input
                type="text"
                placeholder="Name :"
                className="border w-full px-3 py-2 text-sm outline-none"
              />

              <input
                type="email"
                placeholder="Email :"
                className="border w-full px-3 py-2 text-sm outline-none"
              />

              <input
                type="text"
                placeholder="Number :"
                className="border w-full px-3 py-2 text-sm outline-none"
              />
            </div>

            <textarea
              placeholder="Message :"
              rows={5}
              className="border w-full px-3 py-2 text-sm outline-none"
            ></textarea>

            <button className="mt-6 bg-yellow-500 text-white px-6 py-2 text-sm uppercase">
              Submit
            </button>
          </form>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-10">

          {/* INSTAGRAM */}
          <div>
            <h3 className="font-semibold mb-3">INSTAGRAM</h3>
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

          {/* TAGS */}
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

        </aside>
      </div>
    </div>
  );
}

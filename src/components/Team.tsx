"use client";

import Image from "next/image";
import Team from "@/assets/offer1.jpg";

export default function TeamMember() {
  return (
    <section className="w-full bg-[#f7f7f7] py-20">
      <div className="max-w-[1400px] mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-800">
          TEAM <span className="text-[#FFBC13]">MEMBER</span>
        </h2>
        <div className="flex justify-center my-3">
          <div className="w-20 h-[3px] bg-[#FFBC13] rounded"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="bg-white shadow-md p-4 flex justify-center">
            <Image
              src={Team}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="bg-white shadow-md p-4 flex justify-center">
            <Image
              src={Team}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="bg-white shadow-md p-4 flex justify-center">
            <Image
              src={Team}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="bg-white shadow-md p-4 flex justify-center">
            <Image
              src={Team}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

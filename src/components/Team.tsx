"use client";

import Image from "next/image";
import Team1 from "@/assets/1.jpg";
import Team2 from "@/assets/2.jpg";
import Team3 from "@/assets/3.jpg";
import Team4 from "@/assets/4.jpg";
import Avatar from "@/assets/tes1.jpg";

export default function TeamMember() {
  return (
    <section className="w-full bg-[#FBFBFB] py-20">
      <div className="max-w-[1400px] mx-auto text-center px-4">
        <h2 className="text-[40px] font-montserrat font-bold tracking-[5px] text-gray-800">
          TEAM <span className="text-[#FFBC13]">MEMBER</span>
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
        </div>
        <p className="text-[#6b6b6b] font-roboto text-sm max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-white p-4 flex justify-center">
            <Image
              src={Team1}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="bg-white p-4 flex justify-center">
            <Image
              src={Team2}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="bg-white p-4 flex justify-center">
            <Image
              src={Team3}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="bg-white p-4 flex justify-center">
            <Image
              src={Team4}
              alt="Team Member"
              width={300}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[40px] font-bold tracking-[5px] text-[#414141] font-montserrat">
            OUR <span className="text-[#FFBC13]">TESTIMONIAL</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
          </div>
          <p className="text-[#6b6b6b] font-roboto text-sm max-w-[648px] mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
            lectus quis dui euismod con placerat massa nec elit egestas
            efficitur.
          </p>
        </div>
        <div className="lg:max-w-[856px] mx-auto bg-[#f2f2f2] p-10 mt-14">
          <p className="text-[#585757] text-sm font-roboto leading-relaxed">
            Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue
            reformidans atomorum his id, pri te hinc expetenda. Est an mundi
            tollit iuvaret. An ius postulant reformidans. Vel an elit ludus
            fabellas, ex quando adipisci accommodare usuet verar noluisse eum
            diam
          </p>
        </div>
        <div className="lg:max-w-[856px] mx-auto flex items-center bg-white gap-4 mt-6">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <Image src={Avatar} alt="Profile" width={56} height={56} />
          </div>
          <div className="text-left">
            <p className="font-semibold text-black">JOHN WATSON</p>
            <p className="text-sm text-gray-500">CEO At Facebook</p>
          </div>
          <span className="text-[#FFBC13] text-4xl ml-auto">&#10078;</span>
        </div>
      </div>
    </section>
  );
}

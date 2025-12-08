"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Team1 from "@/assets/1.jpg";
import Team2 from "@/assets/2.jpg";
import Team3 from "@/assets/3.jpg";
import Team4 from "@/assets/4.jpg";
import Avatar from "@/assets/tes1.jpg";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue reformidans atomorum his id, pri te hinc expetenda. Est an mundi tollit iuvaret. An ius postulant reformidans. Vel an elit ludus fabellas, ex quando adipisci accommodare usuet verar noluisse eum diam",
    name: "JOHN WATSON",
    position: "CEO At Google",
    avatar: Avatar,
  },
  {
    text: "Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue reformidans atomorum his id, pri te hinc expetenda. Est an mundi tollit iuvaret. An ius postulant reformidans. Vel an elit ludus fabellas, ex quando adipisci accommodare usuet verar noluisse eum diam",
    name: "JANE SMITH",
    position: "Marketing Director",
    avatar: Team1,
  },
  {
    text: "Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue reformidans atomorum his id, pri te hinc expetenda. Est an mundi tollit iuvaret. An ius postulant reformidans. Vel an elit ludus fabellas, ex quando adipisci accommodare usuet verar noluisse eum diam",
    name: "MICHAEL JOHNSON",
    position: "Project Manager",
    avatar: Team2,
  },
];

export default function TeamMember() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="w-full bg-[#FBFBFB] py-20">
      <div className="max-w-[1320px] mx-auto text-center px-4">
        <h2 className="text-[40px] font-montserrat font-bold tracking-[5px] text-blue">
          TEAM <span className="text-green">MEMBER</span>
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-blue" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-green" />
        </div>
        <p className="text-[#6b6b6b] font-roboto text-sm max-w-2xl mx-auto mt-4 leading-6">
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
          <h2 className="text-[40px] font-bold tracking-[5px] text-blue font-montserrat pt-20">
            OUR <span className="text-green">TESTIMONIAL</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>
          <p className="text-[#6b6b6b] font-roboto text-sm max-w-[648px] mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
            lectus quis dui euismod con placerat massa nec elit egestas
            efficitur.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div
            className={`transition-transform duration-500 ease-in-out ${
              isAnimating
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div className="lg:max-w-[856px] mx-auto bg-[#f2f2f2] p-10 mt-14">
              <p className="text-[#585757] text-sm leading-6 font-roboto">
                {testimonials[currentTestimonial].text}
              </p>
            </div>
            <div className="lg:max-w-[856px] mx-auto flex items-center bg-white gap-4 mt-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentTestimonial].avatar}
                  alt="Profile"
                  width={80}
                  height={80}
                  className="object-cover w-20 h-20"
                />
              </div>
              <div className="text-left ml-10">
                <p className="font-semibold text-black font-roboto text-[15px] tracking-[2px]">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-[13px] font-roboto text-[#5d5d5d]">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
              <span className="text-blue text-[80px] ml-auto mr-[120px]">
                &#10078;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

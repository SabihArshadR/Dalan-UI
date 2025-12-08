"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "@/assets/client_1.jpg";
import Image2 from "@/assets/client_2.jpg";
import Image3 from "@/assets/client_3.jpg";
import Image4 from "@/assets/client_4.jpg";
import Image5 from "@/assets/client_5.jpg";
import Avatar from "@/assets/tes1.jpg";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue reformidans atomorum his id, pri te hinc expetenda. Est an mundi tollit iuvaret. An ius postulant reformidans. Vel an elit ludus fabellas, ex quando adipisci accommodare usuet verar noluisse eum diam.",
    name: "JOHN WATSON",
    position: "CEO At Facebook",
    avatar: Avatar,
  },
  {
    text: "Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue reformidans atomorum his id, pri te hinc expetenda. Est an mundi tollit iuvaret. An ius postulant reformidans. Vel an elit ludus fabellas, ex quando adipisci accommodare usuet verar noluisse eum diam.",
    name: "JANE SMITH",
    position: "Marketing Director",
    avatar: Avatar,
  },
  {
    text: "Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue reformidans atomorum his id, pri te hinc expetenda. Est an mundi tollit iuvaret. An ius postulant reformidans. Vel an elit ludus fabellas, ex quando adipisci accommodare usuet verar noluisse eum diam.",
    name: "MICHAEL JOHNSON",
    position: "Project Manager",
    avatar: Avatar,
  },
];

export default function ClientTestimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:h-[676px] bg-[#FBFBFB]">
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[40px] font-bold tracking-[4px] text-blue font-montserrat">
            CLIENT & <span className="text-green">TESTIMONIAL</span>
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

        <div className="lg:max-w-[1320px] lg:mx-auto lg:mt-16 grid lg:grid-cols-2 gap-6">
          <div className="relative overflow-hidden h-full">
            <div
              className={`transition-transform duration-500 ease-in-out ${
                isAnimating
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <p className="text-[#585757] leading-relaxed bg-[#f2f2f2] px-8 py-8 font-roboto text-sm">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="flex items-center pt-[25px] pb-[40px] px-2 gap-4 bg-[#FBFBFB]">
                <div className="rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt="Profile"
                    width={80}
                    height={80}
                    className="object-cover w-20 h-20"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-black text-[15px] font-roboto tracking-widest">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-[15px] font-roboto text-[#5d5d5d]">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
                <span className="text-blue text-[70px] ml-auto mr-24">
                  &#10078;
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[Image1, Image2, Image3, Image4, Image5, Image3].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-[#f2f2f2] shadow-sm lg:w-[202px] lg:h-[145px]"
              >
                <Image
                  src={logo}
                  alt={`Client ${i + 1}`}
                  width={202}
                  height={145}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

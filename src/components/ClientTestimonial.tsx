"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "JES delivered our gas processing facility on schedule with strict adherence to HSE and quality. Their one-point EPCC approach simplified coordination and reduced interface issues. A reliable partner for oil and gas projects.",
    name: "EnerServe",
    position: "Oil & Gas — Project Partner",
    image: "/clients/Picture1.jpg",
  },
  {
    text: "From engineering through commissioning, the team demonstrated technical expertise and a strong commitment to safety. We would engage JES again for brownfield and greenfield industrial projects.",
    name: "Upstream Operator",
    position: "Energy Sector",
    image: "/clients/Picture2.jpg",
  },
  {
    text: "Their turnkey approach and dedicated project management made a real difference. Quality of fabrication and installation met international standards. Recommended for pipelines and storage tank projects.",
    name: "EPC Client",
    position: "Petrochemicals & Process",
    image: "/clients/Picture3.jpg",
  },
  {
    text: "Professional execution and clear communication throughout. JES met our schedule and HSEQ requirements on a complex site.",
    name: "Gas Processing Client",
    position: "Industrial Development",
    image: "/clients/Picture4.png",
  },
  {
    text: "Trusted partner for construction and commissioning. We value their safety culture and technical capability.",
    name: "Infrastructure Partner",
    position: "Oil & Gas",
    image: "/clients/Picture5.jpg",
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
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FBFBFB]">
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[40px] font-bold tracking-[4px] text-blue font-montserrat">
            OUR CLIENTS & <span className="text-green">TESTIMONIALS</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>
          <p className="text-[#6b6b6b] font-roboto text-sm max-w-[648px] mx-auto mt-5">
            Here’s what our clients say about working with JES.
          </p>
        </div>

        <div className="lg:max-w-[856px] mx-auto mt-16 px-4">
          <div className="relative overflow-hidden">
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
                <div className="overflow-hidden shrink-0 border border-[#e5e5e5] w-20 h-20 relative">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
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
                <span className="text-blue text-[70px] ml-auto">
                  &#10078;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

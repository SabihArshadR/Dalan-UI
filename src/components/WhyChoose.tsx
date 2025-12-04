"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Workers from "@/assets/choose.jpg";

export default function WhyChoose() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width - 0.5) * 2; 
    const yPercent = (y / rect.height - 0.5) * 2;
    
    setMousePosition({ x: xPercent * 10, y: yPercent * 5 });
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const items = [
    {
      title: "100% CUSTOMERS SUPPORT",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur",
    },
    {
      title: "HIGH QUALITY STANDARTS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur",
    },
    {
      title: "WE HAVE REASONABLE PRICES",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur",
    },
    {
      title: "WE ARE RELIABLE COMPANY",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur",
    },
    {
      title: "HIGH QUALITY STANDARTS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-[40px] font-montserrat font-bold tracking-wide text-[#414141]">
          WHY <span className="text-[#FFBC13]">CHOOSE</span>
        </h2>

        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
        </div>

        <p className="lg:max-w-[648px] text-sm font-roboto mx-auto text-[#6b6b6b] mt-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-10 px-4 font-montserrat">
        <div className="lg:max-w-[660px]">
          {items.map((item, index) => (
            <div key={index} className="border-b">
              <button
                className={`w-full text-left lg:px-4 h-[44px] flex items-center transition text-[20px] font-extralight ${
                  openIndex === index
                    ? "bg-[#FFBC13] text-white font-montserrat"
                    : "bg-[#F8F8F8] text-black"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl mr-5">
                  {openIndex === index ? "▼" : "▶"}
                </span>
                <span className="font-normal cursor-pointer lg:tracking-[5px] ">{item.title}</span>
              </button>

              {openIndex === index && (
                <div className="px-4 py-8 text-[#333333] text-sm font-roboto">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div 
          ref={imageRef}
          className="flex justify-center transition-transform duration-300 ease-out"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: isHovering 
              ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              : 'translate(0, 0)',
          }}
        >
          <Image
            src={Workers}
            alt="Workers"
            className="object-contain"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

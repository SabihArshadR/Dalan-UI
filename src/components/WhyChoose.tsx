"use client";

import { useState, useRef } from "react";
import Image from "next/image";

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
      title: "QUALITY & HSE",
      content:
        "We maintain the highest standards of quality and Health, Safety & Environment across all projects. Our commitment to zero harm and technical robustness ensures reliable delivery for every client.",
    },
    {
      title: "ONE-POINT CONTROL",
      content:
        "Turnkey solutions with single-point responsibility for civil, mechanical, and E&I services. Streamlined project delivery from engineering through commissioning reduces interface risk and schedule.",
    },
    {
      title: "TECHNICALLY ROBUST SOLUTIONS",
      content:
        "Commercially viable and technically sound solutions for both brownfield and greenfield industrial developments. Our engineering and execution teams ensure fit-for-purpose design and build.",
    },
    {
      title: "TRUSTED PARTNER",
      content:
        "Established in 2009, JES has built a reputation as a trusted partner in Pakistan and Qatar for oil and gas industrial development. Client satisfaction and long-term relationships are at our core.",
    },
    {
      title: "DEDICATED TEAM",
      content:
        "A culture of teamwork and a dedicated team of experts across engineering disciplines, project management, and HSE. We invest in our people to deliver excellence on every project.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-20 bg-white">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-montserrat font-bold tracking-[4px] text-blue">
            WHY <span className="text-green">CHOOSE</span>
          </h2>

          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>

          <p className="lg:max-w-[648px] text-sm font-roboto mx-auto text-[#6b6b6b] mt-5 leading-6">
            From our headquarters in Karachi and presence in Lahore, Islamabad, and Sadiqabad, we bring experience, resources, and a commitment to excellence to every project.
          </p>
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 px-4 font-montserrat">
          <div className="lg:max-w-[660px]">
            {items.map((item, index) => (
              <div key={index} className="border-b">
                <button
                  className={`w-full text-left lg:px-4 h-[44px] flex items-center transition text-[20px] font-extralight ${
                    openIndex === index
                      ? "bg-green text-white font-montserrat"
                      : "bg-[#F8F8F8] text-black"
                  }`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-xl mr-5">
                    {openIndex === index ? "▼" : "▶"}
                  </span>
                  <span className="font-normal cursor-pointer lg:tracking-[5px] ">
                    {item.title}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-3 py-8 text-[#333333] text-sm font-roboto leading-6">
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
                : "translate(0, 0)",
            }}
          >
            <Image
              src="/jes/image17.jpeg"
              alt="JES — Quality, HSE and project excellence"
              width={611}
              height={542}
              className="object-cover h-[542px] w-full max-w-[611px] rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

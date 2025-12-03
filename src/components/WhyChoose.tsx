"use client";

import { useState } from "react";
import Image from "next/image";
import Workers from "@/assets/choose.jpg";

export default function WhyChoose() {
  const items = [
    {
      title: "100% CUSTOMERS SUPPORT",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      title: "HIGH QUALITY STANDARTS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      title: "WE HAVE REASONABLE PRICES",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      title: "WE ARE RELIABLE COMPANY",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      title: "HIGH QUALITY STANDARTS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pt-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-wide text-[#414141]">
          WHY <span className="text-yellow-500">CHOOSE</span>
        </h2>

        <div className="w-20 h-1 bg-[#FFBC13] mx-auto my-4" />

        <p className="max-w-2xl mx-auto text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-10 px-4">
        <div>
          {items.map((item, index) => (
            <div key={index} className="border-b">
              <button
                className={`w-full text-left px-4 py-3 flex items-center justify-between transition ${
                  openIndex === index
                    ? "bg-[#FFBC13] text-white"
                    : "bg-[#F8F8F8] text-black"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium tracking-wide">{item.title}</span>

                <span className="text-xl">
                  {openIndex === index ? "▼" : "▶"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 py-4 text-black text-sm">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
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

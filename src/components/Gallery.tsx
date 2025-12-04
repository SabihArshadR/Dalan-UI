"use client"
import { useState } from "react";
import Image from "next/image";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import work8 from "@/assets/work-8.jpg";

type WorkItem = {
  id: number;
  image: any;
  category: string;
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const categories = ["All Works", "Garden", "Building", "Construction", "Interior"];

  const works: WorkItem[] = [
    { id: 1, image: work1, category: "Interior" },
    { id: 2, image: work2, category: "Building" },
    { id: 3, image: work3, category: "Building" },
    { id: 4, image: work4, category: "Garden" },
    { id: 5, image: work5, category: "Building" },
    { id: 6, image: work6, category: "Building" },
    { id: 7, image: work7, category: "Building" },
    { id: 8, image: work8, category: "Construction" },
  ];

  const filteredWorks = activeCategory === "All Works" 
    ? works 
    : works.filter(work => work.category === activeCategory);

  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-[40px] tracking-wider mb-4 font-montserrat">
        <span className="text-gray-700 font-bold">OUR </span>
        <span className="text-[#FFBC13] font-bold">GALLERY</span>
      </h2>
      <div className="flex justify-center mt-4">
        <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
      </div>
      <div className="flex justify-center mt-1.5">
        <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
      </div>

      <p className="text-[#6b6b6b] max-w-[648px] mx-auto mb-10 mt-5 font-roboto text-sm">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
        lectus quis dui euismod con placerat massa nec elit egestas efficitur.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center gap-2 border-2 px-3 py-1.5 text-[15px] font-roboto transition
              ${
                activeCategory === category
                  ? "bg-[#FFBC13] text-white"
                  : "border-[#FFBC13] text-[#383838] hover:bg-[#FFF5D6]"
              }`}
          >
            <span className="text-xs">■</span> {category}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 gap-6 max-w-6xl lg:mx-auto mx-2">
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <div key={work.id} className="overflow-hidden rounded-sm shadow-sm">
              <Image
                src={work.image}
                alt={`${work.category} Work ${work.id}`}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center py-10 text-gray-500">
            No works found in this category
          </div>
        )}
      </div>
    </section>
  );
}

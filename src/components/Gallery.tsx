"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import work1 from "../../public/image2.jpeg";
import work2 from "../../public/image3.jpeg";
import work3 from "../../public/image4.jpeg";
import work4 from "../../public/image5.jpeg";
import work5 from "../../public/image6.jpeg";
import work6 from "../../public/image10.jpeg";
import work7 from "../../public/jes/image5.jpeg";
import work8 from "../../public/jes/image14.jpeg";
import work9 from "../../public/jes/image17.jpeg";
// import work7 from "../../public/image11.jpeg";
// import work8 from "../../public/image10.jpeg";

type WorkItem = {
  id: number;
  image: any;
  category: string;
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Works");
  const categories = [
    "All Works",
    "Pipelines",
    "Gas Plants",
    "Industrial",
    "Construction",
  ];

  const works: WorkItem[] = [
    { id: 1, image: work1, category: "Industrial" },
    { id: 2, image: work2, category: "Gas Plants" },
    { id: 3, image: work3, category: "Construction" },
    { id: 4, image: work4, category: "Pipelines" },
    { id: 5, image: work7, category: "Gas Plants" },
    { id: 6, image: work8, category: "Construction" },
    { id: 7, image: work1, category: "Industrial" },
    { id: 8, image: work2, category: "Construction" },
    { id: 9, image: work4, category: "Pipelines" },
    { id: 10, image: work9, category: "Gas Plants" },
    { id: 11, image: work2, category: "Industrial" },
    { id: 12, image: work3, category: "Construction" },
  ];

  const filteredWorks =
    activeCategory === "All Works"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-[40px] tracking-[4px] mb-4 font-montserrat">
        <span className="text-blue font-bold">OUR </span>
        <span className="text-green font-bold">GALLERY</span>
      </h2>
      <div className="flex justify-center mt-4">
        <div className="h-0.5 w-[100px] bg-blue" />
      </div>
      <div className="flex justify-center mt-1.5">
        <div className="h-0.5 w-[40px] bg-green" />
      </div>

      <p className="text-[#6b6b6b] max-w-[648px] mx-auto mb-10 mt-5 font-roboto text-sm leading-6">
        Explore our EPCC project portfolio: gas plants, pipelines, storage, and industrial facilities across oil and gas.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center gap-2 border-2 px-3 py-1.5 text-[15px] font-roboto transition hover:cursor-pointer
              ${
                activeCategory === category
                  ? "bg-green text-white border-green border"
                  : "border-green text-[#383838]"
              }`}
          >
            <span className="text-xs">■</span> {category}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 gap-4 lg:max-w-[1320px] lg:mx-auto mx-2">
        {filteredWorks.length > 0 ? (
          filteredWorks.map((work) => (
            <div key={work.id} className="overflow-hidden relative group">
              <div className="relative">
                <Image
                  src={work.image}
                  alt={`${work.category} Work ${work.id}`}
                  className="lg:max-w-[306px] lg:max-h-[261px] object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <div className="space-y-4 text-center">
                  <div className="overflow-hidden">
                    <span className="block transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 text-[18px] font-roboto text-blue">
                      {work.category.toUpperCase()}
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="block transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 text-[15px] text-green font-roboto">
                      JES EPCC
                    </span>
                  </div>
                </div>
              </div>
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

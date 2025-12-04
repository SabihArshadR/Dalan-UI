import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-16">
        {/* Banner Section */}
        <div className="relative h-[600px] font-roboto">
          {/* Mirrored Background Image */}
          <div className="absolute inset-0 bg-[url('/slider2.jpg')] transform scale-x-[-1]"></div>

          {/* Text on top */}
          <div className="absolute top-1/2 left-[200px] transform -translate-y-1/2">
            <p className="text-[14px] tracking-[5px] font-bold">
              <span className="text-[#605B5B]">Home </span>
              <span className="text-[#6E6E6E]">/ Gallery</span>
            </p>
            <h1 className="text-[45px] text-[#333333] font-medium lg:tracking-[4px]">
              OUR GALLERY
            </h1>
          </div>
        </div>

        {/* Gallery and Footer */}
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default page;

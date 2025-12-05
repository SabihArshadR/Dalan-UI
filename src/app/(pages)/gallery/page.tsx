import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <div className="relative h-[550px] font-roboto">
          <div
            className="absolute inset-0 bg-[url('/page_bg.jpg')]"
            style={{ backgroundPosition: "50% 65%" }}
          ></div>
          <div className="absolute top-[350px] lg:left-[300px] transform -translate-y-1/2">
            <p className="text-[14px] tracking-[5px] font-bold">
              <span className="text-[#605B5B]">Home </span>
              <span className="text-[#6E6E6E]">/ Gallery</span>
            </p>
            <h1 className="text-[45px] text-[#333333] font-medium lg:tracking-[4px]">
              OUR GALLERY
            </h1>
          </div>
        </div>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default page;

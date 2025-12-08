import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <div className="relative h-[550px] bg-black font-roboto">
          <div
            className="absolute inset-0 bg-[url('/image1.jpeg')] opacity-20 bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50% 65%" }}
          ></div>
          <div className="absolute top-[350px] lg:left-[300px] transform -translate-y-1/2">
            <p className="text-[14px] tracking-[5px] font-bold">
              <span className="text-white">Home </span>
              <span className="text-white">/ Gallery</span>
            </p>
            <h1 className="text-[45px] text-white font-medium lg:tracking-[4px]">
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

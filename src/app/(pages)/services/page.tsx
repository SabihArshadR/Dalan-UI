import Facts from "@/components/Facts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-10">
        <div className="relative h-[600px] bg-black font-roboto">
          <div
            className="absolute inset-0 bg-[url('/image1.jpeg')] opacity-20 bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50% 40%" }}
          ></div>
          <div className="absolute top-[400px] lg:pl-0 pl-5 lg:left-[300px] transform -translate-y-1/2">
            <p className="text-[14px] tracking-[5px] font-bold">
              <span className="text-white">Home </span>
              <span className="text-white">/ Service</span>
            </p>
            <h1 className="text-[45px] text-white font-medium lg:tracking-[4px]">
              <span className="text-blue">OUR </span><span className="text-green">SERVICES</span>
            </h1>
          </div>
        </div>
        <Services />
      </div>
      <div className="h-20 bg-[#FBFBFB]"></div>
      <Facts />
      <Footer />
    </div>
  );
};

export default page;

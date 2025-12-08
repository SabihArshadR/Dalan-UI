import Facts from "@/components/Facts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Prices from "@/components/Prices";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-10">
        <div className="relative h-[600px] font-roboto">
          <div
            className="absolute inset-0 bg-[url('/image1.jpeg')] bg-no-repeat bg-cover"
            style={{ backgroundPosition: "50% 40%" }}
          ></div>
          <div className="absolute top-[400px] lg:left-[300px] transform -translate-y-1/2">
            <p className="text-[14px] tracking-[5px] font-bold">
              <span className="text-[#605B5B]">Home </span>
              <span className="text-[#6E6E6E]">/ Service</span>
            </p>
            <h1 className="text-[45px] text-[#333333] font-medium lg:tracking-[4px]">
              OUR SERVICE
            </h1>
          </div>
        </div>
        <Services />
      </div>
      <div className="h-20 bg-[#FBFBFB]"></div>
      <Facts />
      <Prices />
      <Footer />
    </div>
  );
};

export default page;

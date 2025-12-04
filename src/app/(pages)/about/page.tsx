import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamMember from "@/components/Team";
import Welcome from "@/components/Welcome";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="relative h-[600px] font-roboto">
          <div className="absolute inset-0 bg-[url('/slider2.jpg')] transform scale-x-[-1]"></div>
          <div className="absolute lg:top-[400px] lg:left-[300px] transform -translate-y-1/2">
            <p className="text-[14px] tracking-[5px] font-bold">
              <span className="text-[#605B5B]">Home </span>
              <span className="text-[#6E6E6E]">/ About</span>
            </p>
            <h1 className="text-[45px] text-[#333333] font-medium lg:tracking-[4px]">
              ABOUT US
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <Welcome />
      </div>
      <TeamMember />
      <Footer />
    </div>
  );
};

export default page;

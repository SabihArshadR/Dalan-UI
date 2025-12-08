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
        <div className="relative h-[600px] bg-black font-roboto">
          <div className="absolute inset-0 bg-[url('/image1.jpeg')] opacity-20 bg-no-repeat bg-cover"></div>
          <div className="absolute lg:top-[400px] lg:left-[300px] transform -translate-y-1/2">
            <p className="text-[14px] tracking-[5px] font-bold">
              <span className="text-white">Home </span>
              <span className="text-white">/ About</span>
            </p>
            <h1 className="text-[45px] text-white font-medium lg:tracking-[4px]">
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

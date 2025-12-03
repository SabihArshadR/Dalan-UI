import React from "react";
import { FaRegHeart, FaRegLightbulb } from "react-icons/fa";
import { GoGift } from "react-icons/go";

const Facts = () => {
  return (
    <div>
      <div className="bg-[url('/facts.jpg')] h-[400px] relative">
        <div className="absolute right-[300px] top-[80px] flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-2 tracking-widest">
              AWESOME <span className="text-[#FFBC13]">FACTS</span>
            </h2>
            <div className="flex gap-[150px] mt-20">
              <div>
                <div className="flex justify-center">
                  <GoGift className="w-[40px] h-[40px]"/>
                </div>
                <p className="text-[40px]">197</p>
                <p className="text-sm">PROJECTS DONE</p>
              </div>
              <div>
                <div className="flex justify-center">
                  <FaRegLightbulb className="w-[40px] h-[40px]"/>
                </div>
                <p className="text-[40px]">275</p>
                <p className="text-sm">PROJECTS DONE</p>
              </div>
              <div>
                <div className="flex justify-center">
                  <FaRegHeart className="w-[40px] h-[40px]" />
                </div>
                <p className="text-[40px]">374</p>
                <p className="text-sm">PROJECTS DONE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;

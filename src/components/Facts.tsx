import React from "react";
import { FaRegHeart, FaRegLightbulb } from "react-icons/fa";
import { GoGift } from "react-icons/go";

const Facts = () => {
  return (
    <div>
      <div
        className="bg-[url('/facts.jpg')] lg:h-[412px] h-[600px] relative"
        style={{ backgroundPosition: "50% 10%" }}
      >
        <div className="flex justify-end mr-80 pt-20">
          <div className="text-white text-center">
            <h2 className="text-[40px] font-montserrat font-bold mb-2 tracking-widest">
              AWESOME <span className="text-[#FFBC13]">FACTS</span>
            </h2>
          </div>
        </div>

        <div>
          <div className="lg:flex lg:gap-[150px] mt-10 justify-end mr-80">
            <div>
              <div className="flex justify-end">
                <GoGift className="w-[40px] h-[40px]" />
              </div>
              <p className="text-[40px] font-montserrat text-right tracking-[5px]">197</p>
              <p className="text-sm font-roboto tracking-[2px]">
                PROJECTS DONE
              </p>
            </div>
            <div>
              <div className="flex justify-end">
                <FaRegLightbulb className="w-[40px] h-[40px]" />
              </div>
              <p className="text-[40px] font-montserrat text-right tracking-[5px]">275</p>
              <p className="text-sm font-roboto tracking-[2px]">
                PROBLEMS SOLVED
              </p>
            </div>
            <div>
              <div className="flex justify-end">
                <FaRegHeart className="w-[40px] h-[40px]" />
              </div>
              <p className="text-[40px] font-montserrat tracking-[5px] text-right">374</p>
              <p className="text-sm font-roboto tracking-[2px]">
                CLIENTS HELPED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;

import React from "react";
import { FaRegHeart, FaRegLightbulb } from "react-icons/fa";
import { GoGift } from "react-icons/go";

const Facts = () => {
  return (
    <div>
      <div
        className="bg-[url('/facts.jpg')] lg:h-[412px] h-[600px] relative bg-no-repeat bg-cover"
        style={{ backgroundPosition: "50% 10%" }}
      >
        <div className="flex justify-end lg:mr-80 pt-20">
          <div className="text-white text-center">
            <h2 className="text-[40px] text-blue font-montserrat font-bold mb-2 tracking-widest">
              AWESOME <span className="text-green">FACTS</span>
            </h2>
          </div>
        </div>

        <div>
          <div className="lg:flex lg:gap-[150px] lg:mt-10 justify-end lg:mr-80 text-white">
            <div>
              <div className="flex lg:justify-end justify-center">
                <GoGift className="w-[40px] h-[40px]" />
              </div>
              <p className="text-[40px] font-montserrat lg:text-right text-center tracking-[5px]">197</p>
              <p className="text-sm font-roboto tracking-[2px] text-center">
                PROJECTS DONE
              </p>
            </div>
            <div>
              <div className="flex lg:justify-end justify-center">
                <FaRegLightbulb className="w-[40px] h-[40px]" />
              </div>
              <p className="text-[40px] font-montserrat lg:text-right text-center tracking-[5px]">275</p>
              <p className="text-sm font-roboto tracking-[2px] text-center">
                PROBLEMS SOLVED
              </p>
            </div>
            <div>
              <div className="flex lg:justify-end justify-center">
                <FaRegHeart className="w-[40px] h-[40px]" />
              </div>
              <p className="text-[40px] font-montserrat tracking-[5px] lg:text-right text-center">374</p>
              <p className="text-sm font-roboto tracking-[2px] text-center">
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

import React from 'react'
import Image from "next/image";
import Image1 from "@/assets/about.jpg";

const Welcome = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center bg-white pt-10">
        <div>
          <Image src={Image1} alt="About" />
        </div>
        <div className="">
          <h1 className="text-[40px] font-bold text-black">
            <span className="text-[#414141]">WELCOME TO</span>
            <span className="text-[#FFBC13]">
              {""} DALAN <br></br> CONSTRUCTION
            </span>
          </h1>
          <p className="max-w-2xl text-center text-sm mt-4 text-[#545353]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod incididunt ametfh consectetur dolore magna aliqua. Ut enim
            ad minim veniam dolor sit amet magnaelit ate consectetur adipisicing
            elit sed do eiusmod tempor incididunt consectetur dolore magna
            aliqua. Ut enim ad minim veniam dolor sit amet consectetur
            adipisicing elit sed do eiusmo tempor incididunt consectetur dolore
            magna aliqua. Ut enim ad Lorem ipsum dolor sit amet consectetur
            adipisicing elit sed do eiusmod adipisicing temporert incididunt
            adipisicing consectetur dolore magna aliqua. Ut enim ad minim veniam
            dolore aliq. enim ad minim veniam dolor sit amet consectetur
            adipisicing elit onsectetur adipisicing elit sed do eiusmod
            adipisicing
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome

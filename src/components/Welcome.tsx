import React from 'react'
import Image from "next/image";
// import Image1 from "@/assets/about.jpg";
import Image1 from "../../public/image9.jpeg";

const Welcome = () => {
  return (
    <div>
      <div className="lg:flex gap-10 justify-center bg-white pt-10 pb-[100px]">
        <div>
          <Image src={Image1} alt="About" className='w-[636px] h-[455px]'/>
        </div>
        <div className="">
          <h1 className="text-[40px] font-montserrat lg:tracking-[5px] leading-[1.2] font-bold text-black mx-2">
            <span className="text-blue">WELCOME TO</span>
            <span className="text-green">
              {""} DALAN <br></br> CONSTRUCTION
            </span>
          </h1>
          <p className="max-w-[636px] text-sm mt-4 text-[#545353] mx-2 font-roboto leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod incididunt ametfh consectetur dolore magna aliqua. Ut enim
            ad minim veniam dolor sit amet magnaelit ate consectetur adipisicing
            elit sed do eiusmod tempor incididunt consectetur dolore magna
            aliqua. Ut enim ad minim veniam dolor sit amet consectetur
            adipisicing elit sed do eiusmo tempor incididunt consectetur dolore
            magna aliqua. Ut enim ad <br></br> Lorem ipsum dolor sit amet consectetur
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

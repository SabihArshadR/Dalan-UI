import React from 'react'
import Image from "next/image";
// import Image1 from "@/assets/about.jpg";
import Image1 from "../../public/jes/image14.jpeg";

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
              {""} JES
            </span>
          </h1>
          <p className="max-w-[636px] text-sm mt-4 text-[#545353] mx-2 font-roboto leading-6">
            JES is a premier contractor in Pakistan&apos;s oil and gas sector with an expanding presence in Qatar. We deliver comprehensive Engineering, Procurement, Construction, and Commissioning (EPCC) services across the oil, gas, and chemical process industries. Headquartered in Karachi with offices in Lahore and Islamabad and a manufacturing workshop in Sadiqabad, we provide technically robust and commercially viable solutions for brownfield and greenfield industrial developments. Our dedicated team across engineering, project management, and HSE makes JES a trusted partner for industrial development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome

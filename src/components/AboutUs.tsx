"use client";

import Image from "next/image";
import Image1 from "../../public/jes/image14.jpeg";

export default function AboutUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="lg:flex gap-10 justify-center items-center">
          <div className="relative overflow-hidden rounded-sm">
            <Image
              src={Image1}
              alt="JES — Oil & Gas EPCC"
              className="w-full max-w-[636px] h-[455px] object-cover"
              width={636}
              height={455}
            />
          </div>
          <div className="max-w-[636px]">
            <h3 className="text-[28px] font-montserrat font-bold tracking-[2px] text-black mb-4">
              <span className="text-blue">WELCOME TO </span>
              <span className="text-green">JES</span>
            </h3>
            <p className="text-[#545353] text-sm font-roboto leading-6">
              JES is a premier contractor in Pakistan&apos;s oil and gas sector
              with an expanding presence in Qatar. We deliver comprehensive
              Engineering, Procurement, Construction, and Commissioning (EPCC)
              services across the oil, gas, and chemical process industries.
              Headquartered in Karachi with offices in Lahore and Islamabad and a
              manufacturing workshop in Sadiqabad, we provide technically robust
              and commercially viable solutions for brownfield and greenfield
              industrial developments. Our dedicated team across engineering,
              project management, and HSE makes JES a trusted partner for
              industrial development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

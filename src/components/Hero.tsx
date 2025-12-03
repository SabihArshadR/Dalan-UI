"use client";
import Image from "next/image";
import Image1 from "@/assets/about.jpg";
import { useEffect, useState } from "react";
import Welcome from "./Welcome";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slides = ["/slider1.jpg", "/slider2.jpg"];
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setNextSlide((prevNext) => (currentSlide + 1) % totalSlides);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsTransitioning(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);
  return (
    <div>
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div
          key={`current-${currentSlide}`}
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
            isTransitioning ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{ backgroundImage: `url('${slides[currentSlide]}')` }}
        />
        {isTransitioning && (
          <div
            key={`next-${nextSlide}`}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 translate-x-0"
            style={{
              backgroundImage: `url('${slides[nextSlide]}')`,
              transform: "translateX(100%)",
              animation: "slideIn 1s forwards",
            }}
          />
        )}
        <style jsx>{`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}</style>

        <div className="absolute text-white right-[400px] top-[300px]">
          <h1 className="text-[24px] font-bold">DALAN CONSTRUCTION</h1>
          <h1 className="text-[44px] font-bold">
            <span className="text-[#2F3320]">BUILD</span>{" "}
            <span className="text-[#FFBC13]">EVERYTHING</span>
          </h1>
          <p className="text-sm max-w-[636px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonmy ni euism laoreet dolore magna aliquam erat volutpat
            consectetuer adipiscing elit.
          </p>
          <div className="flex gap-5 mt-10">
            <button className="px-8 py-3 bg-[#FFBC13] hover:bg-transparent border border-[#FFBC13] rounded shadow cursor-pointer">
              READ MORE
            </button>
            <button className="px-8 py-3 hover:bg-[#FFBC13] bg-transparent border border-[#FFBC13] rounded shadow cursor-pointer">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
      <div>
        <section className="bg-[#FFBC13]">
          <div className="py-14 flex justify-between flex-row items-center ml-[300px] mr-[520px]">
            <h2 className="text-[#333333] tracking-[6px] font-extralight text-[24px] uppercase">
              WE’RE READY TO WORK WITH YOU
            </h2>
            <button className="mt-6 md:mt-0 bg-white text-black px-10 py-3 tracking-wider font-semibold hover:bg-black hover:text-white transition">
              GET A QUOTE
            </button>
          </div>
        </section>
      </div>
      <Welcome />
    </div>
  );
}

"use client";
import Image from "next/image";
import Image1 from "@/assets/about.jpg";
import { useEffect, useState } from "react";
import Welcome from "./Welcome";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const slides = ["/image1.jpeg", "/image11.jpeg"];
  const totalSlides = slides.length;

  useEffect(() => {
    setAnimateText(true);

    const interval = setInterval(() => {
      setAnimateText(false);
      setIsTransitioning(true);
      setNextSlide((prevNext) => (currentSlide + 1) % totalSlides);

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsTransitioning(false);
        setAnimateText(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);
  return (
    <div>
      <section className="relative bg-black h-[750px] flex items-center overflow-hidden">
        <div
          key={`current-${currentSlide}`}
          className={`absolute inset-0 opacity-20 transition-transform duration-1000 ${
            isTransitioning ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{
            backgroundImage: `url('${slides[currentSlide]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            left: "50%",
            marginLeft: "-50vw",
            right: "50%",
            marginRight: "-50vw",
          }}
        />
        {isTransitioning && (
          <div
            key={`next-${nextSlide}`}
            className="absolute inset-0 opacity-20 transition-transform duration-1000 translate-x-0"
            style={{
              backgroundImage: `url('${slides[nextSlide]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              left: "50%",
              marginLeft: "-50vw",
              right: "50%",
              marginRight: "-50vw",
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

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        <div
          className={`absolute text-white lg:right-[280px] lg:top-[300px] transition-all duration-300 ${
            animateText ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 0.3s ease-out",
          }}
        >
          <h1 className="text-[24px] font-bold font-roboto tracking-widest">
            DALAN CONSTRUCTION
          </h1>
          <h1 className="text-[44px] font-bold font-montserrat">
            <span className="text-blue">BUILD</span>{" "}
            <span className="text-green">EVERYTHING</span>
          </h1>
          <p className="text-sm max-w-[636px] font-roboto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonmy ni euism laoreet dolore magna aliquam erat volutpat
            consectetuer adipiscing elit.
          </p>
          <div className="flex gap-5 mt-10">
            <button className="px-8 py-3 bg-blue hover:bg-transparent border border-blue rounded shadow cursor-pointer font-roboto text-sm">
              READ MORE
            </button>
            <button className="px-8 py-3 hover:bg-green bg-transparent border border-green rounded shadow cursor-pointer font-roboto text-sm">
              GET STARTED
            </button>
          </div>
        </div>
      </section>
      <div>
        <section className="bg-green">
          <div className="h-[158px] flex justify-between flex-row items-center lg:ml-[300px] lg:mr-[520px] mx-5 font-montserrat">
            <h2 className="text-[#333333] tracking-[4px] font-e text-[25px] uppercase">
              WE’RE READY TO WORK WITH YOU
            </h2>
            <button className=" bg-white text-[#333333] px-10 py-3 text-[16px] tracking-wider font-bold hover:bg-blue cursor-pointer hover:text-white transition">
              GET A QUOTE
            </button>
          </div>
        </section>
      </div>
      <Welcome />
    </div>
  );
}

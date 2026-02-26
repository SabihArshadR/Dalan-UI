"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const slides = ["/slider1.jpg", "/jes/image5.jpeg", "/image1.jpeg"];
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
      <section className="relative bg-black h-[750px] mt-[75px] flex items-center overflow-hidden">
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
          className={`absolute text-white lg:right-[280px] md:pl-0 pl-5 lg:top-[300px] transition-all duration-300 ${
            animateText ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 0.3s ease-out",
          }}
        >
          <h1 className="text-[24px] font-bold font-roboto tracking-widest">
            JES — OIL & GAS EPCC
          </h1>
          <h1 className="text-[44px] font-bold font-montserrat">
            <span className="text-blue">ENGINEERING</span>{" "}
            <span className="text-green">EXCELLENCE</span>
          </h1>
          <p className="text-sm max-w-[636px] font-roboto">
            Premier contractor in Pakistan and Qatar delivering full EPCC services across oil, gas, and chemical process industries. Turnkey solutions with one-point control for civil, mechanical, and E&I since 2009.
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
    </div>
  );
}

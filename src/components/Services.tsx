import { FiMonitor } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { BsCamera } from "react-icons/bs";
import { CiLaptop } from "react-icons/ci";
import { FaReact } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "PROCUREMENT & ERECTION",
      description:
        "Erection and installation of machinery, pipelines, industrial plants, gas plants, pumping and compressor stations involving civil, mechanical, piping, E&I, and commissioning works.",
      icon: <FiMonitor className="w-[66px] h-[64px]" />,
    },
    {
      title: "CONSTRUCTION SERVICES",
      description:
        "Industrial development in oil and gas fields from wellheads to hydrocarbon sales points. Construction and commissioning of central gas processing facilities and fertilizer plants.",
      icon: <FaRegLightbulb className="w-[66px] h-[64px]" />,
    },
    {
      title: "STORAGE TANKS",
      description:
        "Construction of oil and chemical storage tanks for efficient and safe storage. Design and build to meet international standards for hydrocarbon and chemical handling.",
      icon: <LuClock3 className="w-[66px] h-[64px]" />,
    },
    {
      title: "CROSS-COUNTRY PIPELINES",
      description:
        "Construction and commissioning of cross-country pipelines for oil and gas transportation. Full EPCC scope from route to sales point.",
      icon: <BsCamera className="w-[66px] h-[64px]" />,
    },
    {
      title: "FABRICATION & INSTALLATION",
      description:
        "Fabrication and installation of process and pressure vessels, LPG bullets, separators, high-pressure cylinders, columns, and rectangular oil storage and transportation tanks.",
      icon: <CiLaptop className="w-[66px] h-[64px]" />,
    },
    {
      title: "INDUSTRIAL BUILDINGS",
      description:
        "Construction of industrial buildings, central control rooms, MCC rooms, battery rooms, and onsite camps based on solid masonry or porta cabin solutions.",
      icon: <FaReact className="w-[66px] h-[64px]" />,
    },
  ];

  return (
    <section className="bg-[#FBFBFB] py-10">
      <div className="container mx-auto max-w-[1320px] text-center p-2 mt-10">
        <h2 className="text-[40px] font-montserrat font-bold tracking-[4px] mb-4">
          <span className="text-blue">OUR </span>
          <span className="text-green">SERVICES</span>
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-blue" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-green" />
        </div>
        <p className="text-[#6b6b6b] max-w-[648px] mx-auto mb-16 mt-5 text-sm font-roboto leading-6">
          JES delivers turnkey EPCC solutions with one-point control for civil, mechanical, and E&I. We combine technical excellence with strict quality and HSE standards.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 font-roboto ">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-6 text-left group "
            >
              <div
                className="bg-green w-[66px] h-[64px] px-4 flex items-center justify-center
               text-white text-3xl transition-all duration-500 
               group-hover:rotate-[360deg]"
              >
                {service.icon}
              </div>

              <div>
                <h3 className="text-[18px] font-roboto leading-6 tracking-wider font-medium mb-2 text-[#323232] group-hover:text-green">
                  {service.title}
                </h3>
                <p className="text-[#676767] text-[15px] font-roboto leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

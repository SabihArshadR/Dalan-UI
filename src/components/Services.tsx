import { FiMonitor } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { FaRegLightbulb } from "react-icons/fa";
import { BsCamera } from "react-icons/bs";
import { CiLaptop } from "react-icons/ci";
import { FaReact } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "FLOORS & ROOFS",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <FiMonitor className="w-[66px] h-[64px]" />,
    },
    {
      title: "ROOMS & HALLS",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <FaRegLightbulb className="w-[66px] h-[64px]" />,
    },
    {
      title: "BASEMENTS",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <LuClock3 className="w-[66px] h-[64px]" />,
    },
    {
      title: "CONSULTING",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <BsCamera className="w-[66px] h-[64px]" />,
    },
    {
      title: "MODERN DESIGN",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <CiLaptop className="w-[66px] h-[64px]" />,
    },
    {
      title: "24 SERVICE",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <FaReact className="w-[66px] h-[64px]" />,
    },
  ];

  return (
    <section className="bg-[#FBFBFB] py-10">
      <div className="container mx-auto max-w-[1320px] text-center p-2 mt-10">
        <h2 className="text-[40px] font-montserrat font-bold tracking-[4px] mb-4">
          <span className="text-gray-700">OUR </span>
          <span className="text-[#FFBC13]">SERVICES</span>
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
        </div>
        <p className="text-[#6b6b6b] max-w-[648px] mx-auto mb-16 mt-5 text-sm font-roboto leading-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 font-roboto ">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-6 text-left text-[#FFBC13] group "
            >
              <div
                className="bg-[#FFBC13] w-[66px] h-[64px] px-4 flex items-center justify-center
               text-white text-3xl transition-all duration-500 
               group-hover:rotate-[360deg]"
              >
                {service.icon}
              </div>

              <div>
                <h3 className="text-[18px] font-roboto leading-6 tracking-wider font-medium mb-2 text-[#323232] group-hover:text-[#FFBC13]">
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

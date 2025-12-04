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
      icon: <FiMonitor />,
    },
    {
      title: "ROOMS & HALLS",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <FaRegLightbulb />,
    },
    {
      title: "BASEMENTS",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <LuClock3 />,
    },
    {
      title: "CONSULTING",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <BsCamera />,
    },
    {
      title: "MODERN DESIGN",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <CiLaptop />,
    },
    {
      title: "24 SERVICE",
      description:
        "Lorem ipsum dolor sit consec sit tetur adipiscing elit sed do eiusmod tempo incididunt ut labore et doloreeiusmod tempor incididunt",
      icon: <FaReact />,
    },
  ];

  return (
    <section className="py-24 bg-[#FBFBFB]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-[40px] font-montserrat font-bold tracking-wider mb-4">
          <span className="text-gray-700">OUR </span>
          <span className="text-[#FFBC13]">SERVICES</span>
        </h2>
        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
        </div>
        <p className="text-[#6b6b6b] max-w-[648px] mx-auto mb-16 mt-5 text-sm font-roboto">
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
               text-white text-3xl rounded transition-all duration-500 
               group-hover:rotate-[360deg]"
              >
                {service.icon}
              </div>

              <div>
                <h3 className="text-lg tracking-wider font-semibold mb-2 text-gray-800 group-hover:text-[#FFBC13]">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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

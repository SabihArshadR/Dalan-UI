import Image from "next/image";
// import Offer1 from "@/assets/offer1.jpg";
// import Offer2 from "@/assets/offer2.jpg";
// import Offer3 from "@/assets/offer3.jpg";

import Offer1 from "../../public/image2.jpeg";
import Offer2 from "../../public/image3.jpeg";
import Offer3 from "../../public/image4.jpeg";


export default function Projects() {
  const offers = [
    {
      img: Offer1,
      title: "SECURITY PROTECTION",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      img: Offer2,
      title: "BRAND IDENTITY",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      img: Offer3,
      title: "BUSINESS STRATEGY",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] font-bold text-center font-montserrat tracking-[4px]">
          <span className="text-blue">WE</span>{" "}
          <span className="text-green">OFFER</span>{" "}
        </h2>

        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-blue" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-green" />
        </div>

        <p className="text-center max-w-[648px] mx-auto mb-12 text-[#6B6B6B] text-sm font-roboto mt-5 leading-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>

        <div className="grid lg:not-first:max-w-[1320px] mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-[17px] text-left font-roboto font-semibold mt-4 tracking-[3px] text-[#333333]">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-[#676767] text-sm font-roboto text-left mt-2 leading-[24px]">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

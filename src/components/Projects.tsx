import Image from "next/image";
import Offer1 from "@/assets/offer1.jpg";
import Offer2 from "@/assets/offer2.jpg";
import Offer3 from "@/assets/offer3.jpg";

export default function Projects() {
  const offers = [
    {
      img: Offer1,
      title: "Security Protection",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      img: Offer2,
      title: "Brand Identity",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
    {
      img: Offer3,
      title: "Business Strategy",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id lectus quis dui euismod con placerat massa nec elit egestas efficitur.",
    },
  ];

  return (
    <section className="py-20 bg-[#FBFBFB]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          <span className="text-[#414141]">WE</span>{" "}
          <span className="text-[#FFBC13]">OFFER</span>{" "}
        </h2>

        <div className="flex justify-center mt-4">
          <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
        </div>
        <div className="flex justify-center mt-1.5">
          <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
        </div>

        <p className="text-center max-w-2xl mx-auto mb-12 text-[#6B6B6B] mt-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>

        <div className="grid lg:not-first:max-w-[1320px] mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 rounded overflow-hidden shadow bg-gray-200">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-[17px] text-left font-roboto font-semibold mt-4 text-[#414141]">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B6B6B] text-sm font-roboto text-left mt-2">
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

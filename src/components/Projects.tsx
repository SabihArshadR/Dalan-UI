import Image from "next/image";
import Offer1 from "@/assets/offer1.jpg";
import Offer2 from "@/assets/offer2.jpg";
import Offer3 from "@/assets/offer3.jpg";

export default function Projects() {
  const offers = [Offer1, Offer2, Offer3];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((img, index) => (
            <div
              key={index}
              className="relative h-64 rounded overflow-hidden shadow bg-gray-200"
            >
              <Image
                src={img}
                alt={`Offer ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

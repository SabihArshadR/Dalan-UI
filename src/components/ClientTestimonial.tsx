import Image from "next/image";
import Image1 from "@/assets/client_1.jpg";
import Image2 from "@/assets/client_2.jpg";
import Image3 from "@/assets/client_3.jpg";
import Image4 from "@/assets/client_4.jpg";
import Image5 from "@/assets/client_5.jpg";
import Avatar from "@/assets/tes1.jpg";

export default function ClientTestimonial() {
  return (
    <div className="lg:h-[676px] bg-[#FBFBFB]">
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[40px] font-bold tracking-[5px] text-[#414141] font-montserrat">
            CLIENT & <span className="text-[#FFBC13]">TESTIMONIAL</span>
          </h2>
          <div className="flex justify-center mt-4">
        <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
      </div>
      <div className="flex justify-center mt-1.5">
        <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
      </div>
          <p className="text-[#6b6b6b] font-roboto text-sm max-w-[648px] mx-auto mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
            lectus quis dui euismod con placerat massa nec elit egestas
            efficitur.
          </p>
        </div>

        <div className="lg:max-w-[1320px] lg:mx-auto lg:mt-16 grid lg:grid-cols-2 gap-10 items-center px-4">
          <div className="bg-[#f2f2f2] p-8 rounded-lg shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, et verar noluisse eum, diam congue
              reformidans atomorum his id, pri te hinc expetenda. Est an mundi
              tollit iuvaret. An ius postulant reformidans. Vel an elit ludus
              fabellas, ex quando adipisci accommodare usuet verar noluisse eum
              diam.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image src={Avatar} alt="Profile" width={56} height={56} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-black">JOHN WATSON</p>
                <p className="text-sm text-gray-500">CEO At Facebook</p>
              </div>
              <span className="text-[#FFBC13] text-4xl ml-auto">&#10078;</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[Image1, Image2, Image3, Image4, Image5, Image3].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-[#f2f2f2] shadow-sm lg:w-[202px] lg:h-[145px]"
              >
                <Image
                  src={logo}
                  alt={`Client ${i + 1}`}
                  width={140}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

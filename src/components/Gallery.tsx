import Image from "next/image";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import work8 from "@/assets/work-8.jpg";

export default function Gallery() {
  const categories = [
    "All Works",
    "Garden",
    "Building",
    "Construction",
    "Interior",
  ];

  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-4xl tracking-wider mb-4">
        <span className="text-gray-700 font-semibold">OUR </span>
        <span className="text-yellow-500 font-semibold">GALLERY</span>
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
        lectus quis dui euismod con placerat massa nec elit egestas efficitur.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`flex items-center gap-2 border rounded px-3 py-1 text-sm transition
              ${
                i === 0
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "border-gray-300 text-gray-600"
              }`}
          >
            <span className="text-xs">■</span> {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {Array.from({ length: 12 }).map((_, i) => {
          const images = [
            work1,
            work2,
            work3,
            work4,
            work5,
            work6,
            work7,
            work8,
            work1,
            work5,
            work1,
            work6,
          ];
          const img = images[i % images.length];
          return (
            <div key={i} className="overflow-hidden rounded-sm shadow-sm">
              <Image
                src={img}
                alt={`Gallery Image ${i + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

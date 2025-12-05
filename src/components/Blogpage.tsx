"use client";

import Image from "next/image";
import { useState } from "react";
import Post1 from "@/assets/post1.jpg";
import Post2 from "@/assets/post2.jpg";
import Post3 from "@/assets/ins1.jpg";
import Post4 from "@/assets/ins2.jpg";
import Post5 from "@/assets/ins3.jpg";
import Post6 from "@/assets/ins4.jpg";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  return (
    <section className="bg-white pb-20">
      <div className="relative h-[600px] font-roboto">
        <div className="absolute inset-0 bg-[url('/slider2.jpg')]  transform scale-x-[-1]"></div>
        <div className="absolute top-[400px] lg:left-[300px] transform -translate-y-1/2">
          <p className="text-[14px] tracking-[5px] font-bold">
            <span className="text-[#605B5B]">Home </span>
            <span className="text-[#6E6E6E]">/ BLOG</span>
          </p>
          <h1 className="text-[45px] text-[#333333] font-medium lg:tracking-[4px]">
            LATEST NEWS
          </h1>
        </div>
      </div>

      <div className="container max-w-[1320px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20">
        <div className="lg:col-span-3 space-y-16">
          <article>
            <div className="relative h-[475px] max-w-[908px]">
              <Image
                src={Post1}
                alt="Blog Image"
                fill
                className="object-cover object-[50%_0%]"
              />
            </div>

            <h2 className="text-2xl font-roboto_condensed tracking-[2px] mt-4 text-[#333333]">
              This is full width blog post
            </h2>

            <div className="text-[#5c5c5c] text-sm mt-2 font-roboto text-[15px] tracking-[1px]">
              By : Adam Turcotte &nbsp; &nbsp; 28 / Feb , 2017 &nbsp; &nbsp;
              Comments : 4
            </div>

            <p className="text-[#676767] text-sm font-roboto mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, in urna molestie tristique.Cong erment
              sed at facilisis lacinia aliquam fusce wisi, porta ligula nibh vel
              congue diam. Sed ligula erat molestie cras morbi in facilisis eu
              elit Lorem ipsum dolor sit amet, in urna molestie tristique.Cong
              erment sed at facilisis lacinia aliquam fusce wisi, porta ligula
              nibh vel congue diam. Sed ligula erat molestie cras morbi in in
              urna molestie tristique.Cong erment sed at facilisis lacinia
              aliquam fusce wisi
            </p>

            <button className="mt-4 bg-[#FFBC13] text-white px-4 py-2 uppercase text-sm font-montserrat font-bold">
              Read more
            </button>
          </article>
          <article>
            <div className="relative h-[350px] w-full">
              <Image
                src={Post2}
                alt="Blog Image"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-roboto_condensed tracking-[2px] mt-4 text-[#333333]">
              This is full width blog post
            </h2>

            <div className="text-[#5c5c5c] text-sm mt-2 font-roboto text-[15px] tracking-[1px]">
              By : Adam Turcotte &nbsp; &nbsp; 28 / Feb , 2017 &nbsp; &nbsp;
              Comments : 4
            </div>

            <p className="text-[#676767] text-sm font-roboto mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, in urna molestie tristique.Cong erment
              sed at facilisis lacinia aliquam fusce wisi, porta ligula nibh vel
              congue diam. Sed ligula erat molestie cras morbi in facilisis eu
              elit Lorem ipsum dolor sit amet, in urna molestie tristique.Cong
              erment sed at facilisis lacinia aliquam fusce wisi, porta ligula
              nibh vel congue diam. Sed ligula erat molestie cras morbi in in
              urna molestie tristique.Cong erment sed at facilisis lacinia
              aliquam fusce wisi
            </p>

            <button className="mt-4 bg-[#FFBC13] text-white px-4 py-2 uppercase text-sm font-montserrat font-bold">
              Read more
            </button>
          </article>
          <div className="flex items-center gap-2 mt-10">
            <button className="border px-3 py-1 text-sm bg-[#FFBC13] font-roboto text-[15px] font-bold">
              &lt;
            </button>
            <button className="border px-3 py-1 text-sm bg-[#FFBC13] text-whit font-roboto text-[15px] font-bold">
              01
            </button>
            <button className="border px-3 py-1 text-sm bg-[#FFBC13] font-roboto text-[15px] font-bold">
              02
            </button>
            <button className="border px-3 py-1 text-sm bg-[#FFBC13] font-roboto text-[15px] font-bold">
              03
            </button>
            <button className="border px-3 py-1 text-sm bg-[#FFBC13] font-roboto text-[15px] font-bold">
              &gt;
            </button>
          </div>
        </div>
        <aside className="space-y-10">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-3 px-4 py-3 text-sm outline-none border-[#EFEAEA] text-[#595C5F]"
            />
          </div>
          <div>
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-[#FFBC13] text-center py-2 bg-[#F9F9F9]">
              POST CATEGORIES
            </h3>
            <ul className="space-y-3 text-[15px] tracking-[1px] font-roboto text-[#6f6f6f] ">
              <li>Windows</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>Laptop</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>Envato</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>Website</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>Development</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
            </ul>
          </div>
          <div>
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-[#FFBC13] text-center py-2 bg-[#F9F9F9]">
              RECENT POST
            </h3>
            <ul className="text-sm text-[#333333] space-y-3 font-roboto tracking-[2px] font-extralight">
              <li>
                <strong>THIS IS LATEST PIC</strong>
                <br />
                <span className="text-[#8b8b8b] text-[13px] font-normal tracking-normal">
                  25th Dec 2015
                </span>
              </li>
              <div className="w-full border-b border-[#e1e1e1] mt-7"></div>

              <li>
                <strong>THIS IS VIDEO</strong>
                <br />
                <span className="text-[#8b8b8b] text-[13px] font-normal tracking-normal">
                  25th Dec 2015
                </span>
              </li>
              <div className="w-full border-b border-[#e1e1e1] mt-7"></div>
              <li>
                <strong>GRAPHIC DESIGN</strong>
                <br />
                <span className="text-[#8b8b8b] text-[13px] font-normal tracking-normal">
                  25th Dec 2015
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-[#FFBC13] text-center py-2 bg-[#F9F9F9]">
              INSTAGRAM
            </h3>

            <div className="flex gap-2">
              <div>
                <div className="relative w-[145px] h-[116px] mb-2">
                  <Image src={Post3} alt="" fill className="object-cover " />
                </div>
                <div className="relative w-[145px] h-[116px]">
                  <Image src={Post4} alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="">
                <div className="relative w-[145px] h-[116px] mb-2">
                  <Image src={Post5} alt="" fill className="object-cover" />
                </div>
                <div className="relative w-[145px] h-[116px]">
                  <Image src={Post6} alt="" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-[#FFBC13] text-center py-2 bg-[#F9F9F9]">
              TOP TAGS
            </h3>

            <div className="flex flex-wrap gap-2">
              {["Install", "Design", "Video", "Branding", "Packaging"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2  border border-[#C3C3C3] text-xs text-[#6d6d6d]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

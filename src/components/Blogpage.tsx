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
    <section className="py-16 bg-white mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 space-y-16">
          <article>
            <div className="relative h-[350px] w-full">
              <Image
                src={Post1}
                alt="Blog Image"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold mt-4">
              This is full width blog post
            </h2>

            <div className="text-gray-500 text-sm mt-2">
              By : Adam Turcotte &nbsp; | &nbsp; 28 / Feb , 2017 &nbsp; | &nbsp;
              Comments : 4
            </div>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, in nulla molestie tristique. Congue
              ferment sed at facilisis luctus in aliquam fusce nisl, porta
              ligula nibh vel congue diam. Sed ligula eros molestie morbi in
              facilisis cras et elit.
            </p>

            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 uppercase text-xs">
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

            <h2 className="text-xl font-semibold mt-4">
              This is full width blog post
            </h2>

            <div className="text-gray-500 text-sm mt-2">
              By : Adam Turcotte &nbsp; | &nbsp; 28 / Feb , 2017 &nbsp; | &nbsp;
              Comments : 4
            </div>

            <p className="text-gray-600 mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, in nulla molestie tristique. Congue
              ferment sed at facilisis luctus in aliquam fusce nisl, porta
              ligula nibh vel congue diam.
            </p>

            <button className="mt-4 bg-yellow-500 text-white px-4 py-2 uppercase text-xs">
              Read more
            </button>
          </article>
          <div className="flex items-center gap-2 mt-10">
            <button className="border px-3 py-1 text-sm">&lt;</button>
            <button className="border px-3 py-1 text-sm bg-yellow-500 text-white">
              01
            </button>
            <button className="border px-3 py-1 text-sm">02</button>
            <button className="border px-3 py-1 text-sm">03</button>
            <button className="border px-3 py-1 text-sm">&gt;</button>
          </div>
        </div>
        <aside className="space-y-10">
          <div>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border px-4 py-2 text-sm outline-none"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-3">POST CATEGORIES</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Windows</li>
              <li>Laptop</li>
              <li>Envato</li>
              <li>Website</li>
              <li>Development</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">RECENT POST</h3>
            <ul className="text-sm text-gray-700 space-y-3">
              <li>
                <strong>THIS IS LATEST PIC</strong>
                <br />
                <span className="text-gray-500 text-xs">25th Dec 2015</span>
              </li>
              <li>
                <strong>THIS IS VIDEO</strong>
                <br />
                <span className="text-gray-500 text-xs">25th Dec 2015</span>
              </li>
              <li>
                <strong>GRAPHIC DESIGN</strong>
                <br />
                <span className="text-gray-500 text-xs">25th Dec 2015</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">INSTAGRAM</h3>

            <div className="grid grid-cols-2 gap-2">
              <div className="relative h-20">
                <Image src={Post3} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-20">
                <Image src={Post4} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-20">
                <Image src={Post5} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-20">
                <Image src={Post6} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">TOP TAGS</h3>

            <div className="flex flex-wrap gap-2">
              {["Install", "Design", "Video", "Branding", "Packaging"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border text-xs text-gray-600"
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

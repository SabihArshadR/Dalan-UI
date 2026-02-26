"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Post1 from "../../public/image7.jpeg";
import Post2 from "../../public/image8.jpeg";
import Post3 from "../../public/image6.jpeg";
import Post4 from "../../public/image5.jpeg";
import Post5 from "../../public/image3.jpeg";
import Post6 from "../../public/image2.jpeg";

// Blog posts — JES and EPCC updates
const blogPosts = [
  {
    id: 1,
    title: "EPCC delivery: one-point control for oil and gas projects",
    author: "JES Team",
    date: "28 / Feb , 2025",
    comments: 4,
    image: Post1,
    excerpt:
      "JES delivers turnkey EPCC solutions with single-point responsibility for civil, mechanical, and E&I. Streamlined project delivery from engineering through commissioning reduces interface risk and supports on-time completion for gas plants, pipelines, and industrial facilities.",
    fullHeight: true,
  },
  {
    id: 2,
    title: "Quality and HSE at the heart of every project",
    author: "JES Team",
    date: "20 / Feb , 2025",
    comments: 3,
    image: Post2,
    excerpt:
      "We maintain the highest standards of quality and Health, Safety & Environment across all projects. Our commitment to zero harm and technically robust solutions ensures reliable delivery for clients in Pakistan, Qatar, and the wider region.",
    fullHeight: false,
  },
  {
    id: 3,
    title: "Gas processing and fertilizer plants: construction and commissioning",
    author: "JES Team",
    date: "15 / Mar , 2025",
    comments: 6,
    image: Post1,
    excerpt:
      "JES has extensive experience in the construction and commissioning of central gas processing facilities and fertilizer plants. From wellheads to hydrocarbon sales points, we support industrial development in oil and gas.",
    fullHeight: true,
  },
  {
    id: 4,
    title: "Cross-country pipelines and storage tanks",
    author: "JES Team",
    date: "10 / Mar , 2025",
    comments: 2,
    image: Post2,
    excerpt:
      "Construction and commissioning of cross-country pipelines for oil and gas transportation, and construction of oil and chemical storage tanks for efficient and safe operations. Full EPCC scope with one-point control.",
    fullHeight: false,
  },
  {
    id: 5,
    title: "Fabrication and installation: vessels, LPG bullets, and process equipment",
    author: "JES Team",
    date: "05 / Mar , 2025",
    comments: 5,
    image: Post1,
    excerpt:
      "Our fabrication and installation capabilities include process and pressure vessels, LPG bullets, separators, high-pressure cylinders, columns, and rectangular oil storage and transportation tanks. Manufacturing workshop in Sadiqabad supports timely delivery.",
    fullHeight: true,
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  return (
    <section className=" pb-20 bg-white">
      <div className="relative h-[600px] font-roboto bg-black">
        <div className="absolute inset-0 bg-[url('/image1.jpeg')] opacity-20 bg-no-repeat bg-cover"></div>
        <div className="absolute top-[400px] lg:left-[300px] lg:pl-0 pl-5 transform -translate-y-1/2">
          <p className="text-[14px] tracking-[5px] font-bold">
            <span className="text-white">Home </span>
            <span className="text-white">/ BLOG</span>
          </p>
          <h1 className="text-[45px] text-white font-medium lg:tracking-[4px]">
            <span className="text-blue">LATEST</span>{" "}
            <span className="text-green">NEWS</span>
          </h1>
        </div>
      </div>

      <div className="container max-w-[1320px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20">
        <div className="lg:col-span-3 space-y-16">
          {currentPosts.map((post) => (
            <article key={post.id}>
              <div
                className={`relative ${
                  post.fullHeight ? "h-[475px]" : "h-[350px]"
                } max-w-[908px]`}
              >
                <Image
                  src={post.image}
                  alt="Blog Image"
                  fill
                  className="object-cover object-[50%_0%]"
                />
              </div>

              <h2 className="text-2xl font-roboto_condensed tracking-[2px] mt-4 text-[#333333]">
                {post.title}
              </h2>

              <div className="text-[#5c5c5c] text-sm mt-2 font-roboto text-[15px] tracking-[1px]">
                By : {post.author} &nbsp; &nbsp; {post.date} &nbsp; &nbsp;
                Comments : {post.comments}
              </div>

              <p className="text-[#676767] text-sm font-roboto mt-3 leading-relaxed">
                {post.excerpt}
              </p>

              <button className="mt-4 bg-green text-white px-4 py-2 uppercase text-sm font-montserrat font-bold">
                Read more
              </button>
            </article>
          ))}

          <nav
            className="flex flex-wrap items-center justify-center gap-2 mt-16 pt-10 border-t border-[#e8e8e8]"
            aria-label="Blog pagination"
          >
            <span className="mr-2 text-[#6b6b6b] text-sm font-roboto hidden sm:inline">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className={`min-w-[44px] h-11 px-4 flex items-center justify-center rounded font-roboto text-sm font-semibold transition-colors ${
                  currentPage === 1
                    ? "bg-[#f0f0f0] text-[#9ca3af] cursor-not-allowed"
                    : "bg-white text-[#333] border border-[#ddd] hover:border-green hover:text-green hover:bg-[#fafafa]"
                }`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    aria-label={`Page ${number}`}
                    aria-current={currentPage === number ? "page" : undefined}
                    className={`min-w-[44px] h-11 flex items-center justify-center rounded font-roboto text-sm font-semibold transition-colors ${
                      currentPage === number
                        ? "bg-green text-white border border-green shadow-sm"
                        : "bg-white text-[#555] border border-[#ddd] hover:border-green hover:text-green hover:bg-[#fafafa]"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className={`min-w-[44px] h-11 px-4 flex items-center justify-center rounded font-roboto text-sm font-semibold transition-colors ${
                  currentPage === totalPages
                    ? "bg-[#f0f0f0] text-[#9ca3af] cursor-not-allowed"
                    : "bg-white text-[#333] border border-[#ddd] hover:border-green hover:text-green hover:bg-[#fafafa]"
                }`}
              >
                Next
              </button>
            </div>
          </nav>
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
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-blue text-center py-2 bg-[#F9F9F9]">
              POST CATEGORIES
            </h3>
            <ul className="space-y-3 text-[15px] tracking-[1px] font-roboto text-[#6f6f6f] ">
              <li>EPCC Projects</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>Gas Plants</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>Pipelines</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>Storage & Tanks</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
              <li>HSE & Quality</li>
              <div className="w-full border-b border-[#e1e1e1]"></div>
            </ul>
          </div>
          <div>
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-blue text-center py-2 bg-[#F9F9F9]">
              RECENT POST
            </h3>
            <ul className="text-sm text-[#333333] space-y-3 font-roboto tracking-[2px] font-extralight">
              <li>
                <strong>EPCC AND INDUSTRIAL UPDATES</strong>
                <br />
                <span className="text-[#8b8b8b] text-[13px] font-normal tracking-normal">
                  25th Feb 2025
                </span>
              </li>
              <div className="w-full border-b border-[#e1e1e1] mt-7"></div>

              <li>
                <strong>GAS PLANTS AND PIPELINES</strong>
                <br />
                <span className="text-[#8b8b8b] text-[13px] font-normal tracking-normal">
                  20th Feb 2025
                </span>
              </li>
              <div className="w-full border-b border-[#e1e1e1] mt-7"></div>
              <li>
                <strong>QUALITY AND HSE AT JES</strong>
                <br />
                <span className="text-[#8b8b8b] text-[13px] font-normal tracking-normal">
                  15th Feb 2025
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-blue text-center py-2 bg-[#F9F9F9]">
              INSTAGRAM
            </h3>

            <div className="flex w-full gap-2">
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
            <h3 className="font-normal mb-5 font-montserrat text-[18px] text-blue text-center py-2 bg-[#F9F9F9]">
              TOP TAGS
            </h3>

            <div className="flex flex-wrap gap-2">
              {["EPCC", "Gas Plants", "Pipelines", "HSE", "Construction"].map(
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

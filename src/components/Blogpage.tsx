"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import Post1 from "../../public/image7.jpeg";
import Post2 from "../../public/image8.jpeg";
import Post3 from "../../public/image6.jpeg";
import Post4 from "../../public/image5.jpeg";
import Post5 from "../../public/image3.jpeg";
import Post6 from "../../public/image2.jpeg";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "This is full width blog post",
    author: "Adam Turcotte",
    date: "28 / Feb , 2017",
    comments: 4,
    image: Post1,
    excerpt:
      "Lorem ipsum dolor sit amet, in urna molestie tristique.Cong erment sed at facilisis lacinia aliquam fusce wisi, porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis eu elit Lorem ipsum dolor sit amet, in urna molestie tristique.Cong erment sed at facilisis lacinia aliquam fusce wisi, porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in in urna molestie tristique.Cong erment sed at facilisis lacinia aliquam fusce wisi",
    fullHeight: true,
  },
  {
    id: 2,
    title: "This is full width blog post",
    author: "Adam Turcotte",
    date: "28 / Feb , 2017",
    comments: 4,
    image: Post2,
    excerpt:
      "Lorem ipsum dolor sit amet, in urna molestie tristique.Cong erment sed at facilisis lacinia aliquam fusce wisi, porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis eu elit Lorem ipsum dolor sit amet, in urna molestie tristique.Cong erment sed at facilisis lacinia aliquam fusce wisi, porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in in urna molestie tristique.Cong erment sed at facilisis lacinia aliquam fusce wisi",
    fullHeight: false,
  },
  {
    id: 3,
    title: "Third Blog Post",
    author: "John Doe",
    date: "15 / Mar , 2017",
    comments: 8,
    image: Post1,
    excerpt:
      "This is the third blog post. It demonstrates how the pagination works with multiple posts. Morbi in in urna molestie tristique. Cong erment sed at facilisis lacinia aliquam fusce wisi.",
    fullHeight: true,
  },
  {
    id: 4,
    title: "Fourth Blog Post",
    author: "Jane Smith",
    date: "22 / Mar , 2017",
    comments: 5,
    image: Post2,
    excerpt:
      "This is the fourth blog post. It shows how the layout adapts to different content lengths and image sizes. Sed ligula erat molestie cras morbi in in urna molestie tristique.",
    fullHeight: false,
  },
  {
    id: 5,
    title: "Fifth Blog Post",
    author: "Bob Wilson",
    date: "30 / Mar , 2017",
    comments: 7,
    image: Post1,
    excerpt:
      "This is the fifth blog post. It will appear on the third page. Lorem ipsum dolor sit amet, in urna molestie tristique. Cong erment sed at facilisis lacinia aliquam fusce wisi.",
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
    <section className="bg-white pb-20">
      <div className="relative h-[600px] font-roboto">
        <div className="absolute inset-0 bg-[url('/image1.jpeg')] bg-no-repeat bg-cover"></div>
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

              <button className="mt-4 bg-[#FFBC13] text-white px-4 py-2 uppercase text-sm font-montserrat font-bold">
                Read more
              </button>
            </article>
          ))}

          {/* Pagination */}
          <div className="flex items-center gap-2 mt-10">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`border px-3 py-1 text-sm font-roboto text-[15px] font-bold ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#FFBC13] hover:bg-[#e6a90f]"
              }`}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`border px-3 py-1 text-sm font-roboto text-[15px] font-bold ${
                    currentPage === number
                      ? "bg-[#e6a90f]"
                      : "bg-[#FFBC13] hover:bg-[#e6a90f]"
                  }`}
                >
                  {number.toString().padStart(2, "0")}
                </button>
              )
            )}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`border px-3 py-1 text-sm font-roboto text-[15px] font-bold ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#FFBC13] hover:bg-[#e6a90f]"
              }`}
            >
              &gt;
            </button>
          </div>
          {/* <div className="flex items-center gap-2 mt-10">
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
          </div> */}
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

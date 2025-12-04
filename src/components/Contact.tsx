import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-[url('/slider2.jpg')] object-cover object-[50%_40%] transform scale-x-[-1]"></div>
        <div className="absolute top-1/2 lg:left-[200px]">
          <p className="text-sm font-roboto font-bold tracking-[5px]">
            <span className="text-[#605B5B]">Home </span>
            <span className="text-[#6E6E6E]">/ Contact</span>
          </p>
          <h1 className="text-[45px] font-roboto text-[#333333] font-semibold">
            CONTACT US
          </h1>
        </div>
      </div>
      <div className="w-full min-h-screen bg-white flex justify-center items-start py-24 px-6">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-[40px] font-montserrat font-bold tracking-[5px] text-[#414141]">
            GET IN <span className="text-[#FFBC13]">TOUCH</span>
          </h1>

          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-[#FFBC13]" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-[#FFBC13]" />
          </div>

          <p className="text-[#6b6b6b] text-sm font-roboto lg:max-w-[750px] mx-auto mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
            lectus quis dui euismod con placerat massa nec elit egestas
            efficitur.
          </p>

          <form className="mt-12 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 p-1 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-400 p-1 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Subject</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 p-1 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-10">
              <label className="text-sm text-gray-600">Your Message</label>
              <textarea className="w-full border-b border-gray-400 p-2 resize-none focus:outline-none"></textarea>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-[#FFBC13] text-white font-semibold px-10 py-3 tracking-wide hover:bg-black transition cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

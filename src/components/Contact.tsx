import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="relative h-[600px] bg-black">
        <div
          className="absolute inset-0 bg-[url('/image1.jpeg')] opacity-20 bg-no-repeat bg-cover"
          style={{ backgroundPosition: "50% 45%" }}
        ></div>
        <div className="absolute top-[350px] lg:left-[300px]">
          <p className="text-sm font-roboto font-bold tracking-[5px]">
            <span className="text-white">Home </span>
            <span className="text-white">/ Contact</span>
          </p>
          <h1 className="text-[45px] font-roboto text-white tracking-[2px] font-semibold">
            <span className="text-blue">CONTACT</span> <span className="text-green">US</span>
          </h1>
        </div>
      </div>
      <div className="w-full bg-white flex justify-center items-start py-24 px-6">
        <div className="max-w-[789px] w-full text-center">
          <h1 className="text-[40px] font-montserrat font-bold tracking-[4px] text-blue">
            GET IN <span className="text-green">TOUCH</span>
          </h1>

          <div className="flex justify-center mt-4">
            <div className="h-0.5 w-[100px] bg-blue" />
          </div>
          <div className="flex justify-center mt-1.5">
            <div className="h-0.5 w-[40px] bg-green" />
          </div>

          <p className="text-[#6b6b6b] text-sm font-roboto lg:max-w-[750px] mx-auto mt-6 leading-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
            lectus quis dui euismod con placerat massa nec elit egestas
            efficitur.
          </p>

          <form className="mt-12 text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="text-[15px] text-[#757575]">Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[15px] text-[#757575]">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[15px] text-[#757575]">Subject</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-10">
              <label className="text-[15px] text-[#757575]">Your Message</label>
              <textarea className="w-full border-b border-gray-400 p-2 resize-none focus:outline-none"></textarea>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="bg-green text-white font-semibold px-10 text-[15px] tracking-widest font-roboto py-3 hover:bg-black transition cursor-pointer"
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

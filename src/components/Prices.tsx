export default function Prices() {
  return (
    <div className="w-full bg-white py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[40px] font-bold tracking-[4px] text-[#414141] font-montserrat">
          OUR <span className="text-[#FFBC13] font-bold">PRICING</span>
        </h2>

        <div className="w-25 h-0.5 bg-[#FFBC13] mx-auto mt-5"></div>
        <div className="w-10 h-0.5 bg-[#FFBC13] mx-auto mt-2"></div>

        <p className="text-[#6B6B6B] leading-6 max-w-[648px] mx-auto text-sm mt-5">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Phasellus id
          lectus quis dui euismod con placerat massa nec elit egestas efficitur.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 font-montserrat">
        {/* Box */}
        <div className="shadow-md bg-[#F6F6F6] py-12 px-10 text-center">
          <h3 className="text-[#FFCD23] text-[60px]">$ 40</h3>
          <p className="text-[#FFCD23] mb-6">/Month</p>

          <h4 className="tracking-widest text-gray-700 mb-6">BUILDING</h4>

          <ul className="text-[#383636] space-y-3 mb-8 text-[13px]">
            <li>24/7 CUSTOMER SUPPORT</li>
            <li>2 UNIQUE CONCEPTS</li>
            <li>3-5 BUSINESS DAYS</li>
          </ul>

          <button className="bg-[#FFCD23] text-white px-8 py-3 rounded-sm font-semibold">
            ORDER NOW
          </button>
        </div>

        {/* Box */}
        <div className="shadow-md bg-[#F6F6F6] py-12 px-10 text-center">
          <h3 className="text-[#FFCD23] text-[60px]">$ 30</h3>
          <p className="text-[#FFCD23] mb-6">/Month</p>

          <h4 className="tracking-[3px] text-[18px] text-black mb-6">
            ARCHITECT
          </h4>

          <ul className="text-[#383636] space-y-3 mb-8 text-[13px]">
            <li>24/7 CUSTOMER SUPPORT</li>
            <li>2 UNIQUE CONCEPTS</li>
            <li>3-5 BUSINESS DAYS</li>
          </ul>

          <button className="bg-[#FFCD23] text-white px-8 py-3 rounded-sm font-semibold">
            ORDER NOW
          </button>
        </div>

        {/* Box */}
        <div className="shadow-md bg-[#F6F6F6] py-12 px-10 text-center">
          <h3 className="text-[#FFCD23] text-[60px]">$ 70</h3>
          <p className="text-[#FFCD23] mb-6">/Month</p>

          <h4 className="tracking-[3px] text-[18px] text-black mb-6">
            INTERIOR
          </h4>

          <ul className="text-[#383636] space-y-3 mb-8 text-[13px]">
            <li>24/7 CUSTOMER SUPPORT</li>
            <li>2 UNIQUE CONCEPTS</li>
            <li>3-5 BUSINESS DAYS</li>
          </ul>

          <button className="bg-[#FFCD23] text-white px-8 py-3 rounded-sm font-semibold">
            ORDER NOW
          </button>
        </div>

        {/* Box */}
        <div className="shadow-md bg-[#F6F6F6] py-12 px-10 text-center">
          <h3 className="text-[#FFCD23] text-[60px]">$ 90</h3>
          <p className="text-[#FFCD23] mb-6">/Month</p>

          <h4 className="tracking-[3px] text-[18px] text-black mb-6">
            PLUMBING
          </h4>

          <ul className="text-[#383636] space-y-3 mb-8 text-[13px]">
            <li>24/7 CUSTOMER SUPPORT</li>
            <li>2 UNIQUE CONCEPTS</li>
            <li>3-5 BUSINESS DAYS</li>
          </ul>

          <button className="bg-[#FFCD23] text-white px-8 py-3 rounded-sm font-semibold">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}

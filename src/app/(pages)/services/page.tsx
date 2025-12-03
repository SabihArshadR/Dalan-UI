import Facts from "@/components/Facts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Prices from "@/components/Prices";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-10">
        <Services />
      </div>
      <Facts />
      <Prices />
      <Footer />
    </div>
  );
};

export default page;

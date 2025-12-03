import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TeamMember from "@/components/Team";
import Welcome from "@/components/Welcome";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <div className="mt-[100px]">
        <Welcome />
      </div>
      <TeamMember />
      <Footer />
    </div>
  );
};

export default page;

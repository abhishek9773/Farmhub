import React from "react";
import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";
import Carosal from "./_component/Carosal";
import TrandingProduct from "./_component/TrandingProduct";
import Services from "./_component/Services";
import News from "./_component/News";
import Footer from "./_component/Footer";
import TrustedBy from "./_component/TrustedBy";
import { Dropdown } from "./_component/_utils/DropDown";

const Page = async () => {
  return (
    <div className="relative bg-lime-200 mx-1 pt-[70px]">
      <Navbar />
      <Carosal />
      <Hero />
      <TrandingProduct />
      <Services />
      <News />
      <TrustedBy />
      <Footer />
      <Dropdown />
    </div>
  );
};

export default Page;

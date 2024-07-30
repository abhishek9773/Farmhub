import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";
import Carosal from "./_component/Carosal";
import TrandingProduct from "./_component/TrandingProduct";
import Services from "./_component/Services";
import News from "./_component/News";
import Footer from "./_component/Footer";
import TrustedBy from "./_component/TrustedBy";

const page = () => {
  return (
    <div className="mx-4">
      <Navbar />
      <Carosal />

      <Hero />
      <TrandingProduct />
      <Services />
      <News />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default page;

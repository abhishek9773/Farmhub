import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";
import Carosal from "./_component/Carosal";
import TrandingProduct from "./_component/TrandingProduct";

const page = () => {
  return (
    <div className="m-2">
      <Navbar />
      <Carosal />

      <Hero />
      <TrandingProduct />
      <Hero />
      <Hero />
    </div>
  );
};

export default page;

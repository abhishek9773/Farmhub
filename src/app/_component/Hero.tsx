import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal, Tractor } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-amber-400 my-1 shadow-md w-screen md:w-[100%] h-screen md:h-[100%] md:py-10 ">
      <div className="flex items-center justify-center flex-col ">
        <div className=" flex items-center border shadow-sm  p-4 bg-amber-200 text-amber-700 rounded-full uppercase sm:text-center text-center">
          <Medal className="h-6 w-6 mr-2" />
          No 1 farming Service provider
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-semibold">
          FarmHub simplifies farming need.
        </h1>
        <div className="text-2xl font-semibold md:text-5xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md">
          Empowering farmers with tools
        </div>
        <div
          className={cn(
            "text-sm md:text-base text-netrual-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
            textFont.className
          )}
        >
          Streamline your farming with our all-in-one platform. Rent or acquire
          tools, access expert advice, and optimize your agricultural
          operations. Connect with fellow farmers and enhance your productivity
          effortlessly.
        </div>
        <div className="flex gap-4 sm:gap-10 md:gap-20 items-center justify-center">
          <Button className="mt-6 text-md font-normal " size={"lg"}>
            <Link href="/sign-up">
              <span className="text-lg">+</span> List for Rent
            </Link>
          </Button>
          <Button className="mt-6 text-md font-normal" size={"lg"}>
            Request Rental
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

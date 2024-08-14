import { carosalData } from "@/data/Carosal";
import Image from "next/image";
import React from "react";

const Carosal = () => {
  return (
    <div className="hidden md:block w-auto h-[130px] shadow bg-lime-50 py-1 ">
      <div className="flex gap-8 ">
        {carosalData.map((items) => (
          <div key={items.id} className="relative rounded-full md:w-[86px] md:h-[86px] lg:w-[120px] lg:h-[120px]">
            <Image
              src={items.image}
              alt=""
              layout="responsive"
              width={120} // Placeholder width
              height={120} // Placeholder height
              className="rounded-full" // Rounded corners styling
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosal;

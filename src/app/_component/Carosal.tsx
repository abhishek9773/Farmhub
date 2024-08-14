import { carosalData } from "@/data/Carosal";
import Image from "next/image";
import React from "react";

const Carosal = () => {
  return (
    <div className="hidden md:block w-auto h-[130px] shadow bg-lime-50 py-1 ">
      <div className="flex gap-8 ">
        {carosalData.map((items) => (
          <div
            key={items.id}
            className="relative w-[120px] h-[120px] rounded-full overflow-hidden"
          >
            <Image
              src={items.image}
              alt={items.image}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosal;

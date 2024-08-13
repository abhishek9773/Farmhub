import { carosalData } from "@/data/Carosal";
import React from "react";

const Carosal = () => {
  return (
    <div className="hidden md:block w-auto h-[130px] shadow bg-lime-50 py-1 ">
      <div className="flex gap-8 ">
        {carosalData.map((items) => (
          <div>
            <img
              src={items.image}
              alt=""
              className="rounded-full  md:w-[86px] md:h-[86px] lg:w-[120px] lg:h-[120px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosal;

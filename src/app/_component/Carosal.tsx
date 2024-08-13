import { carosalData } from "@/data/Carosal";
import React from "react";

const Carosal = () => {
  return (
    <div className="hidden sm:block w-[100%] h-[130px] shadow bg-lime-50 py-1 ">
      <div className="flex gap-8 ">
        {carosalData.map((items) => (
          <div>
            <img
              src={items.image}
              alt=""
              className="rounded-full w-[120px] h-[120px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosal;

import React from "react";

const TrandingProduct = () => {
  return (
    <div className="py-2">
      <div>
        <p className="font-bold text-2xl ">Tranding Product of This Weak </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 my-2 ">
        {[1, 1, 1, 1, 1, 1].map(() => (
          <div className="flex  h-[180px] bg-slate-300  justify-center items-center rounded-md shadow-sm">
            <div className=""></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrandingProduct;

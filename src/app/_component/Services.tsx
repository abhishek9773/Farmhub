import React from "react";

const Services = () => {
  return (
    <div>
      <div>
        <p className="text-2xl text-center font-bold">Service</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-2 md:gap-3">
        {[1, 1, 1, 1, 1, 1, 1, 1].map(() => (
          <div className="bg-gray-400 h-[350px] rounded-md my-1 sm:m-0"></div>
        ))}
      </div>
    </div>
  );
};

export default Services;

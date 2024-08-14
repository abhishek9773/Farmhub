import React from "react";
import { Service, ServiceArray } from "../../../data/ServiceData";
import Image from "next/image";

interface ServiceProps {
  service: ServiceArray;
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {service.map((items: Service) => (
        <div
          key={items.id}
          className="bg-lime-50 h-[380px] rounded-md flex flex-col"
        >
          <div className="relative w-full h-48 mb-1 rounded-t-sm overflow-hidden">
            <Image
              src={items.image}
              alt={items.sector}
              layout="fill"
              objectFit="cover" // Ensures the image covers the container area
              className="rounded-t-sm" // Apply rounded corners to the container
            />
          </div>
          <div className="flex flex-col flex-grow p-4">
            <h1 className="text-xl font-bold text-center mb-2">
              {items.sector}
            </h1>
            <p className="text-xs mb-4">{items.description}</p>
            {/* <div className="flex flex-wrap gap-2 mb-4">
              {items.offerings.map((item, index) => (
                <div
                  key={index}
                  className="bg-green-300 px-2 py-1 rounded-md text-xs"
                >
                  {item}
                </div>
              ))}
            </div> */}
            <div className="mt-auto flex justify-center">
              <button className="font-bold w-full text-center p-2 px-6 bg-lime-400 rounded-lg hover:bg-lime-300">
                Join
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;

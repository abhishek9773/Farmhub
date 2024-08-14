import React from "react";
import StarRating from "./StarRating";
import { Equipment, EquipmentArray } from "@/data/ProductData";
import Image from "next/image";

interface ProductCardProps {
  equipment: EquipmentArray;
}

const ProductCard: React.FC<ProductCardProps> = ({ equipment }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6 ">
      {equipment.map((item: Equipment) => (
        <div
          key={item.id}
          className="bg-lime-50/60 rounded-md shadow-sm h-auto md:h-[180px]  flex "
        >
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative w-[200px] h-full">
              <Image
                src={item.image_url}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-l-md"
              />
            </div>
          </div>
          {/* Details Section */}
          <div className="flex-1 px-4  py-2   flex flex-col h-full overflow-hidden justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
              <StarRating rating={item.rating} />
              <p className="mt-1 text-gray-700">{item.description}</p>
              <div className="inline-block px-2 py-1 mt-2 text-gray-500 bg-amber-400 rounded-md text-xs shadow-sm">
                {item.category}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between  ">
              <div className="mt-1 text-lg font-bold">
                ${item.price.toFixed(2)}
              </div>
              <button className="mt-1 py-2 text-sm text-gray-600 bg-lime-500 hover:bg-lime-400 px-4 rounded-full font-bold shadow-lg">
                {item.availability}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

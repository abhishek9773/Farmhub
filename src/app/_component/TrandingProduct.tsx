import React from "react";
import ProductCard from "../(client)/(product)/ProductCard";
import { Equipment, productData } from "@/data/ProductData";

const TrendingProduct = () => {
  return (
    <div className="pt-2 pb-1">
      <div>
        <p className="font-bold text-2xl text-center">
          Trending Product of This Week
        </p>
      </div>
      <div>
        <ProductCard equipment={productData} />
      </div>
    </div>
  );
};

export default TrendingProduct;

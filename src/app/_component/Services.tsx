import React from "react";
import ServiceCard from "../(client)/(service)/ServiceCard";
import { serviceData } from "../../data/ServiceData";

const Services = () => {
  return (
    <div>
      <div>
        <p className="text-2xl text-center pb-1 font-bold">Service</p>
      </div>
      <div>
        <ServiceCard service={serviceData} />
      </div>
    </div>
  );
};

export default Services;

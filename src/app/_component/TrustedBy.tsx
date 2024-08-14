import clsx from "clsx";
import { randomUUID } from "crypto";
import React from "react";
import { twMerge } from "tailwind-merge";
import CustomCard from "./_utils/CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
export const USERS = [
  {
    name: "Amit Sharma",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    message:
      "The CropCare tools have been a game-changer for us. We now get real-time data on crop health, which has significantly boosted our yields.",
  },
  {
    name: "Meera Patel",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    message:
      "FarmConnect has made it incredibly easy to network with local farmers and suppliers. The platform’s ease of use and support have been fantastic.",
  },
  {
    name: "Vikram Singh",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    message:
      "HarvestAssist’s efficient harvesting solutions have streamlined our processes and improved the quality of our produce. Highly recommended!",
  },
  {
    name: "Nina Rao",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    message:
      "FieldGenius’s precision tools have transformed our field management. The insights and data provided have been invaluable for our farm’s success.",
  },
  {
    name: "Rajiv Kumar",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    message:
      "EcoFarm Services have helped us move towards more sustainable farming practices. We’ve seen both environmental and economic benefits.",
  },
  {
    name: "Anita Verma",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    message:
      "GrowSmart’s resources and expert advice have greatly improved our farming operations. We’re now more efficient and productive than ever.",
  },
  {
    name: "Suresh Gupta",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    message:
      "AgriNavigator has simplified our project management. The platform’s comprehensive guidance has made a real difference in our operations.",
  },
  {
    name: "Sunita Sharma",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    message:
      "RuralResource has been a great asset in connecting with local farmers and accessing essential resources. It’s a must-have for our community.",
  },
  {
    name: "Rajesh Singh",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    message:
      "PlantPros has provided us with outstanding plant care solutions. Our crops are healthier and more productive, thanks to their expert services.",
  },
  {
    name: "Pooja Patel",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    message:
      "AgroAid’s support has been instrumental in managing our farm’s resources. The platform’s efficiency has significantly boosted our productivity.",
  },
  {
    name: "Gaurav Mehta",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    message:
      "FarmFusion’s integrated tools have streamlined our farm management. We now operate more effectively and see better results across the board.",
  },
  {
    name: "Deepika Singh",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    message:
      "The data from GrowSmart has helped us make informed decisions that have improved our crop yields and overall farm performance.",
  },
  {
    name: "Harpreet Kaur",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    message:
      "HarvestHaven’s solutions have made harvesting more efficient. We’ve noticed a significant improvement in the quality of our produce.",
  },
  {
    name: "Vinod Kumar",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    message:
      "FieldGenius’s tools have provided us with detailed insights that are crucial for managing our farm’s operations effectively.",
  },
  {
    name: "Sonia Reddy",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    message:
      "EcoFarm’s sustainable practices have been a great addition to our farm. We’re seeing both environmental benefits and cost savings.",
  },
  {
    name: "Kiran Patel",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    message:
      "AgriHub’s resources have strengthened our connections within the agricultural industry. The platform’s support has been invaluable.",
  },
  {
    name: "Ravi Sharma",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    message:
      "PlantPros has been fantastic for plant care. Our crops have thrived under their care, leading to better yields and healthier plants.",
  },
  {
    name: "Sonia Kapoor",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    message:
      "The support from HarvestAssist has made a noticeable difference in our harvesting processes. The tools provided are efficient and effective.",
  },
  {
    name: "Kiran Mehta",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    message:
      "GrowSmart’s data insights have been essential for optimizing our farm management. The platform has improved our productivity significantly.",
  },
  {
    name: "Asha Patel",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    message:
      "The comprehensive features of AgroAid have streamlined our farm management and enhanced our operational efficiency.",
  },
  {
    name: "Ramesh Kumar",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    message:
      "FarmFusion has integrated various farming tools into one platform, making it easier to manage our operations and see better results.",
  },
  {
    name: "Meera Rao",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    message:
      "EcoFarm’s solutions for sustainable farming have provided us with excellent tools and support. We’re seeing real benefits in our operations.",
  },
];

const TrustedBy = () => {
  return (
    <div className="">
      <div
        className="w-full
        bg-gray-300
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/50
          -z-100
          top-56
        "
      />
      <div
        className="mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        "
      >
        <div>
          <p className="text-3xl font-bold text-center">Trusted by all</p>
          <p className="">
            Join thousands of satisfied users who rely on our platform for their
            agricultural needs. Whether you&apos;re a farmer looking for
            essential resources or a business seeking to connect with local
            farming communities,
          </p>
        </div>
        {[...Array(2)].map((arr, index) => (
          <div
            key={randomUUID()}
            className={twMerge(
              clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                "flex-row-reverse": index === 1,
                "animate-[slide_250s_linear_infinite]": true,
                "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                "ml-[100vw]": index === 1,
              }),
              "hover:paused"
            )}
          >
            {USERS.map((testimonial, index) => (
              <CustomCard
                key={testimonial.name}
                className="w-[500px]
                  shrink-0s
                  rounded-xl
                  dark:bg-gradient-to-t
                  dark:from-border dark:to-background
                  bg-slate-50
                "
                cardHeader={
                  <div
                    className="flex
                      items-center
                      gap-4
                  "
                  >
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-foreground">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="dark:text-washed-purple-800">
                        {testimonial.name.toLocaleLowerCase()}
                      </CardDescription>
                    </div>
                  </div>
                }
                cardContent={
                  <p className="dark:text-washed-purple-800">
                    {testimonial.message}
                  </p>
                }
              ></CustomCard>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;

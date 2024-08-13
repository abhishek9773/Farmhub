export interface Equipment {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  availability: "Supply" | "Rental"; // Ensure this matches the values in your data
  rating: number;
  image_url: string;
}
export type EquipmentArray = Equipment[];

export const productData: Equipment[] = [
  {
    id: 1,
    name: "Tractor",
    category: "Farm Equipment",
    description: "Essential for plowing, planting, and various other field .",
    price: 25000,
    availability: "Supply",
    rating: 4.7,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLaAyhiBqGjAG5iviR68NFjULRtWIXMxhFW3xWv4QbW6iiDuZTMOYdvTNiWoNM2XHlUo&usqp=CAU",
  },
  {
    id: 2,
    name: "Plow",
    category: "Farm Equipment",
    description: "Used to break up and turn over soil.",
    price: 1200,
    availability: "Rental",
    rating: 4.5,
    image_url:
      "https://bamax.es/php/files/uploads/98/chisel-plough-3d-model-aQRKTSsI_200.jpg",
  },
  {
    id: 3,
    name: "Seeder/Planter",
    category: "Farm Equipment",
    description: "For planting seeds in rows or drills.",
    price: 1500,
    availability: "Supply",
    rating: 4.2,
    image_url:
      "https://www.supernewpunjab.in/img/81/posts/16419298458.jpg?w=1200&h=900&fit=crop",
  },
  {
    id: 4,
    name: "Harvester",
    category: "Farm Equipment",
    description: "Used to gather crops from the fields.",
    price: 30000,
    availability: "Rental",
    rating: 4.8,
    image_url:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/HX/VQ/OY/50694907/mahindra-swaraj-harvester-8100-500x500.jpg",
  },
  {
    id: 5,
    name: "Sprayer",
    category: "Farm Equipment",
    description: "For applying pesticides, herbicides, and fertilizers.",
    price: 1800,
    availability: "Supply",
    rating: 4.4,
    image_url:
      "https://lh3.googleusercontent.com/proxy/vysB4ROvAiVX9chphocdYMu2-08qKnQSDO5wrEqVRAho-KMPpdu5p8QX69PIZPD6CTCnEkYr5ChPhApdvoIOGGqFyN0CtsVfG9c2",
  },
  {
    id: 6,
    name: "Cultivator",
    category: "Farm Equipment",
    description: "Helps to prepare the soil and control weeds.",
    price: 2200,
    availability: "Rental",
    rating: 2.8,

    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChLCF9SzbW7sMVqPbWmBanwEA8Qie1qKv7A&s",
  },
  // {
  //   id: 7,
  //   name: "Baler",
  //   category: "Farm Equipment",
  //   description:
  //     "Compresses harvested crops into bales for storage and transportation.",
  //   price: 5000,
  //   availability: "Supply",
  //   rating: 4.3,
  //   image_url: "https://example.com/images/baler.jpg",
  // },
  // {
  //   id: 8,
  //   name: "Combine Harvester",
  //   category: "Farm Equipment",
  //   description:
  //     "Combines harvesting, threshing, and cleaning processes in one machine.",
  //   price: 60000,
  //   availability: "Rental",
  //   rating: 4.9,
  //   image_url: "https://example.com/images/combine_harvester.jpg",
  // },
  // {
  //   id: 9,
  //   name: "Irrigation System",
  //   category: "Farm Equipment",
  //   description: "For providing water to crops.",
  //   price: 3500,
  //   availability: "Supply",
  //   rating: 4.5,
  //   image_url: "https://example.com/images/irrigation_system.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Tiller",
  //   category: "Farm Equipment",
  //   description:
  //     "Used to prepare soil for planting by breaking up the surface.",
  //   price: 1400,
  //   availability: "Rental",
  //   rating: 4.4,
  //   image_url: "https://example.com/images/tiller.jpg",
  // },
];

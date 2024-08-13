export interface Service {
  id: number;
  sector: string;
  description: string;
  offerings: string[];
  image: string;
}
export type ServiceArray = Service[];

export const serviceData: Service[] = [
  // {
  //   id: 1,
  //   sector: "Crop Production",
  //   description:
  //     "Services related to growing crops, including the supply of seeds, fertilizers, pesticides, and soil testing to ensure optimal crop health and yield.",
  //   offerings: ["Seeds", "Fertilizers", "Pesticides", "Soil Tests"],
  //   image:
  //     "https://www.shutterstock.com/image-photo/asian-male-farmer-working-sugarcane-600nw-1999908107.jpg", // Replace with the actual path or URL to the image
  // },
  {
    id: 2,
    sector: "Farm Equipment and Machinery",
    description:
      "Provision of essential machinery and equipment for farming operations, including tractors, harvesters, plowing tools, and irrigation systems.",
    offerings: ["Tractors", "Harvesters", "Plowing Tools", "Irrigation"],
    image:
      "https://fieldking160052185.wordpress.com/wp-content/uploads/2022/11/agriculture-machine.jpg?w=764&h=440&crop=1", // Replace with the actual path or URL to the image
  },
  {
    id: 3,
    sector: "Irrigation Solutions",
    description:
      "Systems and technologies to manage and optimize water usage for agriculture, including drip irrigation, sprinklers, and overall water management solutions.",
    offerings: ["Drip Systems", "Sprinklers", "Water Management"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLX-vJ2szI41RTTGucnAt8tSPnpl__3fguQ&s", // Replace with the actual path or URL to the image
  },

  {
    id: 5,
    sector: "Technology and Innovation",
    description:
      "Technological solutions to improve farming efficiency, including farm management software, precision agriculture tools, and data analytics for informed decision-making.",
    offerings: ["Management Software", "Precision Tools", "Data Analytics"],
    image:
      "https://iabac.org/blog/uploads/images/202402/image_870x580_65c36f0580640.jpg", // Replace with the actual path or URL to the image
  },
  {
    id: 6,
    sector: "Agricultural Consulting",
    description:
      "Expert guidance and training to help farmers improve their operations, from crop management to business strategies.",
    offerings: ["Expert Advice", "Training"],
    image:
      "https://redresscompliance.com/wp-content/uploads/2024/02/Understanding-AI-Consulting-Services-for-Agriculture-1024x585.webp", // Replace with the actual path or URL to the image
  },
  {
    id: 7,
    sector: "Supply Chain and Logistics",
    description:
      "Logistical support for transporting, storing, and distributing agricultural products, ensuring efficient movement from farm to market.",
    offerings: ["Transportation", "Storage", "Distribution"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-0u0ySx_8Nd5d8LrDBLwG5J3hB7uRMXyOA&s", // Replace with the actual path or URL to the image
  },
  {
    id: 9,
    sector: "Financial Services",
    description:
      "Financial products and services tailored to the needs of farmers, including insurance options and financing solutions for operations and equipment.",
    offerings: ["Insurance", "Financing"],
    image:
      "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/business-banking/rural-and-agri/loans-and-advances/agricultural-finance/farm-credit/farm-mechanization/new-scheme-for-tractor/spotlight/new-scheme-for-tractor-spotlightbanner.jpg?h=400&iar=0&w=1080&hash=F9D3635C8DDA2C902D8682ACFE001807", // Replace with the actual path or URL to the image
  },
  {
    id: 10,
    sector: "Marketing and Sales",
    description:
      "Support for marketing agricultural products and conducting market research to better understand consumer needs and trends.",
    offerings: ["Product Marketing", "Market Research"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRXiM_IWXyghuFuxLJg7xmlWfhNbqdZA4sA&s", // Replace with the actual path or URL to the image
  },
  {
    id: 11,
    sector: "Startup and Entrepreneurship",
    description:
      "Support for new businesses and entrepreneurs in the farming sector, including business development resources, mentorship, and access to funding.",
    offerings: ["Business Development", "Mentorship", "Funding", "Networking"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6J1oVqNVBjQDHsB3h_2zaEU8WORPfKimg-A_0N7en9-38R8-442QrD_kF3RrQ3mU99c&usqp=CAU", // Replace with the actual path or URL to the image
  },
];

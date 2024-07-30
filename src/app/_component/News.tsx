import { subscribe } from "diagnostics_channel";
import { Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const youtubeVideoId = [
  { yid: "2dEnYffO53g" },
  {
    yid: "_qIKDoQcmYk",
  },
  { yid: "slPgqZRrGyE" },
  { yid: "ry9rnbsm_zc" },
];

// type topChannelType=[
//  { name:string | undefined,
//   channel_id: string | undefined,
//   image: string | undefined,
//   subscribe: string | undefined
//  }
// ]
const topChannel = [
  {
    name: "Innovative Farmers",
    channel_id: "@InnovativeFarmers",
    image:
      "https://yt3.googleusercontent.com/uVr-TpEXHwc_i_6SO4DMwvc6dV2xFavDGXb_KzaT1zAZOjBztHTmg-zY0TUDjGIo20ofjvRNbg=s160-c-k-c0x00ffffff-no-rj",
    subscribe: "809K subscribers",
  },
  {
    name: "Indian Farmer",
    channel_id: "@IndianFarmer",
    image:
      "https://yt3.googleusercontent.com/sPyMu2b03noMiSuQLWgemrZqov9SNA0gpRabNZ8hDxGybKuh7RgBVLgVVR5v2le0EVDsCQQu=s160-c-k-c0x00ffffff-no-rj",
    subscribe: "4.54M subscribers",
  },
  {
    name: "Hello Kisaan",
    channel_id: "@HelloKisaan",
    image:
      "https://yt3.googleusercontent.com/UVtQfHbUcvkhzMqLmBYkj5RubOj0yP5GTC6Cfh2p5X4DFCBg_zcdGZAI5XbfxFu4L_q52llXLfw=s160-c-k-c0x00ffffff-no-rj",
    subscribe: "1.61M subscribers",
  },
  {
    name: "Organic Acre",
    channel_id: "@OrganicAcre",
    image:
      "https://yt3.googleusercontent.com/14HO-rzYU6i9Fdx-GfAcPdhmWTyC2TKJk-9QJhKDm5DalB1HE_O4TeEe3u0HnpkhaqxWsMckLA=s160-c-k-c0x00ffffff-no-rj",
    subscribe: "681K subscribers",
  },
  {
    name: "Indian Farmer",
    channel_id: "@IndianFarmer",
    image:
      "https://yt3.googleusercontent.com/sPyMu2b03noMiSuQLWgemrZqov9SNA0gpRabNZ8hDxGybKuh7RgBVLgVVR5v2le0EVDsCQQu=s160-c-k-c0x00ffffff-no-rj",
    subscribe: "4.54M subscribers",
  },
  {
    name: "Indian Farmer",
    channel_id: "@IndianFarmer",
    image:
      "https://yt3.googleusercontent.com/sPyMu2b03noMiSuQLWgemrZqov9SNA0gpRabNZ8hDxGybKuh7RgBVLgVVR5v2le0EVDsCQQu=s160-c-k-c0x00ffffff-no-rj",
    subscribe: "4.54M subscribers",
  },
  {
    name: "Indian Farmer",
    channel_id: "@IndianFarmer",
    image:
      "https://yt3.googleusercontent.com/sPyMu2b03noMiSuQLWgemrZqov9SNA0gpRabNZ8hDxGybKuh7RgBVLgVVR5v2le0EVDsCQQu=s160-c-k-c0x00ffffff-no-rj",
    subscribe: "4.54M subscribers",
  },
];

const News = () => {
  return (
    <div>
      <div>
        <p className="text-3xl font-bold text-center">News</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:grid-3">
        {[1, 1, 1].map(() => (
          <div className="bg-gray-400 h-[300px] rounded shadow"></div>
        ))}
      </div>

      {/*youtube video */}
      <div className="shadow my-4 py-6">
        <div className="font-bold m-2 text-center text-2xl">Farming Idea</div>
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          {youtubeVideoId.map((items) => (
            <div className="m-1   rounded-md ">
              <iframe
                className="w-full h-60"
                src={`https://www.youtube.com/embed/${items.yid}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      {/* top channel on youtube */}
      <div className="my-2 py-2 shadow ">
        <p className="text-center font-semibold text-2xl">
          To keep yourself updated on the farming world: Top channels on YouTube
        </p>
        <div
          className="overflow-hidden
          flex "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
             animate-slide 
             
          "
            >
              {" "}
              {topChannel.map((channel) => (
                <Link href={`https://www.youtube.com/${channel.channel_id}`}>
                  {" "}
                  <div
                    key={channel.name}
                    className="flex justify-center  gap-5  items-center m-2 py-8 bg-slate-200 rounded   w-[400px]"
                  >
                    <div>
                      {" "}
                      <Image
                        src={channel.image}
                        alt={channel.name}
                        width={84}
                        height={84}
                        className="object-contain rounded-full max-w-none"
                      />
                    </div>
                    <div>
                      <div className="flex items-center jusitfy-center gap-2">
                        <p className="text-xl ">{channel.name}</p>
                        <Youtube className="text-red-500" />
                      </div>
                      <p className="font-light opacity-50">
                        {channel.subscribe}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

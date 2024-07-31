import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dropdown } from "./_utils/DropDown";
import { User } from "@supabase/supabase-js";
import Image from "next/image";

const isLogin = true;
const Navbar = ({ auth }: { auth: User }) => {
  return (
    <div>
      <div className=" fixed top-0  z-50 flex justify-between items-center  shadow-sm pt-4 pb-2 p-2 w-full  bg-white">
        <h1 className="font-bold text-2xl sm:tex-3xl block">
          Farm<span className="text-red-500">H</span>ub
        </h1>
        <div>
          <NavigationMenuDemo />
        </div>
        {auth ? (
          <div className="  flex gap-2 items-center justify-between ">
            <div>
              <Button className="text-lg font-normal px-4 " size={"lg"}>
                + List for Rant
              </Button>
            </div>
            <div className=" rounded-full bg-fuchsia-500 h-[68px] w-[68px] items-center cursor-pointer text-center">
              {auth ? (
                <Image src="" alt="user image" />
              ) : (
                <p className=" text-center font-normal py-5 ">An</p>
              )}
            </div>
            <div className=" cursor-pointer">
              <Dropdown />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="">
              <Button>Singnin</Button>
            </div>
            <div>
              <Button className="outline">signup</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

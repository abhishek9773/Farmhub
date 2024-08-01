import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";
import { Button } from "@/components/ui/button";
import { Dropdown } from "./_utils/DropDown";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

const isLogin = true;
const Navbar = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  console.log(error);

  return (
    <div>
      <div className=" fixed top-0  z-50 flex justify-between items-center  shadow-sm pt-4 pb-2 p-2 w-full  bg-white">
        <h1 className="font-bold text-2xl sm:tex-3xl block">
          Farm<span className="text-red-500">H</span>ub
        </h1>
        <div>
          <NavigationMenuDemo />
        </div>
        {!!data.user?.email ? (
          <div className="  flex gap-2 items-center justify-between ">
            <div>
              <Button className="text-lg font-normal px-4 " size={"lg"}>
                + List for Rant
              </Button>
            </div>
            <div className=" rounded-full bg-fuchsia-500 h-[68px] w-[68px] items-center cursor-pointer text-center">
              {false ? (
                <Image src="" alt="user image" />
              ) : (
                <p className=" text-center font-bold   uppercase text-xl  py-5 ">
                  {data.user?.email?.slice(0, 2)}
                </p>
              )}
            </div>
            <div className=" cursor-pointer">
              <Dropdown />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            <div className="">
              <Link
                href={"/login"}
                className="font-normal text-xl py-2 text-center flex items-center justify-center px-4 bg-black text-white rounded-md m-1 hover:opacity-60"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                href={"/login"}
                className="font-normal text-xl py-2 text-center flex items-center justify-center px-4 bg-black text-white rounded-md m-1 hover:opacity-60"
              >
                signup
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

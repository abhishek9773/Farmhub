import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";
import { Button } from "@/components/ui/button";
import { Dropdown } from "./_utils/DropDown";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

const isLogin = true;

const Navbar = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="fixed top-0 z-50 w-full bg-lime-300/60 shadow-sm pt-4 pb-2 p-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl sm:text-3xl">
          Farm<span className="text-red-500">H</span>ub
        </h1>
        <div>{/* <NavigationMenuDemo /> */}</div>
        {!!data.user?.email ? (
          <div className="flex gap-2 items-center">
            <Button className="text-lg font-normal px-4" size={"lg"}>
              + List for Rent
            </Button>
            <div className="rounded-full bg-fuchsia-500 h-[68px] w-[68px] flex items-center justify-center cursor-pointer">
              {false ? (
                <Image src="" alt="user image" />
              ) : (
                <p className="font-bold uppercase text-xl">
                  {data.user?.email?.slice(0, 2)}
                </p>
              )}
            </div>
            <Dropdown />
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              href="/login"
              className="font-normal text-xl py-2 px-4 bg-black text-white rounded-md hover:opacity-60"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="font-normal text-xl py-2 px-4 bg-black text-white rounded-md hover:opacity-60"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

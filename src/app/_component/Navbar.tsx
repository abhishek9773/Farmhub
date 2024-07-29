import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl block">
          Farm<span className="text-red-500">H</span>ub
        </h1>
      </div>
      <div>
        <NavigationMenuDemo />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div className="rounded-lg bg-slate-400 h-[68px] w-[68px] text-center">
          {false ? <img></img> : <p className=" text-center font-bold ">An</p>}
        </div>
        <div>{true ? <ChevronDown /> : <ChevronUp />}</div>
      </div>
    </div>
  );
};

export default Navbar;

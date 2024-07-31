import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";
import Carosal from "./_component/Carosal";
import TrandingProduct from "./_component/TrandingProduct";
import Services from "./_component/Services";
import News from "./_component/News";
import Footer from "./_component/Footer";
import TrustedBy from "./_component/TrustedBy";
import { Dropdown } from "./_component/_utils/DropDown";
import supabaseLogin from "@/utils/supabase/login-user";
import { AuthError, User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const page = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error && !data?.user) {
    redirect("/login");
  }
  console.log(data.user);
  return (
    <div className="container-x overflow-x-hidden">
      <Navbar auth={data} />
      <Carosal />
      <Hero />
      <TrandingProduct />

      <Services />
      <News />

      <TrustedBy />
      <Footer />

      <Dropdown />
    </div>
  );
};

export default page;

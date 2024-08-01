"use client";
import Link from "next/link";
import { MdMobileFriendly } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useState } from "react";
export default function LoginPage() {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const handleRecaptcha = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("/api/submit-form", { recaptchaValue });
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center  bg-gradient-to-b from-lime-400 to-amber-300">
      <div className=" w-[600px] flex flex-col gap-2 bg-gray-400  p-20 rounded-lg">
        <form className="flex flex-col ">
          <div className="text-center font-bold text-lg sm:text-2xl">
            Sign In to Enhance Your FarmHub Experience
          </div>

          <label htmlFor="email" className=" text-md md:text-lg font-bold mx-2">
            FirstName
          </label>
          <input
            className="p-2   m-1 text-sm sm:text-xl rounded"
            placeholder="Enter your firstName"
            id="firstname"
            name="firstname"
            type="text"
          />

          <label htmlFor="email" className=" text-md md:text-lg font-bold mx-2">
            LastName
          </label>
          <input
            className="p-2   m-1 text-sm sm:text-xl rounded"
            placeholder="Enter your lastName"
            id="lastname"
            name="lastname"
            type="text"
          />

          <label
            htmlFor="password"
            className="text-sm sm:text-lg font-bold mx-2"
          >
            moibile No:*
          </label>
          <input
            className="textlg sm:text-xl p-2 m-1 rounded"
            placeholder="Enter your password"
            id="number"
            name="number"
            type="number"
            required
          />
          <div className=" flex justify-center  w-auto my-4">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              size="normal"
              onChange={handleRecaptcha}
            />
          </div>
          <button className="flex gap-5 justify-center text-center bg-black text-white p-3 my-1 rounded font-bold hover:opacity-60 w-full">
            <MdMobileFriendly className=" text-2xl " />
            <p className="font-normal">Login with MobileNO</p>
          </button>
        </form>

        <button className="flex gap-5 justify-center  bg-black text-white p-3 my-1 rounded font-nomrmal hover:opacity-60">
          <Link href={"/"}>Back to Home</Link>
        </button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { login, signup } from "./actions";
import { FaGoogle } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";
export default function LoginPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center  bg-gradient-to-b from-lime-400 to-amber-300">
      <form className=" w-[600px] flex flex-col gap-2 bg-gray-400  p-20 rounded-lg">
        <div className="text-center font-bold text-lg sm:text-2xl">
          Sign In to Enhance Your FarmHub Experience
        </div>
        <label htmlFor="email" className=" text-md md:text-lg font-bold mx-2">
          Email
        </label>
        <input
          className="p-2   m-1 text-sm sm:text-xl rounded"
          placeholder="Enter your Email"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password" className="text-sm sm:text-lg font-bold mx-2">
          Password:
        </label>
        <input
          className="textlg sm:text-xl p-2 m-1 rounded"
          placeholder="Enter your password"
          id="password"
          name="password"
          type="password"
          required
        />
        <div className="flex gap-2 text-lg text-normal md:text-xl">
          {" "}
          <button
            className="bg-black w-full  text-white py-3 px-1 my-2  rounded hover:opacity-80"
            formAction={login}
          >
            Log in
          </button>
          <button
            className="bg-black w-full text-white py-3    px-1 my-2  rounded hover:opacity-80"
            formAction={signup}
          >
            Sign up
          </button>
        </div>
        <button className="flex gap-5 justify-center text-center bg-black text-white p-3 my-1 rounded font-bold hover:opacity-60">
          <MdMobileFriendly className=" text-2xl " />
          <p className="font-normal">Login with MobileNO</p>
        </button>
        <p className="text-center ">or</p>
        <button className="flex gap-5 justify-center  bg-black text-white p-3 my-1 rounded font-normal hover:opacity-60">
          <FaGoogle className=" text-2xl " />
          <p>Login With Google</p>
        </button>
        <button className="flex gap-5 justify-center  bg-black text-white p-3 my-1 rounded font-nomrmal hover:opacity-60">
          <Link href={"/"}>Back to Home</Link>
        </button>
      </form>
    </div>
  );
}

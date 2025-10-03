"use client";
import React, { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <img
        src="/images/patern.webp"
        className="w-full fixed top-0 left-0 opacity-5"
        alt="background pattern"
      />

      <div className="loginBox card w-full md:w-[600px] h-auto pb-20 mx-auto pt-5 lg:pt-20 relative z-50">
        <div className="text-center">
          <img src="/icon.svg" className="m-auto" alt="logo" />
        </div>

        <h1 className="text-center text-[18px] sm:text-[35px] font-[800] mt-4">
          Welcome Back! <br />
          Sign in with your credentials.
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <button
            className="!bg-none !py-2 !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.7)] flex items-center gap-2 border rounded-md"
            type="button"
          >
            <FaGoogle size={20} />
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="w-full flex items-center justify-center gap-3 my-4">
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
          <span className="text-[10px] lg:text-[14px] font-[500]">
            Or, Sign in with your email
          </span>
          <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.2)]"></span>
        </div>

        <form className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              name="email"
              defaultValue=""
            />
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Password</h4>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                name="password"
                defaultValue=""
              />
              <button
                type="button"
                className="absolute top-[7px] right-[10px] z-50 rounded-full w-[35px] h-[35px] min-w-[35px] flex items-center justify-center text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <div className="form-group mb-4 w-full flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked />
              <span>Remember Me</span>
            </label>
            <a className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700 cursor-pointer">
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-[14px]">Don't have an account?</span>
            <a
              className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700 cursor-pointer"
              href="/sign-up"
            >
              Sign Up
            </a>
          </div>

          <button
            className="btn-blue btn-lg w-full py-3 rounded-md text-white font-semibold"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;

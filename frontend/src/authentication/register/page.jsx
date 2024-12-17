/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateManage } from "../../context/StateContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Page = () => {
  const { BASE_URL } = useStateManage();
  const [showPassword, setshowPassword] = useState(false)
  const [showconfirmPassword, setshowconfirmPassword] = useState(false)
  const [confirmPassword, setconfirmPassword] = useState('')
  const [formData, setFormData] = React.useState({
    username:"",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      });
      if (response.data.message.newUser) {
        toast.success("Signup Successfull");
        setTimeout(() => {
          window.location.href = "/login";
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Signup Failed");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-[#1a1b2e]">
        <div className="w-full max-w-md p-8">
          <h1 className="text-2xl font-semibold text-white text-center mb-8">
            Sign up
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-white mb-2"
              >
                Username
              </label>
              <input
                onChange={handleChange}
                name="username"
                type="username"
                id="username"
                className="w-full px-3 py-2 rounded bg-[#252640] border border-[#373860] text-white focus:outline-none focus:border-[#6366f1]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white mb-2">
                Email
              </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded bg-[#252640] border border-[#373860] text-white focus:outline-none focus:border-[#6366f1]"
              />
            </div>

            <div className="relative">
              <label
              onClick={()=>{setshowPassword(prev)}}
                htmlFor="password"
                className="block text-sm text-white mb-2"
              >
                Password
              </label>
              <input 
                onChange={handleChange}
                name="password"
                type={showPassword ? 'text':'password'}
                
                id="password"
                className="w-full px-3 py-2 rounded bg-[#252640] border border-[#373860] text-white focus:outline-none focus:border-[#6366f1]"
              />
               <div
                className="absolute right-3 top-[38px] text-xl cursor-pointer text-white"
                onClick={() => setshowPassword((prev) => !prev)}
              >
                {showPassword ? <AiOutlineEyeInvisible className="cursor-pointer" /> : <AiOutlineEye className="cursor-pointer"/>}
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm text-white mb-2"
              >
                Confirm Password
              </label>
              <input
                type={showconfirmPassword ? 'text':'password'}
                id="password"
                onChange={(e)=>{setconfirmPassword(e.target.value)}}
                className="w-full px-3 py-2 rounded bg-[#252640] border border-[#373860] text-white focus:outline-none focus:border-[#6366f1]"
              />
               <div
                className="absolute right-3 top-[38px] text-xl cursor-pointer text-white"
                onClick={() => setshowconfirmPassword((prev) => !prev)}
              >
                {showconfirmPassword ? <AiOutlineEyeInvisible className="cursor-pointer" /> : <AiOutlineEye className="cursor-pointer"/>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#6366f1] text-white rounded hover:bg-[#5457ed] transition-colors"
            >
              Sign up
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-[#373860] text-center">
            <p className="text-white mb-4">Already have an account?</p>
            <Link to={"/login"}>
              <button className="px-6 py-2 border border-[#373860] rounded text-white hover:bg-[#252640] transition-colors">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

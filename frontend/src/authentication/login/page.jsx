/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateManage } from "../../context/StateContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";

const Page = () => {
  const {BASE_URL} = useStateManage();
  const [showPassword, setshowPassword] = useState(false)

  const [formData, setFormData] = React.useState({
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
    try{
        const response = await axios(`${BASE_URL}/login`,{
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        data: formData
      })
      if(response.data.message.AuthToken){
        toast.success('Login Successfull')
        localStorage.setItem('AuthToken',response.data.message.AuthToken )
        localStorage.setItem('hasLoggedIn', 'true')
        const decoded = jwtDecode(response.data.message.AuthToken);
        const UserRole = decoded.roleName;
        localStorage.setItem('UserRole', UserRole)
        setTimeout(() => {
          window.location.href = "/"
        }, );
      }
    }
    catch(error){
      console.log(error);
      toast.error("Login Failed")
      
    }
  };


  return (
    <>
      <ToastContainer />
      <div className="bg-[#1a1b2e]">
        <div className="min-h-screen flex items-center justify-center ">
          <div className="w-full max-w-md p-8">
            <h1 className="text-2xl font-semibold text-white text-center mb-8">
              Sign in
            </h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white mb-2"
                >
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 rounded bg-[#252640] border border-[#373860] text-white focus:outline-none focus:border-[#6366f1]"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm text-white mb-2"
                >
                  Password
                </label>
                <input
                  name="password"
                  onChange={handleChange}
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

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#6366f1] text-white rounded hover:bg-[#5457ed] transition-colors"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block text-sm text-[#6366f1] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#373860] text-center">
              <p className="text-white mb-4">Don't have an account?</p>
              <Link to={"/register"}>
                <button className="px-6 py-2 border border-[#373860] rounded text-white hover:bg-[#252640] transition-colors">
                  Create an account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

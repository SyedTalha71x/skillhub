/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import BannerImage from "../../../public/homepagebanner-bg.webp";
import company1 from "../../../public/bt-logo.webp";
import company2 from "../../../public/dell-logo.webp";
import company3 from "../../../public/fedex-logo.webp";
import company4 from "../../../public/ford-logo.webp";
import company5 from "../../../public/ge-logo.webp";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useStateManage } from "../../context/StateContext";

const Page = () => {
  const [userData, setuserData] = useState('')
  const [userName, setuserName] = useState('')
  const typedRef = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  const {BASE_URL } = useStateManage();

  const companyImages = [company1, company2, company3, company4, company5];

  useEffect(() => {
    const hasLoggedIn = localStorage.getItem('hasLoggedIn')
    if (hasLoggedIn === "true") {
      setTimeout(() => {
        setisOpen(true)
        localStorage.setItem("hasLoggedIn", "false")
      }, 3000);
    }
  }, []);

  useEffect(() => {
    const fetchProfileData = async () =>{
      const token = localStorage.getItem('AuthToken')
      try{
         const response = await axios.get(`${BASE_URL}/show-profile`, {
          headers:{
            Authorization: `Bearer ${token}`
          }
         })
         setuserData(response.data.message.showProfile)
         setuserName(response.data.message.showProfile.username)
      }
      catch(error){
        console.log(error);
        
      }
    }
    fetchProfileData();
  }, [])
  

  useEffect(() => {
    const options = {
      strings: [
        "master AI",
        "deliver faster",
        "collaborate better",
        "innovate smarter",
        "upgrade your skills",
        "streamline processes",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    };

    typedRef.current = new Typed(".typed-text", options);
    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
        <div className="bg-white p-2 w-[600px] rounded-xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100">
          <div className="relative p-6">
            <button
              onClick={()=>setisOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <IoMdClose size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome back, {userName}</h2>
              <p className="text-gray-600 mb-6">We're glad to see you again! Here's what's new since your last visit.</p>
              <div className="space-y-4">
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700">Performance Update</h3>
                  <p className="text-green-600">The app is now 2x faster!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 rounded-b-xl">
            <button
              onClick={()=>{setisOpen(false)}}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
      )}
      <main className="p-6 sm:p-10 md:p-16 lg:p-20">
        <div className="bg-[#1b1834] p-6 sm:p-10 md:p-16 lg:p-20 rounded-3xl">
          <div className="text-white text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Skillhub empowers you to
            </h1>
            <span className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mt-2">
              <span className="typed-text "></span>
            </span>
            <div className="mt-6 sm:mt-8 lg:mt-10 lg:w-[70%] w-full mx-auto text-gray-400 text-sm sm:text-base md:text-lg font-semibold">
              <p>
                Develop critical tech skills. Cut cycle times. Build happier,
                healthier tech teams. And innovate smarter using AI. All with
                Skillhub.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
              <button className="w-full sm:w-auto font-semibold rounded-3xl text-white py-3 px-6 sm:px-8 bg-red-600 hover:bg-red-500 duration-500 transition-all">
                Get Started
              </button>
              <button className="w-full sm:w-auto bg-transparent font-semibold rounded-3xl text-white border-2 border-blue-600 hover:bg-purple-600 duration-500 transition-all py-3 px-6 sm:px-8">
                Learn AI
              </button>
            </div>
            <div className="mt-6">
              <img
                src={BannerImage}
                className="h-auto w-full rounded-lg object-cover"
                alt="Banner"
              />
            </div>
            <div className="mt-[5%]">
              <h1 className="font-bold text-lg text-white">
                Organizations we've helped:
              </h1>
              <div className="flex flex-wrap lg:gap-14 md:gap-14 sm:gap-10 gap-8 justify-center mt-10">
                {companyImages.map((item, index) => (
                  <div key={index} className="h-12 flex items-center">
                    <img
                      src={item}
                      className="h-full w-auto object-contain"
                      alt="company logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

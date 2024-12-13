/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Pic from '../../../public/cloud-guru-culture.webp'
const Page = () => {
    return (
      <div className="relative cursor-pointer h-full lg:p-8 md:p-6 sm:p-4 p-4 bg-gradient-to-r from-pink-500 to-orange-500 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4">
          <div className="absolute w-2 h-2 md:w-4 md:h-4 bg-purple-500 rounded-full opacity-20" style={{ right: '10%', bottom: '20%' }} />
          <div className="absolute w-2 h-2 md:w-4 md:h-4 bg-purple-500 rounded-full opacity-20" style={{ right: '20%', bottom: '10%' }} />
          <div className="absolute w-2 h-2 md:w-4 md:h-4 bg-purple-500 rounded-full opacity-20" style={{ right: '15%', bottom: '15%' }} />
        </div>
  
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center lg:text-left">
                  A Cloud Guru:<br />
                  Learn cloud like never before
                </h1>
                <p className="text-base text-md mt-4 text-center lg:text-left">
                  The industry leader in learn-by-doing cloud skill training
                  is now part of Pluralsight! <span className="font-normal">Master the skills you need to
                  boost your career or accelerate your company's cloud
                  transformation. In fact, 96% of our business customers see
                  improved results within six months.</span> Now you can, too.
                </p>
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "100s of courses and 1000s of hands-on labs" },
                  { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", text: "Coverage of all major cloud providers" },
                  { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", text: "Real cloud development practice environments" },
                  { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", text: "Tailored-to-you learning paths for every skill level" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 md:space-x-4">
                    <div className="bg-white p-2 md:p-3 rounded-lg flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-sm">{feature.text}</p>
                  </div>
                ))}
              </div>
  
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="bg-[#1A1B2B] text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm md:text-base">
                  View Pricing
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-white hover:text-pink-500 transition-colors text-sm md:text-base">
                  Tell Me More
                </button>
              </div>
            </div>
  
            <div className="hidden lg:block relative">
              <img 
                src={Pic} 
                alt="AWS Instructor and Co-founder of ACG" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Page
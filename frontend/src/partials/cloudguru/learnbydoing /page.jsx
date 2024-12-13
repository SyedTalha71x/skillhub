/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Picture1 from '../../../../public/learn-by-doing.webp';
import Picture2 from '../../../../public/cloud-playground.webp';
import Picture3 from '../../../../public/practice-exams.webp';

const Page = () => {
  const sections = [
    {
      title: "Cloud Playground",
      description: "Learn by doing with live Cloud Playground AWS, Azure, and GCP sandboxes. Cloud along with courses, test ideas, and prep for exams.",
      imageSrc: Picture1
    },
    {
      title: "Practice Exams",
      description: "Pass on the first try. Prep for certifications with practice exams that mimic the real thing. And get personalized pointers on how to improve.",
      imageSrc: Picture2
    },
    {
      title: "Hands-on Labs",
      description: "Learn new skills faster and get your hands cloudy with thousands of real, guided labs on all things cloud from novice to guru.",
      imageSrc: Picture3
    }
  ];

  return (
    <section className="bg-blue-950 text-white h-full py-12 px-4 mt-[5%] md:px-8 lg:px-16">
      <div className="lg:w-[95%] md:w-[95%] sm:w-full w-full mx-auto">
        <h2 className="text-pink-500 font-extrabold text-lg">What's it like?</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Learn by doing</h1>
        <p className="text-gray-400 lg:w-[70%] md:w-[70%] sm:w-full w-full mb-8">
          Our learn-by-doing method gets you hands-on with the cloud, so you can build practical experience that sticks. 85% of our learners say they retain more when they learn by doing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-lg p-6">
              <div className="w-full h-36  mb-4">
                <img
                  src={section.imageSrc}
                  alt={section.title}
                  className="w-full h-full object-top   object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;

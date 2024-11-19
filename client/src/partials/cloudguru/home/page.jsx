import CloudGuru from '../../../../public/cloud-home-hero.webp'
import Python from "../../../../public/python-inky.png";
import Java from "../../../../public/java-inky.png";
import CSharp from "../../../../public/csharp-inky.png";
import AWS from "../../../../public/aws-inky.png";
import Azure from "../../../../public/azure-dark.webp";
import Kubernetes from "../../../../public/topic-kubernetes.webp";
import ReactImg from "../../../../public/react-inky.png";
import { Link } from 'react-router-dom';

const Page = () => {
    const skillTopics = [
        { name: "Python", icon: Python },
        { name: "React", icon: ReactImg },
        { name: "Java", icon: Java },
        { name: "C#", icon: CSharp },
        { name: "AWS", icon: AWS },
        { name: "Azure", icon: Azure },
        { name: "Kubernetes", icon: Kubernetes },
      ];
    
  return (
    <>
    <div className=" h-full flex items-center justify-center flex-col lg:p-16 md:p-16 sm:p-4 p-4 skill-home-container">
      <div className="bg-purple-800 rounded-3xl lg:p-12 md:p-12 sm:p-6 p-6 max-w-7xl w-full skill-home-primary-container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-red-600 font-bold mb-4">The leader in cloud learning</h2>
            <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Create a culture of cloud innovation
            </h1>
            <p className="text-gray-300 mb-8 text-md">
            Accelerate cloud success with hands-on learning at scale. Upskill 10 or 10,000 with the most comprehensive and up-to-date learning library.
            </p>
            <Link to={"/cloudguru"}>
            <button className="bg-pink-600 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-700 transition duration-300">
            View Plans
            </button>
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src={CloudGuru}
              alt="Person working on laptop"
              className="rounded-lg shadow-lg"
              />
            <div className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded">
              <span className="font-bold">aws</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded flex items-center">
              <span className="font-bold mr-2">2.61</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#4A4279_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

        <div className="max-w-7xl mt-10 mx-auto px-4 py-12 relative">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              400+ courses and 1,800+ hands-on labs
              </h2>
              <a
                href="#"
                className="inline-flex items-center text-red-600 font-bold hover:text-pink-400 transition-colors text-lg"
              >
                Browse all courses 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              {skillTopics.map((topic, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-[#1E1A3F] rounded-lg flex items-center justify-center p-3 cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  <img
                    src={topic.icon}
                    alt={`${topic.name} icon`}
                    className="w-10 h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
   
              </>
  );
};

export default Page;

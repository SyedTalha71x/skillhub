/* eslint-disable react/no-unescaped-entities */
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStateManage } from "../../context/StateContext";
import axios from "axios";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)


const Page = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [Data, setData] = useState({});
  const { BASE_URL } = useStateManage();
  const { slug } = useParams();

  useEffect(() => {
    const singleFunction = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/get-single-course/${slug}`
        );

        // const combinedData = response.data.message.newData.reduce(
        //   (acc, curr) => {
        //     return { ...acc, ...curr };
        //   },
        //   {}
        // );
        setData(response.data.message.newData);
      } catch (error) {
        console.log(error);
      }
    };
    singleFunction();
  }, [BASE_URL, slug]);

  const handlePurchase = async (courseId) =>{
    try{
        const token = localStorage.getItem('AuthToken');
        const stripe = await stripePromise;

        const response = await axios.post(`${BASE_URL}/enroll-now`, {
          courseId
        }, {headers:{
          Authorization: `Bearer ${token}`
        }})
        console.log(response.data.message.session.id );
      
        const result = await stripe.redirectToCheckout({ sessionId: response.data.message.session.id });
        if (result.error) alert('Failed to redirect to checkout');
    }
    catch(error){
      console.log(error);
      
    };
  }

  return (
    <div className="h-full bg-[#1a1833] text-white p-6 pb-14">
      <div className="lg:w-[90%] mt-[4%] md:w-[90%] sm:w-full w-full mx-auto">
        <main className="lg:p-0 md:p-0 sm:p-2 p-2 mb-9">
          <div className="container mx-auto grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-pink-600 px-3 py-1 text-sm font-medium">
                  Course
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 text-sm font-medium">
                  Skills Expanded
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
                {Data.title}
              </h1>

              <p className="mb-6 text-gray-400">by {Data.instructorName}</p>

              <p className="mb-8 text-lg text-gray-300">
                As companies grow, they develop, build, acquire, and inherit new
                systems and platforms. This course will teach you how to
                evaluate Azure Arc as a solution to improve management across
                hybrid and multi-cloud environments.
              </p>

              <div>
                <h2 className="mb-4 text-2xl font-bold">
                  What you&apos;ll learn
                </h2>
                <p className="text-gray-300">{Data.description}</p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg bg-white p-8 text-black">
                <h2 className="mb-4 text-2xl font-bold">Try for free</h2>
                <p className="mb-6 text-gray-600">
                  Get this course plus top-rated picks in tech skills and other
                  popular topics.
                </p>

                <button onClick={()=>handlePurchase(Data.id)} className="mb-4 w-full rounded-full bg-pink-600 px-6 py-3 text-center font-semibold text-white hover:bg-pink-700">
                  Enroll Now
                </button>
                <p className="mb-8 text-center text-gray-600">
                  {Data.FlagValidity === -1 ? `This is a lifetime course for US$ ${Data.price}`: `US$ ${Data.price} for ${Data.FlagValidity} months`}
                </p>

                <div>
                  <h3 className="mb-4 text-lg text-center font-semibold">
                   Start your journey today, enroll now!
                  </h3>

                  <div className="mb-6">
                    <div className="mb-2 flex items-start gap-4">
                      <div className="rounded-full bg-pink-100 p-2">
                        <svg
                          className="h-5 w-5 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Expanded library</h4>
                        <p className="text-sm text-gray-600">
                          This course and over 7,000+ additional courses from
                          our full course library.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-pink-100 p-2">
                        <svg
                          className="h-5 w-5 text-pink-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Hands-on library</h4>
                        <p className="text-sm text-gray-600">
                          Practice and apply knowledge faster in real-world
                          scenarios with projects and interactive courses.
                        </p>
                        <p className="mt-1 text-xs text-pink-600">
                          *Available on Premium only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Table of contents</h2>
            <div className="space-y-4">
              {Data.syllabus &&
                Data.syllabus.modules.map((module, moduleIndex) => (
                  <div
                    key={moduleIndex}
                    className="border-b border-gray-700 pb-4"
                  >
                    <button
                      onClick={() =>
                        setExpandedModule(
                          expandedModule === moduleIndex ? null : moduleIndex
                        )
                      }
                      className="w-full flex items-center justify-between text-left hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
                    >
                      <div className="space-y-1 ">
                        <div className="flex items-center gap-1">
                          <div>
                            <FaArrowAltCircleRight />
                          </div>
                          <h3 className="font-medium">{module.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400">
                          {module.content.length} Lessons
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedModule === moduleIndex ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedModule === moduleIndex && (
                      <div className="p-4 bg-gray-800/50 rounded-b-lg">
                        {module.content.map((lesson, lessonIndex) => {
                          return (
                            <div
                              key={lessonIndex}
                              className="py-2 text-gray-300 p-2 border-b border-gray-700 last:border-b-0"
                            >
                              <span className="font-semibold">
                                {lessonIndex + 1}
                              </span>
                              
                              . {lesson}
                           
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            <div className="mt-[4%]">
              <h2 className="text-2xl font-bold mb-6">About the author</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex-shrink-0">
                  <img
                    className="h-24 w-24 rounded-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpEJJqTsY1W4lfjPH8vajxAA991f3owVfyQ&s"
                    alt="Fernando Medina Corey"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Fernando Medina Corey</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    Fernando works full-time learning the newest trends and
                    tools in application development to share them with
                    developers and architects. Before this, he worked as a Data
                    Engineer at Curalate, analyzing data from products used by
                    hundreds of the world's leading visual brands. He also
                    writes about serverless development, data, and security
                    topics, and enjoys helping others learn about cloud
                    infrastructure.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Fernando organized the Serverless Philadelphia Meetup and
                    taught courses for the Python User Group and Girl Develop
                    It. His adorable puppy Riley will also make cameos in each
                    of his courses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Course info</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Level</span>
                  <span className="flex items-center">
                    {Data.courselvl}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Updated</span>
                  <span>{new Date(Data.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Duration</span>
                  <span>{Data.duration}</span>
                </div>
              </div>
            </div>

            {/* Skill IQ Section */}
            <div className="bg-[#2a1f4c] p-6 rounded-xl">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-pink-500 font-bold text-lg">skill</span>
                <span className="text-pink-500 font-bold text-2xl">IQ</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Not sure where to start?
              </h2>
              <p className="text-gray-300">
                Know exactly where everyone on your team stands with the skills
                you care about most
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

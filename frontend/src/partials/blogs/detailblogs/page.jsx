/* eslint-disable no-unused-vars */
import React from "react";

const blogs = [
  {
    id: 1,
    date: "Jan 01, 2023",
    title: "Clever ways to invest in product to organize your portfolio",
    description:
      "Discover smart investment strategies to streamline and organize your portfolio..",
    image: "https://pagedone.io/asset/uploads/1696244317.png",
  },
  {
    id: 2,
    date: "Feb 01, 2023",
    title: "How to grow your profit through systematic investment with us",
    description:
      "Unlock the power of systematic investment with us and watch your profits soar. Our..",
    image: "https://pagedone.io/asset/uploads/1696244340.png",
  },
  {
    id: 3,
    date: "Mar 01, 2023",
    title: "How to analyze every holdings of your portfolio",
    description:
      "Our comprehensive guide will equip you with the tools and insights needed to..",
    image: "https://pagedone.io/asset/uploads/1696244356.png",
  },
];

const BlogSection = () => {
  return (
    <>
      <div className="bg-[rgb(20,20,46)] p-24"></div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-extrabold text-4xl text-blue-950 mb-16">
            Lets Explore More
          </h2>
          <div className="flex justify-center gap-y-8 lg:gap-y-0  flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="group w-full transition-all duration-500 hover:-translate-y-4 ease-in-out hover:border-b-blue-900 cursor-pointer max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl"
              >
                <div className="flex items-center">
                  <img
                    src={blog.image}
                    alt="blog visual"
                    className="rounded-t-2xl w-full object-cover"
                  />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-indigo-600 font-medium mb-3 block">
                    {blog.date}
                  </span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                    {blog.title}
                  </h4>
                  <p className="text-gray-500 leading-6 mb-10">
                    {blog.description}
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-lg text-indigo-600 font-semibold"
                  >
                    Read more..
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;

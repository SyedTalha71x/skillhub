/* eslint-disable no-unused-vars */
import React from "react"
import Learning1 from '../../../../public/books.webp'
import Learning2 from '../../../../public/telescope.webp'
import Learning3 from '../../../../public/multi-cloud.webp'
import Learning4 from '../../../../public/chess-knight.webp'

const Page = () => {
  const sections = [
    {
      title: "Accelerate cloud strategy",
      description: "We integrate engaging content with hands-on learning-by-doing. Your people get real skills in real environments.",
      imageSrc: Learning1
    },
    {
      title: "Build cloud-ready talent",
      description: "Build cloud-literate, cloud-ready, and cloud-native talent—with experiences built for every stage of cloud maturity.",
      imageSrc: Learning2
    },
    {
      title: "Tap into multi-cloud learning",
      description: "Develop the modern tech skills needed to support any multicloud initiative, from strategy to execution.",
      imageSrc: Learning3
    },
    {
      title: "Deliver personalized learning at scale",
      description: "Learning tailored for every stage and style. Give your teams the information they need, when they need it.",
      imageSrc: Learning4
    }
  ]

  return (
    <section className="bg-gray-50 py-12 mt-[5%] px-4 md:px-8 lg:px-16">
      <div className="lg:w-[95%] md:w-[95%] sm:w-full w-full mx-auto">
        <h2 className="text-pink-600 font-extrabold text-lg">Continuous cloud learning</h2>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Your path to cloud nirvana</h1>
        <p className="text-gray-500 lg:w-[70%] md:w-[70%] sm:w-full w-full mb-8">
          ACG for Business can navigate your team from here to the cloud with our fresh, hands-on approach to continuous learning at scale — and a boatload of tools built to teach your people better and faster.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 md:gap-16 sm:gap-12 gap-11">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="w-24 h-24 mr-4 relative flex-shrink-0">
                <img
                  src={section.imageSrc}
                  alt={`${section.title} icon`}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{section.title}</h3>
                <p className="text-gray-500 mt-3 text-md">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page

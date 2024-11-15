import { Link } from 'react-router-dom';
import ACG from '../../../../public/ACG.webp'
import Skills from '../../../../public/Skills.webp'
const Page = () => {
  return (
    <div className="min-h-screen bg-[#1a1b2e] p-4  md:p-8">
         <div className='text-center py-12'>
            <h1 className='text-4xl font-bold text-white'>Get started with Skillhub</h1>
            <p className='m-auto mt-3 lg:w-[60%] md:w-full sm:w-full w-full text-gray-400 text-sm'>Develop better skills and deliver better products. Upgrade your processes and unlock your people’s potential. And it all begins right here. Is your clicking finger tingling with excitement?</p>
        </div>
      <div className="max-w-7xl mx-auto grid py-7 md:grid-cols-2 gap-6">
       
        <div className="bg-white rounded-3xl p-6 overflow-hidden">
          <div className="h-48 rounded-xl mb-6 overflow-hidden">
            <img
              src={Skills}
              alt="Programming languages and frameworks icons"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-purple-600 text-white p-2 rounded">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">SKILLS</h2>
            </div>

            <p className="text-gray-700 text-lg">
              Empower yourself or your team to develop the skills critical to
              delivering on your career goals and initiatives with our tech
              skills platform.
            </p>

            <div className="space-y-4 pt-4">
                <Link to={"/skillsplan"}>
              <button className="w-full bg-[#E31B54] text-white py-3 px-6 rounded-full hover:bg-[#C71847] transition-colors">
                View Skills plans
              </button>
                </Link>

              <button className="w-full text-[#E31B54] font-semibold flex items-center justify-center gap-2 hover:underline">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 overflow-hidden">
          <div className="h-48 rounded-xl mb-6 overflow-hidden">
            <img
              src={ACG}
              alt="Cloud services and AWS certification icons"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-[#E31B54]">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 17.5C22 19.98 19.98 22 17.5 22L6.5 22C4.02 22 2 19.98 2 17.5L2 6.5C2 4.02 4.02 2 6.5 2L17.5 2C19.98 2 22 4.02 22 6.5L22 17.5ZM20 17.5L20 6.5C20 5.12 18.88 4 17.5 4L6.5 4C5.12 4 4 5.12 4 6.5L4 17.5C4 18.88 5.12 20 6.5 20L17.5 20C18.88 20 20 18.88 20 17.5Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">A CLOUD GURU</h2>
            </div>

            <p className="text-gray-700 text-lg">
              Evolve yourself or your teams from cloud novices into cloud gurus.
              Learn by doing, level up your career, and drive cloud
              transformation with the leader in learning cloud.
            </p>

            <div className="space-y-4 pt-4">
                <Link to={"/cloudplan"}>
              <button className="w-full bg-[#E31B54] text-white py-3 px-6 rounded-full hover:bg-[#C71847] transition-colors">
                View A Cloud Guru plans
              </button>
                </Link>

              <button className="w-full text-[#E31B54] font-semibold flex items-center justify-center gap-2 hover:underline">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

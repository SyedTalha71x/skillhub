import { Check } from 'lucide-react'

const Page = () => {
  return (
    <div className="min-h-screen bg-[#1a1b2e] p-4 md:p-8">
        <div className='text-center py-12'>
            <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-white'>Plans & pricing</h1>
        </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Standard Plan */}
        <div className="bg-white rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Standard</h2>
          <p className="text-center text-gray-600 mb-8">
            Upskill with our core course library, paths, and skill assessments
          </p>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center">
              <span className="text-2xl font-medium">US$</span>
              <span className="text-7xl font-bold">9</span>
            </div>
            <span className="text-gray-600">per month</span>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8">
            <button className="w-full max-w-md bg-[#E31B54] text-white py-3 px-6 rounded-full hover:bg-[#C71847] transition-colors">
              Start with standard
            </button>
            <span className="text-gray-600">
              or start a <span className="text-[#E31B54] font-semibold">FREE trial</span>
            </span>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-lg">Standard includes:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span>Limited core library of 5,000 courses</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span>Skill and Role assessments</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span>Curated learning paths and channels</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#E31B54] to-orange-500 rounded-[28px]" />
          <div className="absolute -top-4 z-50 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E31B54] to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Best Opportunity
          </div>
          <div className="relative bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-center mb-4">Premium</h2>
            <p className="text-center text-gray-600 mb-8">
              Access our entire library of core and expanded courses, exams, projects, and interactive courses
            </p>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center">
                <span className="text-2xl font-medium">US$</span>
                <span className="text-7xl font-bold">14</span>
              </div>
              <span className="text-gray-600">per month</span>
            </div>

            <div className="flex flex-col items-center gap-4 mb-8">
              <button className="w-full max-w-md bg-[#E31B54] text-white py-3 px-6 rounded-full hover:bg-[#C71847] transition-colors">
                Start with premium
              </button>
              <span className="text-gray-600">
                or start a <span className="text-[#E31B54] font-semibold">FREE trial</span>
              </span>
              <span className="text-sm text-gray-500">Free trial excludes lab features</span>
            </div>

            <div className="space-y-6">
              <h3 className="font-bold text-lg text-[#E31B54]">
                Includes everything in Standard and more:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>
                    Access to <span className="font-semibold">full</span> library of 7,000+ courses, including advanced content, niche topics, and recordings of past tech conferences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Hands-on content and coding projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                  <span>Certification exam prep for industry-leading certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
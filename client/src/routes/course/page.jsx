export default function CoursePage() {
  return (
    <div className="min-h-screen bg-[#1a1833] text-white p-14">
      <main className="px-6 pb-12">
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
              Understanding Azure Arc for Hybrid Environments
            </h1>

            <p className="mb-6 text-gray-400">
              by Wayne Hoggett
            </p>

            <p className="mb-8 text-lg text-gray-300">
              As companies grow, they develop, build, acquire, and inherit new systems and platforms.
              This course will teach you how to evaluate Azure Arc as a solution to improve
              management across hybrid and multi-cloud environments.
            </p>

            <div>
              <h2 className="mb-4 text-2xl font-bold">What you&apos;ll learn</h2>
              <p className="text-gray-300">
                In a bid to increase agility, companies adopt or acquire hybrid and multi-cloud technologies. This growth leads
                to disparate platforms with different levels of management, governance, and security capabilities. In this course,
                Understanding Azure Arc for Hybrid Environments, you&apos;ll learn how Azure Arc can be used to ease the
                deployment, management, governance, and security of hybrid and multi-cloud environments. First, you&apos;ll learn
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">Try for free</h2>
              <p className="mb-6 text-gray-600">
                Get this course plus top-rated picks in tech skills and other popular topics.
              </p>

              <button className="mb-4 w-full rounded-full bg-pink-600 px-6 py-3 text-center font-semibold text-white hover:bg-pink-700">
                Get started
              </button>

              <p className="mb-8 text-center text-gray-600">
                US$14 per month after 10 day trial
              </p>

              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Your 10 day Premium free trial includes
                </h3>
                
                <div className="mb-6">
                  <div className="mb-2 flex items-start gap-4">
                    <div className="rounded-full bg-pink-100 p-2">
                      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Expanded library</h4>
                      <p className="text-sm text-gray-600">
                        This course and over 7,000+ additional courses from our full course library.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-pink-100 p-2">
                      <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Hands-on library</h4>
                      <p className="text-sm text-gray-600">
                        Practice and apply knowledge faster in real-world scenarios with projects and interactive courses.
                      </p>
                      <p className="mt-1 text-xs text-pink-600">*Available on Premium only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


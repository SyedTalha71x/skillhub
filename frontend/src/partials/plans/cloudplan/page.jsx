const Page = () => {
  return (
    <div className="min-h-screen bg-[#1a1333] p-4 md:p-8">
        <div className='text-center py-12'>
            <span className="text-red-600 font-extrabold text-xl "> Become a Cloud Guru</span>
            <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-white mt-3'>Plans & pricing</h1>
        </div>
      <div className="mx-auto max-w-7xl mt-[3%]">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Personal Basic */}
          <div className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold">Personal Basic</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fast-track certifications with hands-on learning
            </p>
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold">$</span>
                <span className="text-5xl font-bold">35</span>
                <span className="ml-2 text-gray-600">per month</span>
              </div>
              <p className="mt-2 text-sm text-blue-600">
                or save 17% with yearly billing
              </p>
            </div>
            <button className="mt-6 w-full rounded-lg bg-[#E31B54] px-4 py-3 text-center font-semibold text-white hover:bg-[#C4174A] transition-colors">
              Start with Basic
            </button>
            <p className="mt-4 text-center text-sm">
              Or start a <span className="text-[#E31B54]">FREE trial</span>
            </p>
          </div>

          {/* Personal Plus */}
          <div className="relative rounded-2xl bg-white p-6">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-max rounded-full bg-gradient-to-r from-[#E31B54] to-orange-500 px-4 py-1 text-sm font-semibold text-white">
              Best Opportunity
            </div>
            <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-[#E31B54] to-orange-500"></div>
            <h2 className="text-2xl font-bold">Personal Plus</h2>
            <p className="mt-2 text-sm text-gray-600">
              Learn by doing in unlimited AWS, Azure & GCP Sandboxes
            </p>
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold">$</span>
                <span className="text-5xl font-bold">47</span>
                <span className="ml-2 text-gray-600">per month</span>
              </div>
              <p className="mt-2 text-sm text-blue-600">
                or save 17% with yearly billing
              </p>
            </div>
            <button className="mt-6 w-full rounded-lg bg-[#E31B54] px-4 py-3 text-center font-semibold text-white hover:bg-[#C4174A] transition-colors">
              Start with Plus
            </button>
            <p className="mt-4 text-center text-sm">
              Or start a <span className="text-[#E31B54]">FREE trial</span>
            </p>
            <p className="mt-2 text-center text-xs text-gray-500">
              Free trial excludes sandbox features
            </p>
          </div>

          {/* Business Basic */}
          <div className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold">Business Basic</h2>
            <p className="mt-2 text-sm text-gray-600">
              Upskill teams with hands-on learning
            </p>
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold">$</span>
                <span className="text-5xl font-bold">35</span>
                <span className="text-2xl font-bold">*</span>
                <span className="ml-2 text-gray-600">per month</span>
              </div>
              <p className="mt-2 text-sm">Billed yearly, per learner</p>
              <p className="mt-1 text-sm text-gray-600">
                Requires a minimum of 2 learners
              </p>
            </div>
            <button className="mt-6 w-full rounded-lg bg-[#E31B54] px-4 py-3 text-center font-semibold text-white hover:bg-[#C4174A] transition-colors">
              Start with Basic
            </button>
          </div>

          {/* Business Plus */}
          <div className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-bold">Business Plus</h2>
            <p className="mt-2 text-sm text-gray-600">
              Customize and accelerate skills development at scale
            </p>
            <div className="mt-6">
              <div className="flex items-baseline">
                <span className="text-2xl font-semibold">$</span>
                <span className="text-5xl font-bold">49</span>
                <span className="text-2xl font-bold">*</span>
                <span className="ml-2 text-gray-600">per month</span>
              </div>
              <p className="mt-2 text-sm">Billed yearly, per learner</p>
              <p className="mt-1 text-sm text-gray-600">
                Requires a minimum of 2 learners
              </p>
            </div>
            <button className="mt-6 w-full rounded-lg bg-[#E31B54] px-4 py-3 text-center font-semibold text-white hover:bg-[#C4174A] transition-colors">
              Start with Plus
            </button>
            <p className="mt-4 text-center text-sm">
              Or <span className="text-[#E31B54]">contact sales</span>
            </p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Page;

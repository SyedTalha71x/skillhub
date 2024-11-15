/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className='bg-[#1a1b2e]'>

    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold text-white text-center mb-8">Sign in</h1>
    

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded bg-[#252640] border border-[#373860] text-white focus:outline-none focus:border-[#6366f1]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-white mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded bg-[#252640] border border-[#373860] text-white focus:outline-none focus:border-[#6366f1]"
              />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#6366f1] text-white rounded hover:bg-[#5457ed] transition-colors"
            >
            Sign in
          </button>
        </form>

        <div className="mt-6 space-y-4">
          <a href="#" className="block text-sm text-[#6366f1] hover:underline">
            Forgot password?
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#373860] text-center">
          <p className="text-white mb-4">Don't have an account?</p>
          <Link to={"/register"}>
          <button className="px-6 py-2 border border-[#373860] rounded text-white hover:bg-[#252640] transition-colors">
            Create an account
          </button>
          </Link>
        </div>
      </div>
    </div>
              </div>
  )
}

export default Page
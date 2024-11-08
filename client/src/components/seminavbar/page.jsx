/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { name: 'For individuals', href: '#', isPrimary: true },
  { name: 'For businesses', href: '#', isPrimary: true },
  { name: 'For public sector', href: '#', isPrimary: true },
  { name: 'Pluralsight', href: '#', isPrimary: false },
  { name: 'Skills', href: '#', isPrimary: false },
  { name: 'A Cloud Guru', href: '#', isPrimary: false },
  { name: 'Flow', href: '#', isPrimary: false },
  { name: 'Blog', href: '#', isPrimary: false },
]

const Page = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[rgb(20,20,46)] text-white z-[1000] cursor-pointer relative">
      <div className="mx-auto lg:w-[90%] md:w-[90%] sm:w-full w-full px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="hidden md:flex md:space-x-4">
            {navItems.filter(item => item.isPrimary).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-xl border border-blue-800 px-4 py-1.5 text-sm hover:bg-blue-900 transition-all duration-500"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden items-center md:flex md:space-x-6">
            {navItems.filter(item => !item.isPrimary).map((item) => (
              <a key={item.name} href={item.href} className="text-sm hover:text-blue-600 text-gray-300 transition-all duration-300">
                {item.name}
              </a>
            ))}
            <div className="relative">
              <button
                className="flex items-center space-x-2 rounded-full border-2 border-blue-800 hover:bg-blue-900 bg-blue-800 px-8 py-1.5 transition-all duration-500 text-sm"
                aria-haspopup="true"
              >
                <span>Sign in</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 left-0 h-full w-3/4 bg-[rgb(20,20,46)] text-white transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } z-[1100]`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="space-y-4 p-6 pt-16">
            {/* Render non-primary nav items first */}
            {navItems
              .filter((item) => !item.isPrimary)
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-1.5 text-sm border-t border-white/10 first:border-t-0"
                >
                  {item.name}
                </a>
              ))}

            {/* Render primary nav items next */}
            {navItems
              .filter((item) => item.isPrimary)
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-1.5 text-sm rounded-full border text-center border-blue-800 hover:bg-blue-900 transition-all duration-500"
                >
                  {item.name}
                </a>
              ))}

            {/* Sign in link at the bottom */}
            <a
              href="#"
              className="block rounded-full border-2 border-blue-800 hover:bg-blue-900 bg-blue-800 px-4 py-1.5 text-center text-sm transition-all duration-500"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Page

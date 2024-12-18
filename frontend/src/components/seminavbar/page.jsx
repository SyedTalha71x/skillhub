import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Skillhub', to: '/', isPrimary: false },
  { name: 'Skills', to: '/skills', isPrimary: false },
  { name: 'A Cloud Guru', to: '/cloudguru', isPrimary: false },
  { name: 'Courses', to: '/courses', isPrimary: false },
  { name: 'Blog', to: '/blogs', isPrimary: false },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () =>{
    localStorage.removeItem('AuthToken');
    setTimeout(() => {
      window.location.href = 'http://localhost:5173/';
    }, 1000);
  }

  return (
    <nav className="bg-[rgb(20,20,46)] text-white z-[1000] cursor-pointer relative">
      <div className="mx-auto lg:w-[90%] md:w-[90%] sm:w-full w-full px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="hidden md:flex md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-sm hover:text-blue-600 text-gray-300 transition-all duration-300"
              >
                {item.name}
              </Link>
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

          <div className="hidden md:flex space-x-4">
            <div className="relative">
              <Link to="/login">
                <button
                  className="flex items-center space-x-2 rounded-full border-2 border-blue-800 hover:bg-blue-900 bg-blue-800 px-8 py-1.5 transition-all duration-500 text-sm"
                  aria-haspopup="true"
                >
                  {localStorage.getItem('AuthToken') ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <span>Sign in</span>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </div>

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
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block px-4 py-1.5 text-sm border-t border-white/10 first:border-t-0"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block rounded-full border-2 border-blue-800 hover:bg-blue-900 bg-blue-800 px-4 py-1.5 text-center text-sm transition-all duration-500"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Page;

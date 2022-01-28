import React, { useState } from 'react';
import { BsPerson, BsPlus, BsTextLeft } from 'react-icons/bs';
import { BiPlanet } from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import BlogCreateSlide from './BlogCreateSlide';
import { useAuthContext } from '../contexts/AuthProvider';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/',
  },
  {
    id: 3,
    name: 'Blogs',
    href: '/blogs',
  },
];
const Header = () => {
  const { user, userSignOut, admin } = useAuthContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isBlogSlideOpen, setIsBlogSlideOpen] = useState(false);
  const navigate = useNavigate();
  const handleBlogSlide = () =>
    user.email ? openBlogSlide() : navigate('/user/login');
  const openBlogSlide = () => setIsBlogSlideOpen(true);
  const closeBlogSlide = () => setIsBlogSlideOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);
  return (
    <>
      <BlogCreateSlide
        closeBlogSlide={closeBlogSlide}
        isBlogSlideOpen={isBlogSlideOpen}
      />
      <nav className="bg-white shadow-sm z-10 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center">
            <div className="flex-1 flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center md:hidden">
                {/* <!-- Mobile menu button--> */}
                <button
                  onClick={toggleMobileMenu}
                  className="inline-flex bg-sky-500 shadow-md shadow-sky-300 text-white items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  <BsTextLeft className="h-6 w-6" />
                </button>
              </div>
              <Link
                to="/"
                className="flex-shrink-0 text-4xl text-sky-500 drop-shadow-lg flex items-center"
              >
                <BiPlanet className="" />
                <span className="text-2xl font-medium text-gray-600">
                  TSphere
                </span>
              </Link>
              <div className="hidden md:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {navLinks.map(({ id, name, href }) => {
                    return (
                      <NavLink
                        end
                        key={id}
                        to={href}
                        className={({ isActive }) =>
                          isActive
                            ? 'bg-sky-500 shadow-sky-300 shadow-md text-white px-3 py-2 rounded-md text-sm font-medium'
                            : 'text-gray-400 hover:text-sky-500 px-3 py-2 rounded-md text-sm font-medium'
                        }
                      >
                        {name}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
              <div className="inset-y-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <div className="mr-1 relative">
                  <div>
                    <button
                      onClick={handleBlogSlide}
                      className="flex items-center bg-sky-500 shadow-sky-300 shadow-md text-white px-2 py-2 rounded-md text-sm font-medium"
                    >
                      <BsPlus className="h-6 w-6" />
                      <span className="hidden sm:block">Add Blog</span>
                    </button>
                  </div>
                </div>
                {/* <!-- Profile dropdown --> */}
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                      className="bg-sky-500 flex text-sm rounded-full focus:outline-none border-2 shadow-lg border-white"
                    >
                      {user.email && user.photoURL ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.photoURL}
                          alt={user?.name}
                        />
                      ) : (
                        <BsPerson className="text-white h-10 w-10 p-2 rounded-full" />
                      )}
                    </button>
                  </div>
                  <div
                    className={`${
                      isProfileMenuOpen
                        ? 'opacity-100 scale-1'
                        : 'opacity-0 scale-0 pointer-events-none'
                    } z-50 p-2 bg-white transform transition ease-out duration-300 origin-top-right absolute right-0 w-52 rounded-lg overflow-hidden shadow-xl space-y-1 bg-bg focus:outline-none`}
                  >
                    {user?.email && (
                      <h1 className="text-gray-800 border-b block px-3 py-2 rounded-md text-sm">
                        {user?.displayName}
                      </h1>
                    )}
                    {user.email && admin && (
                      <NavLink
                        to="/dashboard"
                        onClick={closeProfileMenu}
                        className={({ isActive }) =>
                          isActive
                            ? 'bg-sky-500 text-white shadow-md shadow-sky-300 block px-3 py-2 rounded-md text-sm'
                            : 'text-gray-400 hover:text-sky-500 block px-3 py-2 rounded-md text-sm'
                        }
                      >
                        Dashboard
                      </NavLink>
                    )}
                    {user.email && (
                      <button
                        onClick={() => {
                          userSignOut();
                          closeProfileMenu();
                          navigate('/user/login');
                        }}
                        className="text-gray-400 w-full text-left hover:text-sky-500 block px-3 py-2 rounded-md text-sm"
                      >
                        Log Out
                      </button>
                    )}
                    {!user.email && (
                      <NavLink
                        end
                        to="/user/login"
                        onClick={closeProfileMenu}
                        className={({ isActive }) =>
                          isActive
                            ? 'bg-sky-500 text-white shadow-md shadow-sky-300 block px-3 py-2 rounded-md text-sm'
                            : 'text-gray-400 hover:text-sky-500 block px-3 py-2 rounded-md text-sm'
                        }
                      >
                        Log In
                      </NavLink>
                    )}

                    {!user.email && (
                      <NavLink
                        end
                        to="/user/register"
                        onClick={closeProfileMenu}
                        className={({ isActive }) =>
                          isActive
                            ? 'bg-sky-500 text-white shadow-md shadow-sky-300 block px-3 py-2 rounded-md text-sm'
                            : 'text-gray-400 hover:text-sky-500 block px-3 py-2 rounded-md text-sm'
                        }
                      >
                        Register
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {/* {isMobileMenuOpen && ( */}
        <div
          className={`${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-6 opacity-0 pointer-events-none'
          } transform transition duration-300 w-full origin-top shadow-2xl z-30 md:hidden absolute bg-white rounded-b-xl`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ id, name, href }) => {
              return (
                <NavLink
                  end
                  key={id}
                  to={href}
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-sky-500 shadow-sky-300 shadow-md text-white block px-3 py-2 rounded-md text-base font-medium'
                      : 'text-gray-400 hover:text-sky-500 block px-3 py-2 rounded-md text-base font-medium'
                  }
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
        {/* )} */}
      </nav>
    </>
  );
};

export default Header;

import React from 'react';
import { BiUser } from 'react-icons/bi';
import {
  BsGrid,
  BsFileEarmarkRichtext,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const DashboradWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-2">
              {/* <!-- Current: "bg-gray-50 text-orange-600 hover:bg-white", Default: "text-gray-900 hover:text-gray-900 hover:bg-gray-50" --> */}
              <NavLink
                end
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-sky-500 shadow-sky-300 shadow-md group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                    : 'text-gray-600 hover:text-sky-500 group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                }
              >
                <BsGrid className="flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                <span className="truncate">Dashboard</span>
              </NavLink>
              <NavLink
                end
                to="/dashboard/users"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-sky-500 shadow-sky-300 shadow-md group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                    : 'text-gray-600 hover:text-sky-500 group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                }
              >
                <BiUser className="flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                <span className="truncate">Users</span>
              </NavLink>
              <NavLink
                end
                to="/dashboard/blogs"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-sky-500 shadow-sky-300 shadow-md group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                    : 'text-gray-600 hover:text-sky-500 group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                }
              >
                <BsFileEarmarkRichtext className="flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
                <span className="truncate">Blogs</span>
              </NavLink>
            </nav>
          </aside>

          {/* <!-- Payment details --> */}
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section aria-labelledby="payment-details-heading">
              {/*  */}
              {children}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboradWrapper;

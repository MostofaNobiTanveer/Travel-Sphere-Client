import React, { useEffect, useState } from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BsFileEarmarkRichtext, BsPerson } from 'react-icons/bs';
import { useAuthContext } from '../../contexts/AuthProvider';
import { useBlogContext } from '../../contexts/BlogProvider';

const DashboardHome = () => {
  const { blogs } = useBlogContext();
  const [users, setUsers] = useState([]);
  const { user, adminLoading } = useAuthContext();
  useEffect(() => {
    fetch('https://fathomless-eyrie-68291.herokuapp.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <section className="relative">
      {adminLoading && (
        <div className="absolute inset-0 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"></div>
      )}
      {/* <!-- Page header --> */}
      <div>
        <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div className="pb-6 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              {/* <!-- Profile --> */}
              <div className="flex items-center">
                {user.photoURL ? (
                  <img
                    className="hidden h-16 w-16 rounded-full sm:block"
                    src={user.photoURL}
                    alt={user.name}
                  />
                ) : (
                  <BsPerson className="hidden p-2 bg-sky-500 h-16 w-16 rounded-full sm:block text-white" />
                )}
                <div>
                  <div className="flex items-center">
                    {user.photoURL ? (
                      <img
                        className="h-16 w-16 rounded-full sm:hidden"
                        src={user.photoURL}
                        alt={user.name}
                      />
                    ) : (
                      <BsPerson className="hidden p-2 bg-sky-500 h-16 w-16 rounded-full sm:hidden text-white" />
                    )}
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      Welcome, {user.displayName}
                    </h1>
                  </div>
                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      <HiOutlineBadgeCheck className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" />
                      Admin
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Overview
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* <!-- Card --> */}

            <div className="bg-white shadow-lg shadow-sky-100 overflow-hidden rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* <!-- Heroicon name: outline/scale --> */}
                    <FiUsers className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-md font-medium text-gray-500 truncate">
                        Registered Users
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {users.length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-sky-500 px-5 py-3">
                <div className="text-sm">
                  <Link
                    to="/dashboard/users"
                    className="font-medium block text-white"
                  >
                    View all
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg shadow-sky-100 overflow-hidden rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* <!-- Heroicon name: outline/scale --> */}
                    <BsFileEarmarkRichtext className="h-10 w-10 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-md font-medium text-gray-500 truncate">
                        All Blogs
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          {blogs.length}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-sky-500 px-5 py-3">
                <div className="text-sm">
                  <Link
                    to="/dashboard/blogs"
                    className="font-medium block text-white"
                  >
                    View all
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [roleUpdate, setRoleUpdate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    setLoading(true);
    fetch('https://fathomless-eyrie-68291.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setRoleUpdate(!roleUpdate);
        toast(`${email} is now Admin`);
        setEmail('');
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch('https://fathomless-eyrie-68291.herokuapp.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, [roleUpdate]);
  return (
    <div className="py-6 relative">
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 text-lg font-medium text-neutral-600 bg-gray-50">
              Make an Admin
            </span>
          </div>
        </div>
        <div className="pt-4 pb-12">
          {/* content */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
            <div className="">
              <label htmlFor="email" className="block text-md text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  placeholder="example@email.com"
                  required
                  className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-sky-500 shadow-md shadow-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Make Admin
            </button>
          </form>
        </div>
      </div>
      {/* Users List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-start">
            <span className="pr-3 text-lg font-medium text-neutral-600 bg-gray-50">
              All Users
            </span>
          </div>
        </div>
        <div className="pt-8">
          {/* content */}
          <ul className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {users.map(({ _id, email, displayName, photoURL, role }) => {
              return (
                <li
                  key={_id}
                  className="bg-white p-4 rounded-lg shadow-xl shadow-sky-100"
                >
                  <div className="space-y-20">
                    <div className="space-y-2 border-l-4 border-sky-400 rounded -ml-4">
                      <div className="truncate font-medium pl-2 text-xs">
                        <h3 className="truncate capitalize">{displayName}</h3>
                        <p className="text-gray-400 truncate">{email}</p>
                      </div>
                    </div>
                    <div className="relative">
                      {photoURL ? (
                        <img
                          className="h-12 w-12 rounded-full"
                          src={photoURL}
                          alt={displayName.split(' ').slice(-1).join(' ')}
                        />
                      ) : (
                        <svg
                          className="h-12 w-12 bg-gradient-to-br from-sky-500 to-green-300 rounded-full overflow-hidden"
                          fill="white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                      {role && role === 'admin' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 absolute bottom-0 left-8"
                          fill="lightgreen"
                          viewBox="0 0 24 24"
                          stroke="white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}

            {/* <!-- More people... --> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Users;

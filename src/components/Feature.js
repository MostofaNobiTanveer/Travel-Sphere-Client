import React from 'react';
import { FaRegHandshake, FaRegNewspaper } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

const Feature = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="container mx-auto grid items-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <dt className="flex flex-col lg:flex-row items-center gap-3 md:gap-5">
            <div className="flex items-center justify-center h-14 w-14 rounded-md bg-sky-50 text-sky-500">
              <FaRegHandshake className="h-8 w-8" />
            </div>
            <p className="text-md md:text-lg text-center lg:text-left leading-6 font-medium text-gray-900">
              An active and committed <br /> Travelsphere community
            </p>
          </dt>
          <dt className="flex flex-col lg:flex-row items-center gap-3 md:gap-5">
            <div className=" flex items-center justify-center h-14 w-14 rounded-md bg-sky-50 text-sky-500">
              <FaRegNewspaper className="h-8 w-8" />
            </div>
            <p className="text-md text-center lg:text-left md:text-lg leading-6 font-medium text-gray-900">
              Experience shared by <br /> satisfied tourists
            </p>
          </dt>
          <dt className="flex flex-col lg:flex-row items-center gap-3 md:gap-5">
            <div className=" flex items-center justify-center h-14 w-14 rounded-md bg-sky-50 text-sky-500">
              <BsHeart className="h-8 w-8" />
            </div>
            <p className="text-md text-center lg:text-left md:text-lg leading-6 font-medium text-gray-900">
              Full satisfaction and <br /> enjoyable tour
            </p>
          </dt>
        </dl>
      </div>
    </div>
  );
};

export default Feature;

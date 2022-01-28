import React from 'react';
import { BiPlanet } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white bg-sky-500">
      <div className="container px-5 lg:px-10 py-8 mx-auto flex items-center md:flex-row flex-col">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <BiPlanet className="w-14 h-14 text-white p-2 rounded-full" />
          <span className="text-2xl">Travel Sphere</span>
        </Link>
        <p className="text-sm text-gray-50 md:ml-4 md:pl-4 md:border-l-2 md:border-gray-200 md:py-2 md:mt-0 mt-4">
          © 2022 Travel Sphere —<span>@Mostofa-Nobi</span>
        </p>
        <p className="flex gap-5 md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
          <span>
            <FaFacebookF className="w-5 h-5" />
          </span>
          <span>
            <FaTwitter className="w-5 h-5" />
          </span>
          <span>
            <FaInstagram className="w-5 h-5" />
          </span>
          <span>
            <FaLinkedinIn className="w-5 h-5" />
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

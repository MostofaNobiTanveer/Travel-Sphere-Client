import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import ScrollToTop from '../utils/ScrollToTop';
import Rating from '../utils/Rating';

const SingleBlogPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState({});
  console.log(id);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fathomless-eyrie-68291.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div className="bg-white overflow-hidden">
      <ScrollToTop />
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto border-b pb-6 text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-sm text-gray-600 font-semibold tracking-wide uppercase">
              {blog.createdAt?.slice(0, 10)}
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-medium tracking-tight text-gray-900 sm:text-5xl">
              {blog.title}
            </h3>
            <div className="flex items-center justify-between gap-2 mt-4">
              <h2 className="text-base flex items-center gap-2 text-sky-500 font-semibold tracking-wide uppercase">
                <GoLocation className="text-sky-500 text-xl" />{' '}
                {blog.tour_place_name}
              </h2>
              <h2 className="mb-1 text-base flex items-center  text-sky-500 font-semibold tracking-wide uppercase">
                <Rating value={parseInt(blog.tour_rating)} />
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={
                      blog?.tour_feature_image ||
                      'https://i.ibb.co/41ZSz4j/annie-spratt-qy-Aka7-W5u-MY-unsplash.jpg'
                    }
                    alt="Whitney leaning against a railing on a downtown street"
                    width="1184"
                    height="1376"
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  {/* <!-- Heroicon name: solid/camera --> */}
                  <svg
                    className="flex-none w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Photograph by {blog.name}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">{blog.tour_details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

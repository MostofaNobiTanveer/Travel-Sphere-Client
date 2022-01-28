import React from 'react';
import { useBlogContext } from '../contexts/BlogProvider';
import { Link } from 'react-router-dom';

const BlogList = ({ title, count }) => {
  const { isLoading, blogs } = useBlogContext();
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute z-50 inset-0 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"></div>
      )}
      <div className="mx-auto pb-16 px-4 sm:py-8 sm:px-6 w-full lg:px-8">
        <h2 className="text-4xl font-bold fill-white text-gray-900">{title}</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
          {blogs
            .filter((blog) => blog.approved)
            .slice(0, count)
            .map((blog) => {
              return (
                <Link
                  to={`/blogs/${blog._id}`}
                  key={blog._id}
                  className="group relative"
                >
                  <div className="w-full sm:h-40 h-56 bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-75 group-hover:blur-[1.5px]">
                    <img
                      src={
                        blog?.tour_feature_image ||
                        'https://i.ibb.co/41ZSz4j/annie-spratt-qy-Aka7-W5u-MY-unsplash.jpg'
                      }
                      alt="feature_image"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="mt-2 flex flex-col">
                    <div className="text-sm flex gap-2 text-gray-400 truncate">
                      <span>{blog.name}</span>
                      <span>{blog.createdAt.slice(0, 10)}</span>
                    </div>
                    <h3 className="text-md font-semibold leading-5 text-gray-700">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

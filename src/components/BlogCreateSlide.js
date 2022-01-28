import React, { useRef, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { useAuthContext } from '../contexts/AuthProvider';
import { useBlogContext } from '../contexts/BlogProvider';

const BlogCreateSlide = ({ isBlogSlideOpen, closeBlogSlide }) => {
  const formRef = useRef(null);
  const { user, admin } = useAuthContext();
  const { postNewBlog } = useBlogContext();
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, name: user.displayName });
    const approved = admin ? true : false;
    const name = user.displayName;
    const createdAt = new Date();
    postNewBlog({ ...formData, name, approved, createdAt });
    closeBlogSlide();
    formRef.current.reset();
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div
      className={`${
        isBlogSlideOpen ? '' : 'pointer-events-none'
      } fixed inset-0 overflow-hidden z-50`}
    >
      <div
        onClick={closeBlogSlide}
        className={`${
          isBlogSlideOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transform transition duration-300 fixed inset-0 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30`}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div
          className={`${
            isBlogSlideOpen ? 'translate-x-0' : 'translate-x-full'
          } transform transition duration-300 w-screen max-w-2xl`}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll"
          >
            <div className="flex-1">
              {/* <!-- Header --> */}
              <div className="px-4 py-6 bg-gray-50 sm:px-6">
                <div className="flex items-start justify-between space-x-3">
                  <div className="space-y-1">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      New Blog
                    </h2>
                    <p className="text-sm text-gray-500">
                      Get started by filling in the information below to create
                      your new project.
                    </p>
                  </div>
                  <div className="h-7 flex items-center">
                    <button
                      onClick={closeBlogSlide}
                      className="bg-sky-500 rounded-md p-1.5 text-white shadow-lg shadow-sky-200 ring-2 ring-inset ring-white"
                    >
                      <BsX className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Divider container --> */}
              <div className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                {/* <!-- Name --> */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Full name
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      disabled
                      required
                      defaultValue={user.displayName}
                      className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                {/* <!-- Title --> */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Title
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      onChange={handleOnChange}
                      required
                      placeholder="Your blog title"
                      className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                {/* <!-- Place name --> */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="tour_place_name"
                      className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Tour place name
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="text"
                      name="tour_place_name"
                      id="tour_place_name"
                      required
                      onChange={handleOnChange}
                      placeholder="Place you visited"
                      className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                {/* <!-- date --> */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="tour_date"
                      className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Tour Date
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      type="date"
                      name="tour_date"
                      required
                      onChange={handleOnChange}
                      id="tour_date"
                      className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                {/* <!-- Project description --> */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="tour_rating"
                      className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Tour rating
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="sm:col-span-2">
                      <select
                        id="tour_rating"
                        onChange={handleOnChange}
                        required
                        name="tour_rating"
                        className="bg-white mt-1 text-smalt-900 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      >
                        <option value="" disabled>
                          Select Rating
                        </option>
                        {Array.from(Array(5).keys()).map((item, index) => (
                          <option value={item + 1} key={index}>
                            {item + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!-- tour detail --> */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="tour_details"
                      className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Description
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      id="tour_details"
                      onChange={handleOnChange}
                      required
                      name="tour_details"
                      placeholder="Share your experiences"
                      rows="3"
                      className="block w-full shadow-sm sm:text-sm focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                </div>
                {/* <!-- Tour feature image --> */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="tour_feature_image"
                      className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Feature Image
                    </label>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 flex flex-col justify-center items-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-center text-gray-600">
                          <label
                            htmlFor="tour_feature_image"
                            className="text-center relative cursor-pointer rounded font-medium text-sky-600 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500"
                          >
                            <span>Upload an image</span>
                            <input
                              id="tour_feature_image"
                              name="tour_feature_image"
                              accept="image/png, image/jpg, image/jpeg"
                              type="file"
                              onChange={handleOnChange}
                              className="sr-only"
                            />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, JPEG up to 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Action buttons --> */}
            <div className="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
              <div className="space-x-3 flex justify-end">
                <button
                  type="submit"
                  className="w-full disabled:opacity-90 disabled:cursor-not-allowed flex items-center gap-2 justify-center py-2 px-4 border border-transparent rounded-md shadow-md shadow-sky-300 text-sm font-normal text-white bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCreateSlide;

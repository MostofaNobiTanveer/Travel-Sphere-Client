import React, { createContext, useContext } from 'react';
import useBlog from '../hooks/useBlog';

const BlogContext = createContext(null);

const BlogProvider = ({ children }) => {
  const allBlogContext = useBlog();
  return (
    <BlogContext.Provider value={allBlogContext}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext);

export default BlogProvider;

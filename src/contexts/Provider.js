import React from 'react';
import AuthProvider from './AuthProvider';
import BlogProvider from './BlogProvider';

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <BlogProvider>{children}</BlogProvider>
    </AuthProvider>
  );
};

export default Provider;

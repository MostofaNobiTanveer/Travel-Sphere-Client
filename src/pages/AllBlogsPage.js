import React from 'react';
import { BlogList } from '../components';

const AllBlogsPage = () => {
  return (
    <section className="flex-1">
      <BlogList title="All Blogs" count={Infinity} />;
    </section>
  );
};

export default AllBlogsPage;

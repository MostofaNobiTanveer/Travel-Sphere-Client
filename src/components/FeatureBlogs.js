import React from 'react';
import BlogAside from './BlogAside';
import BlogList from './BlogList';

const FeatureBlogs = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <main>
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="order-2 lg:order-1 space-y-6 lg:col-start-1 lg:col-span-2">
            {/* Blog post */}
            <BlogList title="Feature Blogs" count={4} />
          </div>

          <section className="lg:col-start-3 lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white shadow sm:rounded-lg">
              <BlogAside />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FeatureBlogs;

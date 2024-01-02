import React from "react";
import Card from "../components/Card";

const BlogPage = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col  items-center justify-between gap-8">
          <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
            Blog
          </h2>
          <div className="flex flex-row">
            <ul>
              <a href="/">Home</a>
            </ul>
            <ul className="text-green">// Blog</ul>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default BlogPage;

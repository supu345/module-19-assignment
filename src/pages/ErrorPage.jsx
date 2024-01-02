import React from "react";
import errorImg from "/images/home/404Page.png";
const ErrorPage = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* img */}
        <div className="md:w-1/2">
          <img src={errorImg} alt="banner" />
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="md:text-8xl text-5xl fmd:leading-snug leading-snug">
            Oops!
          </h2>
          <h2 className=" md:text-4xl text-3xl text-[#4A4A4A] ">
            Page not found!
          </h2>

          <p className="text-[#4A4A4A] text-xl">
            You could either go back or go to homepage
          </p>
          <div className="">
            <button className="bg-black font-semibold btn text-white px-8 py-3 rounded-full mr-2">
              Go Back
            </button>
            <button className="bg-blue-300 font-semibold btn text-white px-8 py-3 rounded-full">
              Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col  items-center justify-between gap-8 ">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
          Contact Us
        </h2>
        <div className="flex flex-row">
          <ul>
            <a href="/">Home</a>
          </ul>
          <ul>// Contact</ul>
        </div>
      </div>
      <div className="  justify-center ">
        <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug text-center ">
          Send A Quest
        </h2>

        <form className="border shadow-md px-4  w-[70%] container mx-auto mb-6 pb-3">
          <div className=" grid  grid-cols-1 md:grid-cols-2 gap-4 m-4  justify-center ">
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="mb-4 px-3">
            <label
              htmlFor="subject"
              className=" text-sm font-medium text-gray-600"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4 px-3">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              required
            ></textarea>
          </div>
          <div className="text-center pb-3 ">
            <button
              type="submit"
              className=" py-2 px-4 bg-green text-white rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

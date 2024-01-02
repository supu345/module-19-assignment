import React from "react";

const RegistrationPage = () => {
  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col  items-center justify-between gap-8">
          <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
            Registration
          </h2>
          <div className="flex flex-row">
            <ul>
              <a href="/">Home</a>
            </ul>
            <ul className="text-green">// Registration</ul>
          </div>
        </div>
      </div>
      <div className="">
        {/* form */}
        <div className=" card shrink-0 w-full  shadow-2xl justify-center items-center">
          <div className="flex flex-row text-center justify-center items-center md:text-2xl text-2xl font-semibold gap-2 py-7 ">
            <ul>
              <a href="/" className="text-green">
                {" "}
                Login{" "}
              </a>
            </ul>
            <ul>
              <a href="/" className="hover:text-green">
                {" "}
                // Registration
              </a>
            </ul>
          </div>

          <form className="card-body border p-5 mb-6 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green text-white hover:bg-black">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

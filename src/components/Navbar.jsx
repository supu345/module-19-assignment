import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNaturePeople } from "react-icons/md";

const words = ["All", "Shoes", "Bags", "Phones", "Beauty"];
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      words.filter((w) => w.includes(e.target.value)).slice(0, 8)
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <details>
          <summary>Pages</summary>
          <ul className="p-2">
            <li>
              <a href="/product">Products</a>
            </li>
            <li>
              <a href="/checkout">checkout page</a>
            </li>
            <li>
              <a href="/thanks">thank you page</a>
            </li>
            <li>
              <a href="/error">404 page</a>
            </li>
            <li>
              <a href="/faq">faq page</a>
            </li>
            <li>
              <a href="/termsPolicy">policy & terms</a>
            </li>
            <li>
              <a href="/registration">registration</a>
            </li>
            <li>
              <a href="/blog">blog</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-[999]`}
      >
        <div
          className={`navbar xl:px-24 ${
            isSticky
              ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
              : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="flex flex-row">
              <p className="text-green font-bold text-xl">E</p>
              <span className="font-bold text-xl">MART</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* navItems */}
              {navItems}
            </ul>
          </div>
          <div className="navbar-end ">
            {/* search */}

            <div className="">
              <form className="w-[300px] relative px-3  ">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Type here"
                    className="w-full p-3 rounded-xl border"
                    onChange={(e) => handleSearch(e)}
                  />
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 ">
                    <AiOutlineSearch />
                  </button>
                  {activeSearch.length > 0 && (
                    <div className="absolute  top-20 p-4 w-full rounded-xl left-1/2  -translate-x-1/2  flex flex-col gap-2">
                      {activeSearch.map((s) => (
                        <span>{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </form>
            </div>
            {/* cart items */}
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle hidden lg:flex items-center justify-center mr-3"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>

            {/* btn */}
            <a
              className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white"
              href="/registration"
            >
              <FaRegUser />
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

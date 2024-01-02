import React, { useState } from "react";
import cartImage from "/images/home/cartImage.jpg";
import headphone from "/images/home/headphone.jpg";
import { IoMdClose } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const options = ["Bangladesh", "India", "Pakistan", "Barma"];
const CartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ">
        <div className="py-24 flex flex-col  items-center justify-between gap-8">
          <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
            Cart
          </h2>
          <div className="flex flex-row">
            <ul>
              <a href="/">Home</a>
            </ul>
            <ul className="text-green">// Blog</ul>
          </div>
        </div>
      </div>
      <div className="section-container mt-20">
        {/*Banner */}
        <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
          <div className="py-28 flex flex-col  items-center justify-center gap-8">
            {/* texts */}
            <div className=" px-4 space-y-7">
              <h2 className="md:text-3xl text-3xl font-bold md:leading-snug leading-snug">
                Your cart items
              </h2>
            </div>
          </div>
        </div>
        {/* table for the cart */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>1</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cartImage} alt="banner" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">$20.00</button>
                </th>
                <th className="flex flex-row gap-3 justify-center items-center pt-8">
                  <MdEdit />
                  <IoMdClose />
                </th>
              </tr>

              <tr>
                <td>2</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={headphone}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">$20.00</button>
                </th>
                <th className="flex flex-row gap-3 justify-center items-center pt-8">
                  <MdEdit />
                  <IoMdClose />
                </th>
              </tr>
            </tbody>
          </table>
          <div className=" border-t border-gray-400 p-2 lg:p-3 m-5"></div>
        </div>
        {/*3 button */}
        <div className=" flex flex-row justify-between mb-7 ">
          <div className=" justify-between gap-5">
            <button className="bg-slate-200 p-3 m-2">CONTINUE SHOPPING</button>
          </div>
          <div>
            <button className="bg-slate-200 p-3 m-2">
              UPDATE SHOPPING CART
            </button>
            <button className="bg-slate-200 p-3 m-2">
              CLEAR SHOPPING CART
            </button>
          </div>
        </div>
        {/*Shippin and tax */}
        <div className="grid grid-cols-3 pb-9 gap-8">
          <div className="bg-slate-200 text-start px-8 py-4">
            <p className="font-semibold text-xl ">Estimate Shipping And Tax</p>
            <p className="text-sm mt-5">
              Enter your destination to get a shipping estimate.
            </p>
            {/*country */}
            <div className="flex flex-col">
              <p className="mb-5">* Country</p>
              <div className="min-w-[200px] relative inline-flex rounded-md bg-white ">
                <div className="w-[100%] rounded-1-md px-4 py-2">
                  <a
                    onClick={toggle}
                    className="w-[100%] rounded-1-md px-1 py-2"
                  >
                    {selectedOption || "Select Country"}
                  </a>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className="border-1 border-gray-10 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FaChevronDown />
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute top-6 right-0 z-10 mt-4 min-w-[200px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
                    {options.map((option) => (
                      <div>
                        <button
                          type="button"
                          onClick={onOptionClicked(option)}
                          key={Math.random()}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50"
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/*Region / State */}
            <div className="flex flex-col">
              <p className="mb-5 mt-5">* Region / State</p>
              <div className="min-w-[200px] relative inline-flex rounded-md bg-white ">
                <div className="w-[100%] rounded-1-md px-4 py-2">
                  <a
                    onClick={toggle}
                    className="w-[100%] rounded-1-md px-1 py-2"
                  >
                    {selectedOption || "Select Country"}
                  </a>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className="border-1 border-gray-10 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FaChevronDown />
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute top-6 right-0 z-10 mt-4 min-w-[200px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
                    {options.map((option) => (
                      <div>
                        <button
                          type="button"
                          onClick={onOptionClicked(option)}
                          key={Math.random()}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50"
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/*Zip/Postal Code */}
            <div className="flex flex-col">
              <p className="mb-5 mt-5">* Zip/Postal Code</p>
              <div className="min-w-[200px] relative inline-flex rounded-md bg-white ">
                <div className="w-[100%] rounded-1-md px-4 py-2">
                  <a
                    onClick={toggle}
                    className="w-[100%] rounded-1-md px-1 py-2"
                  >
                    {selectedOption || "Select Country"}
                  </a>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    className="border-1 border-gray-10 inline-flex h-full items-center justify-center rounded-r-md px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FaChevronDown />
                  </button>
                </div>
                {isOpen && (
                  <div className="absolute top-6 right-0 z-10 mt-4 min-w-[200px] origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
                    {options.map((option) => (
                      <div>
                        <button
                          type="button"
                          onClick={onOptionClicked(option)}
                          key={Math.random()}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 no-underline hover:bg-gray-50"
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="pt-5 text-center">
              <button
                className="bg-green justify-center items-center px-4 py-3 rounded-lg font-semibold text-white
            "
              >
                GET A QUOTE
              </button>
            </div>
          </div>
          {/*Coupon Code */}
          <div className="bg-slate-200 text-start px-8 py-8 mb-20">
            <p className="font-semibold text-xl ">Use Coupon Code</p>
            <p className="text-sm mt-5 mb-10">
              Enter your coupon code if you have one.
            </p>
            {/*country */}
            <div className="flex flex-col">
              <div className="min-w-[200px] relative inline-flex rounded-md bg-white  ">
                <div className="w-[100%] rounded-1-md px-4 py-5"></div>
              </div>
            </div>

            <div className="pt-5 text-center">
              <button
                className="bg-green justify-center items-center px-4 py-3 rounded-lg font-semibold text-white
            "
              >
                APPLY COUPON
              </button>
            </div>
          </div>
          {/*Cart Total*/}
          <div className="bg-slate-200 text-start px-8 py-8 mb-20">
            <p className="font-semibold text-xl mb-5 ">Cart Total</p>
            <div className="flex flex-row justify-between">
              <p>Total products</p>
              <p className="font-semibold  text-xl mb-9">$260.00</p>
            </div>
            <p className="mb-6">Total shipping</p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row  gap-3">
                <label htmlFor="check-box-1">
                  <input type="checkbox" id="check-box-1" />
                </label>
                <p>Standard</p>
              </div>
              <p>$20.00</p>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-row  gap-3">
                <label htmlFor="check-box-1">
                  <input type="checkbox" id="check-box-1" />
                </label>
                <p>Express</p>
              </div>
              <p>$30.00</p>
            </div>
            <div className="flex flex-row justify-between mt-9">
              <p className="font-semibold text-2xl text-green">Grand Total</p>
              <p className="font-semibold  text-2xl mb-9 text-green">$260.00</p>
            </div>
            <div className="pt-5 text-center">
              <button
                className="bg-green justify-center items-center px-4 py-3 rounded-lg font-semibold text-white
            "
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

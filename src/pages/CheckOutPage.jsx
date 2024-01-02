import React, { useState } from "react";
const CheckOutPage = () => {
  // State for managing form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission (e.g., sending data to the server)
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div>
        <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
          <div className="py-24 flex flex-col  items-center justify-between gap-8">
            <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
              CheckOut
            </h2>
            <div className="flex flex-row">
              <ul>
                <a href="/">Home</a>
              </ul>
              <ul className="text-green">// checkout</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col ">
        <div>
          <div className="m-7 ">
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
            >
              {/* Billing information section */}
              <h2 className="text-2xl font-semibold mb-4">
                Billing Information
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-100"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Other input fields for email, address, etc. go here */}

              {/* Payment information section */}
              <h2 className="text-2xl font-semibold my-4">
                Payment Information
              </h2>
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Other input fields for expiration date and CVV go here */}
              </div>

              {/* Submit button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green text-white p-3 rounded-md hover:bg-indigo-700"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="m-7  shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Your order
            </h2>
            <div className="flex flex-row justify-between items-center px-8">
              <p>Product</p>
              <p>Total</p>
            </div>
            <div className=" border-t border-gray-400 p-2 lg:p-3 m-5"></div>
            <div className="flex flex-row justify-between items-center px-8">
              <p>Product Name X 1</p>
              <p>$100</p>
            </div>
            <div className="flex flex-row justify-between items-center px-8 py-2">
              <p>Product Name X 1</p>
              <p>$100</p>
            </div>
            <div className=" border-t border-gray-400 p-2 lg:p-3 m-5"></div>
            <div className="flex flex-row justify-between items-center px-8">
              <p>Shipping</p>
              <p>Free shipping</p>
            </div>
            <div className=" border-t border-gray-400 p-2 lg:p-3 m-5"></div>
            <div className="flex flex-row justify-between items-center px-8">
              <p>Total</p>
              <p>$100</p>
            </div>
            <div className=" border-t border-gray-400 p-2 lg:p-3 m-5"></div>
            <div className="px-8">
              <p>Direct bank transfer</p>
              <p>Please send a check to Store Name,</p>
            </div>

            <div className="px-8">
              <p>Check payments</p>
              <p>Cash on delivery</p>
            </div>
            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-green text-white p-3 rounded-md hover:bg-indigo-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;

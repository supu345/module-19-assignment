import React from "react";
import thanksImg from "/images/home/thankyou.jpg";
const ThanksPage = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col  items-center justify-between gap-8">
        <div className="">
          <img src={thanksImg} alt="thanks" />
        </div>
      </div>
      <div>
        <h2 className="md:text-xl text-xl  md:leading-snug leading-snug text-center">
          Thank you for ordering in our store. You will receive a confirmation
          email shortly.
        </h2>
      </div>
      <div className="py-20 flex flex-col  items-center justify-between gap-8">
        <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-xl ">
          Continue Shopping
        </button>
      </div>
      <div>
        <h2 className="md:text-2xl text-xl  md:leading-snug leading-snug text-center">
          Call Us for Quick Order
        </h2>
        <h3 className="md:text-xl text-xl  text-red md:leading-snug leading-snug text-center">
          01 234 567 890
        </h3>
      </div>
    </div>
  );
};

export default ThanksPage;

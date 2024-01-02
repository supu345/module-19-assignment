import React from "react";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="mt-6">
        <div className=" w-[60%] container mx-auto mb-6 pb-3 flex flex-col lg:flex-row  md:mx-20 lg:mx-52 rounded-lg border p-2 ">
          <div className="">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="thumnnail mx-auto rounded-sm"
              height="300"
              width="300"
            />
          </div>
          <div className="card details ">
            <div className="top flex flex-row  mx-4  font-semibold text-gray-500 gap-7 pb-3">
              <div className="date flex flex-row justify-center items-center gap-2">
                <FaRegCalendarDays className="text-green" />
                <span> 31, Dec 2023</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <FaUser className="text-green" />
                <div className="tag hover:text-green">Oaklee Odom</div>
              </div>
            </div>
            <div className="middle mx-2">
              <h2 className="title text-2xl font-bold">This is the post</h2>
              <p className="except ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                quidem numquam mollitia necessitatibus cum voluptates tenetur
                sapiente incidunt nesciunt est!
              </p>
            </div>
            <div className="bottom">
              <button className="bg-green m-3 p-2 rounded-lg text-white ">
                Readmore
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[60%] container mx-auto mb-6 pb-3 flex flex-col lg:flex-row  md:mx-20 lg:mx-52 rounded-lg border p-2 ">
          <div className="">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="thumnnail mx-auto rounded-sm"
              height="300"
              width="300"
            />
          </div>
          <div className="card details ">
            <div className="top flex flex-row  mx-4  font-semibold text-gray-500 gap-7 pb-3">
              <div className="date flex flex-row justify-center items-center gap-2">
                <FaRegCalendarDays className="text-green" />
                <span> 31, Dec 2023</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <FaUser className="text-green" />
                <div className="tag hover:text-green">Oaklee Odom</div>
              </div>
            </div>
            <div className="middle mx-2">
              <h2 className="title text-2xl font-bold">This is the post</h2>
              <p className="except ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                quidem numquam mollitia necessitatibus cum voluptates tenetur
                sapiente incidunt nesciunt est!
              </p>
            </div>
            <div className="bottom">
              <button className="bg-green m-3 p-2 rounded-lg text-white ">
                Readmore
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[60%] container mx-auto mb-6 pb-3 flex flex-col lg:flex-row  md:mx-20 lg:mx-52 rounded-lg border p-2 ">
          <div className="">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="thumnnail mx-auto rounded-sm"
              height="300"
              width="300"
            />
          </div>
          <div className="card details ">
            <div className="top flex flex-row  mx-4  font-semibold text-gray-500 gap-7 pb-3">
              <div className="date flex flex-row justify-center items-center gap-2">
                <FaRegCalendarDays className="text-green" />
                <span> 31, Dec 2023</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <FaUser className="text-green" />
                <div className="tag hover:text-green">Oaklee Odom</div>
              </div>
            </div>
            <div className="middle mx-2">
              <h2 className="title text-2xl font-bold">This is the post</h2>
              <p className="except ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                quidem numquam mollitia necessitatibus cum voluptates tenetur
                sapiente incidunt nesciunt est!
              </p>
            </div>
            <div className="bottom">
              <button className="bg-green m-3 p-2 rounded-lg text-white ">
                Readmore
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center  gap-2 mb-4">
        <ul className="flex flex-row justify-center gap-3">
          <li className=" border-2 p-3  ">
            {" "}
            <FaArrowLeft />
          </li>
          <li className="border-2 p-3 ">1</li>
          <li className="border-2 p-3 ">2</li>
          <li className="border-2 p-3 ">3</li>
          <li className="border-2 p-3 ">
            {" "}
            <FaArrowRight />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    name: `John Doe`,
    img: `https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg`,
    review: `You can also use variant modifiers to target media queries like responsive breakpoints, dark mode`,
  },
  {
    name: `John Doe`,
    img: `https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg`,
    review: `You can also use variant modifiers to target media queries like responsive breakpoints, dark mode`,
  },
  {
    name: `John Doe`,
    img: `https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg`,
    review: `You can also use variant modifiers to target media queries like responsive breakpoints, dark mode`,
  },
  {
    name: `John Doe`,
    img: `https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg`,
    review: `You can also use variant modifiers to target media queries like responsive breakpoints, dark mode`,
  },
  {
    name: `John Doe`,
    img: `https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg`,
    review: `You can also use variant modifiers to target media queries like responsive breakpoints, dark mode`,
  },
];

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Review = () => {
  return (
    <div className="w-3/4 m-auto ">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl text-center font-semibold py-4">
          Reviews or Cases
        </h2>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-xl border shadow-md gap-4 ">
              <div className="h-56 rounded-t-xl  bg-transparent flex flex-col gap-2 justify-center items-center  m-4 ">
                <img src={d.img} alt="" className="h-40 w-40 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 p-4 ">
                <p className="text-xl font-semibold ">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-green text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;

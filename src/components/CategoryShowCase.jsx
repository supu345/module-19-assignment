import React, { useState } from "react";
import Img1 from "/images/shape-img/01.jpg";
import Img2 from "/images/shape-img/02.png";
import { FaStar } from "react-icons/fa";
import Ratting from "./Ratting";
import { Link } from "react-router-dom";
const ProductData = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1501644898242-cfea317d7faf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);
  //category filtering
  const fiterItem = (categItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };
  return (
    <div>
      {/* <div className="course-section style-3 padding-tb">
        <div>
          <img src={Img1} alt="" />
        </div>
      </div> */}
      {/*main section */}
      <div className=" ">
        {/* section header */}
        <div className="max-w-screen-2xl container mx-auto  section-header flex flex-row justify-between gap-5 items-center px-5">
          <h2 className="title">Our Products</h2>
          <div className="course-filter-group">
            <ul className="flex flex-row gap-7 px-5 ">
              <li
                className=" hover:bg-green  cursor-pointer"
                onClick={() => setItems(ProductData)}
              >
                All
              </li>
              <li
                className="hover:bg-green  cursor-pointer"
                onClick={() => fiterItem("Shoes")}
              >
                Shoes
              </li>
              <li
                className="hover:bg-green  cursor-pointer"
                onClick={() => fiterItem("Bags")}
              >
                Bags
              </li>
              <li
                className="hover:bg-green  cursor-pointer"
                onClick={() => fiterItem("Phones")}
              >
                Phones
              </li>
              <li
                className="hover:bg-green  cursor-pointer"
                onClick={() => fiterItem("Beauty")}
              >
                Beauty
              </li>
            </ul>
          </div>
        </div>
        {/* section body */}
        <div className="section-wrapper">
          <div className=" grid lg:grid-cols-4 gap-4 justify-center items-center px-4 ">
            {items.map((product) => (
              <div
                key={product.id}
                className="col border shadow-md pb-2 rounded-md"
              >
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thubm border m-2  rounded-md">
                      <img src={product.imgUrl} alt="img" className="w-full" />
                      <div className="course-category  flex justify-between  items-center  bg-green">
                        <div className="course-cate font-semibold m-2">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-review mr-2">
                          <Ratting />
                        </div>
                      </div>
                    </div>
                    {/*main section */}
                    <div className="course-content ">
                      <Link to="/" className="font-semibold px-2">
                        {product.title}
                      </Link>
                      <div className="course-footer flex px-2 justify-between">
                        <div className="course-author">
                          <Link to="/">{product.brand}</Link>
                        </div>
                        <div className="course-price text-amber-400 ">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;

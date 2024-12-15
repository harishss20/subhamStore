import React from "react";
import LogoImage from "../assets/logo.png";
import { ProductData } from "./Utils.jsx";
const brands = ProductData;
function ProductsList() {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div>
      <div className="flex  mt-10 gap-56 font-serif text-black space-y-4 md: ">
        <div className="flex mt-3">
          <img src={LogoImage} alt="logo" className="w-12 h-12" />
          <h1 className="text-2xl mt-2 font-serif font-bold">Our Products</h1>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex justify-center border-2 w-20 sm:w-40  shadow-2xl my-20 mx-2 sm:m-20 p-2 text-black rounded-lg font-serif ">
          <div>
            {brands.map((Product) => (
              <div>
                <ul>
                  <li
                    key={Product.index}
                    className="hover:bg-first duration-300"
                  >
                    <img
                      src={Product.image}
                      alt="product"
                      className="w-24 p-2 rounded-2xl cursor-pointer "
                      onClick={handleClick}
                    />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex border-2 w-4/6 shadow-2xl my-20 m p-8 text-black rounded-lg font-serif "></div>
      </div>
    </div>
  );
}

export default ProductsList;

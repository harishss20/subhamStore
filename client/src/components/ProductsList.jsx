import React from "react";
import LogoImage from "../assets/logo.png";
function ProductsList() {
  return (
    <div className="flex justify-center items-center mt-10 gap-56 font-serif text-black space-y-4">
      <div className="flex ">
        <img src={LogoImage} alt="logo" className="w-20 h-20" />
        <h1 className="text-2xl mt-6 font-bold">Our Products</h1>
      </div>

      <input
        type="text"
        required
        className="bg-white border rounded-md w-80 h-10 text-black pl-4"
        placeholder="Search Brands"
      />
    </div>
  );
}

export default ProductsList;

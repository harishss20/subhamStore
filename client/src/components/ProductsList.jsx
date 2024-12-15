import React, { useState } from "react";
import LogoImage from "../assets/logo.png";
import { ProductBrandData, ProductData } from "./Utils.jsx";

const BrandsList = ({ brands, onBrandClick }) => {
  return (
    <div className="flex flex-col justify-center border-2 w-20 sm:w-28 shadow-2xl my-20 mx-2 sm:m-20 p-1 text-black rounded-lg font-serif">
      {brands.map((brand) => (
        <div key={brand.index}>
          <ul>
            <li
              className="hover:bg-first duration-300 cursor-pointer hover:scale-105  hover:border-l-8 hover:border-second rounded-sm"
              onClick={() => onBrandClick(brand.name)}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 p-2 rounded-2xl "
              />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

const ProductCategory = ({ category }) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">{category.category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 ">
        {category.imagesData.map((data, idx) => (
          <div
            key={idx}
            className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300 hover:text-second"
          >
            <img
              src={data[0]}
              alt={`${category.category} product`}
              className="w-full h-20 sm:h-48 p-2 object-cover"
            />
            <div>
              <p className="flex justify-center items-center m-2 ">{data[1]}</p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

function ProductsList() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const filteredProducts = ProductData.filter((category) =>
    category.category.toLowerCase().includes(selectedBrand?.toLowerCase())
  );

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
  };

  return (
    <div>
      <div className="flex mt-10 gap-56 font-serif text-black space-y-4">
        <div className="flex mt-3">
          <img src={LogoImage} alt="logo" className="w-12 h-12" />
          <h1 className="text-2xl mt-2 font-serif font-bold">Our Products</h1>
        </div>
      </div>

      <div className="flex flex-row">
        <BrandsList brands={ProductBrandData} onBrandClick={handleBrandClick} />

        <div className="flex flex-wrap gap-8 w-4/6 shadow-2xl my-20 p-8 text-black rounded-lg font-serif">
          <div className="w-full">
            {selectedBrand && filteredProducts.length > 0 ? (
              filteredProducts.map((category, index) => (
                <ProductCategory key={index} category={category} />
              ))
            ) : (
              <p>No products available for this brand.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;

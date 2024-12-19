import React, { useState, useEffect } from "react";
import LogoImage from "../assets/logo.png";
import { ProductBrandData, ProductData } from "./Utils.jsx";

const BrandsList = ({ brands, onBrandClick }) => {
  return (
    <div className="flex flex-row overflow-x-auto border-2 w-1/2 shadow-xl my-10 mx-4 sm:mx-20 p-4 text-gray-800 bg-white rounded-lg font-serif space-x-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 transition-all duration-300 scroll-smooth">
      {brands.map((brand, index) => (
        <div key={index} className="flex-shrink-0 snap-center">
          <ul>
            <li
              className="hover:bg-gray-100 transition-transform transform duration-300 ease-out hover:scale-105 rounded-md cursor-pointer p-3 shadow-md"
              onClick={() => onBrandClick(brand.name)}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 h-24 object-cover rounded-full mx-auto"
              />
              <p className="text-center mt-2 text-sm font-medium">
                {brand.name}
              </p>
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {category.imagesData.map((data, idx) => (
          <div
            key={idx}
            className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300 hover:text-gray-700"
          >
            <img
              src={data[0]}
              alt={`${category.category} product`}
              className="w-full h-20 sm:h-48 p-2 object-cover"
            />
            <div className="p-4">
              <p className="text-center text-sm font-medium">{data[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function ProductsList() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = ProductData.filter((category) =>
    category.category.toLowerCase().includes(selectedBrand?.toLowerCase())
  );

  const handleBrandClick = (brandName) => {
    setSelectedBrand(brandName);
  };

  return (
    <div>
      <div className="flex mt-10 gap-4 font-serif text-black space-y-4 items-center">
        <img src={LogoImage} alt="logo" className="w-12 h-12" />
        <h1 className="text-xl font-serif font-bold">Our Products</h1>
      </div>

      <div className="flex flex-col items-center">
        <BrandsList brands={ProductBrandData} onBrandClick={handleBrandClick} />

        <div className="flex flex-wrap gap-8 w-full max-w-5xl shadow-2xl my-10 p-6 text-black bg-white rounded-lg font-serif">
          {selectedBrand && filteredProducts.length > 0 ? (
            filteredProducts.map((category, index) => (
              <ProductCategory key={index} category={category} />
            ))
          ) : (
            <p className="text-center text-gray-600">
              To view our products, click the respective brand logos above.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;

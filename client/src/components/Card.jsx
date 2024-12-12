import React from "react";
import "../App.css";
import { bestSellProducts } from "./Utils";

function CardItem({ header, description, price }) {
  return (
    <div className="card-container bg-white text-black p-4 rounded-lg shadow-lg flex-1 w-full max-w-full sm:max-w-sm min-h-[150px] duration-500 backdrop-brightness-200 ease-in-out transform hover:rotate-3 hover:scale-105 hover:bg-[url('assets/image1.webp')] bg-cover cursor-pointer relative overflow-hidden sm:min-h-[180px]">
      <div className="absolute inset-0 bg-white opacity-100 hover:opacity-0 duration-500 ease-in-out flex flex-col justify-center items-center p-4 sm:p-6">
        <h2 className="text-base font-bold sm:text-lg lg:text-xl">{header}</h2>
        <p className="mt-2 text-sm sm:text-base lg:text-lg">{description}</p>
        <span className="text-orange-500 font-bold text-sm sm:text-base lg:text-lg">
          {price}
        </span>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div
      id="card-container"
      className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 mt-16 sm:mt-20 w-full px-4 md:w-4/5 lg:max-w-6xl duration-1000"
    >
      {bestSellProducts.map((product, index) => (
        <CardItem
          key={index}
          header={product.header}
          description={product.dic}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Card;

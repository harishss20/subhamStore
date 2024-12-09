import React from "react";
import "../App.css";
import { bestSellProducts } from "./Utils";

function CardItem({ header, description, price }) {
  return (
    <div className="card-container  bg-white text-black p-6 rounded-lg shadow-lg flex-1 max-w-xs md:max-w-sm duration-500 ease-in-out transform hover:rotate-3 hover:scale-105">
      <h2 className="text-xl font-bold">{header}</h2>
      <p className="mt-2">{description}</p>
      <span className="text-orange-500 font-bold">{price}</span>
    </div>
  );
}

function Card() {
  return (
    <div
      id="card-container"
      className="flex flex-wrap justify-center items-stretch  gap-6 mt-32 w-3/5 max-w-6xl px-4 duration-1000"
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

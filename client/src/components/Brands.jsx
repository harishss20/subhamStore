import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductBrandData } from "./Utils.jsx";
function Brands() {
  const brands = ProductBrandData;
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <div className="w-full  text-black bg-first p-10">
      <div className="font-gilroy   ml-20 w-10/12">
        <h1 className="mb-12 font-serif">Our Exclusive Brands</h1>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex mt-2 duration-300 pointer-cursor flex-col items-center justify-center gap-2 hover:scale-105"
            >
              <div>
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-32 h-32 object-cover mx-auto border-2 border-black rounded-full shadow-2xl cursor-pointer"
                />
              </div>
              <h1 className="text-lg text-center mt-2">{brand.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Brands;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brands() {
  const brands = [
    { name: "Brand 1", image: "https://via.placeholder.com/150?text=Brand+2" },
    { name: "Brand 2", image: "https://via.placeholder.com/150?text=Brand+2" },
    { name: "Brand 3", image: "https://via.placeholder.com/150?text=Brand+3" },
    { name: "Brand 4", image: "https://via.placeholder.com/150?text=Brand+4" },
    { name: "Brand 5", image: "https://via.placeholder.com/150?text=Brand+5" },
    { name: "Brand 6", image: "https://via.placeholder.com/150?text=Brand+6" },
  ];

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
    <div className="w-full text-black bg-green p-10">
      <div className="font-gilroy   ml-20 w-10/12">
        <h1 className="mb-12">Our Brands</h1>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div>
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-24 h-24 object-contain mx-auto border rounded-full"
                />
              </div>
              <h1 className="text-sm text-center">{brand.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Brands;

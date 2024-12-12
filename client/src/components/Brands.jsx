import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AachiImage from "../assets/productImages/Aachi/webp/Aachi.webp";
import AavinImage from "../assets/productImages/aavin/webp/aavin.webp";
import ArielImage from "../assets/productImages/ariel/webp/ARIEL.webp";
import AromaImage from "../assets/productImages/aroma/webp/aroma.webp";
import BoostImage from "../assets/productImages/Boost/webp/Boost.webp";
import BrownVitaImage from "../assets/productImages/BournVita/webp/bournVista.webp";
import BruImage from "../assets/productImages/BRU/webp/BRU.webp";
import CavinsImage from "../assets/productImages/Cavin_s/webp/Cavin_s.webp";
import FortuneImage from "../assets/productImages/fortune/webp/fortune.webp";
import HorlicksImage from "../assets/productImages/Horlicks/webp/horlick.webp";
import GoldWinnerImage from "../assets/productImages/goldwinner/webp/goldwinner.webp";
import NescafeImage from "../assets/productImages/NESCAFESunrise/webp/nescafe.webp";
import RinImage from "../assets/productImages/rin/webp/rin.webp";
import SaffolaImage from "../assets/productImages/saffola/webp/saffola.webp";
import SakthiImage from "../assets/productImages/SAKTHI/webp/sakthi.webp";
import SurfExcelImage from "../assets/productImages/surfexcel/webp/surf.webp";
import TideImage from "../assets/productImages/tide/webp/tide.webp";
import TataImage from "../assets/productImages/surfexcel/webp/tata.webp";

function Brands() {
  const brands = [
    { name: "Aachi", image: AachiImage },
    { name: "Aavin", image: AavinImage },
    { name: "Ariel", image: ArielImage },
    { name: "Aroma", image: AromaImage },
    { name: "Boost", image: BoostImage },
    {
      name: "Bourn vita",
      image: BrownVitaImage,
    },
    { name: "BRU", image: BruImage },
    { name: "Cavins", image: CavinsImage },

    { name: "Fortune", image: FortuneImage },
    {
      name: "Gold Winner",
      image: GoldWinnerImage,
    },
    { name: "Horlicks", image: HorlicksImage },
    { name: "Nescafe", image: NescafeImage },
    { name: "Rin", image: RinImage },
    { name: "Saffola", image: SaffolaImage },
    { name: "Sakthi", image: SakthiImage },
    {
      name: "Surf excel",
      image: SurfExcelImage,
    },
    { name: "TATA", image: TataImage },
    { name: "Tide", image: TideImage },
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
    <div className="w-full  text-black bg-first p-10">
      <div className="font-gilroy   ml-20 w-10/12">
        <h1 className="mb-12">Our Exclusive Brands</h1>
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex  pointer-cursor flex-col items-center justify-center gap-2"
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

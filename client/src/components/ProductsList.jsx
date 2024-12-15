import React from "react";
import LogoImage from "../assets/logo.png";
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

const brands = [
  { name: "Aachi", image: AachiImage, index: 1 },
  { name: "Aavin", image: AavinImage, index: 2 },
  { name: "Ariel", image: ArielImage, index: 3 },
  { name: "Aroma", image: AromaImage, index: 4 },
  { name: "Boost", image: BoostImage, index: 5 },
  { name: "Bourn vita", image: BrownVitaImage, index: 6 },
  { name: "BRU", image: BruImage, index: 7 },
  { name: "Cavins", image: CavinsImage, index: 8 },
  { name: "Fortune", image: FortuneImage, index: 9 },
  { name: "Gold Winner", image: GoldWinnerImage, index: 10 },
  { name: "Horlicks", image: HorlicksImage, index: 11 },
  { name: "Nescafe", image: NescafeImage, index: 12 },
  { name: "Rin", image: RinImage, index: 13 },
  { name: "Saffola", image: SaffolaImage, index: 14 },
  { name: "Sakthi", image: SakthiImage, index: 15 },
  { name: "Surf excel", image: SurfExcelImage, index: 16 },
  { name: "TATA", image: TataImage, index: 17 },
  { name: "Tide", image: TideImage, index: 18 },
];

function ProductsList() {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex items-center justify-start ml-4 mt-6">
        <img src={LogoImage} alt="logo" className="w-12 h-12" />
        <h1 className="text-2xl ml-4 font-serif font-bold">Our Products</h1>
      </div>

      {/* Brand List Section */}
      <div className="border-2 shadow-lg m-4 p-6 rounded-lg font-serif text-black">
        <p className="text-lg font-bold mb-4">List of Brands</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {brands.map((Product) => (
            <div key={Product.index} className="text-center">
              <img
                src={Product.image}
                alt={Product.name}
                className="w-28 h-28 p-2 rounded-lg cursor-pointer hover:shadow-md"
                onClick={handleClick}
              />
              <p className="text-sm mt-2">{Product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;

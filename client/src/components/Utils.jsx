import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";

//brands
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

//productData
//1
import Aachi1 from "../assets/productImages/Aachi/webp/1.webp";
import Aachi2 from "../assets/productImages/Aachi/webp/2.webp";
import Aachi3 from "../assets/productImages/Aachi/webp/3.webp";
import Aachi4 from "../assets/productImages/Aachi/webp/4.webp";
import Aachi5 from "../assets/productImages/Aachi/webp/5.webp";
import Aachi6 from "../assets/productImages/Aachi/webp/6.webp";

import Aachi8 from "../assets/productImages/Aachi/webp/8.webp";
import Aachi9 from "../assets/productImages/Aachi/webp/9.webp";
import Aachi10 from "../assets/productImages/Aachi/webp/10.webp";
import Aachi11 from "../assets/productImages/Aachi/webp/11.webp";
import Aachi12 from "../assets/productImages/Aachi/webp/12.webp";
import Aachi13 from "../assets/productImages/Aachi/webp/13.webp";
import Aachi14 from "../assets/productImages/Aachi/webp/14.webp";

//2
import Aavin1 from "../assets/productImages/aavin/webp/1.webp";
import Aavin2 from "../assets/productImages/aavin/webp/2.webp";
import Aavin3 from "../assets/productImages/aavin/webp/3.webp";
import Aavin4 from "../assets/productImages/aavin/webp/4.webp";
import Aavin5 from "../assets/productImages/aavin/webp/5.webp";

export const ProductData = [
  {
    category: "Aachi",
    imagesData: [
      [Aachi1, "Biryani Masala"],
      [Aachi2, "Chicken kebab "],
      [Aachi3, "Chicken Masala"],
      [Aachi4, "Chilli Masala"],
      [Aachi5, "Curry Masala"],
      [Aachi6, "Coriander Masala"],
      [Aachi8, "Egg Curry Masala"],
      [Aachi9, "Fish Curry Masala"],
      [Aachi10, "Garam Masala"],
      [Aachi11, "Kulambu Chilly Masala"],
      [Aachi12, "Mutton Masala"],
      [Aachi13, "Sambar Masala"],
      [Aachi14, "Turmeric Masala"],
    ],
  },
  {
    category: "Aavin",
    imagesData: [
      [Aavin1, "Delite"],
      [Aavin2, "Diet"],
      [Aavin3, "Green Magic"],
      [Aavin4, "Nice"],
      [Aavin5, "Premium"],
    ],
  },
];

export const bestSellProducts = [
  {
    header: "Milk Products",
    dic: "purity and nourishment",
    image: Image1,
  },
  {
    header: "Groceries ",
    dic: "Top brands and High quality",
    image: Image2,
  },
  {
    header: "Spices ",
    dic: "flavors and ignite memories",
    image: Image3,
  },
];

export const ProductBrandData = [
  { name: "Aachi", image: AachiImage, index: 1 },
  { name: "Aavin", image: AavinImage, index: 2 },
  { name: "Ariel", image: ArielImage, index: 3 },
  { name: "Aroma", image: AromaImage, index: 4 },
  { name: "Boost", image: BoostImage, index: 5 },
  {
    name: "Bourn vita",
    image: BrownVitaImage,
    index: 6,
  },
  { name: "BRU", image: BruImage, index: 7 },
  { name: "Cavins", image: CavinsImage, index: 8 },

  { name: "Fortune", image: FortuneImage, index: 9 },
  {
    name: "Gold Winner",
    image: GoldWinnerImage,
    index: 10,
  },
  { name: "Horlicks", image: HorlicksImage, index: 11 },
  { name: "Nescafe", image: NescafeImage, index: 12 },
  { name: "Rin", image: RinImage, index: 13 },
  { name: "Saffola", image: SaffolaImage, index: 14 },
  { name: "Sakthi", image: SakthiImage, index: 15 },
  {
    name: "Surf excel",
    image: SurfExcelImage,
    index: 16,
  },
  { name: "TATA", image: TataImage, index: 17 },
  { name: "Tide", image: TideImage, index: 18 },
];

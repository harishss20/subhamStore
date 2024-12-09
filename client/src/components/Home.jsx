import React from "react";
import logo from "../assets/logo.png";
import bag from "../assets/bag.png";
import dairyProducts from "../assets/dairyProducts.png";
import Card from "./Card";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div
        className="w-full h-auto pb-16 bg-gradient-to-b from-[#5DAECC] to-[#1D80AA] text-white flex flex-col"
        style={{ overflowX: "hidden" }}
      >
        {/* Header Section */}
        <header className="w-full flex justify-between items-center px-8 py-4 bg-orange-500">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img id="logo-container" src={logo} alt="Logo" className="h-8" />
            <h2 className="text-xl font-bold">Shubham Store</h2>
          </div>
          {/* Links Section */}
          <div className="flex items-center text-white space-x-6">
            <a
              href="#app"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:ease-in-out transition"
            >
              Get the App
            </a>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:ease-in-out transition">
              Sign in
            </button>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex flex-col mt-16 items-center font-gilroy text-center px-8 flex-grow">
          <div className="text-container">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-gilroy font-extrabold mt-8">
              Order Dairy products & groceries. Daily services!
            </h2>
          </div>
          {/* Location Search */}
          <div className="relative mt-28">
            <input
              type="text"
              required
              className="bg-white rounded-md w-80 h-10 text-black pl-10 pr-4 p-2"
              placeholder="Search Location"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Images */}
          <div id="image-container">
            <div className="absolute -left-52 rotate-45 bottom-3.5 ">
              <img src={bag} alt="bag" />
            </div>
            <div className="absolute w-72 right-0 -bottom-16 ">
              <img src={dairyProducts} alt="Dairy Products" />
            </div>
          </div>

          {/* Cards Section */}
          <Card />
        </main>
      </div>
    </div>
  );
};

export default Home;

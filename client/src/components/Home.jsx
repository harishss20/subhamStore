import React from "react";
import logo from "../assets/logo.png";
import milk from "../assets/milk.png";
import "../App.css";
const Home = () => {
  return (
    <div>
      <div className="w-full h-auto pb-16 bg-gradient-to-b from-[#5DAECC] to-[#1D80AA] text-white flex flex-col">
        {/* Header Section */}
        <header className="w-full flex justify-between items-center px-8 py-4 bg-orange-500">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8" />
            <h1 className="text-xl font-bold">SubhamStore</h1>
          </div>
          {/* Links Section */}
          <div className="flex items-center text-white space-x-6">
            <a
              href="#app"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:ease-in-out transition "
            >
              Get the App
            </a>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:ease-in-out transition ">
              Sign in
            </button>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex flex-col items-center font-gilroy text-center px-8 flex-grow">
          <h1 className="text-3xl md:text-5xl font-bold mt-8">
            Order Dairy products & groceries. Daily services!
          </h1>
          <div className="content-start">
            <img src={milk} alt="milk" />
          </div>

          {/* Cards Section */}
          <div
            id="card-container"
            className=" flex flex-wrap justify-center items-stretch gap-6 mt-12 w-full max-w-5xl"
          >
            {/* Card 1 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-1 max-w-xs md:max-w-sm">
              <h2 className="text-xl font-bold">FOOD DELIVERY</h2>
              <p className="mt-2">FROM RESTAURANTS</p>
              <span className="text-orange-500 font-bold">UPTO 60% OFF</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-1 max-w-xs md:max-w-sm">
              <h2 className="text-xl font-bold">INSTAMART</h2>
              <p className="mt-2">INSTANT GROCERY</p>
              <span className="text-orange-500 font-bold">UPTO 60% OFF</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-1 max-w-xs md:max-w-sm">
              <h2 className="text-xl font-bold">DINEOUT</h2>
              <p className="mt-2">EAT OUT & SAVE MORE</p>
              <span className="text-orange-500 font-bold">UPTO 50% OFF</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-1 max-w-xs md:max-w-sm">
              <h2 className="text-xl font-bold">GENIE</h2>
              <p className="mt-2">PICK-UP & DROP</p>
              <span className="text-orange-500 font-bold">UPTO 50% OFF</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
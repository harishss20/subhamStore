import React from "react";
import logo from "../assets/logo.png";

import Card from "./Card";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <div
        className=" w-full h-auto pb-16 text-white flex flex-col"
        style={{ overflowX: "clip" }}
      >
        {/* Header Section */}
        <header className="w-full flex justify-between items-center px-8 py-4 bg-orange-500">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img id="logo-container" src={logo} alt="Logo" className="h-8" />
            <h2 className="text-xl font-bold cursor-pointer">Sri Subham</h2>
          </div>
          {/* Links Section */}
          <div className="flex items-center text-white space-x-6">
            <a
              href="https://apps.microsoft.com/detail/XPFD4T9N395QN6?hl=en-US&gl=US&ocid=pdpshare"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:ease-in-out transition sm:text-sm"
            >
              Get the App
            </a>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex flex-col mt-16 items-center font-gilroy text-center px-8 flex-grow">
          <div className="text-container">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-gilroy shadow-sm font-extrabold mt-8">
              Order Dairy products & groceries. Daily services!
            </h2>
          </div>
          {/* Location Search */}
          <div className="relative mt-28 shadow-sm">
            <input
              type="text"
              required
              className="bg-white border rounded-md w-80 h-10 text-black pl-10 pr-4 p-2"
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
          <div id="image-container"></div>

          {/* Cards Section */}
          <Card />
        </main>
      </div>
    </div>
  );
};

export default Home;

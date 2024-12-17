import React from "react";

import { useNavigate } from "react-router";
function Products() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productsList");
  };
  return (
    <div className="flex text-black m-10  font-serif items-center justify-center ">
      <div className="flex flex-col   hover:scale-105 duration-300 justify-center items-center w-10/12   ">
        <h1 className="flex ~text-lg/2xl justify-center items-center">
          Welcome to Shubham Store
        </h1>
        <p className="text-gray-300 p-6">
          Explore all our groceries—just click the button!
        </p>
        <button onClick={handleClick}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-black animate-bounce cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Products;

import React from "react";
import logo from "../assets/logo.png";
function MobileApp() {
  return (
    <div>
      <div className="flex overflow-x-clip text-black border mt-20 w-1/3 font-gilroy text-2xl rounded-xl">
        <img src={logo} alt="logo" className="w-20 h-auto " />
        <h3>Shubham Store</h3>
      </div>
    </div>
  );
}

export default MobileApp;

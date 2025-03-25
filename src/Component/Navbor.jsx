import React from "react";
import { Link } from "react-router";

function Navbor() {
  return (
    <nav className="text-[#CCFF00] poppins-semibold px-20 py-4 flex justify-between items-center border-[#CCFF00] border-b-2 h-2/12">
    <div className="flex items-center w-1/6">
      <h1 className="">M</h1>
      <img src="./src/assets/logo.png" alt="logo" />
      <h1>vie</h1>
    </div>
    <div className="flex gap-4 w-4/6">
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/Movies">Movies</Link>
        <Link to="/Faverate">Faverate</Link>
      </div>
    </div>
    <div className="w-1/6 flex justify-end">Sign</div>
  </nav>
  
  );
}

export default Navbor;

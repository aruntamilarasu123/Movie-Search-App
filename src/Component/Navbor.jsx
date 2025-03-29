import React from "react";
import { Link } from "react-router";

function Navbor() {
  return (
    <nav className="poppins-semibold px-20 py-2 flex justify-between items-center navbor">
    <div className="text-[#ffffff] flex items-center w-1/6">
      <h1 className="text-4xl">M<span className="text-[#f7c600]">o</span>vie</h1>
    </div>
    <div className="flex gap-4 w-4/6">
      <div className="flex gap-4 items-center">
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/Movies">Movies</Link>
        <Link className="nav-btn" to="/Faverate">Faverate</Link>
      </div>
    </div>
    <div className="w-1/6 flex justify-end">
    <Link className="sign-btn">
    Sign Up
    </Link>
    </div>
  </nav>
  
  );
}

export default Navbor;

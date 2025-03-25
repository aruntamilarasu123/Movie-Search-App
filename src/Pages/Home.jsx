import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";

function Home() {
  return (
    <div className="text-[#CCFF00] px-20 py-8 gap-8 flex items-center h-10/12">
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="poppins-extrabold tracking-wide text-4xl">Unlimited Entertainment, Movies, TVs shows, & More.</h1>
        <Link className="p-4 border border-[#CCFF00] w-32 rounded-lg flex justify-center items-center" to="/Movies">Explore</Link>
      </div>
    </div>
  );
}

export default Home;

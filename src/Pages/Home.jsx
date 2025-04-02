import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="text-[#ffffff] px-20 hero-section flex items-center max-md:px-0">
      <div className="w-1/2 flex flex-col justify-center gap-8 max-md:w-full max-md:justify-normal">
        <h1 className="poppins-extrabold tracking-wide text-4xl">Free Movies to Watch, Anytime Anywhere.</h1>
        <p className="text-3xl poppins-light">The search is over! Let Plex help you find the perfect movie to watch tonight for free.</p>
        <Link className="search-btn flex items-center justify-center text-black poppins-bold" to="/Movies">Explore</Link>
      </div>
    </div>
  );
}

export default Home;

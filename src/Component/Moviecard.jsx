import React from "react";
import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";

function Moviecard({ loading, addToFaverate, faverate, currentItems, }) {


  return (
    <div className="px-20 flex flex-col justify-center items-center max-md:px-0">
      {loading ? (
        <div className="text-[#ffffff] text-3xl poppins-light mt-36">Loading...</div>
      ) : (
        <div className="px-20 grid grid-cols-4 gap-4 rounded-lg movie-box max-md:grid-cols-1 max-md:px-0">
          {
            currentItems.map((data) => (
              <div key={data.imdbID}
                className="p-2 text-[#ffffff] flex flex-col overflow-hidden rounded-lg movie-card content-between grid"
              >
                <div className="">
                  <img className="object-contain object-center w-full h-64" src={data.Poster} alt={data.Title} />
                </div>
                <div className="flex justify-between p-2">
                  <h1>{data.Title} ({data.Year})</h1>
                </div>
                <div className="">
                  <Link to={`/Movie/${data.imdbID}`}>
                    <button className="cursor-pointer w-full flex justify-center items-center movie-btn text-black">
                      View More Details
                    </button>
                  </Link>
                </div>
                <button onClick={() => addToFaverate(data)}
                  className={`absolute fav-btn ${faverate.some((favMovie) => favMovie.imdbID === data.imdbID) ? 'block' : 'hidden'}`}
                  disabled={false}
                >
                  <CiHeart className={`${faverate.some((favMovie) => favMovie.imdbID === data.imdbID) ? 'bg-red-500' : 'bg-gray-500'} p-[3px] rounded-full`} />
                </button>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Moviecard;

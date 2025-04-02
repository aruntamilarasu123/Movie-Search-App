import React from "react";

function Faverate({ faverate, removeFromFaverate }) {
  return (
    <div className="px-20 flex flex-col justify-center items-center max-md:px-0">
      <div className="px-20 grid grid-cols-4 gap-4 rounded-lg movie-box max-md:px-0 max-md:grid-cols-1">
        {faverate.map((data) => (
          <div
            key={data.imdbID}
            className="p-2 text-[#ffffff] flex flex-col overflow-hidden rounded-lg movie-card content-between grid "
          >
            <div>
              <img className="object-contain object-center w-full h-64" src={data.Poster} alt={data.Title} />
            </div>
            <div className="flex justify-between p-2">
              <h1>{data.Title} ({data.Year})</h1>
            </div>
            <div className="">
              <button onClick={() => removeFromFaverate(data.imdbID)} 
              className="cursor-pointer w-full flex justify-center items-center movie-btn text-black"
              disabled={faverate.includes(data.imdbID)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faverate;

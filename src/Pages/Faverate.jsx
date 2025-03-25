import React from "react";

function Faverate({ faverate }) {
  return (
    <div className="px-20 flex flex-col justify-center items-center">
      <div className="px-20 grid grid-cols-4 gap-4">
        {faverate.map((data) => (
          <div
            key={data.id}
            className="p-2 text-[#CCFF00] flex flex-col gap-4 border-[#CCFF00] border rounded-lg"
          >
            <div>
              <img src={data.Poster} alt={data.Title} />
            </div>
            <div className="flex justify-between">
              <h1>{data.Title}</h1>
            </div>
            <div className="flex justify-between">
              <button className="p-2 border bg-black border-[#CCFF00] w-32 rounded-lg flex justify-center items-center">
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

import React from 'react'

function Search({handelInputChange, handelSearch, search,}) {
  return (
    <div className="text-[#CCFF00] flex flex-col poppins-regular">
    <div className="flex justify-center mb-2 gap-4 search-input">
      <input
        className="search-input-box text-black rounded-lg w-90"
        type="search"
        value={search}
        onChange={handelInputChange}
        placeholder="Enter Movie Name..."
      />
      <button onClick={handelSearch} className="search-btn-2 rounded-lg flex justify-center items-center">
        Search
      </button>
    </div>
  </div>
  )
}

export default Search
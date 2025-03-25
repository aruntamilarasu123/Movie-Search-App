// import React, { useEffect, useState } from "react";

function Movies({loading, handelInputChange, handelSearch, search, movies, addToFaverate}) {
  // const [search, setSearch] = useState("")
  // const [searchResults, setSearchResults] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [faverate, setFaverate] = useState([])

  // const handelInputChange = (event) => {
  //   setSearch(event.target.value);
  // }

  // const handelSearch = () => {
  //   if (search.trim() !== ''){
  //     setSearchResults(search);
  //     setSearch("");
  //   }
  // }

  // useEffect(()=>{
  //   const fetchData = async (searchResults) => {
  //     try {
  //       const response = await fetch(`http://www.omdbapi.com/?s=${searchResults}&apikey=35e2c71e`);
  //       const result = await response.json();
  //       if(result.Search){
  //         setMovies(result.Search)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchData(searchResults);
  // },[searchResults])

  // const addToFaverate = (movies) => {
  //   const newFaverate = [...faverate, movies]
  //   setFaverate(newFaverate);
  // }

  return (
    <div>
      <div className="text-[#CCFF00] flex justify-center mt-20 mb-20 gap-4">
        <input
          className="border border-[#CCFF00] p-4 w-[500px]"
          type="search"
          value={search}
          onChange={handelInputChange}
          placeholder="Enter Movie Name..."
        />
        <button onClick={handelSearch} className="p-4 border bg-black border-[#CCFF00] w-32 rounded-lg flex justify-center items-center">
          Search
        </button>
      </div>
      <div className="px-20 flex flex-col justify-center items-center">
        {loading ? (
          <div className="text-[#CCFF00] text-3xl font-bold">Loading...</div>
        ):(
          <div className="px-20 grid grid-cols-4 gap-4">
              {
            movies.map((data)=>(
              <div key={data.id}
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
                Details
              </button>
              <button onClick={()=>addToFaverate(data)} className="p-2 border bg-black border-[#CCFF00] w-38 rounded-lg flex justify-center items-center">
                Add to Faverate
              </button>
            </div>
          </div>
            ))
          }
          </div>
        )}
          
      </div>
    </div>
  );
}

export default Movies;

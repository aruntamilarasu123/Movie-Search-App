import "./App.css";
import { Routes, Route } from "react-router";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Faverate from "./Pages/Faverate";
import Navbor from "./Component/Navbor";
import Movies from "./Pages/Movies";
import Moviedetails from "./Pages/Moviedetails";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);//INITIAL STATE
  const [faverate, setFaverate] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [selectedType, setSelectedType] = useState("");

  //PAGINATION
  const itemsPerPage = 4;
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const indexOfLastItem = currentpage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);


  const pageNumber = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  const handelPageChange = (page) => {
    setCurrentpage(page);
  };

  //INPUN HANDELING
  const handelInputChange = (event) => {
    setSearch(event.target.value);
  };

  //HANDELED SEARCH BUTTON
    const handelSearch = () => {
        if (search.trim() !== "") {
            setSearchResults(search.trim());
            setSearch("");
        }
    };

  //DATA FETCHED
  useEffect(() => {
        const fetchData = async () => {
            if (!searchResults.trim()) {
                console.error("No search term provided.");
                return;
            }
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchResults}&type=${selectedType}&apikey=35e2c71e`
        );
        const result = await response.json();
        if (result.Search) {
          setMovies(result.Search);
        } else {
          alert("No movies found!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(searchResults, selectedType);
  }, [searchResults, selectedType]);

  //ADD TO FAVERATE HANDELING
  const addToFaverate = (movies) => {
    if(!faverate.some((favMovie)=> favMovie.imdbID === movies.imdbID)){
    const newFaverate = [...faverate, movies];
    setFaverate(newFaverate);
    }
  };

  //REMOVE FROM FAVERATE
  const removeFromFaverate = (imdbID) => {
    const updateFaverate = faverate.filter((faverate) => faverate.imdbID !== imdbID)
    setFaverate(updateFaverate);
  }

  const handelTypeChange = (event) => {
    setSelectedType(event.target.value)
  }

  return (
    <div>
      <Navbor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Faverate" element={<Faverate faverate={faverate} removeFromFaverate={removeFromFaverate} />} />
        <Route 
          path="/Movie/:imdbID" 
          element={<Moviedetails/>}/>
        <Route
          path="/Movies"
          element={
            <Movies
              loading={loading}
              handelInputChange={handelInputChange}
              handelSearch={handelSearch}
              search={search}
              addToFaverate={addToFaverate}
              currentItems={currentItems}
              handelPageChange={handelPageChange}
              pageNumber={pageNumber}
              selectedType={selectedType}
              handelTypeChange={handelTypeChange}
              faverate={faverate}
             
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

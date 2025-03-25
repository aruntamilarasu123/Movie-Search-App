import "./App.css";
import { Routes, Route } from "react-router";
import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Faverate from "./Pages/Faverate";
import Navbor from "./Component/Navbor";
import Movies from "./Pages/Movies";

function App() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [faverate, setFaverate] = useState([]);

  const handelInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handelSearch = () => {
    if (search.trim() !== "") {
      setSearchResults(search);
      setSearch("");
    }
  };

  useEffect(() => {
    const fetchData = async (searchResults) => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchResults}&apikey=35e2c71e`
        );
        const result = await response.json();
        if (result.Search) {
          setMovies(result.Search);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData(searchResults);
  }, [searchResults]);

  const addToFaverate = (movies) => {
    const newFaverate = [...faverate, movies];
    setFaverate(newFaverate);
  };

  return (
    <div>
      <Navbor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Faverate" element={<Faverate faverate={faverate} />} />
        <Route
          path="/Movies"
          element={
            <Movies
              loading={loading}
              movies={movies}
              handelInputChange={handelInputChange}
              handelSearch={handelSearch}
              search={search}
              addToFaverate={addToFaverate}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

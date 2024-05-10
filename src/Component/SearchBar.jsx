import React from "react";
import "../Style/sech.css";
import { useState } from "react";// Importing component-specific styles
import axios from "axios";  // Importing useState hook from React
import { useDispatch, useSelector } from "react-redux"
import { setSearchMovieDtaiDetails } from "../redux/searchSlice";// Importing action creator from Redux slice
import ListMovie from "./ListMovie";  // Importing ListMovie component

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdlNTgxYzczZmMxMzIwYTk2OWQ3NmEwNjI5NTYxOCIsInN1YiI6IjY2MjRlNWRlMjIxYmE2MDE3YzE0NTk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HmDHavoc3rRstEBHBGeXz4-LBSi6f-nWt49ihXDwZE0",
  },
};

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState(""); // useing use STATE
  const dispatch = useDispatch();
  const { moveiName, searchedMovei } = useSelector(
    (store) => store.searchMovie
  );

  const HeandalSearch = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const url = `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`;

    try {
      const res = await axios.get(url, options);
      console.log("res=", res);
      const moveis = res?.data?.results; // Extracting movie results from response
         // Storing search query
      const searchedMovei = searchMovie;
      console.log("mm=", moveis);
      dispatch(setSearchMovieDtaiDetails({ searchedMovei, moveis }));
    } catch (error) {
      console.log(error); // Log any errors
    } finally {
      setSearchMovie("");
    }
  };
  return (
    <>
      <div className="f-div">
        <form onSubmit={HeandalSearch} className="from">
          <input
            type="text"
            placeholder="Search Movie......"
            className="input-field"
            value={searchMovie}
            onChange={(e) => {
              setSearchMovie(e.target.value);
            }}
          />
          <button type="submit" className="b-submit">
            Search
          </button>
        </form>

        <div>
          <div>{moveiName}</div>
          <div className="searchList">
            {searchedMovei !== null &&
              searchedMovei.map((items) => {
                return (
                  <ListMovie
                    movies={
                      searchedMovei.lenght === 0 ? (
                        <>
                          <h3>Movei Not Found!</h3>
                        </>
                      ) : (
                        searchedMovei
                      )
                    }
                    title={moveiName}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
//  Exporting SearchBar component
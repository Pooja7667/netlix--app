import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MoveiContainer from "./MoveiContainer";
import MainContainer from "./MainContainer";
import SearchBar from "./SearchBar";



import {
  useNowPlaying,
  usePopularMovei,
  useTopRatedMovei,
  useUpComeingMovei,
} from "../Hooks/useMovei";

//MovieBrowser component responsible for rendering movie browsing interface
const Browser = () => {
  // Redux selectors to access user data and toggle search state
  const user = useSelector((store) => store.app.user);
  const ToggalSearch = useSelector((store) => store.movei.toggalSearch);
  // React Router hook for navigation

  const navigate = useNavigate();
  // Custom hooks to fetch movie data on component mount
  useNowPlaying();
  usePopularMovei();
  useTopRatedMovei();
  useUpComeingMovei();

  // Effect hook to perform actions based on user or navigation changes
  useEffect(() => {}, [user, navigate]);

  return (
    <>
      <Header />
      <div>
        {ToggalSearch ? (
          <SearchBar />
        ) : (
          <>
            <MainContainer />
            <MoveiContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browser;

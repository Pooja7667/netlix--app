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

const Browser = () => {
  const user = useSelector((store) => store.app.user);
  const ToggalSearch = useSelector((store) => store.movei.toggalSearch);
  const navigate = useNavigate();
  
  
  useNowPlaying();
  usePopularMovei();
  useTopRatedMovei();
  useUpComeingMovei();


  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //   }
  // });
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

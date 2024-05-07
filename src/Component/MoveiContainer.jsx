import React from "react";
import ListMovie from "./ListMovie";
import { useSelector } from "react-redux";
import "../Style/Mcon.css";
const MoveiContainer = () => {
  const movie = useSelector((store) => store.movei);

  console.log("stor-data =" ,movie)
  return (
    <>
      <div className="MoveiContainer">
        <ListMovie movies={movie.nowPlayingMovei} title={"NowPlaying Movie "}/>
        <ListMovie movies={movie.PopularMovei} title={"Popular  Movie "} />
        <ListMovie movies={movie.TopRatedMove} title={"TopRated Movie "} />
        <ListMovie movies={movie.UpComeingMovei} title={"UpComeing Movie "} />
      </div>
    </>
  );
};

export default MoveiContainer;

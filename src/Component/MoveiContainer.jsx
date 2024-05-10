import React from "react";
import ListMovie from "./ListMovie";
import { useSelector } from "react-redux";
import "../Style/Mcon.css";
// Functional component MoveiContainer
const MoveiContainer = () => {
  // Selecting movie data from the Redux store using the useSelector hook
  const movie = useSelector((store) => store.movei);

  // Rendering the JSX structure of the MoveiContainer component
  return (
    <>
      <div className="MoveiContainer">
        <ListMovie movies={movie.nowPlayingMovei} title={"NowPlaying Movie "} />
        <ListMovie movies={movie.PopularMovei} title={"Popular  Movie "} />
        <ListMovie movies={movie.TopRatedMove} title={"TopRated Movie "} />
        <ListMovie movies={movie.UpComeingMovei} title={"UpComeing Movie "} />
      </div>
    </>
  );
};

export default MoveiContainer; // Exporting the MoveiContainer component

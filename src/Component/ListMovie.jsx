import React from "react";
import MoveiCard from "./MoveiCard";
import "../Style/mL.css";

const ListMovie = ({ title, movies,}) => {
  if (!movies) {
    return null; // Return null or a loading indicator, depending on your use case
  }

  return (
    <>
      <div className="contain-all">
        <div>
          <h3 className="p-title">{title}</h3>
        </div>
        <div className="list-flex">
          {movies.map((movie ) => (
            <MoveiCard poster={movie.poster_path}  moveiId={movie.id}  />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListMovie;

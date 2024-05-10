import React from "react";
import "../Style/Mcard.css";
import { useDispatch,useSelector } from "react-redux";   // Importing useDispatch and useSelector hooks from react-redux
import { loadTodos } from "../Hooks/MoveiById";   


const MoveiCard = ({ moveiId, poster, index }) => {
  const dispatch = useDispatch();

  const id = useSelector((store) => store.movieDetails.data); // Using useSelector hook to select data from the Redux store

  const detail = (moveiId) => {
    dispatch(loadTodos(moveiId));
    console.log(moveiId);
  };
  // Returning the JSX structure of the MoveiCard component
  return (
    <>
    
      <div className="card" key={index}>
        <button
          onClick={() => {
            detail(moveiId);
          }}
        >
          +
        </button>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="wow" />
      </div>
    </>
  );
};

export default MoveiCard;
// Exporting the MoveiCard component
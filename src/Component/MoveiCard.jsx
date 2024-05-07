import React from "react";
import "../Style/Mcard.css";
import { useDispatch } from "react-redux";
import { setOpen, getID } from "../redux/movieSlice";
import { Link } from "react-router-dom";
const MoveiCard = ({ moveiId, poster }) => {
  const dispatch = useDispatch();
  console.log("movei card===",moveiId)

  const handalOpen = () => {
    dispatch(setOpen(true));
  
    console.log(  "i got the id" )
  };

  return (
    <>
      <Link to={`/detailPage/${moveiId}`}>

        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="wow" />
        </div>
      </Link>
    </>
  );
};

export default MoveiCard;

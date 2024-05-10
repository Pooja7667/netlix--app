import React from "react";
import { useActionData, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const id = useSelector((store) =>
  store.movieDetails.data);
   
  console.log("wow====",id)
 
  return (
    <>
      <div className="main-detail"></div>
    </>
  );
};

export default DetailPage;

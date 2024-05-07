import React from "react";
import { useParams } from "react-router-dom";


const DetailPage = () => {
  const { moveiId } = useParams();
  console.log("param===" ,moveiId)
  return (
    <>
      <div className="main-detail">

        
     </div>
    </>
  );
};

export default DetailPage;

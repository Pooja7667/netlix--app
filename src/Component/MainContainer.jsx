import React from "react";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

import { useSelector } from "react-redux";

const MainContainer = () => {
  const Dmovei = useSelector((store) => store.movei.nowPlayingMovei);
  console.log("d", Dmovei);

  // Check if Dmovei is not undefined and has at least 6 items
  if (!Dmovei) {
    return null; // or return a loading indicator
  }

  // Destructure the 6th item from Dmovei
  const { id, overview, title } = Dmovei[5];

  return (
    <>
      <div>
        <VideoTitle overview={overview} title={title} />
        <VideoContainer moveiId={id} />
      </div>
    </>
  );
};

export default MainContainer;

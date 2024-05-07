import React from 'react'
import  "../Style/vc.css"
import useMoveiByid from '../Hooks/useMoveiByid';
import { useSelector } from 'react-redux';
const VideoContainer = ({ moveiId }) => {
  console.log("moveiId=", moveiId);

  // Fetch trailer data from Redux store
  const trailer = useSelector((store) => store.movei.MoveiTailar);
  
  console.log("TT=",trailer)


  // Fetch trailer data using the hook
  useMoveiByid(moveiId);

  // Check if trailer data is available
  if (!trailer) {
    return null; // Return null or a loading indicator if trailer data is not available yet
  }

  // Render the video player with the trailer key
  return (
    <div className="v-container">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailer.key}?si=Red1VhFb9INrFy-y&mute=1&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
import React from 'react'
import "../Style/vt.css"
const VideoTitle = ({id, overview, title }) => {
  return (
    <>
      <div className="t-container" key={id}>
        <h1>{title}</h1>
        <p> {overview}</p>
        <div className="button-flax">
          <button>Play</button>
          <button>watch More</button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle
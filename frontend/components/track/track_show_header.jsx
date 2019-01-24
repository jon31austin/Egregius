import React from "react";

const TrackShowHeader = ({ track }) => {
  debugger;
  return (
    <div>
      <div className="track-info-bar">
        <div className="track-detail-bucket">
          <div className="album-image">
            <img src={track.photoUrl} />
          </div>
          <div className="track-info">
            <h1>{track.title}</h1>
            <h2>{track.artist}</h2>
            <h4>Album: {track.album}</h4>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TrackShowHeader;
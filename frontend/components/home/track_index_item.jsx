import React from "react";
import { Link } from "react-router-dom";

const TrackIndexItem = ({ track }) => {
  return (
    <li> 
      <Link to={`/tracks/${track.id}`}>
        <div className="track-index-item">
          <h2>{track.title}</h2>
          <h4>{track.artist}</h4>
        </div>
      </Link>
    </li>
  )
};

export default TrackIndexItem;
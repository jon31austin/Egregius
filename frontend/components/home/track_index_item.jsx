import React from "react";
import { Link } from "react-router-dom";

const TrackIndexItem = ({ track, rank }) => {
  
  return (
    <li> 
      <Link to={`/tracks/${track.id}`}>
        <div className="track-index-item">
          
          <div className="left-track-index">
            {trackRank(rank)}

            <div className="track-item-info" >
              <h2>{track.title}</h2>
              <h4>{track.artist}</h4>
            </div>
          </div>
          

          <div className="right-track-index">
            <div className="num-annotations">
              {track.annotations}
            </div>
          </div>
          
        </div>
      </Link>
    </li>
  )
};

const trackRank = (rank) => {
  if (rank < 4) {
    return (
      <div className="rank-holder">
        <div className="top-three-ranks">
          {rank}
        </div>
      </div>
      
    )
  } else {
    return (
      <div className="rank-holder">
        <div className="all-track-ranks">
          {rank}
        </div>
      </div>
    )
  }
}

export default TrackIndexItem;
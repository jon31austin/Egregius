import React from "react";

const TrackIndexItem = ({ track }) => {
  return (
    <li> {track.title} by {track.artist} </li>
  )
};

export default TrackIndexItem;
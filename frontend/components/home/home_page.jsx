import React from 'react';
import News from "./news";
import TrackIndex from "./track_index_container";

const HomePage = () => {
  return (
    <div className="home-page">
      <News />
      <TrackIndex />
    </div>
  )
};

export default HomePage;
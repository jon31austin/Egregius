import React from "react";

const News = () => {
  return (
    <div className="news">
      <div className="featured-stories">
        <h1>Featured Stories</h1>
        <div className="news-test">
          <img src="/assets/news/news1.jpg" />
          <div>
            TWO IMAGE
            THREE IMAGE
          </div>
        </div>
      </div>

      <div className="latest-news">
        <h1>Latest</h1>
        <div>
          UL OF STUFF
        </div>
      </div>
    </div>
  )
};

export default News;
import React from "react";

const News = () => {
  return (
    <div className="news">

      <div className="news-headers">
        <div className="featured-stories"><h1>Featured Stories</h1></div>
        <div className="latest-news"><h1>Latest News</h1></div>
      </div>

      <div className="news-content">
        <div className="news-left-pic"></div>

        <div className="news-right">
          <div className="news-right-top"></div>
          <div className="news-right-bottom"></div>
        </div>

        <div className="latest-news"></div>
      </div>
     
    </div>
  )
};

export default News;

{/* <img src="/assets/news/news2.jpg" />
  <img src="/assets/news/news3.jpg" /> */}
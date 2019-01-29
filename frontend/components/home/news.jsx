import React from "react";

const News = () => {
  return (
    <div className="news">

      <div className="news-headers">
        <div className="featured-stories"><h1>Featured Stories</h1></div>
        <div className="latest-news"><h1>Latest News</h1></div>
      </div>

      <div className="news-content">
        <div className="news-left-pic">
          <h1>Lyrics that are out of this world!</h1>
        </div>

        <div className="news-right">
          <div className="news-right-top">
            <h1>Get some water!</h1>
            <h2>It's lit!</h2>
          </div>
          <div className="news-right-bottom">
            <h1>Disappear into the words...</h1>
          </div>
        </div>

        <div className="latest-news">
          
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>
      </div>
     
    </div>
  )
};

export default News;

{/* <img src="/assets/news/news2.jpg" />
  <img src="/assets/news/news3.jpg" /> */}
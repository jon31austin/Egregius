import React from "react";

const News = () => {
  return (
    <div className="news">

      <div className="news-headers">
        <div className="featured-stories-header"><h1>Featured Stories</h1></div>
        <div className="latest-news-header"><h1>Latest News</h1></div>
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
          <div className="latest-news-item">
            <div className="latest-background-1"></div>
            <div className="latest-news-info">
              <p>The Red Shoulder Peacock is native to Lake Malawi, Africa.</p>
            </div>
          </div>

          <div className="latest-news-item">
            <div className="latest-background-2"></div>
            <div className="latest-news-info">
              <p>Angelfish are ambush predators that prey on small fish and macroinvertibrates!</p>
            </div>
          </div>

          <div className="latest-news-item">
            <div className="latest-background-3"></div>
            <div className="latest-news-info">
              <p>Butterfly fish are generally diurnal and don't frequent waters deeper than 60 feet!</p>
            </div>
          </div>

          <div className="latest-news-item">
            <div className="latest-background-4"></div>
            <div className="latest-news-info">
              <p>Dory from Finding Nemo is a Tang Fish! They don't all suffer from memory loss.</p>
            </div>
          </div>
        </div>

      </div>
     
    </div>
  )
};

export default News;

{/* <img src="/assets/news/news2.jpg" />
  <img src="/assets/news/news3.jpg" /> */}
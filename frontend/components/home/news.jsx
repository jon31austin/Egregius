import React from "react";

const News = () => {
  return (
    <div className="news">

      <div className="news-headers">
        <div className="featured-stories-header"><h1>Featured Stories</h1></div>
        <div className="latest-news-header"><h1>Latest News</h1></div>
      </div>

      <div className="news-content">
        <div onClick={() => window.open("https://en.wikipedia.org/wiki/Lunar_eclipse#Lunar_versus_solar_eclipse")}
          className="news-left-pic">
          <h1>Lyrics that are out of this world!</h1>
        </div>

        <div className="news-right">
          <div onClick={() => window.open("https://www.youtube.com/watch?v=L_LUpnjgPso")}
            className="news-right-top">
            <h1>Get some water!</h1>
            <h2>It's lit!</h2>
          </div>
          <div onClick={() => window.open("https://vimeo.com/110211449")}
            className="news-right-bottom">
            <h1>Disappear into the words...</h1>
          </div>
        </div>

        <div className="latest-news">
          <div onClick={() => window.open("https://www.google.com/maps/place/Lake+Malawi/@-15.2821151,19.8964281,4.99z/data=!4m5!3m4!1s0x191e174395a2ba1d:0x63bf8e8051243fa8!8m2!3d-11.6701147!4d34.6856509")}
            className="latest-news-item">
            <div className="latest-background-1"></div>
            <div className="latest-news-info">
              <p>The Red Shoulder Peacock is native to Lake Malawi, Africa.</p>
            </div>
          </div>

          <div onClick={() => window.open("https://www.etymonline.com/word/angel#etymonline_v_13426")}
            className="latest-news-item">
            <div className="latest-background-2"></div>
            <div className="latest-news-info">
              <p>Angelfish are ambush predators that prey on small fish and macroinvertibrates!</p>
            </div>
          </div>

          <div onClick={() => window.open("https://www.tripadvisor.com/Attraction_Review-g33048-d984035-Reviews-Monarch_Butterfly_Natural_Preserve-Santa_Cruz_California.html")}
            className="latest-news-item">
            <div className="latest-background-3"></div>
            <div className="latest-news-info">
              <p>Butterfly fish are generally diurnal and don't frequent waters deeper than 60 feet!</p>
            </div>
          </div>

          <div onClick={() => window.open("https://www.rottentomatoes.com/m/finding_nemo")}
            className="latest-news-item">
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
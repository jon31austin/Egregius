import React from "react";

class TrackShowMain extends React.Component {
  render() {
    const lyricArray = this.props.track.lyrics.split("\n")

    const formattedLyrics = lyricArray.map( (line, i) => {
      if (line === "") {
        return <br key={`line-${i}`}></br>
      } else {
        return <li key={`line-${i}`}>{line}</li>
      }
    });
  
    return (
      <div className="track-main-bucket">
        <h3 className="lyrics-header">{this.props.track.title} LYRICS</h3>
        <ul>
          {formattedLyrics}
        </ul>
      </div>
    )
  }
};

export default TrackShowMain;
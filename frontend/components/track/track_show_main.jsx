import React from "react";

class TrackShowMain extends React.Component {
  render() {
    const lyricArray = this.props.track.lyrics.split("\n")

    const formattedLyrics = lyricArray.map( (line, i) => (
      <li key={`line-${i}`}>{line}</li>
    ));

    return (
      <div>
        <ul>
          {formattedLyrics}
        </ul>
      </div>
    )
  }
};

export default TrackShowMain;
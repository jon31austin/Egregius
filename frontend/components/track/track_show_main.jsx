import React from "react";

class TrackShowMain extends React.Component {
  render() {
    return (
      <div>
        {this.props.track.lyrics}
      </div>
    )
  }
};

export default TrackShowMain;
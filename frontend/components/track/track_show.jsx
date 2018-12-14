import React from "react";

class TrackShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.track || this.props.getSingleTrack(this.props.match.params.trackId)
  }
  
  render() {
    if (!this.props.track) return null;

    return(
      <div>
        <div className="song-info-bar">
          <div className="song-info-bucket">
            <div className="album-image">
              <h3>No Photo Yet</h3>
            </div>
            <h1>{this.props.track.title}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShow;
import React from "react";

import TrackShowHeader from "./track_show_header";
import TrackShowMain from "./track_show_main_container";

class TrackShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleTrack(this.props.match.params.trackId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.trackId !== this.props.match.params.trackId) {
      this.props.getSingleTrack(this.props.match.params.trackId);
      this.props.clearSelection()
    }
  }
  
  render() {
    if (!this.props.track) return null;

    return(
      <div>
        <TrackShowHeader track={this.props.track} />
        <TrackShowMain track={this.props.track} />
      </div>
    )
  }
}

export default TrackShow;
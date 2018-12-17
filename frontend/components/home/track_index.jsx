import React from 'react';
import TrackIndexItem from "./track_index_item";

class TrackIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = { offset: 0 }
  }

  componentDidMount() {
    this.props.getTracks(this.state.offset);
  }

  render() {
    const allTracks = this.props.tracks
    if (allTracks.length === 0) return null;

    const trackList = allTracks.map( track => {
      return (
        <TrackIndexItem key={track.id} track={track} />
      )
    });

    return (
      <div className="track-index" >
        <h2 className="track-index-header">Top Songs</h2> 
        <ul>
          {trackList}
        </ul>
      </div>
    )
  }
}

export default TrackIndex;
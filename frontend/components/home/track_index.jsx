import React from 'react';
import TrackIndexItem from "./track_index_item";

class TrackIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = { 
      offset: 0,
      loading: false 
    }

    this.handleMore = this.handleMore.bind(this)
  }

  componentDidMount() {
    this.props.getTracks(this.state.offset);
  }

  handleMore() {
    let newOffset = this.state.offset + 6;

    this.setState({
      loading: true
    }, () => {
        return this.props.getTracks(newOffset)
          .then(res => {
            setTimeout(() => this.setState({ loading: false, offset: newOffset }), 500)
          })
    })
  }

  render() {
    
    // pull tracks from redux state and sort by number of annotations
    const allTracks = this.props.tracks.sort( (a, b) => {
      if (a.annotations < b.annotations) return 1;
      if (a.annotations > b.annotations) return -1;
      return 0;
    })

    if (allTracks.length === 0) return null;
    
    // only take songs in redux state that were requested, not all of them
    const trackList = allTracks.map( (track, i) => {
      if (i < (this.state.offset + 6)) {
        return (
          <TrackIndexItem key={track.id} track={track} rank={i+1} />
        )
      }
    });

    return (
      <div className="track-index">
        <div className="track-index-header">
          <h2>Most Annotated Songs</h2>
          <h2>Num. Annotations</h2>
        </div>
        
        <ul>
          {trackList}
        </ul>

        { this.state.loading ? 
          <div className="loader"></div> : 
          <div className="show-more" onClick={this.handleMore}>Show More</div>
        }
      </div>
    )
  }
}

export default TrackIndex;
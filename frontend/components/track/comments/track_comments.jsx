import React from "react";

class TrackComments extends React.Component {
  constructor(props){
    super(props)

    this.formatTrackComments = this.formatTrackComments.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.trackId);
  }

  formatTrackComments(trackId) {
    const coms = this.props.comments.filter(com => {
      debugger;
      return (com.track_id === trackId)
    }).map(com => (
      <li className="track-comment">
        <div>
          <h1 className="track-comment-username">{com.username}</h1>
          <p>{com.body}</p>
        </div>
      </li>
    ))
    
    if (coms.length === 0) {
      return (
        <div className="track-comment">
          <h1>Be the first to leave a comment!</h1>
        </div>
      )
    }
    return coms;
  }

  render() {
    return(
      <div className="track-comments-box">
        <input className="track-comment-input" type="text" placeholder="Add a comment"></input>
        <ul>
          {this.formatTrackComments(this.props.trackId)}
        </ul>
      </div>
    )
  }
};

export default TrackComments;
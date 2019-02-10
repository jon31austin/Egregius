import React from "react";

class TrackComments extends React.Component {
  constructor(props){
    super(props)

    this.state = ({ 
      sortBy: "date"
    })

    this.formatTrackComments = this.formatTrackComments.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.trackId);
  }

  compare(a, b) {
    if (a.created_at > b.created_at) return -1;
    if (a.created_at < b.created_at) return 1;
    return 0;
  }

  formatTrackComments(trackId) {
    let coms = this.props.comments.filter(com => {
      return (com.track_id === trackId)
    })
    
    coms = coms.sort(this.compare)
    debugger;
    coms = coms.map(com => (
      <li className="track-comment">
        <div>
          <div className="track-date-container">
            <h1 className="track-comment-username">{com.username}</h1>
            <h2>{com.created_at.slice(0, 10)}</h2>
          </div>
          
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
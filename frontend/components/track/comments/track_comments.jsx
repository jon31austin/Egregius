import React from "react";

class TrackComments extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.trackId);
  }

  formatTrackComments() {
    const coms = this.props.comments.map(com => (
      <li>
        <div>
          <h1>{com.username} said:</h1>
          <p>{com.body}</p>
        </div>
      </li>
    ))
    
    return coms;
  }

  render() {
    return(
      <div className="track-comments">
        <ul>
          {this.formatTrackComments()}
        </ul>
      </div>
    )
  }
};

export default TrackComments;
import React from "react";

class TrackComments extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.trackId);
  }

  render() {
    return(
      <div className="track-comments">
        <ul>
          
        </ul>
      </div>
    )
  }
};

export default TrackComments;
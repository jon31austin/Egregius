import React from "react";

class TrackComments extends React.Component {
  constructor(props){
    super(props)

    this.state = ({ 
      sortBy: "date",
      comment: ""
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

  handleInput(e) {
    this.setState({
      comment: e.currentTarget.value
    })
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.submitComment({
      body: this.state.comment,
      track_id: this.props.trackId,
      user_id: this.props.currentUser
    })
  }

  render() {
    return(
      <div className="track-comments-box">

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            className="track-comment-input"
            type="text"
            value={this.state.comment} placeholder="Add a comment">
          </input>

          {this.props.loggedIn ? <input className="submit" type="submit" />
            : <h1>Please sign in to submit a comment!</h1>}
        </form>
        
        <ul>
          {this.formatTrackComments(this.props.trackId)}
        </ul>
      </div>
    )
  }
};

export default TrackComments;
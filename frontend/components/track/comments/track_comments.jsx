import React from "react";
import { openModal } from "../../../actions/modal_actions";

class TrackComments extends React.Component {
  constructor(props){
    super(props)

    this.state = ({ 
      sortBy: "oldest",
      comment: "",
      clicked: false
    })

    this.formatTrackComments = this.formatTrackComments.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.trackId);
  }

  // Sort by newest first.
  compareNew(a, b) {
    if (a.created_at > b.created_at) return -1;
    if (a.created_at < b.created_at) return 1;
    return 0;
  }

  // Sort by oldest first.
  compareOld(a, b) {
    if (a.created_at > b.created_at) return 1;
    if (a.created_at < b.created_at) return -1;
    return 0;
  }

  sortComments(coms) {
    switch (this.state.sortBy) {
      case "newest":
        return coms.sort(this.compareNew);
      case "oldest":
        return coms.sort(this.compareOld);
    }
  }



  formatTrackComments(trackId) {
    let coms = this.props.comments.filter(com => {
      debugger
      return (com.track_id === trackId)
    })
    
    coms = this.sortComments(coms);
  
    coms = coms.map(com => (
      <li key={com.id} className="track-comment">
        <div className="track-comment-body">
          <div>
            <h1 className="track-comment-username">{com.username}</h1>
            <p>{com.body}</p>
          </div>
          
          <div className="comment-date-delete">
            <div className="track-comment-date">{com.created_at.slice(0, 10)}</div>
            {this.props.currentUser === com.user_id ? 
              <div className="comment-delete" 
                onClick={() => this.props.deleteTrackComment(trackId, com.id)}>
                <h1>Delete</h1>
              </div>
              : null 
            }
          </div>
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
      .then( () => this.setState({
        clicked: false,
      }))
    
    document.getElementsByClassName("track-comment-input")[0]
      .value = ""
  }

  commentPrompt() {
    if (this.state.clicked) {
      if (this.props.loggedIn) {
        return (
          <input className="comment-submit" type="submit" />
        )
      } else {
        return (
          <div 
            onClick={() => dispatch(openModal("login"))}
            className="comment-submit">
            Sign In to Leave Comment
          </div>
        )
      }
    } else {
      return null;
    }

  }

  render() {
    // value = { this.state.comment }

    return(
      <div className="track-comments-box">
        <div className="track-comment-sort-options">
          <h1>Sort by:</h1>
          <div onClick={() => this.setState({ sortBy: "newest" })}>Newest</div>
          <div onClick={() => this.setState({ sortBy: "oldest" })}>Oldest</div>
        </div>

        <div className="track-comments-below-sort">
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInput}
              onClick={() => this.setState({ clicked: true })}
              className="track-comment-input"
              type="text"
              placeholder="Add a comment">
            </input>

            {this.commentPrompt()}
          </form>
          
          <ul>
            {this.formatTrackComments(this.props.trackId)}
          </ul>
        </div>

      </div>
    )
  }
};

export default TrackComments;
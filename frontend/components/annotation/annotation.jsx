import React from "react";
import merge from "lodash/merge";

class Annotation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      body: "",
      start_index: null,
      end_index: null, 
      track_id: this.props.lyrics.songId,
      user_id: this.props.currentUser
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      start_index: this.props.startIndex,
      end_index: this.props.endIndex,
      track_id: this.props.lyrics.songId,
      user_id: this.props.currentUser
    }, 
      () => this.props.submitAnnotation(this.state)
    );

  };

  update() {
    return (e) => this.setState({ body: e.target.value })
  };
  
  render() {
    const annoForm = () => {
      return (
        <div className="anno-form-container">
          <form onSubmit={this.handleSubmit}>  
            <textarea
              className="anno-textarea"
              placeholder="Don't just put the lyric in your own words — drop some knowledge!"
              onChange={this.update()}
            />
            <input className="submit" type="submit" />
          </form>
        </div>
      )
    };

    const loginPrompt = () => {
      return (
        <div>
          <h2 className="anno-session" onClick={() => this.props.openModal("signup")}>
            Sign Up to Start Annotating
          </h2>
        </div>
      )
    };

    if (this.props.open && this.props.loggedIn) {
      return annoForm();
    } else if (this.props.open && !this.props.loggedIn) {
      return loginPrompt();
    } else {
      // NEED TO LIST ALL ANNOTATIONS AS BASE CASE, NOT RETURN NULL
      return null;
    }
  }
};


export default Annotation
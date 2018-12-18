import React from "react";
import AnnotationIndexItem from "./annotation_index_item";

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
  };

  handleSubmit(e) {
    e.preventDefault();

    debugger

    this.setState({
      start_index: this.props.startIndex,
      end_index: this.props.endIndex,
      track_id: this.props.lyrics.songId,
      user_id: this.props.currentUser
    }, 
      () => this.props.submitAnnotation(this.state)
        .then(() => window.location.reload())
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

    const annoList = () => {
      const trackAnnos = this.props.annotations.map(ann => {
        return (
          <AnnotationIndexItem key={ann.id} ann={ann} />
        )
      });

      return (
        <div>
          {trackAnnos}
        </div>
      )
    };

    const displaySingleAnnotation = () => {
      const singleAnno = this.props.annotations[this.props.annoId];
      return (
        <div className="annotation-index-item">
          <h2>{singleAnno.username} said:</h2>
          <p>{singleAnno.body}</p>
        </div>
      )
    }

    if (this.props.open && this.props.loggedIn) {
      return annoForm();
    } else if (this.props.open && !this.props.loggedIn) {
      return loginPrompt();
    } else if ( this.props.annoSelected )  {
      return displaySingleAnnotation();
    } else {
      return null;
    }
  }
};


export default Annotation
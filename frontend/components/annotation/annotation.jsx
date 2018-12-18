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
      user_id: this.props.currentUser,
      updateForm: false,
      open: this.props.open
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      start_index: this.props.startIndex,
      end_index: this.props.endIndex,
      track_id: this.props.lyrics.songId,
      user_id: this.props.currentUser
    }, 
      () => this.props.submitAnnotation(this.state)
        .then(() => this.setState({open: false}) )
    );

  };

  componentDidUpdate(prevProps) {
    if (prevProps.annotations.length !== this.props.annotations.length) {
      this.setState({ open: false })
    } else if (prevProps.open !== this.props.open) {
      this.setState({ open: this.props.open })
    }
  }

  handleDelete(e) {
    e.preventDefault();

    this.props.deleteAnnotation(this.props.annoId)
      .then(() => this.setState({ open: false }))
  };

  update() {
    return (e) => this.setState({ body: e.target.value })
  };

  // handleDelete(e) {

  // }
  
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

    // const annoList = () => {
    //   const trackAnnos = this.props.annotations.map(ann => {
    //     return (
    //       <AnnotationIndexItem key={ann.id} ann={ann} />
    //     )
    //   });

    //   return (
    //     <div>
    //       {trackAnnos}
    //     </div>
    //   )
    // };

    const displaySingleAnnotation = () => {

      const singleAnno = this.props.singleAnnotation;
      const allowChange = singleAnno.user_id === this.props.currentUser;

      if (allowChange) {
        return (
          <div className="annotation-index-item">
            <h2 className="anno-author-header">You said:</h2>
            <p className="single-anno-body">{singleAnno.body}</p>
            <input type="submit" value="Delete" onClick={this.handleDelete} />
          </div>
        )
      } else {
        return (
          <div className="annotation-index-item">
            <h2 className="anno-author-header">{singleAnno.username} said:</h2>
            <p className="single-anno-body">{singleAnno.body}</p>
          </div>
        )
      }
    }

    if (this.state.open && this.props.loggedIn) {
      return annoForm();
    } else if (this.state.open && !this.props.loggedIn) {
      return loginPrompt();
    } else if ( this.props.annoSelected && this.props.singleAnnotation )  {
      return displaySingleAnnotation();
    } else {
      return null;
    }
  }
};


export default Annotation
import React from "react";
// import AnnotationIndexItem from "./annotation_index_item";
import AnnotationFormErrorModal from "../modal/annotation_form_error_modal";
import { openModal } from "../../actions/modal_actions";

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
      open: this.props.open,
      editing: this.props.editing
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
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
        .then(() => this.setState({ open: false }),
        () => dispatch(openModal("annotation_form_error")) )
    );
  };

  submitEdit(e) {
    e.preventDefault();

    debugger;
    //THE PROBLEM IS HERE. IT SHUTS THE EDIT PAGE BEFORE THE MODAL CAN FIRE

    this.props.updateAnnotation({body: this.state.body, id: this.props.annoId})
      .then(() => this.setState({ open: false, editing: false }),
        () => dispatch(openModal("annotation_form_error"))
      )
  };

  componentDidUpdate(prevProps, prevState) {
    // once a new annotation is created, the annotation box should close
    if (prevProps.annotations.length !== this.props.annotations.length) {
      this.setState({ open: false })
    } else if (prevProps.open !== this.props.open) {
      this.setState({ open: this.props.open })
    }

    // If you click out of the edit box, it shouldn't come back when you
    // go back to the annotation
    if (this.props.editing === false && prevState.editing === true && this.state.body === "") {
      this.setState({ editing: false })
    }
  };

  handleDelete(e) {
    e.preventDefault();

    this.props.deleteAnnotation(this.props.annoId)
      .then(() => this.setState({ open: false }))
  };

  update() {
    return (e) => this.setState({ body: e.target.value })
  };

  handleEdit(e) {
    e.preventDefault();

    this.setState({
      editing: true
    })
  };

  formatErrors() {
    const annoErrors = this.props.errors.map((err, i) => (
      <li key={`key-${i}`}>{err}</li>
    ));

    return (
      <div className="anno-errors-display">
        <ul>
          {annoErrors}
        </ul>
      </div>
    )
  };



  //RENDER METHOD BELOW ///////////////////////////////////////////////////////
  
  render() {


    const annoForm = () => {
      return (
        <div className="anno-fixed anno-form-container">
          <AnnotationFormErrorModal errors={this.props.errors} />
          <h1>Your comments for the lyrics:</h1>
          <h3>"{this.props.selection}"</h3>
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
        <div className="anno-fixed">
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
          <div className="anno-fixed annotation-index-item">
            <div className="anno-author-header"><span style={{color: "#ff1464"}}>You</span> said:</div>
            <p className="single-anno-body">{singleAnno.body}</p>
            <div className="edit-buttons-container">
              <input className="change-submit" type="submit" value="Delete Annotation" onClick={this.handleDelete} />
              <input className="change-submit" type="submit" value="Edit Annotation" onClick={this.handleEdit} />
            </div>
      
          </div>
        )
      } else {
        return (
          <div className="anno-fixed annotation-index-item">
            <h2 className="anno-author-header"><span style={{ color: "#ff1464" }}>{singleAnno.username}</span> said:</h2>
            <p className="single-anno-body">{singleAnno.body}</p>
          </div>
        )
      }
    }

    const editSingleAnnotation = () => {

      const singleAnno = this.props.singleAnnotation;
      const allowChange = singleAnno.user_id === this.props.currentUser;

      // edit form only pops up if the current user wrote the selected annotation
      if (allowChange) {
        return (
          <div className="anno-fixed annotation-index-item">
            <AnnotationFormErrorModal errors={this.props.errors} />
            <h1>Edit your annotation for:</h1>
            <h3>"{singleAnno.body}"</h3>
            <form onSubmit={this.submitEdit}>
              <textarea
                className="anno-textarea"
                placeholder={this.props.singleAnnotation.body}
                onChange={this.update()}
              />
              <input className="submit" value="Submit Edit" type="submit" />
              <button className="submit" onClick={() => this.setState({editing: false})}>Cancel Edit</button>
            </form>
          </div>
        )
      } else {
        return displaySingleAnnotation();
      }
    };

    // if the window has a selection over 15 chars and the user is logged in
    if (this.state.open && this.props.loggedIn) {
      return annoForm();
    // if the window has a selection over 15 chars, but the user is not logged in
    } else if (this.state.open && !this.props.loggedIn) {
      return loginPrompt();
    // if one of the annotations was clicked, and it wasn't just deleted, 
    // and it's not currently being edited
    } else if ( this.props.annoSelected && this.props.singleAnnotation && !this.state.editing)  {
      return displaySingleAnnotation();
    //if one of the annotations was clicked
    // and it is currently being edited
    } else if (this.props.annoSelected && this.props.singleAnnotation && this.state.editing) {
      return editSingleAnnotation();
    } else {
      return null;
    }
  }
};


export default Annotation
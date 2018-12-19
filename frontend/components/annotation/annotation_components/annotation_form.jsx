import React from "react";
import AnnotationFormErrorModal from "../../modal/annotation_form_error_modal";

class AnnotationForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { body: "" };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update() {
    return (e) => this.setState({ body: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();

    this.props.submitAnnotation({
      start_index: this.props.lyricSelection.startIndex,
      end_index: this.props.lyricSelection.endIndex,
      track_id: this.props.trackId,
      user_id: this.props.currentUser,
      body: this.state.body
    })
      .then(
        () => this.props.clearSelection(),
        () => dispatch(this.props.openModal("annotation_form_error"))
      )
  };

  render() {
    const { lyricSelection, errors } = this.props;

    return (
      <div className="anno-fixed anno-form-container">
        <AnnotationFormErrorModal errors={errors} />
        <h1>Your comments for the lyrics:</h1>
        <h3>"{lyricSelection.selection}"</h3>
        <form onSubmit={this.handleSubmit}>  
          <textarea
            className="anno-textarea"
            placeholder="Don't just put the lyric in your own words — drop some knowledge!"
            onChange={this.update()}
          />
          <input className="submit" type="submit" />
          <button className="submit" 
                  value="Cancel Annotation" 
                  onClick={() => this.props.setSelection({ open: false }) }
          >Cancel Annotation</button>
        </form>
      </div>
    )
  };
};

export default AnnotationForm;
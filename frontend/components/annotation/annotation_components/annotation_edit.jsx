import React from "react";
import AnnotationFormErrorModal from "../../modal/annotation_form_error_modal";

class AnnotationEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = { body: "" };
    this.submitEdit = this.submitEdit.bind(this);
  };

  update() {
    return (e) => this.setState({ body: e.target.value })
  };

  submitEdit(e) {
    e.preventDefault();

    const {updateAnnotation, openModal, setSelection, lyricSelection} = this.props;

    updateAnnotation({ body: this.state.body, id: lyricSelection.id })
      .then(
        () => this.setState({ body: "" }, () => setSelection({ editing: false }) ),
        () => dispatch(openModal("annotation_form_error"))
      )
  };

  render() {
    const { annotation, errors, lyricSlice, setSelection } = this.props;

    return (
      <div className="anno-fixed annotation-index-item">
        <AnnotationFormErrorModal errors={errors} />
        <h1>Edit your annotation for:</h1>
        <h3>"{lyricSlice}"</h3>
        <form onSubmit={this.submitEdit}>
          <textarea
            className="anno-textarea"
            placeholder={annotation.body}
            onChange={this.update()}
          />
          <input className="submit" value="Submit Edit" type="submit" />
          <button className="submit" onClick={() => setSelection({ editing: false })}>Cancel Edit</button>
        </form>
      </div>
    )
  };
}

export default AnnotationEdit;
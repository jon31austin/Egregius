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

    const {updateAnnotation, openModal, setSelection} = this.props;

    updateAnnotation({ body: this.state.body, id: this.props.lyricSelection.id })
      .then(
        () => this.setState({ body: "" }, () =>
          setSelection({ selected: true, editing: false })),
        () => dispatch(openModal("annotation_form_error"))
      )
  };

  render() {
    const { lyricSelection, errors, lyricSlice, setSelection } = this.props;

    return (
      <div className="anno-fixed annotation-index-item">
        <AnnotationFormErrorModal errors={errors} />
        <h1>Edit your annotation for:</h1>
        <h3>"{lyricSlice}"</h3>
        <form onSubmit={this.submitEdit}>
          <textarea
            className="anno-textarea"
            placeholder={lyricSelection.body}
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



// import React from "react";
// import AnnotationFormErrorModal from "../../modal/annotation_form_error_modal";

// const EditSingleAnnotation = ({ singleAnno, allowChange, errors, setSelection, submitEdit, update }) => {

//   // edit form only pops up if the current user wrote the selected annotation
//   if (allowChange) {
//     return (
//       <div className="anno-fixed annotation-index-item">
//         <AnnotationFormErrorModal errors={errors} />
//         <h1>Edit your annotation for:</h1>
//         <h3>"{singleAnno.body}"</h3>
//         <form onSubmit={submitEdit}>
//           <textarea
//             className="anno-textarea"
//             placeholder={singleAnno.body}
//             onChange={update()}
//           />
//           <input className="submit" value="Submit Edit" type="submit" />
//           <button className="submit" onClick={() => setSelection({ editing: false })}>Cancel Edit</button>
//         </form>
//       </div>
//     )
//   } else {
//     return displaySingleAnnotation();
//   }
// };

// export default EditSingleAnnotation;

// this is currently broken
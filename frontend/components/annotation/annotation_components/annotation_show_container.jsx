import { connect } from "react-redux";

import AnnotationShow from "./annotation_show";

import { clearSelection, setSelection, deleteAnnotation } from "../../../actions/annotation_actions";

const msp = (state, ownProps) => {
  return {
    annotation: ownProps.annotation,
    currentUser: state.session.id,
    lyricSelection: state.ui.lyrics
  }
};

const mdp = (dispatch) => {
  return {
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
    clearSelection: () => dispatch(clearSelection()),
    setSelection: (sel) => dispatch(setSelection(sel))
  }
};

export default connect(msp, mdp)(AnnotationShow);
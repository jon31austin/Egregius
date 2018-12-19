import { connect } from "react-redux";

import AnnotationForm from "./annotation_form";
import { openModal } from "../../../actions/modal_actions";
import { createAnnotation, clearSelection, setSelection } from "../../../actions/annotation_actions";

const msp = (state, ownProps) => {
  return {
    lyricSelection: state.ui.lyrics,
    errors: state.errors.annotations,
    trackId: ownProps.trackId,
    currentUser: state.session.id,
  }
};

const mdp = (dispatch) => {
  return {
    openModal: (field) => dispatch(openModal(field)),
    submitAnnotation: (anno) => dispatch(createAnnotation(anno)),
    clearSelection: () => dispatch(clearSelection()),
    setSelection: (sel) => dispatch(setSelection(sel))
  }
};

export default connect(msp, mdp)(AnnotationForm);
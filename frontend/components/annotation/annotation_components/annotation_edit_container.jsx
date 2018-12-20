import { connect } from "react-redux";

import AnnotationEdit from "./annotation_edit";
import { openModal } from "../../../actions/modal_actions";
import { updateAnnotation, setSelection } from "../../../actions/annotation_actions";

const msp = (state, ownProps) => {
  const lyricSelection = state.ui.lyrics;
  const { start_index, end_index } = state.entities.annotations[state.ui.lyrics.id];
  const lyricSlice = state.entities.tracks[ownProps.trackId].lyrics.slice(start_index, end_index);

  return {
    lyricSelection,
    annotation: ownProps.annotation,
    errors: state.errors.annotations,
    lyricSlice
  }
};

const mdp = (dispatch) => {
  return {
    openModal: (field) => dispatch(openModal(field)),
    updateAnnotation: (anno) => dispatch(updateAnnotation(anno)),
    setSelection: (sel) => dispatch(setSelection(sel))
  }
};

export default connect(msp, mdp)(AnnotationEdit);
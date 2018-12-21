import { connect } from "react-redux";
import Annotation from "./annotation";
import { openModal } from "../../actions/modal_actions";
import { clearSelection } from "../../actions/annotation_actions";
import { withRouter } from "react-router";


const msp = (state, ownProps) => {
  const lyricSelection = state.ui.lyrics;
  const loggedIn = !!(state.session.id);
  const annotation = ownProps.annotations.filter(ann => ann.id == lyricSelection.id)[0];
  
  return {
    lyricSelection,
    loggedIn, 
    annotation,
    currentUser: state.session.id,
  }
};

const mdp = (dispatch) => {
  return {
    openModal: (field) => dispatch(openModal(field)),
    clearSelection: () => dispatch(clearSelection())
  }
};

export default withRouter(connect(msp, mdp)(Annotation));
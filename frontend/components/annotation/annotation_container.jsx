import { connect } from "react-redux";
import Annotation from "./annotation";
import { openModal } from "../../actions/modal_actions";


const msp = (state, ownProps) => {

  const lyricSelection = state.ui.lyrics;
  const loggedIn = !!(state.session.id);
  const singleAnnotation = ownProps.annotations.filter(ann => ann.id == lyricSelection.id)[0];
  
  return {
    lyricSelection,
    loggedIn, 
    singleAnnotation,
    currentUser: state.session.id,
  }
};

const mdp = (dispatch) => {
  return {
    openModal: (field) => dispatch(openModal(field)),
  }
};

export default connect(msp, mdp)(Annotation);
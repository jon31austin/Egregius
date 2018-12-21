import { connect } from "react-redux";

import Search from "./search";
import { getSearchResults } from "../../actions/search_actions";

const msp = (state) => {

  return {

  };
};

const mdp = (dispatch) => {
  return {
    getSearchResults: (params) => dispatch(getSearchResults(params))
  };
};

export default connect(msp, mdp)(Search);
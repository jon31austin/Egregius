import { connect } from "react-redux";

import SearchDropDown from "./search_dropdown";

const msp = (state, ownProps) => {
  return {
    string: ownProps.string,
    searchResults: state.entities.searchResults
  }
};

export default connect(msp, null)(SearchDropDown);
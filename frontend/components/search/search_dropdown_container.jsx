import { connect } from "react-redux";

import SearchDropDown from "./search_dropdown";

const msp = (state, ownProps) => {
  const searchResults = state.entities.searchResults.sort(sorter)
  debugger;
  return {
    string: ownProps.string,
    searchResults
  }
};

const sorter = (x, y) => {
  if ( x[1] < y[1]) return -1;
  if ( x[1] > y[1]) return 1;
  return 0;
};

export default connect(msp, null)(SearchDropDown);
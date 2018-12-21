import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  }
};

export const getSearchResults = (queryParams) => (dispatch) => {
  return SearchApiUtil.searchDatabase(queryParams)
    .then( trackArr => dispatch(receiveSearchResults(trackArr)))
};
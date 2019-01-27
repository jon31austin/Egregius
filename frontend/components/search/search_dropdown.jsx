import React from "react";
import SearchListItem from "./search_list_item";
import Loading from "../browse/loading";

class SearchDropDown extends React.Component {
  render() {
    const { string, field, searchResults, addHiddenClass, loading } = this.props;

    if (string === "" || field === "" ) {
      // return nothing if only one of the two fields is completed
      return null;
    } else if (loading) {
      // return nothing if async data request is underway
      return (
        <div className="dropdown-results" onClick={addHiddenClass}>
          <div className="loader"></div>
        </div>
      )
    } else if (string && field && searchResults.length === 0 ) {
      return (
      // return apology if nothing is found after mandatory wait period with loader
        <div className="dropdown-results" onClick={addHiddenClass}>
          <ul>
            <div className="search-index-item">
              <h2 className="dropdown-error">Sorry, no results match your query!</h2>
            </div>
          </ul>
        </div>
      )
    } else if (string && field) {
      const formattedSearchResults = searchResults.map(res => {
        return <SearchListItem key={`result-${res[0]}`} songInfoArray={res}/>
      });

      return (
        <div className="dropdown-results" onClick={addHiddenClass}>
          <ul>
            {formattedSearchResults}
          </ul>
        </div>
      )
    }
  }
}

export default SearchDropDown;
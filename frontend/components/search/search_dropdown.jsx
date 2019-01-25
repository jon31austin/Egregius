import React from "react";
import SearchListItem from "./search_list_item";

class SearchDropDown extends React.Component {
  render() {
    const { string, field, searchResults, addHiddenClass } = this.props;

    if (string === "" || field === "" ) {
      return null;
    } else if (string && field && searchResults.length === 0 ) {
      return (
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
        debugger;
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
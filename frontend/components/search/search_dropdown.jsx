import React from "react";
import SearchListItem from "./search_list_item";

class SearchDropDown extends React.Component {
  render() {
    const { string, field, searchResults, addHiddenClass } = this.props;
    debugger;
    //
    if (string === "" || field === "" ) {
      return null;
    } else {
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
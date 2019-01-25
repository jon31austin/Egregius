import React from "react";

import SearchDropDown from "./search_dropdown_container";

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: "",
      searchField: "",
      hide: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addHiddenClass = this.addHiddenClass.bind(this);
    this.removeHiddenClass = this.removeHiddenClass.bind(this);
  }

  handleInput(e) {
    
    // this.setState({ searchString: e.currentTarget.value}, () => {
    //   return this.props.getSearchResults(this.state)
    //   }
    // )

    this.setState({ searchString: e.currentTarget.value }, () => {
      if (this.state.searchField !== "") {
        return this.props.getSearchResults(this.state)
      }
    })


    // do I do my
    // this.props.getSearchResults(this.state) ?
    // do I need another slice of state to keep track of whether or not a search is underway?
  };

  handleClick(e) {
    this.setState({ searchField: e.currentTarget.value}, () => {
      if (this.state.searchString !== "") {
        return this.props.getSearchResults(this.state)
      }
    })
  };

  addHiddenClass() {
    this.setState({ hide: true })
  }

  removeHiddenClass() {
    this.setState({hide: false})
  }

  render() {

    return (
      <div className="search-bar">

        <div className="search-input" onClick={this.removeHiddenClass}>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.searchString}
            placeholder='Search by track, artist or album...' />
          </div>
    
        <div className={ this.state.hide ? "hidden-search hide" : "hidden-search"}>
          <div className="search-field">
            <div className="search-radio-label">
              <label>
                Track
              <input type="radio" name="search" onClick={this.handleClick} value="track" />
              </label>
            </div>

            <div className="search-radio-label">
              <label>
                Artist
              <input type="radio" name="search" onClick={this.handleClick} value="artist" />
              </label>
            </div>
          </div>

          <SearchDropDown string={this.state.searchString} field={this.state.searchField} addHiddenClass={this.addHiddenClass}/>
        </div>

      </div>
    )
  }
}

export default Search;
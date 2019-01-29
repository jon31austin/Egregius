import React from "react";

import SearchDropDown from "./search_dropdown_container";

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: "",
      searchField: "",
      hide: false,
      loading: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addHiddenClass = this.addHiddenClass.bind(this);
    this.removeHiddenClass = this.removeHiddenClass.bind(this);
  }

  handleInput(e) {
    this.setState({ 
      searchString: e.currentTarget.value,
      loading: true }, () => {
      if (this.state.searchField !== "") {
        return this.props.getSearchResults(this.state)
                  .then(res => {
                    setTimeout( () => this.setState({ loading: false }), 500)
                  })
      }
    })
  };

  handleClick(e) {
    this.setState({ 
      searchField: e.currentTarget.value,
      loading: true }, () => {
      if (this.state.searchString !== "") {
        return this.props.getSearchResults(this.state)
                  .then(res => {
                    setTimeout( () => this.setState({ loading: false }), 500)
                  })
      }
    })
  };

  addHiddenClass() {
    this.setState({ hide: true })
  }

  removeHiddenClass() {
    this.setState({ hide: false })
  }

  render() {

    return (
      <div className="search-bar">

        <div className="search-input" onClick={this.removeHiddenClass}>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.searchString}
            placeholder='Search by track or artist...' />

          <div>
            &#128269;
          </div>
        </div>
    
        <div className={ this.state.hide ? "hidden-search hide" : "hidden-search"}>
          <div className="search-field">
            <div className="search-radio-label">
              <div className="radio-label">Track</div>
                <div className="radio-div">
                  <input type="radio" name="search" onClick={this.handleClick} value="track" />
                </div>
              
            </div>

            <div className="search-radio-label">
                <div className="radio-label">Artist</div>
                <div className="radio-div">
                  <input type="radio" name="search" onClick={this.handleClick} value="artist" />
                </div>
              
            </div>
          </div>

          <SearchDropDown string={this.state.searchString} 
                          field={this.state.searchField} 
                          addHiddenClass={this.addHiddenClass}
                          loading={this.state.loading}
          />
        </div>

      </div>
    )
  }
}

export default Search;
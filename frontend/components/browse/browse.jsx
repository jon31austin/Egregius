import React from 'react';
import { Link } from "react-router-dom";

import Loading from "./loading";

class Browse extends React.Component {
  constructor() {
    super()

    this.state = {
      searchLetter: "A",
      loading: true
    }

    this.handleButton = this.handleButton.bind(this);
  }

  componentWillMount() {
    this.setState({ loading: true }, () => {
      return this.props.fetchLetterTracks(this.state.searchLetter)
                .then(res => {
                  setTimeout(() => this.setState({ loading: false }), 500)
                })
    })
  }

  handleButton(e) {
    const letter = e.target.innerText;

    this.setState({ 
      loading: true, 
      searchLetter: letter }, () => {
        return this.props.fetchLetterTracks(this.state.searchLetter)
          .then(res => {
            setTimeout(() => this.setState({ loading: false }), 500)
          })
    })
  }

  formatTracks() {
    debugger;

    const letterTracks = this.props.tracks.filter(
      track => track.title[0].toUpperCase() === this.state.searchLetter
      )
    
    let formattedTracks;
    if (letterTracks.length === 0) {
      formattedTracks = [
        <div>
          <h1>Sorry, but there are no songs that currently match that letter!</h1>
        </div>
      ]
    } else {
      formattedTracks = letterTracks.map(track => {
        return (<li key={track.id}>
          <Link to={`/tracks/${track.id}`}>
            {track.title} by {track.artist}
          </Link>
        </li>)
      })
    }

    return formattedTracks;
  }

  formatAlphabet() {
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

    let buttons = [ [], [], [] ]
    alphabet.forEach( (el, i) => {
      if (i < 10) {
        buttons[0].push(
          <div 
            className="browse-letter" 
            key={`browse-${el}`} 
            onClick={this.handleButton}
            >{el}
          </div>
        )
      } else if (i < 16) {
        buttons[1].push(
          <div
            className="browse-letter"
            key={`browse-${el}`}
            onClick={this.handleButton}
            >{el}
          </div>
        )
      } else {
        buttons[2].push(
          <div
            className="browse-letter"
            key={`browse-${el}`}
            onClick={this.handleButton}
            >{el}
          </div>
        )
      }
    })

    return buttons;
  }

  render() {
    debugger;

    return(
      <div className="browse-main">

        <div className="alphabet-container">
          <div className="alphabet-clicking">
            <div>
              <div className="browse-1">{this.formatAlphabet()[0]}</div>
              <div className="browse-2-contain">
                <div className="browse-2">{this.formatAlphabet()[1]}</div>
              </div>
              <div className="browse-3">{this.formatAlphabet()[2]}</div>
            </div>
          </div>

          <div className="alphabet-prompt">
            <h1>Don't see what you're looking for?</h1>
            <Link to="/tracks/new">Click here to submit a new song!</Link>
          </div>

        </div>


        <div className="below-alphabet">
          <div>
            <ul>
              {this.state.loading ? <Loading /> : this.formatTracks()}
            </ul>
          </div>
        </div>

      </div>
      
    )
  }

}

export default Browse;
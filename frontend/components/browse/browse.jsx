import React from 'react';
import { Link } from "react-router-dom";

class Browse extends React.Component {
  constructor() {
    super()

    this.state = {
      searchLetter: "A"
    }

    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchLetterTracks(this.state.searchLetter)
  }

  handleButton(e) {
    debugger;
    const letter = e.target.innerText;
    this.setState({ searchLetter: letter }, () => {
      debugger;
      this.props.fetchLetterTracks(this.state.searchLetter)
    }
    )
  }

  formatTracks() {
    const letterTracks = this.props.tracks.filter(
      track => track.title[0].toUpperCase() === this.state.searchLetter
      )
    
    debugger; 
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

    debugger;
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
              {this.formatTracks()}
            </ul>
          </div>
        </div>


      </div>
      
    )
  }

}

export default Browse;
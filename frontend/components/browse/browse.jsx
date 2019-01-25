import React from 'react';

class Browse extends React.Component {
  constructor() {
    super()

    this.state = {
      searchLetter: "A"
    }

    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    const letter = e.target.innerText;
    this.setState({ searchLetter: letter })
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
        buttons[1].push(<div className="browse-letter" key={`browse-${el}`}>{el}</div>)
      } else {
        buttons[2].push(<div className="browse-letter" key={`browse-${el}`}>{el}</div>)
      }
    })

    return buttons;
  }

  render() {
    
    return(
      <div className="browse-container">

        <div className="alphabet-clicking">
          <div className="browse-options">
            <div className="browse-1">{this.formatAlphabet()[0]}</div>
            <div className="browse-2-contain">
              <div className="browse-2">{this.formatAlphabet()[1]}</div>
            </div>
            <div className="browse-3">{this.formatAlphabet()[2]}</div>
          </div>
        </div>


        
      </div>
    )
  }

}

export default Browse;
import React from "react";

class TrackShowMain extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
  }
  
  handleSelection(e) {
    let text = window.getSelection();
    console.log(text);
    console.log("SELECTED TEXT:", text.toString())
  }

  render() {
  
    return (
      <div className="track-main-bucket">
        <h3 className="lyrics-header">{this.props.track.title} LYRICS</h3>
        <p className="lyrics-text" onMouseUp={this.handleSelection}>
          {this.props.track.lyrics}
        </p>
      </div>
    )
  }
};

export default TrackShowMain;
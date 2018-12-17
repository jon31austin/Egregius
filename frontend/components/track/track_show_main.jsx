import React from "react";
import Annotation from "../annotation/annotation_container";
import merge from "lodash/merge";

class TrackShowMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songId: this.props.track.id,
      startIndex: null,
      endIndex: null,
      openAnno: false,
      selection: ""
    };

    this.handleSelection = this.handleSelection.bind(this);
  };

  componentDidMount() {
    this.props.fetchAnnotations(this.props.track.id);
  };
  
  handleSelection(e) {

    const sel = window.getSelection().toString();
    
    if ( (e.target.className === "lyrics-text") && (sel.length > 0) ) {
      const text = window.getSelection();
      const annoStart = text.anchorOffset;
      const annoEnd = text.focusOffset;
      this.setState({ 
        startIndex: annoStart, 
        endIndex: annoEnd, 
        openAnno: true,
        selection: text.toString()
      });
    } else if (e.target.className === "lyrics-text"){
      this.setState({
        startIndex: null,
        endIndex: null,
        openAnno: false,
        selection: ""
      })
    }
  };

  formatLyrics() {

  }

  render() {

    const annoProps = merge({}, this.state)
  
    return (
      <div className="track-show-content" onMouseUp={this.handleSelection}>

        <div className="track-main-bucket">
          <h3 className="lyrics-header">{this.props.track.title} LYRICS</h3>
          <p className="lyrics-text">
            {this.props.track.lyrics}
          </p>
        </div>

        <div className="anno-main-bucket">
          <Annotation lyrics={annoProps}/>
        </div>

      </div>
    )
  }
};

export default TrackShowMain;
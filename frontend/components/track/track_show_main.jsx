import React from "react";
import Annotation from "../annotation/annotation_container";
import TrackComments from "./comments/track_comments";

class TrackShowMain extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelection = this.handleSelection.bind(this);
    this.clearState = this.clearState.bind(this);
  };

  componentDidMount() {
    this.props.fetchAnnotations(this.props.track.id);
  };

  componentDidUpdate() {
    const annotations = document.getElementsByClassName("annotation");

    const cb = (e) => {
      this.props.setSelection({
        selected: true,
        open: false,
        id: e.target.dataset.id
      })
    };

    for (let i = 0; i < annotations.length; i++) {
      if (annotations[i].dataset.bool === "false" ) {
        annotations[i].addEventListener('click', cb.bind(this))
        annotations[i].dataset.bool = "true";
      }
    };
  };

  clearState(e) {
    e.stopPropagation();
    if (e.target.className === "lyrics-text") {
      this.props.clearSelection();
    };
  };
  
  handleSelection(e) {

    const sel = window.getSelection().toString();
    //for selection to register:
    //lyrics selected must be >15 chars because we search track by indexOf(selection)
    if ( (e.target.className === "lyrics-text") && (sel.length > 15) ) {
      const text = window.getSelection();

      const annoText = text.toString();
      const annoStart = this.props.track.lyrics.indexOf(annoText)
      const annoEnd = annoStart + annoText.length;

      this.props.setSelection({ 
        startIndex: annoStart, 
        endIndex: annoEnd, 
        open: true,
        selection: text.toString(),
        selected: false,
        id: null,
        editing: false,
      });
    } else if (e.target.className === "lyrics-text"){
      this.props.clearSelection();
    }
  };

  formatLyrics() {
    let formatted = this.props.track.lyrics

    this.props.annotations.forEach((ann) => {
      let sub = `<span class="annotation" data-bool=${false} data-id=${ann.id}>${formatted.slice(ann.start_index, ann.end_index + 1)}</span>`
      formatted = formatted.slice(0, ann.start_index) + sub + formatted.slice(ann.end_index + 1)
    });
    
    return (
      <div className="lyrics-text" dangerouslySetInnerHTML={{__html: formatted }} />
    )
  };

  render() {

    // const annoProps = merge({}, this.state)
  
    return (
      <div>
        <div className="track-show-content" onMouseUp={this.handleSelection} onMouseDown={this.clearState}>

          <div className="track-main-bucket">
            <h3 className="lyrics-header">{this.props.track.title} LYRICS</h3>
              {this.formatLyrics()}
          </div>

          <div className="anno-main-bucket">
            <Annotation trackId={this.props.trackId} annotations={this.props.annotations} />
          </div>

        </div>

        < TrackComments />
      </div>
    )
  }
};

export default TrackShowMain;
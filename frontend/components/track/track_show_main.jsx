import React from "react";
import Annotation from "../annotation/annotation_container";
import merge from "lodash/merge";

// Need this for AnnotationModal;
// import { openModal } from "../../actions/modal_actions";

class TrackShowMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songId: this.props.track.id,
      startIndex: null,
      endIndex: null,
      openAnno: false,
      selection: "",
      annoSelected: false,
      annoId: null
    };

    this.handleSelection = this.handleSelection.bind(this);
  };

  componentDidMount() {
    this.props.fetchAnnotations(this.props.track.id);
  };

  //this.props.annotations[e.target.dataset.idx]
  componentDidUpdate(prevProps) {
    const annotations = document.getElementsByClassName("annotation");
    
    const cb = (e) => {
      this.setState({
        annoSelected: true,
        annoId: e.target.dataset.idx
      })
    };

    for (let i = 0; i < annotations.length; i++) {
      annotations[i].addEventListener('click', cb.bind(this))
    }
  }
  
  handleSelection(e) {

    const sel = window.getSelection().toString();
    
    // increase length of selection 
    //because we are now searching track by indexOf(selection)
    if ( (e.target.className === "lyrics-text") && (sel.length > 15) ) {
      const text = window.getSelection();

      const annoText = text.toString();
      const annoStart = this.props.track.lyrics.indexOf(annoText)
      const annoEnd = annoStart + annoText.length;

      this.setState({ 
        startIndex: annoStart, 
        endIndex: annoEnd, 
        openAnno: true,
        selection: text.toString(),
        annoSelected: false,
        annoId: null
      });
    } else if (e.target.className === "lyrics-text"){
      this.setState({
        startIndex: null,
        endIndex: null,
        openAnno: false,
        selection: "",
        annoSelected: false,
        annoId: null
      })
    }
  };

  formatLyrics() {

    let formatted = this.props.track.lyrics

    this.props.annotations.forEach((ann, idx) => {
      let sub = `<span class="annotation" data-idx=${idx}>${formatted.slice(ann.start_index, ann.end_index + 1)}</span>`
      formatted = formatted.slice(0, ann.start_index) + sub + formatted.slice(ann.end_index + 1)
    });
    
    return (
      <div className="lyrics-text" dangerouslySetInnerHTML={{__html: formatted }} />
    )
  };

  render() {

    const annoProps = merge({}, this.state)
  
    return (
      <div className="track-show-content" onMouseUp={this.handleSelection}>

        <div className="track-main-bucket">
          <h3 className="lyrics-header">{this.props.track.title} LYRICS</h3>
            {this.formatLyrics()}
        </div>

        <div className="anno-main-bucket">
          <Annotation lyrics={annoProps} annotations={this.props.annotations}/>
        </div>

      </div>
    )
  }
};

export default TrackShowMain;
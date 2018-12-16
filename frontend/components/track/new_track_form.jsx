import React from "react";
import TrackFormErrorModal from "../modal/track_form_error_modal";

import { openModal } from "../../actions/modal_actions";

class NewTrackForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      title: "",
      artist: "",
      album: "",
      year: "",
      lyrics: ""
    }
  }

  update(field) {
    if (field === "textarea") {
      return (e) => {
        this.setState({ [field]: e.target.innerHTML });
      };
    } else {
      return (e) => {
        this.setState({ [field]: e.target.value });
      };
    }  
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTrack(this.state)
      .then( (action) => {
        const id = Object.keys(action.tracks)[0];
        return this.props.history.push(`/tracks/${id}`)
      },
        () => dispatch(openModal("track_form_error"))
    );
  }

  render() {

    return (

      <form className="new-song-form" onSubmit={this.handleSubmit}>
        
        <div className="new-song-lyrics">
          <h2>Lyrics</h2>
          <textarea onChange={this.update("lyrics")} className="new-song-textarea" value={this.state.lyrics}></textarea>
        </div>

        <div className="new-song-info">
          <div>
            <h3>Track Name</h3>
            <input onChange={this.update("title")} type="text" value={this.state.title}/>
          </div>
          <div>
            <h3>Artist</h3>
            <input onChange={this.update("artist")} type="text" value={this.state.artist}/>
          </div>
          <div>
            <h3>Album</h3>
            <input onChange={this.update("album")} type="text" value={this.state.album} />
          </div>
          <div>
            <h3>Year Released</h3>
            <input onChange={this.update("year")} type="text" value={this.state.year} />
          </div>

          <div className="track-submit-bucket">
            <TrackFormErrorModal errors={this.props.errors} />
            <input type="submit" className="new-song-submit" value="Create New Song" />
          </div>

        </div>

      </form>

    )
  }
}

export default NewTrackForm;
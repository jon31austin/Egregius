import React from "react";

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
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTrack(this.state).then(() => this.props.history.push('/'));
  }

  handleErrors() {
    // WRITE THIS FOR WHEN THE CREATION FAILS
  }

  render() {
    return (
      
      <form className="new-song-form" onClick={this.handleSubmit}>
        
        <div className="new-song-lyrics">
          <h2>Lyrics</h2>
          <textarea className="new-song-textarea"></textarea>
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
          <div>
            <input type="submit" className="new-song-submit" value="Create New Song" />
          </div>
        </div>

      </form>

    )
  }
}

export default NewTrackForm;
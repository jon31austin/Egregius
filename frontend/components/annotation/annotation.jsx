import React from "react";

class Annotation extends React.Component {
  render() {
    const annoForm = () => {
      return (
        <div className="anno-form-container" >
          <ul>
            <li>{this.props.selection}</li>
            <li>{this.props.startIndex}</li>
            <li>{this.props.endIndex}</li>
          </ul>
        </div>
      )
    };

    const loginPrompt = () => {
      return (
        <div>
          <h2 className="anno-session" onClick={() => this.props.openModal("signup")}>
            Sign Up to Start Annotating
          </h2>
        </div>
      )
    };

    if (this.props.open && this.props.loggedIn) {
      return annoForm();
    } else if (this.props.open && !this.props.loggedIn) {
      return loginPrompt();
    } else {
      // NEED TO LIST ALL ANNOTATIONS AS BASE CASE, NOT RETURN NULL
      return null;
    }
  }
};


export default Annotation
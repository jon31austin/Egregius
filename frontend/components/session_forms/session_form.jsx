import React from "react";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign(this.state);
    this.props.processForm(user)
  };

  update(field) {
    return (e) => this.setState( { [field]: e.target.value } )
  };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // DELETE ALL PREVIOUS WORK ON MODAL FORM!

  render() {
    return (
      <div>
        
        <div>
          <h3>{this.props.formtype}</h3>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input className="input" onChange={this.update("username")} type="text" value={this.state.username} />
            </label>
            <br></br>
            <label>
              Password:
              <input className="input" onChange={this.update("password")} type="password" value={this.state.password} />
            </label>
            <br></br>
            <input className="submit" type="submit" value={this.props.formType} />
          </form>
          {this.props.navLink}
        
        </div>
      </div>
    )
  }
}

export default SessionForm;
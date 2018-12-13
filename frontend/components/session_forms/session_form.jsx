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
      <div className="errors">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {

    const demoUser = {username: "Happy Wanderer", password:"justlooking!"}

    return (
      <div>
        <div className="session-form-container">
          <h3 className="form-prompt">{this.props.formPrompt}</h3>
          
          {this.renderErrors()}

          <form className="session-form" onSubmit={this.handleSubmit}>
            <label>
              <input className="input" onChange={this.update("username")} type="text" placeholder="Username" value={this.state.username} />
            </label>
            <br></br>
            <label>
              <input className="input" onChange={this.update("password")} type="password" placeholder="Password" value={this.state.password} />
            </label>
            <br></br>
            <input className="submit" type="submit" value={this.props.formType} />
            <input className="submit" type="submit" value="Demo User" onClick={() => dispatch(login(demoUser))} />
          </form>   

          <br></br>
          {this.props.otherForm}
          
        </div>
      </div>
    )
  }
}

export default SessionForm;
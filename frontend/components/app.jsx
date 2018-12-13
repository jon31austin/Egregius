import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

import Modal from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";

const App = () => (
  <div>

    <Modal />
    <header className="main-header">
        <div className="genius-logo">
          <Link to="/" className="header-link">
            <h1>Genius</h1>
          </Link>
        </div>
      <GreetingContainer />
    </header>

    <Switch>
    </Switch>

    
  </div>
);

export default App;

// Maybe put these back in the Switch? Removed b/c of modal edit for session forms Dec 12
// <AuthRoute exact path="/login" component={LoginFormContainer} />
// <AuthRoute exact path="/" component={SignupFormContainer} />
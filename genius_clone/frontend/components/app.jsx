import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";

const App = () => (
  <div>
    <header className="header">
      <Link to="/" className="header-link">
        <h1>Genius</h1>
      </Link>
      <GreetingContainer />
    </header>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>

    
  </div>
);

export default App;
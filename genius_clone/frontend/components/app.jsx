import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";

import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Genius</h1>
      </Link>
      <GreetingContainer />
    </header>

    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </Switch>

    
  </div>
);

export default App;
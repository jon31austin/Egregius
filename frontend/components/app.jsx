import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

import Modal from "./modal/modal";
import Header from "./header/header";
import NoMatch from "./no_match/no_match";
import Footer from "./footer/footer";


const App = () => (
  <div>

    <Modal />
    <Header />

    <Switch>
      <Route exact path="/" />
      <Route path="*" component={NoMatch} />
    </Switch>

    <Footer />
  </div>
);

export default App;

// Maybe put these back in the Switch? Removed b/c of modal edit for session forms Dec 12
// <AuthRoute exact path="/login" component={LoginFormContainer} />
// <AuthRoute exact path="/" component={SignupFormContainer} />
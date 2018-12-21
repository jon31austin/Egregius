import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

import Modal from "./modal/modal";
import Header from "./header/header";
import HomePage from "./home/home_page";
import TrackShow from "./track/track_show_container";
import NewTrackForm from "./track/new_track_form_container";
import NoMatch from "./no_match/no_match";
import Footer from "./footer/footer";


const App = () => (
  <div className="app-container">

    <Modal />
    <Header />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/tracks/new" component={NewTrackForm} />
      <Route path="/tracks/:trackId" component={TrackShow} />
      <Route path="*" component={NoMatch} />
    </Switch>

    <Footer />
  </div>
);

export default App;

// Maybe put these back in the Switch? Removed b/c of modal edit for session forms Dec 12
// <AuthRoute exact path="/login" component={LoginFormContainer} />
// <AuthRoute exact path="/" component={SignupFormContainer} />
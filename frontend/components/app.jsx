import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

import Modal from "./modal/modal";
import Header from "./header/header";
import HomePage from "./home/home_page";
import Browse from "./browse/browse_container";
import TrackShow from "./track/track_show_container";
import NewTrackForm from "./track/new_track_form_container";
import NoMatch from "./no_match/no_match";
import About from "./footer/about.jsx";
import Guidelines from "./footer/guidelines";
import Contact from "./footer/contact";
import Footer from "./footer/footer";

import { clearSelection } from "../actions/annotation_actions";


const App = () => {

  return (
    <div className="app-container">

      <Modal />
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tracks/browse" component={Browse}/>
        <Route exact path="/tracks/new" component={NewTrackForm} />
        <Route exact path="/tracks/:trackId" component={TrackShow} onChange={() => clearSelection()} />
        <Route exact path="/about" component={About} />
        <Route exact path="/guidelines" component={Guidelines} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NoMatch} />
      </Switch>

      <Footer />
    </div>
  )
};

export default App;

// Maybe put these back in the Switch? Removed b/c of modal edit for session forms Dec 12
// <AuthRoute exact path="/login" component={LoginFormContainer} />
// <AuthRoute exact path="/" component={SignupFormContainer} />
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Profile from '../profile/profile';
// import Garage from '../garage/garage';
import Navbar from '../navbar/navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="*" component={AuthRedirect} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/login" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profiles" component={Profile} />
            {/* <Route exact path="/garages" component={Garage} />             */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

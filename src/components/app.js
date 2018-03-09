import React, { Component } from 'react';
import LoginForm from './auth/login-form.js';
import RegistrationForm from './auth/registration-form.js';
import Dashboard from './dashboard/dashboard.js';
import Explore from './explore/explore.js';
import Nav from './nav/nav.js';
import CollectionsDashboard from './collections/collections-dash.js';
import { Route, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {refreshAuthToken} from '../actions/auth'
import '../styles/app.css';

export class App extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
      this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000 // One hour
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

  render() {

    return (
      <div className="App">
        <div className="nav-bar-container">
          <Nav />
        </div>
        <div className="body-container">
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/collections" component={CollectionsDashboard} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
import React, { Component } from 'react';
import LoginForm from './auth/login-form.js';
import RegistrationForm from './auth/registration-form.js';
import Dashboard from './dashboard/dashboard.js';
import Explore from './explore/explore.js';
import Nav from './nav/nav.js';
import CollectionsDashboard from './collections/collections-dash.js';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/app.css';

export class App extends Component {

  render() {

    // if (this.props.loggedIn) {
    //   console.log('logged in');
    //   return <Redirect to="/dashboard" />;
    // }

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
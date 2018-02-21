import React, { Component } from 'react';
import LoginForm from './auth/login-form.js';
import RegistrationForm from './auth/registration-form.js';
import Nav from './nav/nav.js';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class App extends Component {

  // if (props.loggedIn) {
  //   return <Redirect to="/dashboard" />;
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={RegistrationForm} />
      </div>
    );
  }
}

export default withRouter(connect()(App));
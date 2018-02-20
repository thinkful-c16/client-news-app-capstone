import React, { Component } from 'react';
import AuthenticationPage from './auth/authentication-page.js';
import Nav from './nav/nav.js';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <AuthenticationPage />
      </div>
    );
  }
}

export default App;
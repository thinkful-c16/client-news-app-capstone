import React, { Component } from 'react';
import AuthenticationPage from './auth/authentication-page.js'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News App</h1>
        </header>
        <AuthenticationPage />
      </div>
    );
  }
}

export default App;
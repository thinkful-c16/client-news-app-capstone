import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthenticationPage from './components/auth/login-form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News App</h1>
        </header>
        <AuthenticationPage/>
      </div>
    );
  }
}

export default App;

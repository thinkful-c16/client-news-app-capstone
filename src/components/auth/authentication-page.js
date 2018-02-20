import React from 'react';
import Provider from 'react-redux';
import LoginForm from './login-form.js';

export default class AuthenticationPage extends React.Component {
  render(){
    return(
      <Provider>
        <LoginForm />
      </Provider>
    )
  }
}
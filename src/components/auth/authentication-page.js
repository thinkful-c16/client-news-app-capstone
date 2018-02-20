import React from 'react';
import LoginForm from './login-form.js';
import RegistrationForm from './registration-form.js'

export default class AuthenticationPage extends React.Component {
  render(){
    return(
      <div>
        <LoginForm />
        <RegistrationForm />
      </div>
    )
  }
}
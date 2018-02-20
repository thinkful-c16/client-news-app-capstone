import React from 'react';
import { Provider } from 'react-redux';
import LoginForm from './login-form.js';

//temp code till store is built
let store = {
  loading: false
}

export default class AuthenticationPage extends React.Component {
  render(){
    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}
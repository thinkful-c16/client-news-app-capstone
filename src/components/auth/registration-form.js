import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link, Redirect} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login-component';
import { FacebookLogin } from 'react-facebook-login-component';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import { connect } from 'react-redux';

import '../../styles/registration-form.css'

//update min password length before publishing!!
const passwordLength = length({min: 4, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  render(){
    return(
      <div className="registration-container">
        <div className="welcome-msg">
          <h4>Welcome to News App - Let's get started</h4>
        </div>
        <div className="social-reg">
          <div className="fb-button">
            <FacebookLogin socialId="1989958031254651"
                           language="en_US"
                           scope="public_profile,email"
                           responseHandler={this.responseFacebook}
                           xfbml={true}
                           fields="id,email,name"
                           version="v2.5"
                           className="facebook-login"
                           buttonText="Login With Facebook"/>
          </div>
          <div className="google-button">
            <GoogleLogin socialId="1013252237653-lobmsullofdr8n94saqon5fi77gkp8mb.apps.googleusercontent.com"
                         className="google-login"
                         scope="profile"
                         fetchBasicProfile={false}
                         responseHandler={this.responseGoogle}
                         buttonText="Login With Google"/>
          </div>
        </div>
        <div className="divider">
          <h4>Or sign up with</h4>
        </div>
        <div className="auth-form">
          <div className="fullName">
            <Field 
              placeholder="First Name"
              name="firstName"
              component="input"
              type="text"
              id="firstname" 
              validate={[required, nonEmpty, isTrimmed]} />
            <Field
              placeholder="Last Name"
              name="lastName"
              component="input"
              type="text"
              id="lastname"
              validate={[required, nonEmpty, isTrimmed]} />
          </div>
          <div className="email-address">
            <Field
              placeholder="E-mail Address"
              name="email"
              component="input" 
              type="text"
              id="emailaddress"
              validate={[required, nonEmpty, isTrimmed]}  />
          </div>
          <div className="create-pw">
            <Field
              placeholder="Password"
              name="password"
              component="input" 
              type="password"
              id="createpw"
              validate={[required, passwordLength, isTrimmed]}   />
          </div>
          <div className="confirm-pw">
            <Field
              placeholder="Confirm Password"
              name="password"
              component="input"
              type="password"
              id="confirmpw"
              validate={[required, nonEmpty, matchesPassword]}    />
          </div>
          <button className="register-button"
            type="submit">
            Register
          </button>
        </div>
      </div>
    )
  }
}

RegistrationForm = connect()(RegistrationForm);

export default reduxForm({
  form: 'register',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(RegistrationForm);
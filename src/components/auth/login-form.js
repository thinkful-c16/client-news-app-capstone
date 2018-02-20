import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import { FacebookLogin } from 'react-facebook-login-component';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import { connect } from 'react-redux';

import '../../styles/login-form.css';

export class LoginForm extends React.Component {

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  if 

  render(){
    return(
      <div className="login-container">
        <div className="social-logins">
          <div className="social-buttons">
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
          <div className="social-buttons">
            <GoogleLogin socialId="1013252237653-lobmsullofdr8n94saqon5fi77gkp8mb.apps.googleusercontent.com"
                         className="google-login"
                         scope="profile"
                         fetchBasicProfile={false}
                         responseHandler={this.responseGoogle}
                         buttonText="Login With Google"/>
          </div>
          <div className="divider">
            <div className="or"><span>or</span></div>
          </div>
          <div>
            <form
              className="login-form"
              onSubmit={console.log('logging in!')}>
              <Field
                placeholder="Username"
                component="input"
                type="text"
                name="username"
                id="username"
                validate={[required, nonEmpty]}
              />
              <Field
                placeholder="Password"
                component="input"
                type="password"
                name="password"
                id="password"
                validate={[required, nonEmpty]}
              />
              <button className="login-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   loading: false
// });

LoginForm = connect()(LoginForm);

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
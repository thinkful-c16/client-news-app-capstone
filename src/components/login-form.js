import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import { FacebookLogin } from 'react-facebook-login-component';
import {Field, reduxForm, focus} from 'redux-form';

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

  render(){
    return(
      <div className="login-container">
        <div className="social-logins">
          <div>
            <GoogleLogin socialId="yourClientID"
                         className="google-login"
                         scope="profile"
                         fetchBasicProfile={false}
                         responseHandler={this.responseGoogle}
                         buttonText="Login With Google"/>
          </div>
          <div>
            <FacebookLogin socialId="yourAppID"
                        language="en_US"
                        scope="public_profile,email"
                        responseHandler={this.responseFacebook}
                        xfbml={true}
                        fields="id,email,name"
                        version="v2.5"
                        className="facebook-login"
                        buttonText="Login With Facebook"/>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;
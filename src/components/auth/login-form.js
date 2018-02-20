import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import { FacebookLogin } from 'react-facebook-login-component';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {socialLogin, login} from '../../actions/auth';

import '../../styles/login-form.css';

export class LoginForm extends React.Component {

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log({accessToken: id_token});
    return this.props.dispatch(socialLogin(id_token, 'Google'))
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }
  
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render(){
    return(
      <div className="login-container">
        <div className="social-logins">
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
          <div className="or"><span>or</span></div>
        </div>
        <div className="form-div">
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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
            <button className="login-button"
                    type="submit">
              Login
            </button>
            <div className="memory">
              <p>Placeholder for 'remember me' and 'forgot password?' links</p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
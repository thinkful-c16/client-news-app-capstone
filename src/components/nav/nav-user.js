import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../../actions/auth';
import {clearAuthToken} from '../../local-storage';

export class NavUser extends React.Component {

logOut() {
  this.props.dispatch(clearAuth());
  clearAuthToken();
}

  render() {

    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button onClick={() => this.logOut()}>Log out</button>
        );
    }

    return (
      <div className="nav-username">
        <span>Hello {this.props.userName}!</span>
        {logOutButton}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userName: `${state.auth.currentUser.firstName} ${state.auth.currentUser.lastName}`,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavUser);


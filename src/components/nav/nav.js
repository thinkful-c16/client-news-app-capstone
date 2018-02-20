import React from 'react';
import {connect} from 'react-redux';

export function Nav(props) {

  if (props.loggedIn) {
    console.log('logged in!');
  }


  return (
    <div className="nav-bar">
      <span>Hello World, this will be the nav bar!</span>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);